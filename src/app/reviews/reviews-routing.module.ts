import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewPageComponent } from './review-page/review-page.component';

const routes: Routes = [{
  path: 'reviews/:id',
  component: ReviewPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewsRoutingModule { }
