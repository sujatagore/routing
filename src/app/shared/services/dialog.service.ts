import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../components/dialog/dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    private _matDialoge : MatDialog
  ) { }

  openDialog(title : string, message : string){
    const _dialogRef = this._matDialoge.open(DialogComponent,{
        width : "300px",
        data :{title, message}
    });
    return _dialogRef.afterClosed()
  }
}
