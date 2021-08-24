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


//○×を記録する、フラグを逆にする
function process (tate,yoko,basyo){
    if(fil===true){
        plaice[tate][yoko]=1;
        fil=false;
        maruInsert(basyo);
    }else{
        plaice[tate][yoko]=2;
        fil=true;
        batuInsert(basyo);
    }
    turnChange();
}

//○を挿入する
function maruInsert(basyo){
    switch (basyo){
        case 1:
            marubatu1.src='img/maru.png';
            break;
        case 2:
            marubatu2.src='img/maru.png';
            break;
        case 3:
            marubatu3.src='img/maru.png';
            break;
        case 4:
            marubatu4.src='img/maru.png';
            break;
        case 5:
            marubatu5.src='img/maru.png';
            break;
        case 6:
            marubatu6.src='img/maru.png';
            break;
        case 7:
            marubatu7.src='img/maru.png';
            break;
        case 8:
            marubatu8.src='img/maru.png';
            break;
        case 9:
            marubatu9.src='img/maru.png';
            break;
    }
    winORlose();
}


//×を挿入する
function batuInsert(basyo){
    switch (basyo){
        case 1:
            marubatu1.src='img/batu.png';
            break;
        case 2:
            marubatu2.src='img/batu.png';
            break;
        case 3:
            marubatu3.src='img/batu.png';
            break;
        case 4:
            marubatu4.src='img/batu.png';
            break;
        case 5:
            marubatu5.src='img/batu.png';
            break;
        case 6:
            marubatu6.src='img/batu.png';
            break;
        case 7:
            marubatu7.src='img/batu.png';
            break;
        case 8:
            marubatu8.src='img/batu.png';
            break;
        case 9:
            marubatu9.src='img/batu.png';
            break;
    }
    winORlose();
}


//ターン変更処理
function turnChange(){
    if (fil===true){
        turnMessage.innerText = '○のターンです';
    }else{
        turnMessage.innerText = '×のターンです';
    }
}

//勝利判定
function winORlose(){
    //横上列
    let yoko1=[plaice[0][0],plaice[0][1],plaice[0][2]];
    if (yoko1[0]===1 && yoko1[1]===1 && yoko1[2]===1){
        alert(`○の勝利です！`);
    }else if (yoko1[0]===2 && yoko1[1]===2 && yoko1[2]===2){
        alert('×の勝利です');
    }
    //横中列
    let yoko2=[plaice[1][0],plaice[1][1],plaice[1][2]];
    if (yoko2[0]===1 && yoko2[1]===1 && yoko2[2]===1){
        alert(`○の勝利です！`);
    }else if (yoko2[0]===2 && yoko2[1]===2 && yoko2[2]===2){
        alert('×の勝利です');
    }
    //横下列
    let yoko3=[plaice[2][0],plaice[2][1],plaice[2][2]];
    if (yoko3[0]===1 && yoko3[1]===1 && yoko3[2]===1){
        alert(`○の勝利です！`);
    }else if (yoko3[0]===2 && yoko3[1]===2 && yoko3[2]===2){
        alert('×の勝利です');
    }
    //縦左列
    let tate1=[plaice[0][0],plaice[1][0],plaice[2][0]];
    if (tate1[0]===1 && tate1[1]===1 && tate1[2]===1){
        alert(`○の勝利です！`);
    }else if (tate1[0]===2 && tate1[1]===2 && tate1[2]===2){
        alert('×の勝利です');
    }
    //縦中列
    let tate2=[plaice[0][1],plaice[1][1],plaice[2][1]];
    if (tate2[0]===1 && tate2[1]===1 && tate2[2]===1){
        alert(`○の勝利です！`);
    }else if (tate2[0]===2 && tate2[1]===2 && tate2[2]===2){
        alert('×の勝利です');
    }
    //縦右列
    let tate3=[plaice[0][2],plaice[1][2],plaice[2][2]];
    if (tate3[0]===1 && tate3[1]===1 && tate3[2]===1){
        alert(`○の勝利です！`);
    }else if (tate3[0]===2 && tate3[1]===2 && tate3[2]===2){
        alert('×の勝利です');
    }
    //左上から右下にかけての斜め
    let naname1=[plaice[0][0],plaice[1][1],plaice[2][2]];
    if (naname1[0]===1 && naname1[1]===1 && naname1[2]===1){
        alert(`○の勝利です！`);
    }else if (naname1[0]===2 && naname1[1]===2 && naname1[2]===2){
        alert('×の勝利です');
    }
    //右上から左下にかけての斜め
    let naname2=[plaice[0][2],plaice[1][1],plaice[2][0]];
    if (naname2[0]===1 && naname2[1]===1 && naname2[2]===1){
        alert(`○の勝利です！`);
    }else if (naname2[0]===2 && naname2[1]===2 && naname2[2]===2){
        alert('×の勝利です');
    }
}

//既に埋まっているマスをクリックしたエラー
function gameError(){
    alert('既に選択されたマスです');
}


