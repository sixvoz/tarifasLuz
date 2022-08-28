import { Component, OnInit } from '@angular/core';
import { PreciosModelo } from 'src/app/models/precios-modelo';
import { LeeApiService } from 'src/app/services/lee-api.service';

@Component({
  selector: 'app-tarifas-luz',
  templateUrl: './tarifas-luz.component.html',
  styleUrls: ['./tarifas-luz.component.css']
})
export class TarifasLuzComponent implements OnInit {

  lecturasApi: PreciosModelo[];

  grafica:any[]
;


  constructor(private leeApi:LeeApiService) {
    this.lecturasApi=[];
    this.grafica=[
      {name:"paco", value:123},
      { name: "Laptop", value: 55000 },
      { name: "AC", value: 15000 },
      { name: "Headset", value: 150000 },
      { name: "Fridge", value: 20000 }

    ];
  }

  ngOnInit(): void {
    this.cargardatos();
  }

  public cargardatos(){
    this.leeApi.get("https://api.preciodelaluz.org/v1/prices/all?zone=PCB").subscribe((respuesta:any)=> {
      //this.leeApi.get("/v1/prices/all?zone=PCB").subscribe((respuesta:any)=> {
      console.log(respuesta['11-12'].price);

    this.lecturasApi.push(respuesta['00-01']);
    this.lecturasApi.push(respuesta['01-02']);
    this.lecturasApi.push(respuesta['02-03']);
    this.lecturasApi.push(respuesta['03-04']);


    this.lecturasApi.push(respuesta['05-06']);
    this.lecturasApi.push(respuesta['06-07']);
    this.lecturasApi.push(respuesta['07-08']);
    this.lecturasApi.push(respuesta['08-09']);


    this.lecturasApi.push(respuesta['09-10']);
    this.lecturasApi.push(respuesta['10-11']);


    this.lecturasApi.push(respuesta['11-12']);
    this.lecturasApi.push(respuesta['13-14']);
    this.lecturasApi.push(respuesta['14-15']);
    this.lecturasApi.push(respuesta['15-16']);
    this.lecturasApi.push(respuesta['17-18']);
    this.lecturasApi.push(respuesta['19-20']);
    this.lecturasApi.push(respuesta['21-22']);
    this.lecturasApi.push(respuesta['23-24']);

    console.log(this.lecturasApi);
    this.pasaGrafica();

    });
  }


  public pasaGrafica(){

    const tempArray = [];
                for (let i = 0; i < this.lecturasApi.length; i++)
                    tempArray.push({ name: this.lecturasApi[i].hour, value: this.lecturasApi[i].price });
                this.grafica = tempArray;
                console.log(this.grafica)


  }

}
