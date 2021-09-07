import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente0',
  templateUrl: './componente0.component.html',
  styleUrls: ['./componente0.component.css']
})
export class Componente0Component implements OnInit {

  constructor(private route: ActivatedRoute, private routet: Router) { }

  ngOnInit(){
    // this.route.params.subscribe( params => {
    //   console.log(params.get('id'));
    //   if (params["id"] != null){
    //     console.log("llego con el parametro id "+params['id']);
    //   }
    // });

    this.route.paramMap.subscribe(params => {
      console.log( params.get('id'));
    });
  }

}
