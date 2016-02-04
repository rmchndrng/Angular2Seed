import {Component} from 'angular2/core';

import {IHero} from '../models/IHero';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/templates/hero-detail.html', 
    inputs: ['hero']   
})

export class HeroDetailComponent {
    public hero:IHero;
}