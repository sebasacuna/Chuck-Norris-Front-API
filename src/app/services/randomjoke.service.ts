import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RANDOMJOKEURL} from '../url.constants';

@Injectable({
  providedIn: 'root'
})
export class RandomJokeService {

  constructor(private http: HttpClient) {
  }

  getJoke() {
    return this.http.get(RANDOMJOKEURL);
  }

}
