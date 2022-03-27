//QUESTAO 01
var valor = 19
if (valor >= 10){
    document.write(" o valor é maior que 10!")
} else if (valor <=10){
    document.write(" o valor é menor que 10!")
}
//////////////////////////////////////////////////////

//QUESTAO 02
var bimestreUm = 10;
var bimestreDois = 8;
var bimestreTres = 7;
var bimestreQuatro = 2;

var media = ( bimestreUm + bimestreDois + bimestreTres + bimestreQuatro) /4;

if ( media >= 8 && media<= 10){
    console.log(media)
    document.write(" \n ALUNO(A) APROVADO(A)");

}else if (media <= 5 && media >= 7 ){
    console.log(media)
    document.write("\n RECUPERAÇÃO");

}else if (media <=2 && media >=0 ){
    console.log(media)
    document.write("\n ALUNO(A) REPROVADO(A)");
}
/////////////////////////////////////////////////////////

//QUESTÃO 03
   let empregado = [ 22, 26, 30]
   let anoNasc = 1958;
   let anoAtual = 2022;
   let idade = anoAtual - anoNasc;
   let temptrabalho = idade - 36;

if(idade >= 62 && temptrabalho >=28){
 document.write("Empregado: "+ empregado[2] + "<br>Idade: " + idade + " anos. <br> Ingressou na empresa á: " + tempTrabalho + " anos <br>Requer aposentadoria")
}else if (idade >= 65 || tempTrabalho >= 30){
 document.write("Empregado: "+ empregado[2] + "<br>Idade: " + idade + " anos. <br> Ingressou na empresa á: " + tempTrabalho + " anos <br>Requer aposentadoria")
}else {
 document.write("Empregado: "+ empregado[2] + "<br>Idade:"  + idade + " anos. <br> Ingressou na empresa á: " + tempTrabalho + " anos <br>Não requer aposentadoria") 
}

///////////////////////////////////////////////////////////////

//QUESTÃO 04
var Produto = "Roupas";
var Quantidade = 15;
var Unidade = 10;
var total = Quantidade * Unidade;
var desconto = 72 * 0.03;
var totalpag = total - desconto;

document.write("Produto: "+ Produto);
document.write("<br>Quantidade Adquirida : " + Quantidade );
document.write("<br>Preço por unidade : " + Unidade);
document.write("<br>Total: " + total);
document.write("<br>Desconto: " + desconto);
document.write("<br>Total a pagar pós desconto: " + totalpag);

if (quant <=5) {
	document.write("<br>Seu desconto será de 2% pela compra de "+Quantidade+" Roupas")
}else if (quant >5 && quant <=10) {
	document.write("<br>Seu desconto será de 3% pela compra de "+Quantidade+" Roupas")
}else if (quant >10){
	document.write("<br>Seu desconto será de 5% pela compra de "+Quantidade+" Roupas")
}
   
//////////////////////////////////////////

//QUESTÃO 05
   let code = 1;
   if ( code == 1) {
       console.log(" alimentos não perecivel");
   }else if (code >= 2 && code <=4) {
       console.log (" alimentos perecivel");
   }else if ( code == 5 || code ==6){
       console.log("vestuário");
   }else if (code ==7){
       console.log(" higiene pessoal");
   }else if (code >=8 && code <=15);{
         console.log(" limpeza e utensilios domésticos");
   }{
        console.log(" valor inválido")
   }

  ///////////////////////////////////////////

 //QUESTÃO 06
 let number = 104
 let quant = 8
 switch (number) {
     case 100:
         let cachorroQ = quant*1.70
         document.write("<br>O preço do seu pedido total de Cachorro quente simples é de:" + cachorroQ + " R$")
         break;
     case 101:
         let bauruS = quant*2.30
         document.write(" <br>O preço do seu pedido total de bauru simples ficou:" + bauruS + " R$")
         break;
     case 102:
         let bComOvo=quant*2.60
         document.write("<br>O preço do seu pedido total de  bauru com ovo ficou:" + bComOvo + " R$")
         break;
     case 103:
         let hamburguer = quant*2.40
         document.write("<br>O preço do seu pedido total de hamburguer ficou:" + hamburguer + " R$")
         break;
     case 104:
         let cheeseburguer = quant*2.50
         document.write("<br>O preço do seu pedido total de cheeseburguer ficou: " + cheeseburguer + " R$")
         break;
     case 105:
         let refrigerante = quant*1.00
         document.write("<br><br>O preço do seu pedido total de refrigerante ficou: " + refrigerante + " R$")
         break;
 }

    /////////////////////////////////////////////

    //QUESTÃO 07
    for (let num =1 ; num <11 ; num++){
        document.write("" +num) }
        
    for (let num = 10; num >0 ; num --){
        if ( num === 5){
            continue;
        }
        document.write(""+num)
    }

    ///////////////////////////////////

    // QUESTÃO 08
     var n = 20;
     for (let i = 1; i <=n; n ++){
         document.write("<br>" + i)
     }

     /////////////////////////////////////

     // QUESTÃO 09
      function tabuada() {
      for (var count =1 ; count <= 10;  count ++ )
      document.write (" 1x " + count + "=" + ( 1 * count) + "<br/>");}

    ///////////////////////////////////

    // QUESTÃO 10
     for (let i = 1 ; i < 11; i++){
         document.write("<br>" +i)
     }
        for (let i = 10 ; i > 0; i --){
            if( i === 5) {
                continue;   }
            document.write(" <br>" +i)
        }