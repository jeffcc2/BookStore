import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ReviewPageComponent } from './review-page.component';

@Component({
  selector: 'app-review-form',
  template: 'mock review form'
})
class MockReviewFormComponent {
  @Input() bookId: number;
}

describe('ReviewPageComponent', () => {
  let component: ReviewPageComponent;
  let fixture: ComponentFixture<ReviewPageComponent>;

  const mockActivatedRoute = {
    snapshot: {
      params: {
        id: 42
      }
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ReviewPageComponent 
      ],
      imports: [
        RouterTestingModule 
      ], 
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should recieve route paramters', ()=> {
    expect(component.bookId).toBe(42);
  })
});
