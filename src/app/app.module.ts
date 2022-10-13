import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { RockComponent } from './rock/rock.component';
import { PaperComponent } from './paper/paper.component';
import { ScissorsComponent } from './scissors/scissors.component';
import { LizardComponent } from './lizard/lizard.component';
import { SpockComponent } from './spock/spock.component';
import { GuideComponent } from './guide/guide.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    RockComponent,
    PaperComponent,
    ScissorsComponent,
    LizardComponent,
    SpockComponent,
    GuideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
