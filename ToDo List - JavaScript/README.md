# Boas vindas ao repositório do projeto Lista de Tarefas! 🗒

## O que deverá ser desenvolvido

Neste projeto, você implementará uma lista de tarefas.
Ou seja, uma aplicação que permita a pessoa que usa adicionar tarefas, marcá-las como concluídas e limpar todas ou apenas aquelas que foram concluídas.

Abaixo você pode ver um exemplo de uma lista de tarefas.
Utilize este exemplo como referência.
Você poderá estilizar seu projeto da forma que desejar desde que todos os requisitos sejam cumpridos.
Use sua imaginação!

![](todo-list-example.gif)

---

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * Entre na pasta do repositório que você acabou de clonar

## Entregáveis

Para entregar o seu projeto você deverá criar um _Pull Request_ para este repositório no **GitHub**.

Este _Pull Request_ deverá conter, necessariamente, os arquivos `index.html`, `style.css` e `script.js`, que conterão seu código **_HTML_**, **_CSS_** e **_JavaScript_**, respectivamente. ⚠️ É importante que seus arquivos tenham exatamente estes nomes! ⚠️

Você pode adicionar outros arquivos se julgar necessário.

---

## Requisitos do projeto

A seguir, estão listados todos os requisitos do projeto. Leia-os atentamente e siga à risca o que for pedido.
Em particular, atente-se para os nomes de classes e ids que alguns elementos de seu projeto devem possuir.
**Não troque ids por classes ou vice-versa**.
O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

Os requisitos do seu projeto são avaliados automaticamente, sendo utilizada a resolução `1366 x 768` (1366 pixels de largura por 768 pixels de altura). Logo, recomenda-se desenvolver seu projeto usando a mesma resolução, via instalação [deste plugin](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en) do `Chrome` para facilitar a configuração dessa resolução.

Você tem liberdade para adicionar novos comportamentos ao seu projeto, seja na forma de aperfeiçoamentos em requisitos propostos ou novas funcionalidades, **desde que tais comportamentos adicionais não conflitem com os requisitos propostos**.
Em outras palavras, você pode fazer mais do que foi pedido, mas nunca menos.
Contudo, tenha em mente que **nada além do que foi pedido nos requisitos será avaliado**.
Esta é uma oportunidade de você exercitar sua criatividade e experimentar os conhecimentos adquiridos.

### 1 - Sua lista deve possuir o título "Minha Lista de Tarefas" em uma tag `<header>`. Esse título não varia de acordo com o conteúdo da lista. _Não confunda esse título com o título da página, que deve aparecer dentro da tag `head`_.

### 2 - Abaixo do título deve haver um pequeno e discreto parágrafo com `id="funcionamento"` e com o texto "Clique duas vezes em um item para marcá-lo como completo" explicando o funcionamento da lista para o usuário.

### 3 - Deve haver um `input` com o `id="texto-tarefa"` onde o usuário poderá digitar o nome do item que deseja adicionar à lista.

### 4 - Deve haver uma lista ordenada de tarefas com o `id="lista-tarefas"`.

### 5 - Deve haver um botão com `id="criar-tarefa"` e ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.

### 6 - Os itens da lista de tarefas devem ser ordenados por ordem de criação.

### 7 - Ao passar o mouse sobre qualquer botão e qualquer item da lista o ícone do mouse deve mudar para uma mãozinha apontando-o.

### 8 - Ao clicar em um item da lista, altere a cor de fundo do item para cinza rgb(128,128,128).

### 9 - Ao clicar duas vezes em um item, ele deverá ser riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item.

    Pontos importantes sobre este requisito:

    * Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through".

    * Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) as tarefas finalizadas.

### 10 - Deve haver um botão com `id="apaga-tudo"` que quando clicado deve apagar todos os items da lista.

### 11 - Deve haver um botão com `id="remover-finalizados"` que quando clicado remove **somente** os elementos finalizados da sua lista.

## BÔNUS

### 1 - Adicione um botão com `id="salvar-tarefas"` que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava. Dica: Leia sobre _Local Storage_ na seção de recursos adicionais.

### 2 - Como sua lista é ordenada, o que acontece se você esquecer de um item? Você teria que apagar a lista e começar tudo de novo, pois só é possível inserir um item no final, certo? Adicione dois botões, um com `id="mover-cima"` e outro com `id="mover-baixo"`, que permitam mover o item selecionado para cima ou para baixo na lista de tarefas.

    Pontos importantes sobre este requisito bônus:

    * Antes de começar a desenvolver essa funcionalidade, pare e pense. O que significa mover um item de uma lista para cima ou para baixo no **_DOM_**? Você já possui todas as habilidades necessárias para fazer isso.

    * Habitue-se a pensar nos casos especiais ao construir programas. O que acontece se o usuário tentar mover o primeiro item para cima ou o último para baixo?

### 3 - Adicione um botão com `id="remover-selecionado"` que, quando clicado, remove o item selecionado.

---

## Instruções para entregar seu projeto:

### DURANTE O DESENVOLVIMENTO

* ⚠ **LEMBRE-SE DE CRIAR TODOS OS ARQUIVOS DENTRO DA PASTA COM O SEU NOME** ⚠
