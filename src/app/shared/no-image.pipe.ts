import { LocationStrategy } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  constructor(private locationStrategy: LocationStrategy) {};

  transform(value: string): string {
    return value ? value : this.locationStrategy.getBaseHref() + 'assets/images/NoImage.svg';
  }

}
