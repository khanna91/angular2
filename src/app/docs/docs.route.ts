import {Routes, RouterModule} from "@angular/router";
import {ElementComponent} from "./element/element.component";
import {OverviewComponent} from "./overview/overview.component";

export const DOCS_ROUTES: Routes = [
    { path: 'docs/overview', component: OverviewComponent },
    { path: 'docs/element', component: ElementComponent },
    { path: 'docs', redirectTo: '/' , pathMatch: "full"}
];

export const DocsRoutes = RouterModule.forRoot(DOCS_ROUTES);
