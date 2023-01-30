import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TerminalRoutingModule} from './terminal-routing.module';
import {NgbNavModule} from "@ng-bootstrap/ng-bootstrap";
import {TerminalComponent} from "./terminal.component";
import {PtyComponent} from "./pty/pty.component";
import { DumbComponent } from './dumb/dumb.component';


@NgModule({
  declarations: [
    TerminalComponent,
    PtyComponent,
    DumbComponent,
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    TerminalRoutingModule
  ]
})
export class TerminalModule {
}