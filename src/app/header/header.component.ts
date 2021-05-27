import { Component, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  txtSearch = '';
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  handleOnChange(event: any){
    this.txtSearch = event.target.value;
  }
  openLogin(){
    const dialogRef = this.dialog.open(LoginComponent);
  }

}
