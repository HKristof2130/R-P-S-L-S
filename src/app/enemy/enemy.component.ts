import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enemy',
  templateUrl: './enemy.component.html',
  styleUrls: ['./enemy.component.scss']
})
export class EnemyComponent implements OnInit {

  private static readonly LOVER_EDGE = 0;
  private static readonly UPPER_EDGE = 4;
  

  private randomCardsIndex = -1; 
  ngOnInit(): void {
  }

  getEnemysChoice() : number{
    this.randomCardsIndex = Math.floor( Math.random() * (EnemyComponent.UPPER_EDGE - EnemyComponent.LOVER_EDGE + 1) + EnemyComponent.LOVER_EDGE );
    return this.randomCardsIndex;
  }

}
