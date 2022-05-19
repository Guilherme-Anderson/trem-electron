var botoes = [0,0,0,0,0,0,0,0,0,0,0]

function addBt01() {
  const caixa = document.querySelector('#bt01')
  if (botoes[0]==1){
    caixa.innerHTML = ` <a onClick="addBt01()" ><img id="bt_11" src="./img/verde.png" /></a>
                        <button id="bt_1" onClick="addBt01(), writemsg('c')"></button>
                        <a onClick="addBt01()" ><img id="bt_12" src="./img/vermelho.png" /></a> `
    botoes[0]=0
  }else{
    caixa.innerHTML =`  <a onClick="addBt01()" ><img id="bt_11" src="./img/vermelho.png" /></a>
                        <button id="bt_1" onClick="addBt01(), writemsg('c')"></button>
                        <a onClick="addBt01()" ><img id="bt_12" src="./img/verde.png" /></a> `
    botoes[0]=1
  }
}

function addBt02() {
  const caixa = document.querySelector('#bt02')
  if (botoes[1]==1){
    caixa.innerHTML = ` <a onClick="addBt02()" ><img id="bt_21" src="./img/verde.png" /></a>
                        <button id="bt_2" onClick="addBt02(), writemsg('b')"></button>
                        <a onClick="addBt02()" ><img id="bt_22" src="./img/vermelho.png" /></a>`
    botoes[1]=0
  }else{
    caixa.innerHTML =`  <a onClick="addBt02()" ><img id="bt_21" src="./img/vermelho.png" /></a>
                        <button id="bt_2" onClick="addBt02(), writemsg('b')"></button>
                        <a onClick="addBt02()" ><img id="bt_22" src="./img/verde.png" /></a> `
    botoes[1]=1
  }
}

function addBt03() {
  const caixa = document.querySelector('#bt03')
  if (botoes[2]==1){
    caixa.innerHTML = ` <a onClick="addBt03()" ><img id="bt_31" src="./img/verde.png" /></a>
                        <button id="bt_3" onClick="addBt03(), writemsg('a')"></button>
                        <a onClick="addBt03()" ><img id="bt_32" src="./img/vermelho.png" /></a> `
    botoes[2]=0
  }else{
    caixa.innerHTML =`  <a onClick="addBt03()" ><img id="bt_31" src="./img/vermelho.png" /></a>
                        <button id="bt_3" onClick="addBt03(), writemsg('a')"></button>
                        <a onClick="addBt03()" ><img id="bt_32" src="./img/verde.png" /></a> `
    botoes[2]=1
  }
}

function addBt04() {
  const caixa = document.querySelector('#bt04')
  if (botoes[3]==1){
    caixa.innerHTML = ` <a onClick="addBt04()" ><img id="bt_41" src="./img/verde.png" /></a>
                        <button id="bt_4" onClick="addBt04(), writemsg('9')"></button>
                        <a onClick="addBt04()" ><img id="bt_42" src="./img/vermelho.png" /></a> `
    botoes[3]=0
  }else{
    caixa.innerHTML =`  <a onClick="addBt04()" ><img id="bt_41" src="./img/vermelho.png" /></a>
                        <button id="bt_4" onClick="addBt04(), writemsg('9')"></button>
                        <a onClick="addBt04()" ><img id="bt_42" src="./img/verde.png" /></a> `
    botoes[3]=1
  }
}

function addBt05() {
  const caixa = document.querySelector('#bt05')
  if (botoes[4]==1){
    caixa.innerHTML = ` <a onClick="addBt05()" ><img id="bt_51" src="./img/verde.png" /></a>
                        <button id="bt_5" onClick="addBt05(), writemsg('8')"></button>
                        <a onClick="addBt05()" ><img id="bt_52" src="./img/vermelho.png" /></a> `
    botoes[4]=0
  }else{
    caixa.innerHTML =`  <a onClick="addBt05()" ><img id="bt_51" src="./img/vermelho.png" /></a>
                        <button id="bt_5" onClick="addBt05(), writemsg('8')"></button>
                        <a onClick="addBt05()" ><img id="bt_52" src="./img/verde.png" /></a> `
    botoes[4]=1
  }
}

function addBt06() {
  const caixa = document.querySelector('#bt06')
  if (botoes[5]==1){
    caixa.innerHTML = ` <a onClick="addBt06()" ><img id="bt_61" src="./img/verde.png" /></a>
                        <button id="bt_6" onClick="addBt06(), writemsg('7')"></button>
                        <a onClick="addBt06()" ><img id="bt_62" src="./img/vermelho.png" /></a>`
    botoes[5]=0
  }else{
    caixa.innerHTML =`  <a onClick="addBt06()" ><img id="bt_61" src="./img/vermelho.png" /></a>
                        <button id="bt_6" onClick="addBt06(), writemsg('7')"></button>
                        <a onClick="addBt06()" ><img id="bt_62" src="./img/verde.png" /></a> `
    botoes[5]=1
  }
}

function addBt07() {
  const caixa = document.querySelector('#bt07')
  if (botoes[6]==1){
    caixa.innerHTML = ` <a onClick="addBt07()" ><img id="bt_71" src="./img/verde.png" /></a>
                        <button id="bt_7" onClick="addBt07(), writemsg('6')"></button>
                        <a onClick="addBt07()" ><img id="bt_72" src="./img/vermelho.png" /></a>`
    botoes[6]=0
  }else{
    caixa.innerHTML =`  <a onClick="addBt07()" ><img id="bt_71" src="./img/vermelho.png" /></a>
                        <button id="bt_7" onClick="addBt07(), writemsg('6')"></button>
                        <a onClick="addBt07()" ><img id="bt_72" src="./img/verde.png" /></a> `
    botoes[6]=1
  }
}

function addBt08() {
  const caixa = document.querySelector('#bt08')
  if (botoes[7]==1){
    caixa.innerHTML = ` <a onClick="addBt08()" ><img id="bt_81" src="./img/verde.png" /></a>
                        <button id="bt_8" onClick="addBt08(), writemsg('5')"></button>
                        <a onClick="addBt08()" ><img id="bt_82" src="./img/vermelho.png" /></a> `
    botoes[7]=0
  }else{
    caixa.innerHTML =`  <a onClick="addBt08()" ><img id="bt_81" src="./img/vermelho.png" /></a>
                        <button id="bt_8" onClick="addBt08(), writemsg('5')"></button>
                        <a onClick="addBt08()" ><img id="bt_82" src="./img/verde.png" /></a> `
    botoes[7]=1
  }
}

function addBt09() {
  const caixa = document.querySelector('#bt09')
  if (botoes[8]==1){
    caixa.innerHTML = ` <a onClick="addBt09()" ><img id="bt_91" src="./img/verde.png" /></a>
                        <button id="bt_9" onClick="addBt09(), writemsg('4')"></button>
                        <a onClick="addBt09()" ><img id="bt_92" src="./img/vermelho.png" /></a> `
    botoes[8]=0
  }else{
    caixa.innerHTML =`  <a onClick="addBt09()" ><img id="bt_91" src="./img/vermelho.png" /></a>
                        <button id="bt_9" onClick="addBt09(), writemsg('4')"></button>
                        <a onClick="addBt09()" ><img id="bt_92" src="./img/verde.png" /></a> `
    botoes[8]=1
  }
}

function addBt10() {
  const caixa = document.querySelector('#bt10')
  if (botoes[9]==1){
    caixa.innerHTML = ` <a onClick="addBt10()" ><img id="bt_101" src="./img/verde.png" /></a>
                        <button id="bt_10" onClick="addBt10(), writemsg('3')"></button>
                        <a onClick="addBt10()" ><img id="bt_102" src="./img/vermelho.png" /></a> `
    botoes[9]=0
  }else{
    caixa.innerHTML =`  <a onClick="addBt10()" ><img id="bt_101" src="./img/vermelho.png" /></a>
                        <button id="bt_10" onClick="addBt10(), writemsg('3')"></button>
                        <a onClick="addBt10()" ><img id="bt_102" src="./img/verde.png" /></a> `
    botoes[9]=1
  }
}

function addBt011() {
  const caixa = document.querySelector('#bt011')
  if (botoes[10]==1){
    caixa.innerHTML = ` <a onClick="addBt011()" ><img id="bt_111" src="./img/verde.png" /></a>
                        <button id="bt_011" onClick="addBt011(), writemsg('2')"></button>
                        <a onClick="addBt011()" ><img id="bt_112" src="./img/vermelho.png" /></a> `
    botoes[10]=0
  }else{
    caixa.innerHTML =`  <a onClick="addBt011()" ><img id="bt_111" src="./img/vermelho.png" /></a>
                        <button id="bt_011" onClick="addBt011(), writemsg('2')"></button>
                        <a onClick="addBt011()" ><img id="bt_112" src="./img/verde.png" /></a> `
    botoes[10]=1
  }
}

function addBt012() {
  const caixa = document.querySelector('#bt012')
  if (botoes[11]==1){
    caixa.innerHTML = ` <a onClick="addBt012()" ><img id="bt_121" src="./img/verde.png" /></a>
                        <button id="bt_012" onClick="addBt012(), writemsg('1')"></button>
                        <a onClick="addBt012()" ><img id="bt_122" src="./img/vermelho.png" /></a> `
    botoes[11]=0
  }else{
    caixa.innerHTML =`  <a onClick="addBt012()" ><img id="bt_121" src="./img/vermelho.png" /></a>
                        <button id="bt_012" onClick="addBt012(), writemsg('1')"></button>
                        <a onClick="addBt012()" ><img id="bt_122" src="./img/verde.png" /></a> `
    botoes[11]=1
  }
}