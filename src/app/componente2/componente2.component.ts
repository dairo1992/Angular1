import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe( params =>{
      if (params["id"] != null){
        console.log("llego con id "+params["id"]);
      }
    });
      // console.log( this.actRoute.snapshot.params); //funciona tambien

  }

}
