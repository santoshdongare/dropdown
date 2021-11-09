import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
//import {global} from '../_models/global';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  state(){
    return [
      {
        id: 1,
        name:"Maharashtra"
      },
      {
        id: 2,
        name:"Uttar Pradesh"
      },
      {
        id: 3,
        name:"Gujarat"
      },
      {
        id: 4,
        name:"Andhra Pradesh"
      },
      {
        id: 5,
        name:"Madhya Pradesh"
      },
      {
        id: 6,
        name:"Tamilnadu"
      },
      {
        id: 7,
        name:"Kerala"
      },
      {
        id: 8,
        name:"Karnataka"
      },
      {
        id: 9,
        name:"Punjab"
      }
    ]
  }
  city(){
    return [
      {
        id: 1,
        name:"Mumbai"
      },
      {
        id: 1,
        name:"Pune"
      },
      {
        id: 2,
        name:"Lucknow"
      },
      {
        id: 2,
        name:"Noida"
      },
      {
        id: 3,
        name:"Ahmedabad"
      },
      {
        id: 3,
        name:"Surat"
      },
      {
        id: 4,
        name:"Vijayawada "
      },
      {
        id: 4,
        name:"Vizag"
      },
      {
        id: 5,
        name:"Bhopal"
      },
      {
        id: 5,
        name:"Indore"
      },
      {
        id: 6,
        name:"Chennai"
      },
      {
        id: 6,
        name:"Koimbatur"
      },
      {
        id: 7,
        name:"Kochi"
      },
      {
        id: 7,
        name:"Waynad"
      },
      {
        id: 8,
        name:"Bangalore"
      },
      {
        id: 8,
        name:"Belgaon"
      },
      {
        id: 9,
        name:"Chandigarh"
      },
      {
        id: 9,
        name:"Mohali"
      },
    ]
  
}
}
