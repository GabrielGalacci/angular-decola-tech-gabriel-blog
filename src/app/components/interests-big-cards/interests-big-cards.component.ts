import { Component, Input } from '@angular/core';
import { interestsData } from '../../pages/data/fakeData';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interests-big-cards',
  imports: [],
  templateUrl: './interests-big-cards.component.html',
  styleUrl: './interests-big-cards.component.css'
})
export class InterestsBigCardsComponent {

  @Input()
  Id:string = ""
  @Input()
  photoCover:string = ""
  @Input()
  interestTitle:string = ""
  @Input()
  interestDescription:string = ""
}
