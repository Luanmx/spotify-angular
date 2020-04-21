import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  artistas: any = [];

  constructor(private _spotify: SpotifyService) { }

  ngOnInit() {
  }


  buscar( busqueda: string = '' ) {

    this._spotify.getArtistaSearch(busqueda)
        .subscribe(( response: any ) => {
          this.artistas = response;
        });

  }

}
