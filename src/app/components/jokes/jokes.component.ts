import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RandomJokeService} from '../../services/randomjoke.service';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.sass'],
})

export class JokesComponent implements OnInit {

  dataValue: any;
  joke: string;
  show = false;

  constructor(private http: HttpClient, private randomJokeService: RandomJokeService) {
    randomJokeService.getJoke().subscribe(response => {
      this.show = true;
      this.dataValue = response;
      this.joke = this.dataValue.value;
    }, err => {
      this.show = false;
      console.error(err);
    });

  }

  getJoke($event) {
    this.show = false;
    this.dataValue = this.randomJokeService.getJoke().subscribe(response => {
      this.show = true;
      this.dataValue = response;
      this.joke = this.dataValue.value;
    }, err => {
      this.show = false;
      console.error(err);
    });
  }

  ngOnInit() {
  }

}
