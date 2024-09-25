import { Injectable, signal } from '@angular/core';
import { User } from '@interfaces/req-response';


interface State{
  users:User [];
  loading: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  #state = signal<State>({
    loading: true,
    users:[]
  })

  constructor() {

    console.log('Cargando Data');

   }

}
