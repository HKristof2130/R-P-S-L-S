import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lizard',
  templateUrl: './lizard.component.html',
  styleUrls: ['./lizard.component.scss']
})
export class LizardComponent implements OnInit {

  private static readonly DEFEATABLES = [2, 5];
  private static readonly UNDEFEATABBLES = [1, 3];
  private static readonly LIZARD_CARD_ID = 4;
  defeatables: number[] = LizardComponent.DEFEATABLES;
  unDefeatables: number[] = LizardComponent.UNDEFEATABBLES;
  cardId: number = LizardComponent.LIZARD_CARD_ID;

  @Output() chooseLizard: EventEmitter<LizardComponent> = new EventEmitter<LizardComponent>;

  ngOnInit(): void {
  }

  choose(){
    console.log(this.defeatables,this.unDefeatables,this.cardId);
    this.chooseLizard.emit(this);
  }

}
