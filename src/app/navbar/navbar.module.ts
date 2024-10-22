import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: NavbarComponent }
];


const imports = [
  CommonModule
];

const components = [NavbarComponent];

@NgModule({
  declarations: [components],
  imports: [
    imports, RouterModule.forChild(routes)
  ],
  exports: [RouterModule, components],
})
export class NavbarModule { }
