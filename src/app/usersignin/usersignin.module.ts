import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersigninComponent } from './usersignin.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: UsersigninComponent }
];


const imports = [
  CommonModule
];

const components = [UsersigninComponent];

@NgModule({
  declarations: [components],
  imports: [
    imports, RouterModule.forChild(routes)
  ],
  exports: [RouterModule, components],
})
export class UsersigninModule { }


