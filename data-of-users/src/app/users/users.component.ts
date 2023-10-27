import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { UserService } from '../user.service';
// import { MessageService } from '../message.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService : UserService 
    // ,private messageService: MessageService
  ) { }
 
  ngOnInit(): void {
    this.getUsers();
  }
  // selectedUser?: User;
  
  // onSelect(user: User): void {
  //    this.selectedUser = user;
  //    this.messageService.add(`HeroesComponent: Selected hero id=${user.id}`);
  // }

  getUsers(): void {
    // this.users = this.userService.getUsers();
    this.userService.getUsers().subscribe(users=>this.users = users);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.userService.addUser({ name } as User)
      .subscribe(user => {
        this.users.push(user);
      });
  }

  delete(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.userService.deleteUser(user.id).subscribe();
  }
}
