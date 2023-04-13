import { IEndereco } from "./IEndereco";

export interface ICliente{
  cpf: string;
  nome: string;
  telefone: string;
  endereco: IEndereco;
  rendimentoMensal:number;
  relacionamento: string;
}
