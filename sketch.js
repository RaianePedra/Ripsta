function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
  somDoJogo.loop();
  jogo = new Jogo()
  telaInicial = new TelaInicial();
  comoJogar = new ComoJogar();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial,
    comoJogar
  };
  botaoGerenciador = new BotaoGerenciador(' PLAY', width / 2, height / 2);
 
}

function keyPressed() {
  jogo.keyPressed(key);
}

function mousePressed() {
  jogo.mousePressed("ArrowUp")
}

function draw() {
  cenas[cenaAtual].draw();
}  