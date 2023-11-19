import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { EThemeType } from '../models/e-theme.type';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private renderer: Renderer2;
  private colorScheme: EThemeType = EThemeType.light;
  private colorSchemePrefix = 'color-scheme-';
  private readonly storageKey = 'theme';

  constructor(
    private rendererFactory: RendererFactory2,
    private storageService: StorageService
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  load(): void {
    this._getColorScheme();
    this.renderer.addClass(
      document.body,
      this.colorSchemePrefix + this.colorScheme
    );
  }

  update(scheme: EThemeType): void {
    this._setColorScheme(scheme);
    this.renderer.removeClass(
      document.body,
      this.colorSchemePrefix +
        (this.colorScheme === EThemeType.dark
          ? EThemeType.light
          : EThemeType.dark)
    );
    this.renderer.addClass(document.body, this.colorSchemePrefix + scheme);
  }

  currentActive(): EThemeType {
    return this.colorScheme;
  }

  private _detectPrefersColorScheme(): void {
    if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
      this.colorScheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? EThemeType.dark
        : EThemeType.light;
    } else {
      this.colorScheme = EThemeType.dark;
    }
  }

  private _setColorScheme(scheme: EThemeType): void {
    this.colorScheme = scheme;
    this.storageService.setItem(this.storageKey, scheme);
  }

  private _getColorScheme(): void {
    const storageColorScheme = this.storageService.getItem(this.storageKey);
    if (storageColorScheme) {
      this.colorScheme = storageColorScheme as EThemeType;
    } else {
      this._detectPrefersColorScheme();
    }
  }
}
