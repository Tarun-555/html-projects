var initBlocks=[];

var bombs=[];

var score;

//create blocks
function makeblock(rows,columns)
{
  let pos=0;
    for(var i=0;i<rows;i++)
    {   
        let row=document.createElement("div");
        row.className="row";
        for(var j=0;j<columns;j++)
        {
            let column=document.createElement("div");
            column.className="column";
            column.setAttribute("id",pos);
            pos++;
            column.onclick=()=>{updateScore(column.id)};
            row.append(column);
        }
        document.getElementById('container').appendChild(row);
    }
}

//initial state of game
function start()
{
  score=0;
  initBlocks=[];
  bombs=[];
  document.getElementById("container").innerHTML="";
  document.getElementById("score").innerHTML="";
  for(let i=0;i<81;i++)
  {
    initBlocks.push(0);
  }
  makeblock(9,9);
  bombs=bombGenerator();
}

start();

//bombs generation
function bombGenerator()
{
   let bombArr=[];
   for(let i=0;i<10;i++)
   {
       bombArr.push(Math.floor(Math.random()*81));
   }
   bombArr.forEach(index=>{initBlocks[index]=-1});
   return bombArr;
}


//update cell
function updateScore(id)
{
  if(initBlocks[id]==1)
  {
    return;
  }
  else if(initBlocks[id]==0)
  {
   document.getElementById(id).style.background="green";
   initBlocks[id]=1;
   score+=1;
   document.getElementById("score").innerHTML=score;
  }
  else
  {
    //  let bom=bombGenerator();
     bombs.forEach(ele=>
     {document.getElementById(ele).style.background="red"});
     let flag= confirm("Game Over!!! Your score is : "+score);
     if(flag)
     {
     start();
     }else
     return;
  }
}

// console.log(bombs+"hello"); 