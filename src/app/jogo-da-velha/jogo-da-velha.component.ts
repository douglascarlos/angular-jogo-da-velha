import { Component, OnInit } from '@angular/core';

import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit() {
  	this.jogoDaVelhaService.inicializar();
  }

  public get showInicio(): boolean {
    return this.jogoDaVelhaService.showInicio;
  }

  public get showTabuleiro(): boolean {
    return this.jogoDaVelhaService.showTabuleiro;
  }

  public get showFinal(): boolean {
    return this.jogoDaVelhaService.showFinal;
  }

  public iniciarJogo(): void {
  	this.jogoDaVelhaService.iniciarJogo();
  }

}
