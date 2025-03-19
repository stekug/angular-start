import { Component, input, signal } from '@angular/core';

import { type Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  data = input.required<Ticket>();
  detailsVisible = signal(false);

  onToggleDetails() {
    // this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((current) => !current);
  }
}
