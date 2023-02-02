import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgessComponent } from './progess.component';

describe('ProgessComponent', () => {
  let component: ProgessComponent;
  let fixture: ComponentFixture<ProgessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
