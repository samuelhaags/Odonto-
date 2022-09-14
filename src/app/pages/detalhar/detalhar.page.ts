import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contato } from 'src/app/models/contato';
import { ContatosService } from 'src/app/services/contatos.service';

@Component({
  selector: 'app-detalhar',
  templateUrl: './detalhar.page.html',
  styleUrls: ['./detalhar.page.scss'],
})
export class DetalharPage implements OnInit {

  contato: Contato;
  nome: string;
  profissao: string;
  telefone: number;
  genero: string;
  data_nascimento: string;
  edicao: boolean = true;

  constructor(private router: Router, private alertController: AlertController, private contatosService: ContatosService) {
    const nav = this.router.getCurrentNavigation();
    this.contato = nav.extras.state.objeto;
    this.nome = this.contato.nome;
    this.profissao = this.contato.profissao;
    this.telefone = this.contato.telefone;
    this.genero = this.contato.genero;
    this.data_nascimento = this.data_nascimento;
  }

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    this.contato = nav.extras.state.objeto;
    this.nome = this.contato.nome;
    this.profissao = this.contato.profissao;
    this.telefone = this.contato.telefone;
    this.genero = this.contato.genero;
    this.data_nascimento = this.data_nascimento;
  }

  alterarEdicao(): void {
    if (this.edicao == false) {
      this.edicao = true;
    } else {
      this.edicao = false;
    }
  }

  salvar() {
    if ((this.validar(this.nome)) && (this.validar(this.profissao))
      && (this.validar(this.telefone)) && (this.validar(this.genero))
      && (this.validar(this.data_nascimento))) {
      if (this.contatosService.editar(this.contato, this.nome, this.profissao, this.telefone, this.genero, this.data_nascimento)) {
        this.presentAlert("Aviso", "Editar", "Paciente Editado com Sucesso!");
        this.router.navigate(['/home']);
      } else {
        this.presentAlert("Atenção!", "Editar", "Paciente não encontrado");
      }
    } else {
      this.presentAlert("Atenção!", "Erro no cadastro", "Todos os Campos são Obrigatórios");
    }
  }

  excluir() {
    this.presentConfirmAlert("Atenção!", "Excluir Paciente", "Você deseja realmente excluir o Paciente?");

  }

  private excluirContato() {
    if (this.contatosService.excluir(this.contato)) {
      this.presentAlert("Aviso", "Excluir", "Contato excluido com sucesso!");
      this.router.navigate(['/home']);
    } else {
      this.presentAlert("Atenção!", "Erro - Excluir", "Contato não encontrado!");
    }
  }


  async presentConfirmAlert(titulo: string, subtitulo: string, msg: string) {
    const alert = await this.alertController.create({
      header: titulo,
      subHeader: subtitulo,
      message: msg,
      buttons: [
        {
          text: "Cancelar",
          role: "Cancelar",
          handler: () => { console.log("Cancelar") }
        },
        {
          text: "Confirmar",
          role: "Confirmar",
          handler: (acao) => {
            this.excluirContato();
          }
        }
      ],
    });

    await alert.present();
  }

  async presentAlert(titulo: string, subtitulo: string, msg: string) {
    const alert = await this.alertController.create({
      header: titulo,
      subHeader: subtitulo,
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }

  private validar(campo: any): boolean {
    if (!campo) {
      return false;
    } else {
      return true;
    }
  }
  voltar(): void{
    this.router.navigate(['/home']);
  }

}
