import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private scrollDispatcher: ScrollDispatcher) { }

  @ViewChild('header') headerRef!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    this.onSetTheme();
    this.scrollDispatcher.scrolled()
    .subscribe((cdk: any) => {
      if (!cdk) return
      this.headerRef?.nativeElement.classList.toggle(
        'sticked',
        cdk.getElementRef().nativeElement.scrollTop > 30
      );
    });
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
