import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';



@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer ){ }

  transform( value: string): any {
    const url = 'https://open.spotify.com/embed/track/';
    let spotifyURI = value.split(':')[2];
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + spotifyURI);
  }

}
