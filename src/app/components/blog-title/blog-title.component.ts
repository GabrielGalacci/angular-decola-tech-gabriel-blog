import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-title',
  imports: [],
  templateUrl: './blog-title.component.html',
  styleUrl: './blog-title.component.css'
})
export class BlogTitleComponent {
  @Input()
  blogTitle:string = ""
}
