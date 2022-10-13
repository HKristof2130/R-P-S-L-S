import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpockComponent } from './spock.component';

describe('SpockComponent', () => {
  let component: SpockComponent;
  let fixture: ComponentFixture<SpockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
