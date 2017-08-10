import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdBoardComponent } from './ad-board.component';

describe('AdBoardComponent', () => {
  let component: AdBoardComponent;
  let fixture: ComponentFixture<AdBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
