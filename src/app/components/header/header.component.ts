import { Component } from '@angular/core';
import { themeType } from 'src/app/models/theme.type';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  theme?: themeType;

  constructor(private readonly themeService: ThemeService) {
    this.theme = this.themeService.currentActive();
  }

  toggleTheme(): void {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.themeService.update(this.theme);
  }
}
