import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-spock',
  templateUrl: './spock.component.html',
  styleUrls: ['./spock.component.scss']
})
export class SpockComponent implements OnInit {

  private static readonly DEFEATABLES = [1, 3];
  private static readonly UNDEFEATABBLES = [2, 4];
  private static readonly SPOCK_CARD_ID = 5;
  defeatables: number[] = SpockComponent.DEFEATABLES;
  unDefeatables: number[] = SpockComponent.UNDEFEATABBLES;
  cardId: number = SpockComponent.SPOCK_CARD_ID;

  @Output() chooseSpock: EventEmitter<SpockComponent> = new EventEmitter<SpockComponent>;

  ngOnInit(): void {
  }

  choose(){
    console.log(this.defeatables,this.unDefeatables,this.cardId);
    this.chooseSpock.emit(this);
  }
}
