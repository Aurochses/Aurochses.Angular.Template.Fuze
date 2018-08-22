import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ToolbarComponent } from './toolbar.component';

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports: [
        MatToolbarModule,

        FlexLayoutModule
    ],
    exports: [
        ToolbarComponent
    ]
})
export class ToolbarModule { }
