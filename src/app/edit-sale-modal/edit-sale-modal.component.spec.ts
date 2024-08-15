import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSaleModalComponent } from './edit-sale-modal.component';

describe('EditSaleModalComponent', () => {
  let component: EditSaleModalComponent;
  let fixture: ComponentFixture<EditSaleModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSaleModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSaleModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
