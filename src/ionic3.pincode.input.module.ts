import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  //<<<< import it here
import { IonicModule } from 'ionic-angular'
import { Ionic3PincodeInputComponent } from './components/ionic3-pincode-input';


@NgModule({
  declarations: [
    Ionic3PincodeInputComponent
  ],
  imports: [
    IonicModule, FormsModule
  ],
  exports: [
    Ionic3PincodeInputComponent
  ]
})

export class ionicPinCodeInputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ionicPinCodeInputModule,
      providers: []
    };
  }

}
