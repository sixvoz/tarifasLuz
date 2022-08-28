import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifasLuzComponent } from './tarifas-luz.component';

describe('TarifasLuzComponent', () => {
  let component: TarifasLuzComponent;
  let fixture: ComponentFixture<TarifasLuzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarifasLuzComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarifasLuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
