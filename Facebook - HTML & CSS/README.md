# Boas vindas ao repositório do projeto de réplica da página de cadastro do Facebook!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

---

## Instruções para entregar seu projeto:

# Entregáveis

Para entregar o seu projeto você deverá criar um Pull Request neste repositório.

Este Pull Request deverá conter os arquivos `index.html`, `style.css` e `script.js`, que conterão seu código HTML, CSS e JavaScript, respectivamente.

## ⚠️ É importante que seus arquivos tenham exatamente estes nomes! ⚠️

## Requisitos do projeto

### 💡O projeto deve ser o mais parecido possível com a página inicial do Facebook. Respeitando os requisitos, tente fazer uma cópia perfeita!

Todos os requisitos tem como base a página do **Facebook**.
Use a imagem do site, além de acessar [a página de cadastro/login](https://www.facebook.com/).
Tente ser o mais fiel possível.

Use a inspeção de código para verificar a estrutura da página de cadastro/login do **Facebook**.

Você irá desenvolver este projeto em **dupla** e é fundamental que siga as instruções do repositório.

![Página Facebook](./facebook.png)

## ⚠️ Leia-os atentamente e siga à risca o que for pedido. Em particular, **atente-se para os nomes de _ids_ que alguns elementos de seu projeto devem possuir**. ⚠️

O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

---

### 👀Observações importantes:

* Os requisitos do seu projeto são avaliados automaticamente, sendo utilizada a resolução de tela de `1366 x 768` (1366 pixels de largura por 768 pixels de altura).

  * #### ⚠️ Logo, recomenda-se desenvolver seu projeto usando a mesma resolução, via instalação [deste plugin](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en) do `Chrome` para facilitar a configuração da resolução. ⚠️

* Atente-se para o tamanho das imagens que você utilizará neste projeto. **Não utilize imagens com um tamanho maior que _500Kb_.**
  * #### ⚠️ Utilize uma ferramenta [como esta](https://picresize.com/pt) para redimensionar as imagens. ⚠️

  * Caso a avaliação falhe com alguma mensagem de erro parecida com `[409:0326/130838.878602:FATAL:memory.cc(22)] Out of memory. size=4194304`, provavelmente as imagens que você está utilizando estão muito grandes. Tente redimensiona-las para um tamanho menor.

* Para verificar se a sua avaliação foi computada com sucesso, você pode verificar os **detalhes da execução do avaliador**.

  * Na página do seu _Pull Request_, acima do "botão de merge", procure por _**"Evaluator job"**_ e clique no link _**"Details"**_;

  * Na página que se abrirá, procure pela linha _**"Cypress evaluator step"**_ e clique nela;

  * Analise os resultados a partir da mensagem _**"(Run Starting)"**_;

  * Caso tenha dúvidas, consulte [este vídeo](https://vimeo.com/420861252) ou procure a monitoria.


* Você tem liberdade para adicionar novos comportamentos ao seu projeto, seja na forma de aperfeiçoamentos em requisitos propostos ou novas funcionalidades, **desde que tais comportamentos adicionais não conflitem com os requisitos propostos**.

  * Em outras palavras, você pode fazer mais do que for pedido, mas nunca menos.

* Contudo, tenha em mente que **nada além do que for pedido nos requisitos será avaliado**. _Esta é uma oportunidade de você exercitar sua criatividade e experimentar com os conhecimentos adquiridos._

---

## Requisitos Obrigatórios:

Caso você faça o _download_ de bibliotecas externas, utilize o diretório _libs_ (a partir da raiz do projeto) para colocar os arquivos (*.css, *.js, etc...) baixados.

### 1 - Posicionamento de elementos utilizando _CSS Flexbox_.

### 2 - Uma barra azul na parte superior da página do **Facebook** com a classe `"top-bar"`.

### 3 - O logotipo do **Facebook** no canto superior esquerdo com a classe `"facebook-logo"`.

### 4 - Um campo de entrada de texto no canto superior direito para receber o email ou o telefone do usuário com o id `"user-email-phone"`.

### 5 - Um título com o texto 'Email ou telefone' acima do campo de entrada de texto para email ou telefone com o id `"user-email-phone-label"`.

### 6 - Um campo de entrada de texto para digitar a senha do usuário, posicionado no canto superior direito. O campo também deve estar posicionado à direita do campo de entrada de texto para email ou telefone.

  Pontos importantes:
    * Ao digitar a senha, o padrão deve ser '*****'.

### 7 - Um botão com o id `"button-login"` e o texto 'Entrar', à direita do campo de entrada de texto para senha.

  Pontos importantes:
    * Ao clicar no botão, um `alert` deve ser exibido com o email ou telefone digitado pelo usuário.

### 8 - Um texto 'O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.' abaixo da barra superior azul do **Facebook**, no canto esquerdo.

### 9 - Uma imagem com id `"facebook-networking"`, que ficará abaixo do item 8. Essa imagem deve conter o mapa do mundo e as conexões entre as pessoas.

  Pontos importantes:
    * Dê o nome "networking.png" para a imagem.

### 10 - Um texto 'Abra uma conta' posicionado abaixo da caixa de texto de email/telefone.

### 11 - Um texto 'É rápido e fácil.' posicionado abaixo do texto 'Abra uma conta'.

### 12 - Um campo de entrada de texto para o nome do usuário. Posicione esse campo abaixo do texto 'É rápido e fácil.'.

  Pontos importantes:
    * Defina o `placeholder` com o valor "Nome".

### 13 - Um campo de entrada de texto para o sobrenome do usuário. Posicione esse campo à direita do campo nome.

  Pontos importantes:
    * Defina o `placeholder` com o valor "Sobrenome".

### 14 - Um campo de entrada de texto para o celular ou email. Posicione esse campo abaixo do sobrenome do usuário.

  Pontos importantes:
    * Defina o `placeholder` com o valor "Celular ou email".

### 15 - Um campo de entrada de texto para a nova senha do usuário. Posicione esse campo abaixo do celular/email.

  Pontos importantes:
    * Lembre-se de respeitar a formatação de senha '*****'.
    * Defina o `placeholder` com o valor "Nova senha".

### 16 - Um texto 'Data de nascimento' abaixo do campo de entrada de texto de nova senha.

### 17 - Um campo para selecionar a data de nascimento.

  Pontos importantes:
    * Diferentemente do Facebook, esse campo deve ser composto de um único _input_, e você deverá utilizar alguma biblioteca para transformá-lo em um _datepicker_.
    * Defina o `placeholder` com o valor "dd/mm/aaaa".

### 18 - Um texto 'Gênero' abaixo dos campos de data.

### 19 - Três `radio buttons` com os nomes 'Feminino', 'Masculino' e 'Personalizado'.

  Pontos importantes:
    * Posicione abaixo do texto 'Gênero'.

### 20 - Um botão com o texto 'Cadastre-se' e id `"facebook-register"`.

  Pontos importantes:
    * Esse botão deve pegar os dados dos itens 12 até 19 e validá-los.
    * Caso tudo esteja certo, exiba um `alert` com todos os dados no seguinte formato:
      Por exemplo:
        Se a pessoa que usa digitar o nome "João" e selecionar "Personalizado", o conteúdo da mensagem no `alert` deve ser 'João - Personalizado'.
    * Caso alguma validação dê errado, exiba um `alert` com a mensagem 'Dados inválidos'.

## Requisito Bônus

**Esse requisito não é verificável pelo avaliador automático. Sua apresentação (opcional) será realizada durante o fechamento do dia seguinte ao final do projeto**

### Realize o desenvolvimento da versão mobile do Facebook.

![Página Facebook](./facebook-mobile.png)

---

## Dicas

- Para colocar sua página no [GitHub Pages](https://pages.github.com/), não é necessário remover o conteúdo que já está lá, você pode apenas adicionar essa nova página. Para isso, todo o conteúdo desse projeto deve ser colocado em uma pasta `/projetos/facebook-signup`.

---

### DURANTE O DESENVOLVIMENTO

* ⚠ **FIQUE ATENTO ÀS ISSUES DO CODE CLIMATE, PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO. SEU PROJETO SOMENTE SERÁ AVALIADO SE NÃO TIVER ISSUES NO CODE CLIMATE!** ⚠
