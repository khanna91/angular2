import {Routes, RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import {PageNotFoundComponent} from "./common/page-not-found/page-not-found.component";

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/404' }
];

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
