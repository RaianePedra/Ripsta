class TelaInicial{
  constructor(){
  
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){
      image(imagemTelaInicial, 0, 0, width, height); 
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER)
    textSize(110);
    stroke(color("#29088A"));
    strokeWeight(2);
    fill(color("#210B61"));
    text(" RIPSTA", width / 2, height / 4);
    textSize(80);
    text("THE WITCH", width / 1.95, height / 2.8);
  }
  
  _botao(){
   botaoGerenciador.y = height / 7 * 3.7;
   botaoGerenciador.draw();  
  }
}