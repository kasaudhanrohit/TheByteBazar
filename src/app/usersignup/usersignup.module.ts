import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersignupComponent } from './usersignup.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: UsersignupComponent }
];


const imports = [
  CommonModule
];

const components = [UsersignupComponent];

@NgModule({
  declarations: [components],
  imports: [
    imports, RouterModule.forChild(routes)
  ],
  exports: [RouterModule, components],
})
export class UsersignupModule { }

