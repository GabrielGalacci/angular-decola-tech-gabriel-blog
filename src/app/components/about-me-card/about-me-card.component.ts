import { HtmlParser } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-me-card',
  imports: [],
  templateUrl: './about-me-card.component.html',
  styleUrl: './about-me-card.component.css'
})
export class AboutMeCardComponent {
  @Input()
  photoCover:string = ""

  @Input()
  aboutInfo:string = ""
}
