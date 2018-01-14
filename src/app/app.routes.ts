import { ShowDetailsComponent } from './shows/show-details/show-details.component';
import { ShowsComponent } from './shows/shows.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    { path: '', component: ShowsComponent },
    { path: 'shows', component: ShowsComponent },
    { path: 'show-details/:id', component: ShowDetailsComponent, data: [{name: 'value tet'}] }
];