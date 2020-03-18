import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { PublicationsListComponent } from './publications-list/publications-list.component';
import { CurrentJobComponent } from './current-job/current-job.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CvComponent } from './cv/cv.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@NgModule({
   declarations: [
      AppComponent,
      AboutMeComponent,
      HeaderComponent,
      NavbarComponent,
      BlogListComponent,
      PublicationsListComponent,
      CurrentJobComponent,
      ContactsComponent,
      CvComponent
   ],
   imports: [
       CommonModule,
      BrowserModule,
      AppRoutingModule,
      RouterModule,
      FontAwesomeModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
