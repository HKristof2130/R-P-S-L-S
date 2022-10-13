import { Component, OnInit } from '@angular/core';
import { Card } from '../card-interface/card-interface';
import { LizardComponent } from '../lizard/lizard.component';
import { PaperComponent } from '../paper/paper.component';
import { RockComponent } from '../rock/rock.component';
import { ScissorsComponent } from '../scissors/scissors.component';
import { SpockComponent } from '../spock/spock.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  private static readonly LOVER_EDGE = 0;
  private static readonly UPPER_EDGE = 4;
  private enemyCards: Card[] = [];
  result: number = -10;


  ngOnInit(): void {
    this.enemyCards.push(new RockComponent());
    this.enemyCards.push(new PaperComponent());
    this.enemyCards.push(new ScissorsComponent());
    this.enemyCards.push(new LizardComponent());
    this.enemyCards.push(new SpockComponent());
  }

  rockEventCatcher($event: RockComponent) {
    console.log($event);
    this.battle($event);
  }

  paperEventCatcher($event: PaperComponent) {
    console.log($event);
    this.battle($event);
  }

  scissorsEventCatcher($event: ScissorsComponent) {
    console.log($event);
    this.battle($event);
  }

  lizardEventCatcher($event: LizardComponent) {
    console.log($event);
    this.battle($event);
  }

  spockEventCatcher($event: SpockComponent) {
    console.log($event);
    this.battle($event);
  }

  battle<Type extends Card>(playersChoice: Type) {
    // it is just for testing
    //const randomIndex = 0;
    const randomIndex = Math.floor( Math.random() * (BoardComponent.UPPER_EDGE - BoardComponent.LOVER_EDGE + 1) + BoardComponent.LOVER_EDGE );
    const enemysChoice = this.enemyCards[randomIndex];
    console.log(enemysChoice);
    

    if (playersChoice.cardId === enemysChoice.cardId) {
      this.draw();
      return;
    }

    for (let i = 0; i < playersChoice.defeatables.length; i++) {
      if (playersChoice.defeatables[i] === enemysChoice.cardId) {
        this.win();
        return;
      }
    }

    this.lose();
  }

  win() {
    this.result = 1;
  }

  lose() {
    this.result = -1;
  }

  draw() {
    this.result = 0;
  }




}
