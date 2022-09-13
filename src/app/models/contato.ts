export class Contato {
  private _id: any;
  private _nome: string;
  private _profissao: string;
  private _telefone: number;
  private _genero: string;
  private _data_nascimento: string;

  constructor(nome: string, profissao: string, telefone: number, genero: string, data_nascimento: string) {
    let chave = new Date;
    this._id = chave.getTime();
    this._nome = nome;
    this._profissao = profissao;
    this._telefone = telefone;
    this._genero = genero;
    this._data_nascimento = data_nascimento;
  }

  get id(): any {
    return this._id;
  }

  get nome(): string {
    return this._nome;
  }

  get profissao(): string {
    return this._profissao;
  }

  get telefone(): number {
    return this._telefone;
  }

  get genero(): string {
    return this._genero;
  }

  get data_nascimento(): string {
    return this._data_nascimento;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  set profissao(profissao: string) {
    this._profissao = profissao;
  }

  set telefone(telefone: number) {
    this._telefone = telefone;
  }

  set genero(genero: string) {
    this._genero = genero;
  }

  set data_nascimento(data_nascimento: string) {
    this._data_nascimento = data_nascimento;
  }
}
