import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScissorsComponent } from './scissors.component';

describe('ScissorsComponent', () => {
  let component: ScissorsComponent;
  let fixture: ComponentFixture<ScissorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScissorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScissorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
