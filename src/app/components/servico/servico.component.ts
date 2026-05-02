import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.scss']
})
export class ServicoComponent {
  activeTab: 'automacao' | 'servicos' = 'automacao';
  zoomedImg: string | null = null;
  isScrolled = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled = window.scrollY > 260;
  }

  switchTab(tab: 'automacao' | 'servicos'): void {
    this.activeTab = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  zoom(src: string): void { this.zoomedImg = src; }
  closeZoom(): void { this.zoomedImg = null; }

  @HostListener('document:keydown.escape')
  onEscape(): void { this.zoomedImg = null; }
}
