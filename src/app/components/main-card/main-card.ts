import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: "app-main-card",
  imports: [CommonModule],
  templateUrl: "./main-card.html",
  styleUrl: "./main-card.css",
})
export class MainCard {
  @Input() header: string = "";
  @Input() title: string = "";
  @Input() content: string = "";
  @Input() footer: string = "";
  @Input() isHtml: boolean = false;
}
