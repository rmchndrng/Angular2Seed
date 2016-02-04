import {Component} from 'angular2/core';
import {HeroListComponent} from './hero-list.component';
import {HeroDetailComponent} from './hero-detail.component';
import {IHero} from '../models/IHero';

import {Logger} from '../services/logger'


@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.html',
    directives: [HeroListComponent, HeroDetailComponent]
})

export class AppComponent {
    constructor(private _Logger:Logger){}
    
    public title = 'Tour of Heroes';
    public selectedHero :IHero;
    heroSelected(hero:IHero){
        this.selectedHero = hero;
        this._Logger.log(this.selectedHero.name + ' selected.');
    }
}