import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-extension-card',
  templateUrl: './extension-card.component.html',
  styleUrl: './extension-card.component.css'
})
export class ExtensionCardComponent {

  @Input() data!: {
    logo: string;
    name:string,
    description: string;
    isActive: boolean
  };
}
