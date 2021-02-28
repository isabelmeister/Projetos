# Boas vindas ao repositório do projeto de ES6 e Higher Order Functions!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

---

## Instruções para entregar seu projeto:

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * Entre na pasta do repositório que você acabou de clonar

### Correção automatizada

Você irá perceber que, ao realizar novos `commits` no seu _Pull Request_, eles serão automaticamente analisados pelo _CodeClimate_ e pelo _TravisCI_.

Se atente para os comentários do _CodeClimate_ que irão conter **dicas valiosas** de como deixar seu código melhor! Você pode também explorar o _TravisCI_ para obter informações sobre quais _assertions_ ainda precisa adereçar em seu projeto.

---

### Entrega

 - Projeto Individual.

 - Serão dois dias de projeto.

## O que deverá ser desenvolvido

## Requisitos do projeto

Vocẽ deverá implementar as funções que estão no `src/zoo.js` para passarem em cada um dos testes. O teste `test/animalsByIds.test.js`, por exemplo, testa a função `animalsByIds`, que já está criada dentro do `src/zoo.js`, embora ainda não contenha lógica alguma. Para ver o que cada função precisa retornar basta ver o `assert` de cada um dos testes.

Utilize as novas funcionalidades do ES6 como arrow functions, template literals, spread operator, parâmetro rest, object destructuring, entre as outras. Utilize também as _High Order Functions_.

Antes de começar analise o arquivo `src/data.js`, para ver os dados que serão usados.

### 1- Implemente a função animalsByIds:
  - Caso receba nenhum parâmetro, necessário retornar um array vazio
  - Ao receber como parâmetro um único id, retorna os animais com este id
  - Ao receber mais de um id, retorna os animais que têm um desses ids

### 2- Implemente a função animalsOlderThan:
  - Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta
 espécie possuem a idade mínima especificada

### 3- Implemente a função employeeByName:
  - Sem parâmetros, retorna um objeto vazio
  - Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
  - Quando provido o último nome do funcionário, retorna o objeto do funcionário

### 4- Implemente a função createEmployee:
  - Cria um novo colaborador a partir de objetos contendo informações pessoais, gerentes e animais gerenciados

### 5- Implemente a função isManager:
  - Testa se o id passado é de um gerente

### 6- Implemente a função addEmployee:
  - Adiciona um funcionário no fim da lista

### 7- Implemente a função animalCount:
  - Sem parâmetros, returna animais e suas quantidades
  - Com o nome de uma espécie de animal, retorna somente a quantidade

### 8- Implemente a função entryCalculator:
  - Returna 0 se nenhum argumento for passado
  - Retorna 0 se um objeto vazio for passado
  - Retorna o preço total a ser cobrado dado o número de adultos, crianças e idosos

### 9- Implemente a função animalMap:
  - Sem parâmetros, retorna animais categorizados por localização
  - Com opções especificadas, retorna nomes de animais
  - Com opções especificadas, retorna nomes de animais ordenados
  - Com opções especificadas, retorna somente nomes de animais macho/fêmea
  - Só retorna informações específicas de gênero se `includeNames` for setado

### 10- Implemente a função schedule:
  - Sem parâmetros, retorna um cronograma legível para humanos
  - Se um único dia for passado, retorna somente este dia em um formato legível para humanos

### 11- Implemente a função oldestFromFirstSpecies:
  - Passado o id de um funcionário, encontra a primeira espécie de animal
  gerenciado pelo funcionário, e retorna um array com nome, sexo e idade do
  animal mais velho dessa espécie

### 12- Implemente a função increasePrices:
  - Ao passar uma porcentagem, incrementa todos os preços, arrendondados em duas casas decimais

### 13- Implemente a função employeeCoverage:
  - Sem parâmetros, retorna uma lista de funcionários e os animais pelos quais eles são responsáveis
  - Com o id de um funcionário, retorna os animais pelos quais o funcionário é responsável
  - Com o primeiro nome de um funcionário, retorna os animais pelos quais o funcionário é responsável
  - Com o último nome de um um funcionário, retorna os animais pelos quais o funcionário é responsável

---

### DURANTE O DESENVOLVIMENTO

* ⚠ **PULL REQUESTS COM ISSUES NO CODE CLIMATE NÃO SERÃO AVALIADAS, ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠

⚠ Lembre-se que garantir que todas as _issues_ comentadas pelo CodeClimate estão resolvidas! ⚠
