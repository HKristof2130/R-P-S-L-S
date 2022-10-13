import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Card } from '../card-interface/card-interface';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.scss']
})
export class PaperComponent implements OnInit, Card {

  private static readonly DEFEATABLES = [1, 5];
  private static readonly UNDEFEATABBLES = [3, 4];
  private static readonly PAPER_CARD_ID = 2;

  defeatables: number[] = PaperComponent.DEFEATABLES;
  unDefeatables: number[] = PaperComponent.UNDEFEATABBLES;
  cardId: number = PaperComponent.PAPER_CARD_ID;

  @Output() choosePaper: EventEmitter<PaperComponent> = new EventEmitter<PaperComponent>;

  ngOnInit(): void {
  }

  choose(){
    console.log(this.defeatables,this.unDefeatables,this.cardId);
    this.choosePaper.emit(this);
  }
}
