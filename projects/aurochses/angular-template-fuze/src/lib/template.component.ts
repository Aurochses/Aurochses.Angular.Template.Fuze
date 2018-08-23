import { Component } from '@angular/core';

import { TemplateConfiguration } from './models/template-configuration.model';

import { TemplateService } from './services/template.service';

@Component({
  selector: 'aur-template',
  templateUrl: './template.component.html',
  styleUrls: ['template.component.scss'],
})
export class TemplateComponent {

  configuration: TemplateConfiguration;

  constructor(templateService: TemplateService) {
    this.configuration = templateService.configuration;
  }

}
