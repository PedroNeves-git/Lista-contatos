import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoPessoaComponent } from './edicao-pessoa.component';

describe('EdicaoPessoaComponent', () => {
  let component: EdicaoPessoaComponent;
  let fixture: ComponentFixture<EdicaoPessoaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdicaoPessoaComponent]
    });
    fixture = TestBed.createComponent(EdicaoPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
