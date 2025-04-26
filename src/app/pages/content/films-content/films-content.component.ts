import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filmData } from '../../data/fakeData';
import { BlogTitleComponent } from "../../../components/blog-title/blog-title.component";

@Component({
  selector: 'app-films-content',
  imports: [BlogTitleComponent],
  templateUrl: './films-content.component.html',
  styleUrl: './films-content.component.css'
})
export class FilmsContentComponent {
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
    const result = filmData.filter(article => article.id == id)[0]

    this.contentTitle = result.filmTitle
    this.contentDescription = result.filmDescription
    this.photoCover = result.photoCover
  }
}
