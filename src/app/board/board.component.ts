import { Component, OnInit } from '@angular/core';
import { Card } from '../card-interface/card-interface';
import { EnemyComponent } from '../enemy/enemy.component';
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

  
  private enemyCards: Card[] = [];
  result: number = -10;
  private enemy = new EnemyComponent();


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
    const randomCardIndex = this.enemy.getEnemysChoice()
    const enemysChoice = this.enemyCards[randomCardIndex];
    console.log(enemysChoice);
    

    if (playersChoice.cardId === enemysChoice.cardId) {
      this.result = 0;
      return;
    }

    for (let i = 0; i < playersChoice.defeatables.length; i++) {
      if (playersChoice.defeatables[i] === enemysChoice.cardId) {
        this.result = 1;;
        return;
      }
    }

    this.result = -1;
  }



}
