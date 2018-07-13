import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { registerLocaleData } from '@angular/common';
import localeRo from '@angular/common/locales/ro';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { RootPage } from './pages/root.page';
import { RootRoutingModule } from './root-routing.module';

registerLocaleData(localeRo);

const firebase: any = {
    apiKey: 'AIzaSyA-p5gbQ6XHeGijlZn4eqcH6tEylP5Rz4c',
    authDomain: 'bscj2018-6f032.firebaseapp.com',
    databaseURL: 'https://bscj2018-6f032.firebaseio.com',
    projectId: 'bscj2018-6f032',
    storageBucket: '',
    messagingSenderId: '520618632711'
};

@NgModule({
    declarations: [
        RootPage
    ],
    imports: [
        BrowserModule,
        RouterModule,
        RootRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        AngularFireModule.initializeApp(firebase),
        AngularFireAuthModule,
        AngularFirestoreModule
    ],
    bootstrap: [
        RootPage
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'ro'
        }
    ]
})
export class RootModule { }
