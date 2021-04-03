## Sobre

### Tecnologias utilizadas
- [React](https://pt-br.reactjs.org/)
- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- Firebase

### Protótipos (Mockups)
Visite o [projeto no Figma](https://www.figma.com/file/5LgOPYORdN61Kw4Zl3BhhQ/Dragsters?node-id=0%3A1) para conferir o protótipo.


## Como contribuir :smiley:

Para contribuir com este projeto é necessário realizar um ```Fork```, esta ação permite criar uma cópia virtual do repositório original de um projeto para a sua conta Github.

## Realizar o Fork
- Basta clicar na opção ```Fork``` acima.

### Depois de realizar o ```Fork``` siga estes passos:
- Navegue até os seus repositórios. Você deverá encontrar ```dragsters-frontend``` na lista.
- Clone o projeto para a sua máquina a partir do fork criado na sua conta Github.
- Navegue até a raiz do projeto e crie uma branch com o seu nome ou apelido.
- Sinta-se livre para codar.
- Lembre-se de sempre manter o fork atualizado.

## Mantendo o Fork atualizado :heavy_check_mark:

Adicione o repositório original como referência de servidor remoto. Chame-a de ```upstream```. 

O comando ficará assim:

```bash
# O upstream deve estar mapeado para o repositório original
git remote add upstream https://github.com/Tava1/dragsters-frontend.git
```
Depois execute o seguinte comando:

```bash
git fetch upstream
```
<hr />

Neste repositório utilizamos a branch ```main``` como a branch padrão (Não utilize está branch para enviar suas alterações).

Sempre que houver alterações no repositório original realize um ```pull``` desta forma.

```bash
git pull upstream main
```
Assim você mantem o repositório que está trabalhando sempre atualizado.

<hr />

## Ultimos passos para começar o desenvolvimento :checkered_flag:
Navegue até a raiz do projeto e execute o seguinte comando no terminal:

```BASH
# Este comando irá instalar todas as dependências necessárias do projeto. 
yarn
```

Após a instalação das depências, podemos utilizar alguns comando disponíveis.

### :construction: Ambiente de desenvolvimento
Iniciar um ambiente de desenvolvimento local.
```BASH
yarn dev
```

### :wrench: Build do projeto
Realizar o build do projeto.
```BASH
yarn build
```

<hr />

## Enviar alterações :up:

- Certifique-se de estar trabalhando na sua branch.
- Não envie alterações para a branch ```main```, caso ocorra serão descartadas.

### Caso ainda não possua uma branch, utilize este comando para criar:

```bash
git checkout -b <seu-nome-ou-apelido>
```

- Realize o commit de suas alterações

Realize o push com o seguinte comando:

```bash
git push origin <branch>


# Caso ainda não possua o origin mapeado para o seu fork basta executar:
git remote add origin <url-fork>
```

### Criando um ```Pull Request```

Após o ```push``` acesse o Github e vá até o ```fork```, você irá se deparar com um aviso possuindo duas opções: ```Pull Request``` e ```Compare```. Clique na opção ```Pull Request```. 

Depois basta se certificar que está tudo certo e ir clicando na opção ```Create Pull Resquest```.

Pronto, logo irei analisar.

<hr />

