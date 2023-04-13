import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente } from 'src/app/interface/ICliente';
import { ClientServiceService } from 'src/app/services/client-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent {
constructor(private clientService: ClientServiceService, private route: ActivatedRoute, private router:Router){}

clientTypes: string = "";

types: String[] = [];

getEnumClientType(): any {
  this.clientService.clientRelationType().subscribe(
    response => {
      // O array de strings está na propriedade response do objeto
      // Insira o array em uma propriedade do componente
      this.types = response;
    },
    error => {
      console.error('Erro ao buscar strings', error);
    }
  );
  console.log(this.types);
}

clienteForm = new FormGroup({
  cpf: new FormControl("",Validators.required),
  nome: new FormControl("", Validators.required),
  telefone: new FormControl("", Validators.required),
  rendimentoMensal:new FormControl(1320, Validators.required),
  relacionamento: new FormControl("", Validators.required),
  //clientType: new FormControl(this.clientService.clientRelationType(), Validators.required),
  endereco: new FormGroup({
    rua: new FormControl("", Validators.required),
    numero: new FormControl(1, Validators.required),
    cep: new FormControl("", Validators.required),
  })
});


cpf = "";
ngOnInit(){
  this.getEnumClientType();
  this.cpf = this.route.snapshot.paramMap.get('cpf') || "";
  //console.log(this.cpf);
  if(this.cpf){
   this.clientService.buscarClientePorCpf(String(this.cpf)).subscribe((cliente: ICliente) => {
     this.clienteForm.setValue({
       cpf: cliente.cpf,
       nome: cliente.nome,
       telefone: cliente.telefone,
       endereco: {
        rua: cliente.endereco.rua,
        numero: cliente.endereco.numero,
        cep: cliente.endereco.cep
      },
       rendimentoMensal:cliente.rendimentoMensal,
       relacionamento: cliente.relacionamento,
     })
   });
  }
 }


 submitForm(){
  console.log(this.cpf)
  if(this.cpf){
    console.log("passou aqui no submit")
    const cliente: ICliente = this.clienteForm.value as unknown as ICliente;
    this.updateClient(String(this.cpf), cliente);
  }else{
    this.createClient();
  }
 }

createClient(){
  console.log("passou aqui")
  const cliente: ICliente = this.clienteForm.value as unknown as ICliente;
  this.clientService.cadastrarCliente(cliente).subscribe(result => {
    Swal.fire(
      'Cadastrado',
      'Cliente cadastrado com sucesso.',
      'success'
    )
    this.router.navigate(["clients"]);
  });;
}



updateClient(cpf: string, client: ICliente){
  this.clientService.updateCliente(String(cpf), client).subscribe(result => {
    Swal.fire('Cliente atualizado com sucesso! ',
    'success')

    this.router.navigate(["clients"]);
  });;

}

}
