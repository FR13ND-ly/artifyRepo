import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, interval, repeatWhen, Subject, Subscription, takeUntil } from 'rxjs';
import { Slide } from '../core/models/slide.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnDestroy {

  constructor() { }

  slides: Slide[] = [
    {
      link : 'explore',
      imageUrl : 'https://marmotamaps.com/de/fx/wallpaper/download/faszinationen/Marmotamaps_Wallpaper_Berchtesgaden_Desktop_1920x1080.jpg'
    },
    {
      link : 'products',
      imageUrl : 'https://c4.wallpaperflare.com/wallpaper/553/854/434/1920x1080-px-digital-art-fantasy-art-landscape-long-hair-ryky-trees-wind-anime-death-note-hd-art-wallpaper-preview.jpg'
    },
  ]

  selectedIndex$ : BehaviorSubject<number> = new BehaviorSubject<number>(0)

  start$ = new Subject<void>();
  stop$ = new Subject<void>();

  sliderInterval : Subscription = interval(6000).pipe(
    takeUntil(this.stop$),
    repeatWhen(() => this.start$)
  ).subscribe(() => {
    this.selectedIndex$.next((this.selectedIndex$.value + 1) % 2)
  })

  onSelectIndex(index : number) : void {
    this.stop$.next()
    this.selectedIndex$.next(index)
    this.start$.next()
  }

  ngOnDestroy() : void {
    this.sliderInterval.unsubscribe()
  }
}
