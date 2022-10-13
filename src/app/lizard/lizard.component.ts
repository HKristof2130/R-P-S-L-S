import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lizard',
  templateUrl: './lizard.component.html',
  styleUrls: ['./lizard.component.scss']
})
export class LizardComponent implements OnInit {

  private static readonly DEFEATABLE = [2, 5];
  private static readonly UNDEFEATABBLE = [1, 3];
  private static readonly LIZARD_CARD_ID = 4;
  defeatables: number[] = [];
  unDefeatables: number[] = [];
  cardId: number = 0;

  ngOnInit(): void {
    this.defeatables = LizardComponent.DEFEATABLE;
    this.unDefeatables = LizardComponent.UNDEFEATABBLE;
    this.cardId = LizardComponent.LIZARD_CARD_ID;
  }

}
