import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: "app-supervisor",
  imports: [],
  templateUrl: "./supervisor.html",
  styleUrl: "./supervisor.css",
})
export class Supervisor {
  @Output() buttonClick = new EventEmitter<void>();
  showAdditionalContent = true;

  onButtonClick() {
    this.buttonClick.emit();
    this.showAdditionalContent = !this.showAdditionalContent;
  }
}
