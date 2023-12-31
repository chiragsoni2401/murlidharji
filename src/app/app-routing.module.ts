import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MembersComponent } from './members/members.component';
import { HallComponent } from './hall/hall.component';
import { DonationComponent } from './donation/donation.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'members', component: MembersComponent },
  { path: 'hall', component: HallComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'contact-us', component: ContactUsComponent },
];

@NgModule({
  imports: [GalleryModule, LightboxModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
