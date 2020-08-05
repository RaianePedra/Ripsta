class ComoJogar{
  constructor(){
  
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
      image(imagemComoJogar, 0, 0, width, height); 
    
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER)
    textSize(40);
    stroke(color("#0040FF"));
    strokeWeight(2);
    fill(color("#04B431"));
    text("PARA RIPSTA PULAR USE:  ", width / 2, height / 2.8);
    textSize(40);
    text("-> O LADO ESQUERDO DO MOUSE ", width / 2, height / 2.3);
    text("-> OU A SETINHA PARA CIMA", width / 2, height / 1.9);
  }  
   _botao(){
   botaoGerenciador.y = height / 7 * 3.7;
   botaoGerenciador.draw("horizontal");  
  }
}