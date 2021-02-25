import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Review } from 'src/app/models/review';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {
  @Input() bookId: number;
  review: Review;
  
  constructor() { }

  ngOnInit(): void {
    this.review = new Review('', this.bookId);
  }

  submit(form: NgForm) {
    console.log(this.review);
    form.resetForm();
  }

}
