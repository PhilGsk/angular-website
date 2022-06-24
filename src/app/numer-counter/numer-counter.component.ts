import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numer-counter',
  templateUrl: './numer-counter.component.html',
  styleUrls: ['./numer-counter.component.scss']
})
export class NumerCounterComponent{
  //this is a variable that hold number
  cities:number = 0;
  //same process
  locations:number = 0;
  games:number = 0;
  user:number = 0;

  constructor() { }

  projectcountstop:any = setInterval(()=>{
    this.cities++;
    //we need to stop this at  particular point; will use if condition
    if(this.cities ==4)
    {
      //clearinterval will stop tha function
      clearInterval(this.projectcountstop);
    }

  },10) //10 is milisecond you can control it


  accuratecountstop:any = setInterval(()=>{
    this.locations++;
    if(this.locations == 26)
    {

      clearInterval(this.accuratecountstop);
    }
  },10)


  clientcountstop:any = setInterval(()=>{
    this.games++;
    if(this.games == 1476)
    {

      clearInterval(this.clientcountstop);
    }
  },1)

  customerfeedbackstop:any = setInterval(()=>{
    this.user++;
    if(this.user == 201)
    {

      clearInterval(this.customerfeedbackstop);
    }
  },10)

}
