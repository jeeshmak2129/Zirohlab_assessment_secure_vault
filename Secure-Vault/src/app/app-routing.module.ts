import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SecureFileComponent } from './secure-file/secure-file.component';
import { SecurePhotosComponent } from './secure-photos/secure-photos.component';

const routes: Routes = [
  {path:'',component:LandingPageComponent},
  {path:'secure-photos',component:SecurePhotosComponent},
  {path:'secure-files',component:SecureFileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
