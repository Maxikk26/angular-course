import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promersas',
  templateUrl: './promersas.component.html',
  styles: []
})
export class PromersasComponent implements OnInit {

  constructor() {
    

    this.contar3().then(
      ()=> console.log('termino')
    )
    .catch( error => console.log('error en la promesa',error));

   }

  ngOnInit() {
  }

  contar3(): Promise<boolean>{
    return new Promise( (resolve,reject) => {
      let contador = 0;
      let intervalo = setInterval( ()=>{
        contador+=1;
        console.log(contador);
        if(contador == 3){
          resolve(true);
          clearInterval(intervalo)
        }
      },1000);
    });
    
  }

}
