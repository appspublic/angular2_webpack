/**
 * Created by dimitri on 18/09/2016.
 */
import {Injectable} from '@angular/core';
import {Player} from './player.component';

@Injectable()
export class PlayerService {

    constructor() {
    }


    const PLAYERS: Player[] = [
        {name:'Zlatan',nationality:'Sweden'}
    ];

get(){
    return this.PLAYERS;
}

}