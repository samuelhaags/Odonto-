import { Injectable } from '@angular/core';
import {Contato} from '../class/contato'
@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private contatos : Contato[] = []
  constructor()
  {
    this.contatos.push(new Contato("Exemplo","analista","42991166969","29/05/1998","M"))
  }

  public getContatos() : Contato[]{

    return this.contatos
  }
  public cadastrar(contato : Contato):void
  {
    this.contatos.push(contato)
  }
}
