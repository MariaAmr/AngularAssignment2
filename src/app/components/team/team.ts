import { Component } from '@angular/core';
import { MainCard } from '../main-card/main-card';
import { Supervisor } from "../supervisor/supervisor";

@Component({
  selector: "app-team",
  imports: [MainCard, Supervisor],
  templateUrl: "./team.html",
  styleUrl: "./team.css",
})
export class Team {
  cardData = {
    header: "Hello from Team Component",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ullam, tempore explicabo praesentium repellat commodi cumque nihil est modi ipsam itaque doloremque, assumenda dolorum veniam sequi illo corporis excepturi soluta eligendi molestias, et quae dolore odit doloribus? Corrupti inventore beatae odio sint reiciendis iusto debitis repellendus magni illo officiis error dicta dignissimos laboriosam, tenetur ab impedit, consectetur voluptatum omnis quibusdam rem deserunt. Totam expedita incidunt quis iste, consequuntur ratione atque blanditiis, eum in veritatis non eligendi? Nulla asperiores, esse tempore aliquam libero sequi, quibusdam distinctio voluptates, modi dolores vel a? Cumque rem vel libero natus distinctio fugiat consectetur aperiam voluptatem placeat",
    footer: "2 days ago",
  };
  showAdditionalContent = true;
  get titleWithIcons(): string {
    return `Hi I'm the Team Parent Component <i class="fa-solid fa-hand text-info"></i> and I Have A Child Called Supervisor <i class="fa-solid fa-ghost"></i>`;
  }
  toggleContent() {
    this.showAdditionalContent = !this.showAdditionalContent;
  }
}
