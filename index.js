const input = document.querySelector('#input');
const all = document.querySelector('#all');
const active = document.querySelector('#active');
const completed = document.querySelector('#completed');
const clearCompleted = document.querySelector('#clearCompleted');
const activeDiv = document.querySelector('#activeDiv');
const completedDiV = document.querySelector('#completedDiv');
let count = 0;
let arr = [];

function press(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        createNewItem();
    }
}

function createNewItem() {
    count++;
    document.querySelector('#item').innerHTML = `${count} items left!`;
    document.querySelector('.divv').style.display = 'flex';

    const btn = document.createElement('button');
    const p = document.createElement('p');
    const div = document.createElement('div');
    const newDiv = document.querySelector('#newDiv');
    const clear=document.createElement('button')
    clear.textContent='X'
    clear.classList.add('clear')
    p.classList.add('p')
    newDiv.style.display = 'block';
    div.append(btn,p,clear);
    newDiv.append(div);
    div.classList.add('createDiv');
    btn.id = 'btn';
    p.innerHTML = input.value;
    arr.push(input.value);
    localStorage.setItem('netice', JSON.stringify(arr)); 
    input.value = '';
    const bottom = document.querySelector('#bottom')
    btn.addEventListener('click', btnClick);
    all.addEventListener('click', allClick);
    active.addEventListener('click', activeClick);
    completed.addEventListener('click',completedClick);
    clearCompleted.addEventListener('click', clearClick);
    bottom.addEventListener('click', allBtnSech)
    clear.addEventListener('click',clearItem)
    function btnClick(e) {
        console.log('a')
        e.preventDefault();
        // const btn = e.target;
        btn.innerHTML = '✓';
        count--;
        document.querySelector('#item').innerHTML = `${count} items left!`;
        p.classList.add('metin');
        const element = document.querySelectorAll('.completed');
        element.forEach(function (e) {
            completedDiV.append(e);
        });
    }
    div.addEventListener('mouseover',function(){
        clear.style.display='block'
    })
    div.addEventListener('mouseout',function(){
        clear.style.display='none'
    })
    function allClick(e) {
        newDiv.append(div);
        if (btn.classList.contains('cleared')) {
            div.remove();
        }
        activeDiv.style.display = 'none';
        newDiv.style.display = 'block';
        completedDiv.style.display = 'none';
    }

    function activeClick(e) {
        e.preventDefault();
        activeDiv.append(div);
        if (p.classList.contains('metin')) {
            div.remove();
        }
        if(btn.classList.contains('allWhere')){
            div.remove(active)
        }
        activeDiv.style.display = 'block';
        newDiv.style.display = 'none';
        completedDiv.style.display = 'none';
    }

    function completedClick(e) {
        e.preventDefault();
        if (!p.classList.contains('metin')) {
            div.remove();
        } else {
            completedDiV.append(div);
        }
        if(btn.classList.contains('allWhere')){
            div.remove(active)
        }
        activeDiv.style.display = 'none';
        newDiv.style.display = 'none';
        completedDiv.style.display = 'block';
    }

    function clearClick(e) {
        if (newDiv.style.display == 'block') {
            newDiv.append(div);
            if (p.classList.contains('metin')) {
                btn.classList.add('cleared');
                div.remove();
            }
        } else {
            alert("Clear completed button is only for all");
        }
    }
    function allBtnSech(e) {
        e.preventDefault()
        btn.innerHTML = '✓';
        count--;
        if(count<0){
            count=0
        }
        document.querySelector('#item').innerHTML = `${count} items left!`;
        p.classList.add('metin');
        const element = document.querySelectorAll('.completed');
        element.forEach(function (e) {
            completedDiV.append(e);
        });
    }
    function clearItem(e){
        count--
        document.querySelector('#item').innerHTML = `${count} items left!`;
        btn.classList.add('allWhere')
        btn.classList.add('cleared')
        div.remove()
    }
}
input.addEventListener('keypress', press);
// function continueFromLocalStorage() {
//     let netice = localStorage.getItem('netice');
//     if (!netice) {
//         return;
//     }
//     netice = JSON.parse(netice);
//     for (let i of netice) {
//         createNewItem(i);
//     }
// }
// continueFromLocalStorage();
