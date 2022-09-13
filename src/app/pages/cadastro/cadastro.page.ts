import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contato } from '../../models/contato';
import { ContatosService } from '../../services/contatos.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  formCadastrar: FormGroup;
  isSubmitted: boolean = false;

  constructor(
    private alertController: AlertController,
    private router: Router,
    private contatosService: ContatosService,
    private formBuilder: FormBuilder) {
     }

  ngOnInit() {
    this.formCadastrar = this.formBuilder.group({
      nome: ["", [Validators.required]],
      telefone: ["", [Validators.required, Validators.minLength(10)]],
      genero: ["", [Validators.required]],
      data_nascimento: ["", [Validators.required]]
    });
  }

  get errorControl(){
    return this.formCadastrar.controls;
  }

  submitForm(){
    this.isSubmitted = true;
    if(!this.formCadastrar.valid){
      return false;
      this.presentAlert("Agenda", "Erro no Cadastro", "Todos os Campos são obrigatórios!");
    }else{
      this.cadastrar();
    }
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

cadastrar(): void{
    this.contatosService.inserir(this.formCadastrar.value);
    this.router.navigate(['/home']);
}

}
