import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Component} from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AppComponent {
    location: Location;
    constructor(location: Location) {
        this.location = location;
    }

    pathMatch(path) {
        return (location.pathname === path);
    }

    pathExist(path) {
        return location.pathname.includes(path);
    }
}
