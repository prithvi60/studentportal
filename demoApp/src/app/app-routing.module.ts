import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';

const routes: Routes = [
  {
    path:'user',
    loadChildren:()=>import('./core/core.module').then(mod=>mod.CoreModule)
  },
  {path:'out',component:ExampleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
