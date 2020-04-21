import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  toptracks: any = [];

  constructor(private actived: ActivatedRoute,
              private _spotify: SpotifyService,
              private _location: Location ) { 

    this.actived.params.subscribe(params => {
          this.getArtist( params['id'] );
          this.getTopTracks(params['id'] );
    });

  }

  ngOnInit() {
  }

  getArtist( id: string ) {
    this._spotify.getArtist(id).subscribe( response => {
      this.artista = response;
    });
  }

  getTopTracks( id: string ){
    this._spotify.getToptracks(id).subscribe( response => {
        this.toptracks = response;
        console.log( this.toptracks );
    });
  }

  backClicked() {
    this._location.back();
  }
}
