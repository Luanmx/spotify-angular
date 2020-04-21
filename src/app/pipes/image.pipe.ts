import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(images: any, args?: any): string {

    if ( !images ) {
      return 'assets/img/noti.png';
    }

    if (images.length > 0 ){
      return images[0].url;
    }else{
      return 'assets/img/noti.png';
    }
  }

}
