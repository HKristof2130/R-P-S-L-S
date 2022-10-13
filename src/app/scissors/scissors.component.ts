import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-scissors',
  templateUrl: './scissors.component.html',
  styleUrls: ['./scissors.component.scss']
})
export class ScissorsComponent implements OnInit {

  private static readonly DEFEATABLES = [2, 4];
  private static readonly UNDEFEATABBLES = [1, 5];
  private static readonly SCISSORS_CARD_ID = 3;
  defeatables: number[] = ScissorsComponent.DEFEATABLES;
  unDefeatables: number[] = ScissorsComponent.UNDEFEATABBLES;
  cardId: number = ScissorsComponent.SCISSORS_CARD_ID;

  @Output() chooseScissors: EventEmitter<ScissorsComponent> = new EventEmitter<ScissorsComponent>;


  ngOnInit(): void {
  }

  choose(){
    console.log(this.defeatables,this.unDefeatables,this.cardId);
    this.chooseScissors.emit(this);
  }

}
