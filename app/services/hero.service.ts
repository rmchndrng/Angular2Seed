import {Injectable} from 'angular2/core';

import {HEROES} from '../mocks/mock-heroes'

@Injectable()
export class HeroService {
    getHeroes(){
        return Promise.resolve(HEROES);        
    }
}