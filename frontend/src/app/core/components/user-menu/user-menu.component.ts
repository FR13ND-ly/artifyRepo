import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { EditorComponent } from 'src/app/editor/editor.component';
import { AuthService } from '../../data-access/auth.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {


  constructor(public dialog: MatDialog, private authService : AuthService) { }

  user$ : Observable<any> = this.authService.getUserUpdateListener()

  ngOnInit(): void {
    this.user$.subscribe()
  }

  onAddProduct() {
    this.dialog.open(EditorComponent)
  }

  onChangeUsername(username : string, token : string) {
    this.authService.updateUsername({
      username, token
    }).subscribe()
  }
}
