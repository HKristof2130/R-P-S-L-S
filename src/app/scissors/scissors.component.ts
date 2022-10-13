import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scissors',
  templateUrl: './scissors.component.html',
  styleUrls: ['./scissors.component.scss']
})
export class ScissorsComponent implements OnInit {

  private static readonly DEFEATABLE = [2, 4];
  private static readonly UNDEFEATABBLE = [1, 5];
  private static readonly SCISSORS_CARD_ID = 3;
  defeatables: number[] = [];
  unDefeatables: number[] = [];
  cardId: number = 0;

  ngOnInit(): void {
    this.defeatables = ScissorsComponent.DEFEATABLE;
    this.unDefeatables = ScissorsComponent.UNDEFEATABBLE;
    this.cardId = ScissorsComponent.SCISSORS_CARD_ID;
  }

}
