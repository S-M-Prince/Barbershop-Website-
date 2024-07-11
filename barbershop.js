const barlogo=document.querySelector('.barlogo');
const menulist=document.querySelector('.ul ul');
function showmenu(){   
     
    if(menulist.style.display==='none'){
        menulist.style.display='block';
    }
    else{
        menulist.style.display='none';
    }

}


function submit(){

    const username =document.getElementById('name').value;
    const number =document.getElementById('number').value;
    const time =document.getElementById('date').value;
    const service =document.getElementById('service').value;
    
        localStorage.setItem('username',username)
        localStorage.setItem('phonenumber',number)
        localStorage.setItem('time',time)
        localStorage.setItem('service',service)

        const button=document.querySelector('#submit')
        const table=document.querySelector('.table')

       const slot =document.querySelector('.slot')
       const todolist=[]
       const id =todolist.length+1

    const tableData={
        id:id,
        username:username,
        time:time
    }

        todolist.push(tableData);
        console.log(todolist);
        addtodo(tableData);
        tableData.value=''
        button.disabled=true;
        button.innerText="button disabled";
   
    
    function addtodo(value){
    const para=document.createElement('td');
    para.innerText=value.id;
    table.appendChild(para)
    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
        remove(value)
    })
    para.addEventListener('dblclick',()=>{
        table.removeChild(para)
        remove(value)
    })

    const para1=document.createElement('td');
    para1.innerText=value.username;
    table.appendChild(para1)
    para1.addEventListener('click',()=>{
        para1.style.textDecoration='line-through'
        remove(value)
    })
    para1.addEventListener('dblclick',()=>{
        table.removeChild(para1)
        remove(value)
    })

    const para2=document.createElement('td');
    para2.innerText=value.time;
    table.appendChild(para2)
    para2.addEventListener('click',()=>{
        para2.style.textDecoration='line-through'
        remove(value)
    })
    para2.addEventListener('dblclick',()=>{
        table.removeChild(para2)
        remove(value)
    })

     document.getElementById('name').value='';
    document.getElementById('number').value="";
    document.getElementById('date').value='';
    document.getElementById('service').value='';

    slot.style.display='block'

    }
      function remove(value){
       let index=todolist.indexOf(value)
       if(index>-1)
        todolist.splice(index,1)
    }
}

