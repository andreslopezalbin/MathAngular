import { CommunicationService } from '../utils/communication.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { TableService } from './table.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tuple = [];
  equation: [string, boolean];
  result: boolean;
  current: number;
  best: number;
  progressbarValue = 100;
  interval;


  constructor(private tableService: TableService, private modalService: NgbModal,
    private communicationService: CommunicationService) {}

  ngOnInit() {
    this.current = 0;
    this.best = 0;
    this.getEquation();

    this.communicationService.change.subscribe(isOpen => {
      const modalIsOpen = isOpen;
      if (modalIsOpen === true) { this.resetGame(); }
    });
  }

  getEquation() {
    this.progressbarAnimation();
    this.tuple = this.tableService.getEquation();
    this.equation = this.tuple[0];
    this.result = this.tuple[1];
  }

  checkAnswer(answer: boolean) {
    if (answer === this.result) {
      this.getEquation();
      this.current++;
      if (this.best < this.current) { this.best = this.current; }
    } else {
      this.openModal();
      clearInterval(this.interval);
    }
  }

  resetGame() {
    this.getEquation();
    this.current = 0;
  }

  progressbarAnimation() {
    clearInterval(this.interval);
    this.progressbarValue = 100; /* need to cover the 100% of the progressbar */

    /* every 100ms progressbarValue is decremented by 2, it starts at 100 so 100ms * 100/2 = 5 seconds */
    setTimeout(() => {
      this.interval = setInterval(() => {
        if (this.progressbarValue > 0) {
          this.progressbarValue = this.progressbarValue - 2;
        } else {
          clearInterval(this.interval);
          this.openModal();
        }
      }, 100);
    }, 500);
  }


  openModal() {
    const modal = this.modalService.open(ModalComponent, { centered: true, backdrop: 'static', keyboard: false });
    modal.componentInstance.best = this.best;
    modal.componentInstance.current = this.current;
  }


}
