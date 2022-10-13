import { Component, OnInit } from '@angular/core';
import { Card } from '../card-interface/card-interface';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.scss']
})
export class PaperComponent implements OnInit, Card {

  private static readonly DEFEATABLE = [1, 5];
  private static readonly UNDEFEATABBLE = [3, 4];
  private static readonly PAPER_CARD_ID = 2;
  defeatables: number[] = [];
  unDefeatables: number[] = [];
  cardId: number = 0;

  ngOnInit(): void {
    this.defeatables = PaperComponent.DEFEATABLE;
    this.unDefeatables = PaperComponent.UNDEFEATABBLE;
    this.cardId = PaperComponent.PAPER_CARD_ID;
  }

}
