import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from '../app.constants';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

   constructor(private http: HttpClient) {
   }

   peticiones( endPoint: string ){
     const headers = new HttpHeaders({
       'Authorization': '' /*Almacenar token con un servicio post del backend y recibirlo para mantener integras el SECRET_ID*/ 
     });

     return this.http.get(`${AppSettings.URL_API}${endPoint}`, { headers });
   }

   getNewRelease(){
     return this.peticiones('browse/new-releases?country=MX&limit=21')
                .pipe(map((response: any) => response.albums.items));
   }

   getArtistaSearch( search: string){
     return this.peticiones(`search?q=${search}&type=artist&limit=21`)
                .pipe(map((response: any) => response.artists.items));

   }

   getArtist( idArtist:string ){
     return this.peticiones(`artists/${idArtist}`);
   }

   getToptracks( idArtist:string){
     return this.peticiones(`artists/${idArtist}/top-tracks?country=MX`)
                .pipe(map((response: any) => response.tracks ));
   }
   
}
