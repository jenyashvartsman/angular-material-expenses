import { Component } from '@angular/core';
import { EThemeType } from 'src/app/models/e-theme.type';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  theme?: EThemeType;

  constructor(private readonly themeService: ThemeService) {
    this.theme = this.themeService.currentActive();
  }

  toggleTheme(): void {
    this.theme =
      this.theme === EThemeType.dark ? EThemeType.light : EThemeType.dark;
    this.themeService.update(this.theme);
  }
}
