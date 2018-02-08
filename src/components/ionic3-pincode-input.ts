import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { Validators, FormGroup, FormArray, FormControl, FormBuilder } from '@angular/forms';

/**
 * Generated class for the Ionic3PincodeInputComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pin-code',
  // templateUrl: './ionic3-pincode-input.html'
  template: `<ion-grid class="pinCodeGrid">
                <form [formGroup]='pinCodeFormGroup'>
                    <ion-row>
                      <ion-col  *ngFor="let controlItem of this.pinCodeArray;let i = index;let last=last">
                        <input   ng-pattern="/^[0-9]*$/" ng-maxlength="1" maxlength="1" class="pinCodeInput" type="number"  formControlName="{{controlItem}}"   (keyup)="onKeyUp($event,controlItem, i)" (keydown)="onKeyDown($event)"/>
                      </ion-col>
                    </ion-row>
                </form>
             </ion-grid>`
})
export class Ionic3PincodeInputComponent {

  public pinCodeArray: any[];
  public pinCodeFormGroup: FormGroup;

  @Input() color: string;
  @Input() isHidden: boolean = false;
  @Input() codeSize: number = 4;
  @Output() onComplete = new EventEmitter<string>();

  constructor() {
    this.initiateBuilder();

  }
  ngOnChanges(changes: SimpleChanges) {
    let stylebody = document.body.style;
    if (changes.color != undefined) {
      stylebody.setProperty('--borderColor', changes.color.currentValue);
    }
    if (changes.isHidden != undefined) {
      if (changes.isHidden.currentValue == false) {
        stylebody.setProperty('--charShape', 'none');
      } else {
        stylebody.setProperty('--charShape', 'disc');
      }
    }

    this.initiateBuilder();

  }

  initiateBuilder() {
    this.pinCodeFormGroup = new FormGroup({});

    for (let i = 0; i < this.codeSize; i++) {
      let formController: FormControl = new FormControl({ value: '', disabled: true }, [Validators.required]);
      this.pinCodeFormGroup.addControl('codeFiled' + i, formController);
    }

    let v_pinCodeArray: any[] = [];
    Object.keys(this.pinCodeFormGroup.value).forEach(function (key) {
      v_pinCodeArray.push(key);
    });

    this.pinCodeArray = v_pinCodeArray;
    this.pinCodeFormGroup.get('codeFiled0').enable();
  }
  ngAfterViewInit() {
    let input: HTMLElement = document.querySelectorAll('.pinCodeInput').item(0) as HTMLElement;
    input.focus();
  }


  onKeyUp($event: any, item: any, index: any) {
    let v_index;

    let reg = new RegExp("[0-9]");

    if ($event.key == "Backspace") {
      if (index == 0) {
        v_index = 0;
      } else {
        v_index = index - 1;
        this.pinCodeFormGroup.get('codeFiled' + index).disable();

      }
    } else {
      if (reg.test($event.target.value)) {

        if (index == this.codeSize - 1) {
          v_index = this.codeSize - 1;
        } else {
          v_index = index + 1;
          this.pinCodeFormGroup.get('codeFiled' + v_index).enable();

        }
      }
    }

    let input: HTMLElement = document.querySelectorAll('.pinCodeInput').item(v_index) as HTMLElement;
    input.focus();


    if (index == this.codeSize - 1 && $event.key != "Backspace") {
      let pinCodeValue: string = '';
      Object.keys(this.pinCodeFormGroup.value).forEach((key) => {
        pinCodeValue += this.pinCodeFormGroup.value[key];
      });

      if (this.pinCodeFormGroup.valid) {
        this.onComplete.emit(pinCodeValue)
      } else {

      }
    }

  }


  onKeyDown($event: any) {
    if ($event.key != "Backspace") {

      if ($event.target.value.length == 1) {
        return false;
      }

    }
  }




}
