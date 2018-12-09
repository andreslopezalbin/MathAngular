import { Injectable, Output, EventEmitter } from '@angular/core';


@Injectable()
export class CommunicationService {

  isOpen = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  closeModal() {
    this.isOpen = true;
    this.change.emit(this.isOpen);
  }
}
