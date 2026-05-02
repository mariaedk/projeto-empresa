import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  slides = [
    {
      img: 'assets/_img/servicos/placa.jpg',
      alt: 'Assistência técnica',
      title: 'Assistência Técnica',
      caption: 'Diagnóstico e reparo de CLPs, IHMs, inversores e servoacionamentos com agilidade e qualidade.'
    },
    {
      img: 'assets/_img/servicos/montagem-painel.jpg',
      alt: 'Montagem de painéis elétricos',
      title: 'Montagem de Painéis',
      caption: 'Mais de 20 anos de experiência em painéis elétricos de automação e distribuição.'
    },
    {
      img: 'assets/_img/servicos/automacao.jpg',
      alt: 'Automação industrial',
      title: 'Automação Industrial',
      caption: 'Soluções completas em CLPs, IHMs, SCADA e redes industriais para a sua empresa.'
    }
  ];

  currentSlide = 0;

  constructor() { }

  ngOnInit(): void { }

  prev(): void {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  next(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  goTo(index: number): void {
    this.currentSlide = index;
  }
}
