import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { BookPageComponent } from './books/book-page/book-page.component';

const routes: Routes = [{
  path: '',
  component: BookPageComponent
  }, {
  path: 'about',
  component: AboutPageComponent
}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
