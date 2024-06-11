import { Component, ElementRef} from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private el: ElementRef) {}
  
  onIframeLoad() {
    const iframe = this.el.nativeElement.querySelector('iframe');
    iframe.contentWindow.postMessage({ type: 'GET_FORM_DATA' }, '*');
  }
}