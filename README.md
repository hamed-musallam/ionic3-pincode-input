## ioni3-pincode-input
An Angular 4 (formerly Angular 2) component to enter pin code, built for Ionic 2+.

Preview

![](https://github.com/hamed-musallam/ionic3-pincode-input/blob/master/pincode2.gif)

![](https://github.com/hamed-musallam/ionic3-pincode-input/blob/master/pincode.gif)



#### How to install:

    $ npm install --save ionic3-pincode-input
    
#### How to use:


Import ionicPinCodeInputModule on module definition that declares the page where you want to add the pincode component. In some cases, all pages are declared on src/app/app.module.ts.


```actionscript
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// Import ionic3-pincode-input module
import {ionicPinCodeInputModule} from 'ionic3-pincode-input';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ionicPinCodeInputModule // Put ionic3-pincode-input module here
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: []
})
export class AppModule {}

```

If you are using Lazy Loading in your application, add the ionicPinCodeInputModule to the page module instead of the app module.


```actionscript
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import {ionicPinCodeInputModule} from 'ionic3-pincode-input';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    ionicPinCodeInputModule // Put ionic3-pincode-input module here
  ],
  exports: [
    ProfilePage
  ]
})

export class ProfilePageModule { }
```


 Include the component on page template, like the example below:


```actionscript
<pin-code
   color       ="gray"                            <!--default value -->
   isHidden    ="false"                           <!--default value -->
   codeSize    ="4"                               <!--default value -->
   (onComplete)="onPinCodeComplete($event)" >     <!-- this event trigger when user enter the pin code completely, you can get pin code from $event  -->
</pin-code>
```


