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
import { CvModalComponent } from './cv-modal/cv-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap';

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
      CvComponent,
      CvModalComponent
   ],
   imports: [
      CommonModule,
      BrowserModule,
      AppRoutingModule,
      RouterModule,
      FontAwesomeModule,
      BrowserAnimationsModule,
      ModalModule.forRoot()
   ],
   entryComponents: [
    CvModalComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
