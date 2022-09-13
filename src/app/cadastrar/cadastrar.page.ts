import { Component, OnInit } from '@angular/core';
import { Contato } from '../class/paciente';
import { ContatoService } from '../services/contato.service';
import { RegisterAlert } from '../alerts/registerAlert'
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {
  private _nome: string;
  private _telefone: number;
  private _dataNascimento: string;
  private _sexo: string;
  private _alert: RegisterAlert

  constructor(private router: Router, private contatoService: ContatoService)
  {
      this._alert = new RegisterAlert();
  }

  ngOnInit() {
  }

  cadastrar(): void {
    if (this.validar(this._nome) && this.validar(this._telefone) && this.validar(this._dataNascimento), this.validar(this._sexo))
    {
      this.contatoService.cadastrar(new Contato(this._nome, this._telefone, this._dataNascimento, this._sexo))

      this._alert.success()
      this.router.navigate(['home'])
    }
    else {
      this._alert.error()
    }
  }

  private validar(campo: any): boolean {
    if (!campo)
    {
      console.log(campo)
      return false
    }
    return true
  }
}
