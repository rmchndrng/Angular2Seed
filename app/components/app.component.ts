import {Component} from 'angular2/core';
import {HeroListComponent} from './hero-list.component';
import {HeroDetailComponent} from './hero-detail.component';
import {IHero} from '../models/IHero';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.html',
    directives: [HeroListComponent, HeroDetailComponent]
})

export class AppComponent {
    public title = 'Tour of Heroes';
    public selectedHero :IHero;
    heroSelected(hero:IHero){
        this.selectedHero = hero;
    }
}