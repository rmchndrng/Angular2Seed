import {Component, EventEmitter} from 'angular2/core'
import {OnInit} from 'angular2/core';
import {IHero} from '../models/IHero';
import {HeroService} from '../services/hero.service';

@Component(
    {
        selector: 'my-hero-list',
        templateUrl: 'app/templates/hero-list.html',
        styleUrls: ['app/assets/css/hero-list.css'],
        providers: [HeroService],
        outputs: ['onHeroSelected']
    }
)

export class HeroListComponent implements OnInit {
    public heroes: IHero[];
    public selectedHero: IHero;
    onHeroSelected: EventEmitter<IHero> = new EventEmitter();
    constructor(private _heroService: HeroService) { }

    onSelect(hero: IHero) {
        this.selectedHero = hero;
        this.onHeroSelected.emit(this.selectedHero);
    }

    getHeroes() {
        this._heroService.getHeroes().then(heroes=> this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }
}