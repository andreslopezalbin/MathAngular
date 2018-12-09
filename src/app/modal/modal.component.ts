import { CommunicationService } from '../utils/communication.service';
import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {

  @Input() best: number;
  @Input() current: number;


  constructor(private activeModal: NgbActiveModal, private communicationService: CommunicationService) {}

  reset() {
    this.communicationService.closeModal();
    this.activeModal.close();
  }

}
