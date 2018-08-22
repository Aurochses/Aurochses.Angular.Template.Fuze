import { NgModule } from '@angular/core';

import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { ToolbarComponent } from './toolbar.component';

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports: [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,

        FlexLayoutModule
    ],
    exports: [
        ToolbarComponent
    ]
})
export class ToolbarModule { }
