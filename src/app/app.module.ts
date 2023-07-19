import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { IvyCarouselModule } from "angular-responsive-carousel";
import { HallComponent } from './hall/hall.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { MembersComponent } from './members/members.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DonationComponent } from './donation/donation.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, IvyCarouselModule, AppRoutingModule],
  declarations: [AppComponent, HelloComponent, HallComponent, AboutUsComponent, GalleryComponent, ContactUsComponent, HomeComponent, MembersComponent, HeaderComponent, FooterComponent, DonationComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
