import { Component } from '@angular/core';
import { BlogTitleComponent } from "../../components/blog-title/blog-title.component";
import { AboutMeCardComponent } from "../../components/about-me-card/about-me-card.component";
import { CardsComponent } from "../../components/cards/cards.component";
import { InterestsBigCardsComponent } from "../../components/interests-big-cards/interests-big-cards.component";

@Component({
  selector: 'app-home',
  imports: [BlogTitleComponent, AboutMeCardComponent, CardsComponent, InterestsBigCardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
