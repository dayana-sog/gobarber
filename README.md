<p align="center">
  <img width="200" height="190" src="https://camo.githubusercontent.com/8c13dc2618dbd7f76d1d574350b98fdee1335ce5/68747470733a2f2f726f636b6574736561742d63646e2e73332d73612d656173742d312e616d617a6f6e6177732e636f6d2f626f6f7463616d702d6865616465722e706e67">
</p>


## :rocket: Backend GoBarber.


## :computer: Ferramentas Utilizadas
-  [Node.js]([https://nodejs.org/en/](https://nodejs.org/en/))
- [Express]([https://expressjs.com/](https://expressjs.com/))
- [Docker]([https://www.docker.com/](https://www.docker.com/))
- [Postgres]([https://www.postgresql.org/](https://www.postgresql.org/))
- [Yarn]([https://classic.yarnpkg.com/en/](https://classic.yarnpkg.com/en/))
	* [Sequelize]([https://sequelize.org/](https://sequelize.org/))
	* [Yup]([https://classic.yarnpkg.com/en/package/yup](https://classic.yarnpkg.com/en/package/yup))
	* [JsonWebToken]([https://classic.yarnpkg.com/en/package/jsonwebtoken](https://classic.yarnpkg.com/en/package/jsonwebtoken))
	* [Bcrypt]([https://classic.yarnpkg.com/en/package/bcryptjs](https://classic.yarnpkg.com/en/package/bcryptjs))
	* [Eslint]([https://classic.yarnpkg.com/en/package/eslint](https://classic.yarnpkg.com/en/package/eslint))
	* [Prettier]([https://classic.yarnpkg.com/en/package/prettier](https://classic.yarnpkg.com/en/package/prettier))



## :books: Instalação 

##### 	Para instalar a aplicação é necessário ter o [Node](https://nodejs.org/en/) , [Yarn](https://legacy.yarnpkg.com/en/docs/install/#mac-stable) e o [Docker](https://www.docker.com/) instalados em sua máquina.

Clone o repositório:
```sh
$ git clone https://github.com/dayana-sog/gobarber
```

Aceda a pasta do projeto:
```sh
$ cd gobarber
```
Gere o banco de dados no docker:
```
docker run --name gobarberdb -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```
Instale as dependências:
```sh
yarn
```
Inicie o servidor:
```sh
$ yarn dev
```

Para realizações de testes é recomendado que utilize o [Insomnia](https://insomnia.rest/) 

## 📝  Licença

Esse projeto está sob a licença MIT. Veja o arquivo  [License](https://github.com/dayana-sog/bootcamp-gostack-desafio-02/blob/master/LICENSE)  para mais detalhes.

----------

Feito com ♥ by Dayana Gonçalves  👋 
