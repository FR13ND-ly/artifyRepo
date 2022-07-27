import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/data-access/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private authService : AuthService) {}

  ngOnInit(): void {
    this.authService.signInWithMetaMask().subscribe((res) => console.log(res))
  }
}
