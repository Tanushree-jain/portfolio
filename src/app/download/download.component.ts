import { Component,ElementRef,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrl: './download.component.scss'
})
export class DownloadComponent {
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  private sleep(time: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  async onUploadClick(): Promise<void> {
    const upload = this.elRef.nativeElement.querySelector('.upload');
    this.renderer.addClass(upload, 'uploading');
    await this.sleep(3000);
    this.renderer.addClass(upload, 'uploaded');
    await this.sleep(2000);
    this.renderer.removeClass(upload, 'uploading');
    this.renderer.addClass(upload, 'uploaded-after');
    await this.sleep(1000);
    upload.className = 'upload';
  }
}
