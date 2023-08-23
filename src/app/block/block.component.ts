import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block',
  template: `
    <button>
      {{ value }}
    </button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }'],
})
export class BlockComponent {
  @Input() value: 'X' | '0' | undefined;
}
