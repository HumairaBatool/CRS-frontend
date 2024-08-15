import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-sale-modal',
  templateUrl: './edit-sale-modal.component.html',
  styleUrls: ['./edit-sale-modal.component.css']
})
export class EditSaleModalComponent implements OnInit {
  @Input() orderDetails: any;
  editSaleForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,

  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.editSaleForm = this.fb.group({
      clientName: [''],
      Service: [''],
      serviceProvider: [''],
      duration: [''],
      Upgrade: [''],
      clientEmail: [''],
      clientAddress: [''],
      clientPrimaryPhone: [''],
      clientAlternatePhone: [''],
      clientRelation: [''],
      clientCloserName: [''],
      agentName: [''],
      comment: [''],
      securityPin: [''],
      accountNum: [''],
      SSN: [''],
      cardProvider: [''],
      nameOnCard: [''],
      CardType: [''],
      cardNum: [''],
      DOB: [''],
      expiry: [''],
      CVV: [''],
    });
  }

  saveChanges() {
    if (this.orderDetails) {
      this.editSaleForm.patchValue(this.orderDetails);
      console.log('pathing values to editSaleForm-----:',this.editSaleForm)

    }
    if (this.editSaleForm.valid) {
           
      const updatedSale = this.editSaleForm.value;
      console.log('this.updatedSale-----:',updatedSale)

      console.log('Saving changes:', updatedSale);
      this.closeModal();
    }
  }

  closeModal() {
    this.activeModal.dismiss();
  }
}
