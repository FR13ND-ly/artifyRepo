import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { EditorComponent } from 'src/app/editor/editor.component';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  user$ : Observable<any> = of({
    username : 'George Lucas',
    imageUrl : 'https://www.forbes.com/advisor/in/wp-content/uploads/2022/03/monkey-g412399084_1280.jpg',
  })

  ngOnInit(): void {
  }

  onAddProduct() {
    this.dialog.open(EditorComponent)
  }
}
