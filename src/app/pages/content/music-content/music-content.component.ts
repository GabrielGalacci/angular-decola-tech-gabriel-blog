import { Component } from '@angular/core';
import { musicData } from '../../data/fakeData';
import { ActivatedRoute } from '@angular/router';
import { BlogTitleComponent } from "../../../components/blog-title/blog-title.component";

@Component({
  selector: 'app-music-content',
  imports: [BlogTitleComponent],
  templateUrl: './music-content.component.html',
  styleUrl: './music-content.component.css'
})
export class MusicContentComponent {
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
    const result = musicData.filter(article => article.id == id)[0]

    this.contentTitle = result.musicTitle
    this.contentDescription = result.musicDescription
    this.photoCover = result.photoCover
  }
}
