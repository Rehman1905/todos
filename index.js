let arr=davam()
const newDiv=document.querySelector('#newDiv')
const input=document.querySelector('#input')
const item=document.querySelector('#item')
function createNewTask(e){
    let task={
        text:e,
        complited:false
    }
    arr.push(task)
    show(arr)
   saxla()
}
function compliteActivate(index){
    if(arr[index].complited){
        arr[index].complited=false
    }else{
        arr[index].complited=true
    }
    show(arr)
    saxla()
}

function removeTask(index){
    
    arr.splice(index,1)
    show(arr)
    saxla()
    
}
function clearComplited(){
    for(let i=0;i<arr.length;i++){
        if(arr[i].complited==true){
            arr.splice(i,1)
        }
        
    }
    show(arr)
    saxla()
}
function showAll(){
   show(arr)
}
function showActive(){
    const aktivler=arr.filter(arr=>!arr.complited)
   console.log(aktivler)
   item.innerHTML=`${aktivler.length} items left!`
   divv.style.display='flex'
    show(aktivler)
}
function showComplited(){
    const bitmish=arr.filter(arr=>arr.complited)
    divv.style.display='flex'
    show(bitmish)
}
function show(arr){
    newDiv.innerHTML=''
    console.log(arr)
    for(let i in arr){
        console.log(arr[i])
        const btn=document.createElement('button')
        const div=document.createElement('div')
        const clear=document.createElement('button')
        const allDiv=document.createElement('div')
        allDiv.id='alldiv'
        clear.innerHTML='X'
        clear.id='clear'
        div.id='text'
        btn.id='btn'
        div.innerHTML=arr[i].text
        if(arr[i].complited){
            btn.innerHTML='✓'
            btn.style.color='green'
        }else{
            btn.innerHTML=''
        }
        if(arr[i].complited){
            div.style.textDecoration='line-through'
        }else{
            div.style.textDecoration='none'
        }
        btn.addEventListener('click',function(e){
            e.preventDefault()
            compliteActivate(i)
        })
        clear.addEventListener('click',function(e){
            e.preventDefault()
           
            removeTask(i)
        })
        allDiv.append(btn,div,clear)
        newDiv.append(allDiv)
        allDiv.addEventListener('mouseover', function () {
            clear.style.display = 'block'
        })
        allDiv.addEventListener('mouseout', function () {
            clear.style.display = 'none'
        })
    }
    const aktivler=arr.filter(arr=>!arr.complited)
    item.innerHTML=`${aktivler.length} items left!`
    console.log(arr.length)
    if(arr.length!=0 || divv.classList.contains('var')){
        divv.style.display='flex'
    }else{
        divv.style.display='none'
    }
    divv.classList.remove('var')
}
const divv=document.querySelector('.divv')
function press(e){
    if(e.keyCode==13){
        e.preventDefault()
        if(!input.value.trim()){
            alert('task yaz')
        }else{
            createNewTask(input.value)
            input.value=''
        }
    }
}
input.addEventListener('keypress', press)
document.querySelector('#all').addEventListener('click',function(e){
    e.preventDefault()
    showAll()
})
document.querySelector('#active').addEventListener('click',function(e){
    e.preventDefault()
    divv.classList.add('var')
    showActive()
})
document.querySelector('#completed').addEventListener('click',function(e){
    e.preventDefault()
    divv.classList.add('var')
    showComplited()
})
document.querySelector('#clearCompleted').addEventListener('click',function(e){
    e.preventDefault()
    clearComplited()
})
document.querySelector('#bottom').addEventListener('click',function(e){
    e.preventDefault()
    let a=[]
    for(let i in arr){
        if(!arr[i].complited){
            a.push('0')
        }
    }
    if(a.length!=0){
        for(let j in arr){
            arr[j].complited=true
        }
    }else{
        for(let j in arr){
            arr[j].complited=false
        } 
    }
    saxla()
    show(arr)
})

function saxla(){
        localStorage.setItem('task',JSON.stringify(arr))
}

function davam(){
    let t=localStorage.getItem('task')
    if(t){
        return JSON.parse(t)
    }else{
        return []
    }
}
show(arr)