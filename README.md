# Minsait Projeto Final - Empréstimo em Angular (Front End)
Front-end para consumir recursos da nossa API.

Necessário o uso da API presente nesse repositório.
 [API BACK END](https://github.com/edsontelesfontes/Minsait-Emprestimos)

### Autor

- [José Edson Teles Fontes Junior](https://www.linkedin.com/in/edsontelesfontes/)

Repositório contendo o código fonte do projeto final de empréstimo da minsait.

# Demonstração

Foi nos solicitados a construção de um sistema de empréstimo, a partir disso começamos a desenhar um sistema de empréstimo com algumas regras de pré estabelecidas.

O fluxo principal da plataforma de empréstimos consiste em um sistema de cadastro de clientes e empréstimos.
A arquitetura da nossa plataforma é constituida por:

**Pacotes:**

| Pacote     | Definição                                                                                                 |
|------------|-----------------------------------------------------------------------------------------------------------|
| Pages       | Pasta compondo a nossas páginas do sistemas e o typescript                                               |
| Service      | Classes para o consumo de API externa                                       |
| Pipe | Pipes para padronização das informações                                        |
| Components    | Reservada para nosso Footer e nosso Nav Bar                                                  |
| Environment | Responsável por guardar a nossa variável de sistema para consumo de API                               |
| Interface | Responsável por criar interfaces que tenham o mesmos atributos da API                              |


**Módulos:**

| Módulo     | Definição                                                                                 |
|------------|-------------------------------------------------------------------------------------------|
| Clientes    | Módulo contendo as páginas necessárias para o registro de novos clientes                  |
| Clientes Cadastrar/Editar | Módulo para formulário de criação e edição de clientes                                         |


##### Tecnologias

* Angular
* TypeScript
* Bootstrap
* Font Awesome
* Sweet Alert 2



---- -- -- -- 
Para a nossa demonstração crie um servidor de desenvolvimento com o comando no terminal:
```
 `ng serve` e acesse o site `http://localhost:4200/`.
```
---- -- -- -- 

### Páginas

* Home page

<img src= "https://imgur.com/IWpASda.png">

* Not found

<img src= "https://imgur.com/vI07yZp.png">

* Listagem de clientes

<img src= "https://imgur.com/b789bfA.png">

* Cadastro de clientes
<img src = "https://imgur.com/M5WoLwf.png">

* Edição de clientes
<img src = "https://imgur.com/AUZi0Nt.png">

