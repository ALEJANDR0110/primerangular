import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaMultiplicarReferencia } from './lista-multiplicar-referencia';

describe('ListaMultiplicarReferencia', () => {
  let component: ListaMultiplicarReferencia;
  let fixture: ComponentFixture<ListaMultiplicarReferencia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaMultiplicarReferencia],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaMultiplicarReferencia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
