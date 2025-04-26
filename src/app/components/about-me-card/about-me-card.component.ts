import { HtmlParser } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-me-card',
  imports: [RouterLink],
  templateUrl: './about-me-card.component.html',
  styleUrl: './about-me-card.component.css'
})
export class AboutMeCardComponent {
  @Input()
  photoCover:string = ""

  @Input()
  aboutInfo:string = ""
}
