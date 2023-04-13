import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { ICliente } from '../interface/ICliente';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  endpoint = "clientes";
  api = environment.api;
  constructor(private http: HttpClient) { }

  buscarTodosClientes(){
    return this.http.get<ICliente[]>(`${this.api}/${this.endpoint}`);
  }

  buscarClientePorCpf(cpf: string){
    return this.http.get<ICliente>(`${this.api}/${this.endpoint}/${cpf}`);
  }

  cadastrarCliente(cliente:ICliente){
    return this.http.post(`${this.api}/${this.endpoint}`, cliente);
  }

  deletarClientePorCpf(cpf: string){
    return this.http.delete(`${this.api}/${this.endpoint}/${cpf}`);
  }

  updateCliente(cpf:string, cliente:ICliente){
    return this.http.put(`${this.api}/${this.endpoint}/${cliente.cpf}`, cliente);
  }

  clientRelationType(){
    return this.http.get<String[]>(`${this.api}/${this.endpoint}/enum`);
  }
}
