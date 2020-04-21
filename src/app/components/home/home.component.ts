import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any = [];

  constructor(private _spotify: SpotifyService ) {
      this._spotify.getNewRelease().subscribe(( response: any) => {
          this.nuevasCanciones = response;
      });
  }

  ngOnInit() {
  }

}
