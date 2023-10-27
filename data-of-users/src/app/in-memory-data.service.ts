import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const users = [
      { id: 12, name: 'Janaka' },
      { id: 13, name: 'Prasad' },
      { id: 14, name: 'vikum' },
      { id: 15, name: 'chanuka' },
      { id: 16, name: 'Iresh' },
      { id: 17, name: 'Ammshath' },
      { id: 18, name: 'Adeesha' },
      { id: 19, name: 'Kasun' },
      { id: 20, name: 'Sampath' }
    ];
    return {users};
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(hero => hero.id)) + 1 : 11;
  }

}
