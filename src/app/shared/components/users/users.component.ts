import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Iusers } from '../../module/users.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  usersData !: Array<Iusers>
  selecteduserId !: string

  constructor(
    private _usersService : UsersService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.usersData = this._usersService.fetchAllUsers();

    this._router.navigate(['users', this.usersData[0].userId],{
      queryParams : {userRole : this.usersData[0].userRole},
      queryParamsHandling : 'merge'
    })
  }

  // getUserId(userId : string){
  //     this.selecteduserId = userId;
  //     console.log(this.selecteduserId) 
  // }

}
