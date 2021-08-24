let plaice =[[0,0,0],[0,0,0],[0,0,0]];
let fil = true;
let num = 0;

const marubatu1 = document.getElementById('img1');
const marubatu2 = document.getElementById('img2');
const marubatu3 = document.getElementById('img3');
const marubatu4 = document.getElementById('img4');
const marubatu5 = document.getElementById('img5');
const marubatu6 = document.getElementById('img6');
const marubatu7 = document.getElementById('img7');
const marubatu8 = document.getElementById('img8');
const marubatu9 = document.getElementById('img9');

const turnMessage = document.getElementById('turn');

marubatu1.addEventListener('click',areaCheck1);
marubatu2.addEventListener('click',areaCheck2);
marubatu3.addEventListener('click',areaCheck3);
marubatu4.addEventListener('click',areaCheck4);
marubatu5.addEventListener('click',areaCheck5);
marubatu6.addEventListener('click',areaCheck6);
marubatu7.addEventListener('click',areaCheck7);
marubatu8.addEventListener('click',areaCheck8);
marubatu9.addEventListener('click',areaCheck9);

//空白か判定
function areaCheck1(){
    num = plaice[0][0];
    if(num===0){
        process(0,0,1);
    }else{
        gameError();
    }
}
function areaCheck2(){
    num = plaice[0][1];
    if(num===0){
        process(0,1,2);
    }else{
        gameError();
    }
}
function areaCheck3(){
    num = plaice[0][2];
    if(num===0){
        process(0,2,3);
    }else{
        gameError();
    }
}
function areaCheck4(){
    num = plaice[1][0];
    if(num===0){
        process(1,0,4);
    }else{
        gameError();
    }
}
function areaCheck5(){
    num = plaice[1][1];
    if(num===0){
        process(1,1,5);
    }else{
        gameError();
    }
}
function areaCheck6(){
    num = plaice[1][2];
    if(num===0){
        process(1,2,6);
    }else{
        gameError();
    }
}
function areaCheck7(){
    num = plaice[2][0];
    if(num===0){
        process(2,0,7);
    }else{
        gameError();
    }
}
function areaCheck8(){
    num = plaice[2][1];
    if(num===0){
        process(2,1,8);
    }else{
        gameError();
    }
}
function areaCheck9(){
    num = plaice[2][2];
    if(num===0){
        process(2,2,9);
    }else{
        gameError();
    }
}


//○×を入れる、フラグを逆にする
function process (tate,yoko,basyo){
    if(fil===true){
        maruInsert(basyo);
        plaice[tate][yoko]=1;
        fil=false;
    }else{
        batuInsert(basyo);
        plaice[tate][yoko]=2;
        fil=true;
    }
    turnChange();
}

//○を挿入する
function maruInsert(basyo){

}


//×を挿入する
function batuInsert(basyo){
    switch (basyo){
        case 1:

            break;
        case 2:

            break;
        case 3:

            break;
        case 4:

            break;
    }
}


//ターン変更処理
function turnChange(){
    if (fil===true){
        turnMessage.innerText = '○のターンです';
    }else{
        turnMessage.innerText = '×のターンです';
    }
}

//既に埋まっているマスをクリックしたエラー
function gameError(){
    alert('既に選択されたマスです');
}


