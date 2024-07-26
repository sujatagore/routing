import { Injectable } from '@angular/core';
import { Iusers } from '../module/users.interface';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersArr : Array<Iusers> = [
    // {
    //   userName : 'Jhon',
    //   userId : '1',
    //   userRole : 'admin'
    // },
    // {
    //   userName : 'Jon',
    //   userId : '2',
    //   userRole : 'buyer'
    // },
    // {
    //   userName : 'May',
    //   userId : '3',
    //   userRole : 'admin'
    // }

    {
      userName: 'Jhon',
      userId: '1',
      userRole: 'admin',
      userEmail: 'jhon@example.com',
      userPhone: '123-456-7890',
      userAddress: '123 Main St'
    },
    {
      userName: 'Jon',
      userId: '2',
      userRole: 'buyer',
      userEmail: 'jon@example.com',
      userPhone: '987-654-3210',
      userAddress: '456 Elm St'
    },
    {
      userName: 'May',
      userId: '3',
      userRole: 'admin',
      userEmail: 'may@example.com',
      userPhone: '555-123-4567',
      userAddress: '789 Oak St'
    },
    {
      userName: 'Emily',
      userId: '4',
      userRole: 'buyer',
      userEmail: 'emily@example.com',
      userPhone: '111-222-3333',
      userAddress: '321 Pine St'
    },
    {
      userName: 'David',
      userId: '5',
      userRole: 'admin',
      userEmail: 'david@example.com',
      userPhone: '444-555-6666',
      userAddress: '901 Maple St'
    },
    {
      userName: 'Sarah',
      userId: '6',
      userRole: 'buyer',
      userEmail: 'sarah@example.com',
      userPhone: '777-888-9999',
      userAddress: '234 Cedar St'
    }
  ]

  constructor(
    private _router : Router,
    private _snackbar : SnackbarService
  ) { }

  fetchAllUsers() : Array<Iusers> {
    return this.usersArr
  }

  getUserDetails(id : string): Iusers | undefined{
    return this.usersArr.find(use => use.userId === id)
  }

  addUser(user : Iusers){
    this.usersArr.push(user);
    this._router.navigate(['/users']);
    this._snackbar.openSnackBar(`The User ${user.userName} is added Successfully!!!`)
  }

  updateUser(updObj : Iusers){
      let getIndex = this.usersArr.findIndex(user => user.userId === updObj.userId)
      let updatedObj = this.usersArr[getIndex]
      this.usersArr[getIndex] = updObj;
      this._router.navigate(['/users']);
      this._snackbar.openSnackBar(`The User ${updatedObj.userName} is updated to ${updObj.userName} Successfully!!!`)
  }

  removeUser(userId : string){
    let getIndex = this.usersArr.findIndex(user => user.userId === userId);
    let removeUser = this.usersArr[getIndex]
    this.usersArr.splice(getIndex, 1)
    this._router.navigate(['/users']);
    this._snackbar.openSnackBar(`The user ${removeUser.userName} is removed Successfully!!!`)
  }
}