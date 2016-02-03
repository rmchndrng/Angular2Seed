import {Component} from 'angular2/core';

import {IHero} from './models/IHero';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.html'
})

export class AppComponent {
    public title = 'Tour of Heroes';
    public hero: IHero = {
        id: 1,
        name: "Windstorm"
    };
}