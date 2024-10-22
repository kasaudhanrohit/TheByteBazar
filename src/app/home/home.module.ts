import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: HomeComponent }
];


const imports = [
  CommonModule
];

const components = [HomeComponent];

@NgModule({
  declarations: [components],
  imports: [
    imports, RouterModule.forChild(routes)
  ],
  exports: [RouterModule, components],
})
export class HomeModule { }
