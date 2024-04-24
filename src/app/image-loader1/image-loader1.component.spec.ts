import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageLoader1Component } from './image-loader1.component';

describe('ImageLoader1Component', () => {
  let component: ImageLoader1Component;
  let fixture: ComponentFixture<ImageLoader1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageLoader1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageLoader1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
