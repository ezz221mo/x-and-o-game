let title = document.querySelector('.title');
let turn = 'x';
let squeres = [];

function end(num1,num2,num3)
{
    title.innerHTML =`${squeres[num1]} winner`;
    document.getElementById('item'+num1).style.backgroundColor ='#000';
    document.getElementById('item'+num2).style.backgroundColor ='#000';
    document.getElementById('item'+num3).style.backgroundColor ='#000';
    
    setInterval(function(){title.innerHTML += '.'},1000);

    setTimeout(function(){location.reload()},4000)


}

function winner()
{
    for(let i =1 ; i<10 ; i++){
      squeres[i] = document.getElementById('item' + i).innerHTML;
    }
    if(squeres[1] == squeres[2] && squeres[2] == squeres[3] && squeres[1]!='')
    {
        end(1,2,3);
    }else   if(squeres[4] == squeres[5] && squeres[5] == squeres[6] && squeres[5]!='')
    {
        end(4,5,6);
    } else   if(squeres[7] == squeres[8] && squeres[8] == squeres[9] && squeres[7]!='')
    {
        end(7,8,9);
    }else   if(squeres[1] == squeres[4] && squeres[4] == squeres[7] && squeres[1]!='')
    {
        end(1,4,7);
    }else  if(squeres[2] == squeres[5] && squeres[5] == squeres[8] && squeres[2]!='')
    {
        end(2,5,8);
    }else  if(squeres[3] == squeres[6] && squeres[6] == squeres[9] && squeres[3]!='')
    {
        end(3,6,9);
    }else  if(squeres[3] == squeres[5] && squeres[5] == squeres[7] && squeres[5]!='')
    {
        end(3,5,7);
    }else  if(squeres[1] == squeres[5] && squeres[5] == squeres[9] && squeres[5]!='')
    {
        end(1,5,9);
    }
}
function game(id)
{
    let elment = document.getElementById(id);
    if(turn === 'x' && elment.innerHTML =='')
    {
        elment.innerHTML='x';
        turn = 'o';
        title.innerHTML = 'o';
    }
    else if (turn === 'o'&& elment.innerHTML ==''){
        elment.innerHTML = 'o';
        turn = 'x';
        title.innerHTML = 'x';
    }
    winner();
}