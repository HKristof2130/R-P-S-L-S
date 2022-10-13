import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoadChildrenCallback } from '@angular/router';
import { Card } from '../card-interface/card-interface';

@Component({
  selector: 'app-rock',
  templateUrl: './rock.component.html',
  styleUrls: ['./rock.component.scss']
})
export class RockComponent implements OnInit, Card {
  
  private static readonly DEFEATABLES = [3, 4];
  private static readonly UNDEFEATABBLES = [2, 5];
  private static readonly ROCK_CARD_ID = 1;
  defeatables: number[] = RockComponent.DEFEATABLES;
  unDefeatables: number[] = RockComponent.UNDEFEATABBLES;
  cardId: number = RockComponent.ROCK_CARD_ID;

  @Output() chooseRock: EventEmitter<RockComponent> = new EventEmitter<RockComponent>;

  ngOnInit(): void {
  }

  choose(){
    console.log(this.defeatables,this.unDefeatables,this.cardId);
    this.chooseRock.emit(this);
  }

}

