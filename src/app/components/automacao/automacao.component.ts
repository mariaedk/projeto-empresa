import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-automacao',
  templateUrl: './automacao.component.html',
  styleUrls: ['./automacao.component.scss']
})
export class AutomacaoComponent {
  zoomedImg: string | null = null;

  zoom(src: string): void { this.zoomedImg = src; }
  closeZoom(): void { this.zoomedImg = null; }

  @HostListener('document:keydown.escape')
  onEscape(): void { this.zoomedImg = null; }
}
