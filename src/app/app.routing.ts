import {Routes, RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent }
];

export const AppRoutes = RouterModule.forRoot(APP_ROUTES);
