import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spock',
  templateUrl: './spock.component.html',
  styleUrls: ['./spock.component.scss']
})
export class SpockComponent implements OnInit {

  private static readonly DEFEATABLE = [2, 4];
  private static readonly UNDEFEATABBLE = [1, 5];
  private static readonly SPOCK_CARD_ID = 3;
  defeatables: number[] = [];
  unDefeatables: number[] = [];
  cardId: number = 0;

  ngOnInit(): void {
    this.defeatables = SpockComponent.DEFEATABLE;
    this.unDefeatables = SpockComponent.UNDEFEATABBLE;
    this.cardId = SpockComponent.SPOCK_CARD_ID;
  }

}
