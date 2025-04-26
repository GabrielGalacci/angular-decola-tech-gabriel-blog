import { Component } from '@angular/core';
import { gamesData } from '../../data/fakeData';
import { ActivatedRoute } from '@angular/router';
import { BlogTitleComponent } from "../../../components/blog-title/blog-title.component";

@Component({
  selector: 'app-games-content',
  imports: [BlogTitleComponent],
  templateUrl: './games-content.component.html',
  styleUrl: './games-content.component.css'
})
export class GamesContentComponent {
  photoCover:string = ""
  contentTitle:string = ""
  contentDescription:string = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null) {
    const result = gamesData.filter(article => article.id == id)[0]

    this.contentTitle = result.gameTitle
    this.contentDescription = result.gameDescription
    this.photoCover = result.photoCover
  }
}
