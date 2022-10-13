import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {

  buttonTitle : string = "Show guide";
  showGuide : boolean = false;

  ngOnInit(): void {
  }

  toogleGuide(){

    this.showGuide = !this.showGuide;
    this.showGuide ? this.buttonTitle="Watching guide" : this.buttonTitle="Show guide";
  }

}
