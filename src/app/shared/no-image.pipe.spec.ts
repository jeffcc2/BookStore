import { LocationStrategy } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoImagePipe } from './no-image.pipe';

describe('NoImagePipe', () => {
  let locationStrategy: LocationStrategy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
    });
    locationStrategy = TestBed.inject(LocationStrategy);
  });

  it('create an instance', () => {
    const pipe = new NoImagePipe(locationStrategy);
    expect(pipe).toBeTruthy();
  });

  it('should pass a specified image through', () => {
    const pipe = new NoImagePipe(locationStrategy);

    expect(pipe.transform('a.png')).toEqual('a.png');
  })

  it('should use default if there is no value', () => {
    const pipe = new NoImagePipe(locationStrategy);

    expect(pipe.transform('')).toEqual('/assets/images/NoImage.svg');
  })
});
