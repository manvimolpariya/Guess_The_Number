let a=Math.floor(Math.random()*100)+1;
let popup=document.getElementById('popup');
let count=0;
let score=0;

function func(){
   
    let b=document.getElementById('input-number').value;
   
     if(a==b && count==0){
        document.getElementById("score").innerHTML =`Score : 100`; 
        count++;
        document.getElementById("caption").innerHTML =`Total number of Attempts : ${count}`;
        document.getElementById("info-number").innerHTML="Congrtulations you have guessed correctly!!" ;
       
      }
    else if(a==b){
        document.getElementById("info-number").innerHTML="Congrtulations you have guessed correctly!!" ;
        count++;
        document.getElementById("caption").innerHTML =`Total number of Attempts : ${count}`;
        document.getElementById("score").innerHTML =`Score : ${ 100-(count*10)}`;
        
  }
   else if(a<b){ count++;
    document.getElementById("info-number").innerHTML= `your number ${b} is greater number `;
    document.getElementById("caption").innerHTML =`Total number of Attempts : ${count}`;
    document.getElementById("score").innerHTML =`Score : ${ 100-(count*10)}`;
   
   }
   
  else{ count++;
    document.getElementById("info-number").innerHTML=`your number ${b} is smaller number`; 
    document.getElementById("caption").innerHTML =`Total number of Attempts : ${count}`;
    document.getElementById("score").innerHTML =`Score : ${ 100-(count*10)}`;
   
  }
  if(count>10){
   gameFinish();
  }
  if((a==b)&&(count<=10)){
  document.getElementById('btn1').disabled=true;
  }
  if(b>100 || b<0){
    document.getElementById("info-number").innerHTML=`number must be between 1 - 100`;
    document.getElementById("caption").innerHTML =`Total number of Attempts :`;
    document.getElementById("score").innerHTML =`Score :`;
    a=Math.floor(Math.random()*100)+1;
    score=0;
    count=0;
    document.getElementById('input-number').value=``;
    document.getElementById('btn1').disabled=false;
  }
 if((b=='')||(b=='a')||(b=='A')||(b=='B')||(b=='b')
 ||(b=='c')||(b=='C')||(b=='d')||(b=='D')
 ||(b=='e')||(b=='E')||(b=='f')||(b=='F')
 ||(b=='g')||(b=='G')||(b=='h')||(b=='H')
 ||(b=='i')||(b=='I')||(b=='j')||(b=='J')
 ||(b=='K')||(b=='k')||(b=='L')||(b=='l')
 ||(b=='M')||(b=='m')||(b=='N')||(b=='n')
 ||(b=='O')||(b=='o')||(b=='P')||(b=='p')
 ||(b=='Q')||(b=='q')||(b=='R')||(b=='s')
 ||(b=='S')||(b=='T')||(b=='t')||(b=='u')||(b=='U')||(b=='v')||(b=='V')||(b=='W')||(b=='w')||
 (b=='r')||(b=='X')||(b=='x')||(b=='Y')||(b=='y')||(b=='z')||(b=='Z')){
    clear1();
    document.getElementById("info-number").innerHTML= `number must be digit between 1 -100 `;
 }
}

