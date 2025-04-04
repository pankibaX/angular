import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LifecycleDemoComponent } from './components/lifecycle-demo/lifecycle-demo.component';
import { DirectiveDemoComponent } from './components/directive-demo/directive-demo.component';
import { ParentComponent } from './components/parent-child/parent/parent.component';

const routes: Routes = [
  { path: '', redirectTo: 'lifecycle', pathMatch: 'full' },
  { path: 'lifecycle', component: LifecycleDemoComponent },
  { path: 'communication', component: ParentComponent },
  { path: 'directives', component: DirectiveDemoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
