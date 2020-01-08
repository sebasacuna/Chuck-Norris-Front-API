import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RANDOMJOKEURL } from './../url.constants';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.sass'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),

      // fade in when created. this could also be written as transition('void => *')
      transition("void => in", [
        style({opacity: 0}),
        animate(600 )
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate(600, style({opacity: 0})))
	])
	]
})
  
export class JokesComponent implements OnInit {


	dataValue: any;
	joke: string;
	init = 'in'
	show = false;


  constructor(private http: HttpClient) { 
	  this.show = false;
	  	this.http.get(RANDOMJOKEURL).subscribe(response => {
		this.show = true;
		this.dataValue = response; 
		this.joke = this.dataValue.value;
	},err =>{
		this.show = false;
	   console.error(err)
	});
		
  }

  getJoke(event){
	http: HttpClient;
	this.show = false;
	this.dataValue =this.http.get(RANDOMJOKEURL).subscribe(response => {
		this.show = true;
		this.dataValue = response; 
	},err =>{
		this.show = false;
	   console.error(err)
	});
  }

  ngOnInit() {
  }

}
