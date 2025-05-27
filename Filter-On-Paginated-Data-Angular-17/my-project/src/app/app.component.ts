import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface EventData {
  id: number;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  events = signal<EventData[]>(Array.from({ length: 500 }, (_, i) => ({
    id: i + 1,
    title: `Event ${i + 1}`,
    location: `Location ${i % 5}`,
    startDate: `2025-01-${(i % 30) + 1}`,
    endDate: `2025-01-${(i % 30) + 3}`
  })));

  pageSize = signal<number>(5);
  currentPage = signal<number>(1);
  filters = signal<{ title?: string; location?: string; startDate?: string; endDate?: string }>({});

  filteredEvents = signal<EventData[]>([]);
  paginatedEvents = signal<EventData[]>([]);

  constructor() {
    effect(() => this.applyFilters());
    effect(() => this.paginateData());
  }

  applyFilters() {
    const { title, location, startDate, endDate } = this.filters();
    this.filteredEvents.set(this.events().filter(event => {
      return (!title || event.title.includes(title)) &&
             (!location || event.location.includes(location)) &&
             (!startDate || new Date(event.startDate) >= new Date(startDate)) &&
             (!endDate || new Date(event.endDate) <= new Date(endDate));
    }));
  }

  paginateData() {
    const start = (this.currentPage() - 1) * this.pageSize();
    this.paginatedEvents.set(this.filteredEvents().slice(start, start + this.pageSize()));
  }

  changePageSize(size: number) {
    this.pageSize.set(size);
    this.currentPage.set(1);
  }

  goToPage(page: number) {
    this.currentPage.set(page);
  }

  applyFilter(newFilters: { title?: string; location?: string; startDate?: string; endDate?: string }) {
    this.filters.set(newFilters);
    this.currentPage.set(1);
  }
}
