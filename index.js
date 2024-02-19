let arr=[]
let result=[]
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
   
}
function compliteActivate(index){
    if(arr[index].complited){
        arr[index].complited=false
    }else{
        arr[index].complited=true
    }
    show(arr)
}

function removeTask(index){
    
    arr.splice(index,1)
    show(arr)
    
}
function clearComplited(){
    for(let i=0;i<arr.length;i++){
        if(arr[i].complited==true){
            arr.splice(i,1)
        }
        i--
    }
    show(arr)
}
function showAll(){
   show(arr)
}
function showActive(){
    const aktivler=arr.filter(arr=>!arr.complited)
   console.log(aktivler)
   item.innerHTML=`${aktivler.length} items left!`
    show(aktivler)
}
function showComplited(){
    const bitmish=arr.filter(arr=>arr.complited)
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
    if(arr.length!=0){
        divv.style.display='flex'
    }else{
        divv.style.display='none'
    }
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
    showActive()
})
document.querySelector('#completed').addEventListener('click',function(e){
    e.preventDefault()
    showComplited()
})
document.querySelector('#clearCompleted').addEventListener('click',function(e){
    e.preventDefault()
    clearComplited()
})
document.querySelector('#bottom').addEventListener('click',function(e){
    e.preventDefault()
    for(let i in arr){
        if(arr[i].complited){
            arr[i].complited=false
        }else{
            arr[i].complited=true
        }
    }
    show(arr)
})

function saxla(){
        localStorage.setItem('netice',JSON.stringify(arr))
}
// function davam(){
//     let t=localStorage.getItem('netice')
//     if(!t){
//         return
//     }
//     t=JSON.parse(t)
//     result.push(t)
//     console.log(t)
//     show(result)
// }
// davam()