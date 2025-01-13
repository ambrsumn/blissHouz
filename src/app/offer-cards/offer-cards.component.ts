import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-offer-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offer-cards.component.html',
  styleUrl: './offer-cards.component.css'
})
export class OfferCardsComponent {

  @Input() cards: any;
  @Input() content: any;
  @Input() discount: any;

}
