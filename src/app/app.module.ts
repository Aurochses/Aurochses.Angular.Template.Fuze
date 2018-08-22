import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { ProgressBarModule } from '@aurochses/angular-progress-bar';

import { TemplateModule } from '@aurochses/angular-template-fuze';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: '**',
    redirectTo: 'sample'
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),

    ProgressBarModule,

    TemplateModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
