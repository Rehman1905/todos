const input=document.querySelector('#input')
const a=document.querySelector('#a')
let count=0
a.addEventListener('click',function(e){
        count++
        document.querySelector('#item').innerHTML=`${count} items left!`
    document.querySelector('.divv').style.display='flex'
    e.preventDefault()
    const btn=document.createElement('button')
    const p=document.createElement('p')
    const div=document.createElement('div')
    const newDiv=document.querySelector('#newDiv')
    const x=document.querySelector('button')
    x.classList.add('delete')
    x.innerHTML='X'
    newDiv.style.display='block'
    div.append(btn,p)
    newDiv.append(div)
    div.classList.add('createDiv')
    btn.id='btn'
    p.innerHTML=input.value
    input.value=''
    btn.addEventListener('click',function(e){
        btn.innerHTML='✓'
         count--
         document.querySelector('#item').innerHTML=`${count} items left!`
         e.preventDefault()
        p.classList.add('metin')
        var element=document.querySelectorAll('.completed')
        element.forEach(function(e){
            completedDiV.append(e)
        })
    })
    all.addEventListener('click',function(e){
        newDiv.append(div)
        if(btn.classList.contains('cleared')){
            div.remove()
        }
        activeDiv.style.display='none'
        newDiv.style.display='block'
        completedDiv.style.display='none'
    })
    active.addEventListener('click',function(e){
        e.preventDefault()
        activeDiv.append(div)
        if(p.classList.contains('metin')){
            div.remove()
        }
        activeDiv.style.display='block'
        newDiv.style.display='none'
        completedDiv.style.display='none'
    })
    completed.addEventListener('click',function(e){
        e.preventDefault()
        if(!p.classList.contains('metin')){
            div.remove()
        }else{
            completedDiV.append(div)
        }
        activeDiv.style.display='none'
        newDiv.style.display='none'
        completedDiv.style.display='block'
    })
    clearCompleted.addEventListener('click',function(e){
        if(newDiv.style.display=='block'){
            newDiv.append(div)
        if(p.classList.contains('metin')){
            btn.classList.add('cleared')
            div.remove()
        }
        }else{
            alert("Clear completed button is only for all")
        }
        
    })
})

const all=document.querySelector('#all')
const active=document.querySelector('#active')
const completed=document.querySelector('#completed')
const clearCompleted=document.querySelector('#clearCompleted')
const activeDiv=document.querySelector('#activeDiv')
const completedDiV=document.querySelector('#completedDiv')