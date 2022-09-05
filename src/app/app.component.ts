import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '',

})
export class AppComponent {
  title = 'redirecionador';
  constructor(@Inject(DOCUMENT) private document: Document) {
    console.log(this.document.location)
    const url = `https://${this.document.location.host.split('.')[1]}.${this.document.location.host.split('.')[2]}/${this.document.location.host.split('.')[0]}${this.document.location.pathname}`
    console.log(url);
    return;
    setTimeout(() => {
      window.location.href = url;
    }, 2000);
  }
}
