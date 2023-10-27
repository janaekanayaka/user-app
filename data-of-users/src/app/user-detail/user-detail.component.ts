import { Component, OnInit , Input} from '@angular/core';
import { User } from '../user'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  // @Input() user?: User;
  user: User | undefined;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location:Location
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe(user=>this.user = user)
  }

  goBack(): void {
    this.location.back();
  }
   
  save(): void {
    if (this.user) {
      console.log(this.user)
      this.userService.updateUser(this.user)
        .subscribe(() => this.goBack());
    }
  }
}
