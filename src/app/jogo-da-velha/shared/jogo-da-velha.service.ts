import { Injectable } from '@angular/core';

@Injectable()
export class JogoDaVelhaService {

	private readonly TAM_TAB: number = 3;
  private readonly VAZIO: number = 0;
  private readonly X: number = 1;
 	private readonly O: number = 2;

  private tabuleiro: any;
  private numMovimentos: number;
  private vitoria: any;

  private _jogador: number;
  private _showInicio: boolean;
  private _showTabuleiro: boolean;
  private _showFinal: boolean;

  constructor() { }

  public inicializar(): void {
    this._showInicio = true;
    this._showTabuleiro = false;
    this._showFinal = false;
    this.numMovimentos = 0;
    this._jogador = this.X;
    this.vitoria = false;
    this.inicializarTabuleiro();
  }

  private inicializarTabuleiro(): void {
    this.tabuleiro = [this.TAM_TAB];
    for (let i = 0; i < this.TAM_TAB; i++) {
      this.tabuleiro[i] = [this.VAZIO, this.VAZIO, this.VAZIO];
    }
  }

  public get showInicio(): boolean {
    return this._showInicio;
  }

  public get showTabuleiro(): boolean {
    return this._showTabuleiro;
  }

  public get showFinal(): boolean {
    return this._showFinal;
  }

  public iniciarJogo(): void {
    this._showInicio = false;
    this._showTabuleiro = true;
  }

}
