
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICliente } from 'src/app/interface/ICliente';
import { ClientServiceService } from 'src/app/services/client-service.service';
import Swal from 'sweetalert2';
//  "sweetalert2": "^11.7.3",


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
clientes: ICliente[] = [];

constructor(private clienteService: ClientServiceService, private route:Router){}

ngOnInit() {
  this.clienteService.buscarTodosClientes().subscribe((result: ICliente[]) => {
    this.clientes = result;
    //console.log(this.clientes);
  });
}

deletarCliente(cpf: string){
  Swal.fire({
    title: 'Tem certeza que deseja excluir esse cliente ?',
    text: "Você não será capaz de voltar atrás com essa ação!",
    icon: 'warning',
    showCancelButton: true,
    background: 'black',

    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim, deletar cliente!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deletado!',
        'Cliente removido com sucesso.',
        'success'
      )
      this.clienteService.deletarClientePorCpf(cpf).subscribe(() => this.ngOnInit());
    }
  })
}

updateClient(cpf: string){
  this.route.navigate(['clients/update/', cpf])
}
}
