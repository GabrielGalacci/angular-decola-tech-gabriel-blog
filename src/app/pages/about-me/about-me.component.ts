import { Component } from '@angular/core';
import { BlogTitleComponent } from "../../components/blog-title/blog-title.component";
import { AboutMeCardComponent } from "../../components/about-me-card/about-me-card.component";

@Component({
  selector: 'app-about-me',
  imports: [BlogTitleComponent, AboutMeCardComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
