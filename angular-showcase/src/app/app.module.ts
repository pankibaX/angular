import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LifecycleDemoComponent } from './components/lifecycle-demo/lifecycle-demo.component';
import { ParentComponent } from './components/parent-child/parent/parent.component';
import { ChildComponent } from './components/parent-child/child/child.component';
import { Sibling1Component } from './components/sibling-communication/sibling1/sibling1.component';
import { Sibling2Component } from './components/sibling-communication/sibling2/sibling2.component';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LifecycleDemoComponent,
    ParentComponent,
    ChildComponent,
    Sibling1Component,
    Sibling2Component,
    DirectiveDemoComponent,
    HighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }