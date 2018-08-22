import { NgModule } from '@angular/core';

import { ToolbarModule } from './components/toolbar/toolbar.module';

import { TemplateComponent } from './template.component';

@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    ToolbarModule
  ],
  exports: [
    TemplateComponent
  ]
})
export class TemplateModule { }
