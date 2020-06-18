import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoSaqueComponent } from './deposito-saque.component';

describe('DepositoSaqueComponent', () => {
  let component: DepositoSaqueComponent;
  let fixture: ComponentFixture<DepositoSaqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositoSaqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositoSaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
