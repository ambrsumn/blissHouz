import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferCardsComponent } from './offer-cards.component';

describe('OfferCardsComponent', () => {
  let component: OfferCardsComponent;
  let fixture: ComponentFixture<OfferCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
