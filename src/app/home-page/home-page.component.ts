import { Component, NgModule } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { OfferCardsComponent } from "../offer-cards/offer-cards.component";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
// import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent, OfferCardsComponent,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule,
    // NoopAnimationsModule
    // BrowserAnimationsModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  imagesArray: string[] = [
    'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80']
  discountArray: any[] = ['30', '20', '60', '5']
  content: any[] = ['STAY', 'EAT', 'EXPLORE', 'SHOP'];

  isScrolled: boolean = false;

  onScroll() {
    if (window.scrollY > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

  adults = ['1 Adult', '2 Adults', '3 Adults', '4 Adults', '5 Adults'];
  children = ['0', '1', '2', '3', '4'];
  rooms = ['1 Room', '2 Rooms', '3 Rooms', '4 Rooms'];


}