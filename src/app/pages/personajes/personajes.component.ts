import { Component, OnInit } from '@angular/core';
import { ApiModels } from 'src/app/MyApiModels/MyApi.Models';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})


export class PersonajesComponent implements OnInit 
{

  url = "https://rickandmortyapi.com/api/character"; 

  myApiResponseData = <ApiModels.RootObject>{};

  constructor() { }

  ngOnInit(): void 
  {
    this.url = "https://rickandmortyapi.com/api/character";

    this.myApiResponseData = <ApiModels.RootObject>{};

    this.callMyApi();

  }

  callMyApi()
  {
    //Llamada a la api por fetch

    fetch(this.url)
        .then(response => response.json())
        .then((data : ApiModels.RootObject) => {
          //debugger;
          this.myApiResponseData = data;
          //console.log(data);
        })

  }

  next()
  {
    this.url = this.myApiResponseData.info.next;
    this.callMyApi();
  }

  previus()
  {
    this.url = this.myApiResponseData.info.prev;
    this.callMyApi();
  }
}
