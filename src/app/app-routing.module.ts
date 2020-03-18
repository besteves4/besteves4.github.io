import {
    NgModule
} from '@angular/core';
import {
    CommonModule
} from '@angular/common';
import {
    RouterModule,
    Routes
} from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { PublicationsListComponent } from './publications-list/publications-list.component';

const routes: Routes = [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'about-me'
    },
    {
        path: 'about-me',
        component: AboutMeComponent
    },
    {
        path: 'blog',
        component: BlogListComponent
    },
    {
        path: 'publications',
        component: PublicationsListComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ]
}) export class AppRoutingModule {}
