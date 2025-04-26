import { Component } from '@angular/core';
import { BlogTitleComponent } from "../../components/blog-title/blog-title.component";
import { AboutMeCardComponent } from "../../components/about-me-card/about-me-card.component";

@Component({
  selector: 'app-home',
  imports: [BlogTitleComponent, AboutMeCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
