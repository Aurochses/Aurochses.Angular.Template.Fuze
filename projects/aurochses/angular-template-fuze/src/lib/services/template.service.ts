import { Injectable } from '@angular/core';

import { TemplateConfiguration } from '../models/template-configuration.model';

@Injectable({
    providedIn: 'root'
})
export class TemplateService {

    constructor(public configuration: TemplateConfiguration) { }

}
