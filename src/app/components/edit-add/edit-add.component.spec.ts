import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddComponent } from './edit-add.component';

describe('EditAddComponent', () => {
  let component: EditAddComponent;
  let fixture: ComponentFixture<EditAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
