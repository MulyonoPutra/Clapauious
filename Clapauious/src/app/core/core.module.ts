import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Providers } from './providers/main.providers';
import { ShortenerTextPipe } from './pipe/shortener-text.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ShortenerTextPipe
  ],
  exports: [
    ShortenerTextPipe
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        ...Providers
      ]
    };
  }
}
