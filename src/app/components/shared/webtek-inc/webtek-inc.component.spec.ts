import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebtekIncComponent } from './webtek-inc.component';

describe('WebtekIncComponent', () => {
  let component: WebtekIncComponent;
  let fixture: ComponentFixture<WebtekIncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebtekIncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebtekIncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
