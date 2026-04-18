import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './pages/cv/cv.component';

const routes: Routes = [
  { path: '', component: CvComponent, data: { lang: 'es' } },
  { path: 'cv', component: CvComponent, data: { lang: 'es' } },
  { path: 'en', component: CvComponent, data: { lang: 'en' } },
  { path: 'cv/en', component: CvComponent, data: { lang: 'en' } },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
