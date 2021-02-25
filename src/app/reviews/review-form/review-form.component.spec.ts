import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ReviewFormComponent } from './review-form.component';

describe('ReviewFormComponent', () => {
  let component: ReviewFormComponent;
  let fixture: ComponentFixture<ReviewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewFormComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate content', async() => {
    await fixture.whenStable();

    const contentControl = fixture.debugElement.query(By.directive(NgForm)).references['revForm'].controls['content'];

    // expect(contentControl.valid).toBeFalsy();
    // expect(contentControl.hasError('required')).toBeTruthy;
    expect(contentControl.status).toEqual('INVALID');
    expect(contentControl.errors).toEqual({ required: true });

    contentControl.setValue('a');
    fixture.detectChanges();
    await fixture.whenStable();

    // expect(contentControl.valid).toBeFalsy();
    expect(contentControl.status).toEqual('INVALID');
    expect(contentControl.errors).toEqual({
      minlength: {
        requiredLength: 3, 
        actualLength: 1
      }
    });

    contentControl.setValue('aaa');
    fixture.detectChanges();
    await fixture.whenStable();

    // expect(contentControl.valid).toBeTruthy();
    expect(contentControl.status).toEqual('VALID');
  })
});
