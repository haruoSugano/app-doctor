export class Receituario {
  descricao: String;
  medico: {
    name: String;
    email: String;
    data_nascimento: Date;
    crm: Number;
    telefone: Number;
    endereco: String;
    numero: String;
    assinatura: String;
  };
  paciente: {
    name: String;
    email: String;
    data_nascimento: Date;
    cpf: Number;
    telefone: Number;
    endereco: String;
    numero: String;
    estado: String;
    cidade: String;
    cep: Number;
    status_consulta: Boolean;
  }
}
