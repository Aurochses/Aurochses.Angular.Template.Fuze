import { NgModule } from '@angular/core';

import { MatButtonModule, MatIconModule } from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

import { NavbarComponent } from './navbar.component';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        MatButtonModule,
        MatIconModule,

        FlexLayoutModule
    ],
    exports: [
        NavbarComponent
    ]
})
export class NavbarModule { }
