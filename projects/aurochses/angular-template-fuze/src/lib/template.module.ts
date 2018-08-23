import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarModule } from './components/toolbar/toolbar.module';
import { NavbarModule } from './components/navbar/navbar.module';

import { Environment } from './models/environment.model';
import { TemplateConfiguration } from './models/template-configuration.model';

import { TemplateService } from './services/template.service';

import { TemplateComponent } from './template.component';

@NgModule({
  declarations: [
    TemplateComponent
  ],
  imports: [
    CommonModule,

    ToolbarModule,
    NavbarModule
  ],
  providers: [
    TemplateService
  ],
  exports: [
    TemplateComponent
  ]
})
export class TemplateModule {

  static forRoot(environment: Environment, templateConfiguration: TemplateConfiguration): ModuleWithProviders {
    return {
      ngModule: TemplateModule,
      providers: [
        { provide: Environment, useValue: environment },
        { provide: TemplateConfiguration, useValue: templateConfiguration }
      ]
    };
  }

}
