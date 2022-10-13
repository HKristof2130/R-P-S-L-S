import { Component, OnInit } from '@angular/core';
import { Card } from '../card-interface/card-interface';

@Component({
  selector: 'app-rock',
  templateUrl: './rock.component.html',
  styleUrls: ['./rock.component.scss']
})
export class RockComponent implements OnInit, Card {
  
  private static readonly DEFEATABLE = [3, 4];
  private static readonly UNDEFEATABBLE = [2, 5];
  private static readonly ROCK_CARD_ID = 1;
  defeatables: number[] = [];
  unDefeatables: number[] = [];
  cardId: number = 0;

  ngOnInit(): void {
    this.defeatables = RockComponent.DEFEATABLE;
    this.unDefeatables = RockComponent.UNDEFEATABBLE;
    this.cardId = RockComponent.ROCK_CARD_ID;
  }
}

