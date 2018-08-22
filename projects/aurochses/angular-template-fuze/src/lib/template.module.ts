import { NgModule } from '@angular/core';

import { ToolbarModule } from './components/toolbar/toolbar.module';
import { NavbarModule } from './components/navbar/navbar.module';

import { TemplateComponent } from './template.component';

@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    ToolbarModule,
    NavbarModule
  ],
  exports: [
    TemplateComponent
  ]
})
export class TemplateModule { }
