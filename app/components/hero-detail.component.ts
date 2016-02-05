import {Component, OnChanges} from 'angular2/core';

import {IHero} from '../models/IHero';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/templates/hero-detail.html',
    inputs: ['hero']
})

export class HeroDetailComponent implements OnChanges {
    active = true;

    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    public hero: IHero;
    private selectedHero: IHero;

    values = '';

    onKeyUp(event: any) {
        this.values += event.target.value + ' | ';
    }

    resetForm() {
        this._SetSelectedHero();
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

    ngOnChanges() {
        this._SetSelectedHero();
    }
    
    private _SetSelectedHero(){
        if (this.hero) {
            this.selectedHero = {
                id: this.hero.id,
                name: this.hero.name,
                alterEgo: this.hero.alterEgo,
                heroPower: this.hero.heroPower
            }
        }
    }
}