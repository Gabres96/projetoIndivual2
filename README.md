# projetoIndivual2

/*-------------HTML---------------- */
Projeto individual módulo 2
Para realizar a criação do conversor, utilizei um formulario, onde utilizei três selects, o primeiro foi para criar as unidades de conversão, e neste primeiro select, utilizei 4 options, onde ficou as opcões para escolher.

O segundo select utilizei para criar o campo para escolher a primeira medida e o terceiro select, foi para criar o campo de unidade de medida de destino, ou seja a que a pessoa deseja receber as informações. Os dois selects utilizei um options para depois criar as opções de medidas.

para criar os dois ultimos selects, utilizei uma div, para engloba-los.

Posteriormente criei um campo para adicionar valores utilizando input.

Para criar o botão, utilizei a tag Button.

Para gerar o valor final utilizei uma div com o nome resultado.

/*-------------SCRIPT---------------- */

Comecei o script, criando a minha lista de eventos utilizando getElementById e addEventListner para criar as interações. Declarei as variaveis para puxar os campos de e para.

Depois criei o alerta de campos não preenchido utilizando if else e também o getElementByID.

Posteriormente criei a função lista para gerar a minha lista com os itens que precisam ser selecionados, dento da função criei a variavel opcão e utilizei um for para realizar os calculos.

Dentro da função criei as interações com as opções DE e PARA.

Logo abaixo criei os itens das listas que são as opcões que será possível selecionar, utilizei array para criar as listas e utilizei para realizar as definções.

Abaixo criei a função para realizar o calculo das medidas, todos os calculos foram feitos através de IF.

/*-------------STYLE---------------- */

Utilizei uma edição simples apenas para facilitar a visualização do conversor, então utilizei background color, para definir as cores de fundo, adicionei algumas bordas arredondadas e alterei um pouco do tamanho dos elementos para ficar em uma melhor visualização.

Adicionei também um reset CSS para iniciar as edições