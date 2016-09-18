/**
 * Created by dimitri on 18/09/2016.
 */

import {Component, OnInit} from '@angular/core';
import {PlayerService} from './playerservice'

@Component({
    moduleId: module.id,
    selector: 'players',
    templateUrl: 'players.html',
    providers:[PlayerService]
})
export class Players implements OnInit {

    players;

    constructor(_service: PlayerService) {
        this.players = _service.get();
    }


    ngOnInit() {
    }

}
