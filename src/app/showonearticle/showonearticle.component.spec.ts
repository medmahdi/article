import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowonearticleComponent } from './showonearticle.component';

describe('ShowonearticleComponent', () => {
  let component: ShowonearticleComponent;
  let fixture: ComponentFixture<ShowonearticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowonearticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowonearticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
