
# API REST - CRUD DE LIVRARIA


Api rest com nodeJs e Mongodb 



## Documentação da API

###  Autor
Primeiro adicione um autor.
```javascript
{
  "nome": "Paulo",
  "nacionalidade":"Brasileiro"
}

```

```javascript
{
 "_id": <Será retornado automaticamente>
}

```
#### Retornar todos os autores

```http
  GET /autores
```

#### Retornar um autor

```http
  GET /autores/{id}
```

#### Registrar um autor

```http
  POST /autores
```
#### Atualizar autor

```http
  PUT /autores/{id}
```

#### Deletar autor 

```http
  DELETE /autores/{id}
```
###  Livros
Agora adicione um livro
```javascript
{
  "titulo": "Jojo",
 "autor": <id gerado do autor>,
 "editora": "Tokyo",
 "NumeroPag": 121
}
```

ADICIONANDO LIVROS

#### Retornar todos os livros

```http
  GET /books
```

#### Buscar livro por editora

```http
  GET /books/busca?editora={nomeEditora}
```


#### Retorna um livro

```http
  GET /books/{id}
```

#### Registrar um livro

```http
  POST /books
```

#### Atualizar um livro

```http
  PUT /books/{id}
```
#### Deletar um livro

```http
  DELETE /books/{id}
```


## Deploy

Para rodar o projeto

```bash
  npm run dev
```

