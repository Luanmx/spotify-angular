import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() canciones: any = [];

  constructor( private route: Router) { }

  ngOnInit() {
  }

  irDashboard( item: any ) {
    let artistaId = 0;
    if( item.type === 'artist'){
      artistaId = item.id;
    }
    else{
      artistaId = item.artists[0].id;
    }

    this.route.navigate(['artist', artistaId]);
  }

}
