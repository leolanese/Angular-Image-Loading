import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferOnWhenComponent } from './defer-on-when.component';

describe('DeferOnWhenComponent', () => {
  let component: DeferOnWhenComponent;
  let fixture: ComponentFixture<DeferOnWhenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferOnWhenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferOnWhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
