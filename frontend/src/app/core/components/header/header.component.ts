import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter, tap } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @ViewChild('header') headerRef!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    this.onSetTheme();
  }

  onChangeTheme() {
    localStorage.setItem(
      'theme',
      !localStorage.getItem('theme') ? 'dark-theme' : ''
    );
    this.onSetTheme();
  }

  onSetTheme() {
    document.body.classList.toggle(
      'dark-theme',
      !!localStorage.getItem('theme')
    );
  }

}
