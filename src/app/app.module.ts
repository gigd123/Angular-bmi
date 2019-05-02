import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app.component';
import { BmiListComponent } from './component/bmi-list/bmi-list.component';
import { BmiInputComponent } from './component/bmi-input/bmi-input.component';
import { BmiFooterComponent } from './component/bmi-footer/bmi-footer.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore'

// Initialize Firebase
const config = {
  apiKey: "AIzaSyB7isFGFrQcv7THhtPohldDy3CIx_F_HDQ",
  authDomain: "bmi-todolist.firebaseapp.com",
  databaseURL: "https://bmi-todolist.firebaseio.com",
  projectId: "bmi-todolist",
  storageBucket: "bmi-todolist.appspot.com",
  messagingSenderId: "966570316611"
};

@NgModule({
  declarations: [
    AppComponent,
    BmiListComponent,
    BmiInputComponent,
    BmiFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
