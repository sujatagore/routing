import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FairsdetailsComponent } from './fairsdetails.component';

describe('FairsdetailsComponent', () => {
  let component: FairsdetailsComponent;
  let fixture: ComponentFixture<FairsdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FairsdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FairsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
