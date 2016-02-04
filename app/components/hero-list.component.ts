import {Component, EventEmitter} from 'angular2/core'
import {OnInit} from 'angular2/core';
import {IHero} from '../models/IHero';
import {HeroService} from '../services/hero.service';
import {Logger} from '../services/logger'

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
    constructor(private _heroService: HeroService,private _Logger:Logger) { }

    onSelect(hero: IHero) {
        this.selectedHero = hero;
        this._Logger.log(this.selectedHero.name + ' selected. Emitting the event onHeroSelected.');
        this.onHeroSelected.emit(this.selectedHero);
    }

    getHeroes() {
        this._Logger.log('Fetching the heroes: Calling the service');
        this._heroService.getHeroes().then(heroes=> this.heroes = heroes);        
    }

    ngOnInit() {
        this.getHeroes();
    }
}