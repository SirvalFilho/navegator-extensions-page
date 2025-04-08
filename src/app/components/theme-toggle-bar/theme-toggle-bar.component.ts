import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggle-bar',
  templateUrl: './theme-toggle-bar.component.html',
  styleUrl: './theme-toggle-bar.component.css'
})
export class ThemeToggleBarComponent {

  public imgSrc: string = 'assets/images/icon-sun.svg';
toggleTheme() {
  this.imgSrc = this.imgSrc === 'assets/images/icon-moon.svg' ? 'assets/images/icon-sun.svg' : 'assets/images/icon-moon.svg';
  const appRoot = document.querySelector('app-root');
  appRoot?.classList.toggle('light-theme');
}

}
