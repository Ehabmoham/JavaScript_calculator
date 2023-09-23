let allNumbers = document.querySelectorAll('[data-number]');
let allOpretors = document.querySelectorAll('[data-opertor]');
let equalBtn = document.querySelector('[data-equal]');
let result = document.querySelector('.result');
let arrows = document.querySelectorAll('[data-arrow]');
let persent  = document.querySelector('.persent');
let del =  document.querySelector('.delete');


allNumbers.forEach((num)=>{
    num.addEventListener('click' , (n)=>{
        result.innerHTML += `${n.target.dataset.number}`;
       
    });
});

allOpretors.forEach((opr)=>{
     opr.addEventListener('click' , (o)=>{
        result.innerHTML += ` ${o.target.dataset.opertor} `;
        result.style.color = '#000';
        result.style.fontWeight = 'normal';
    });
});

arrows.forEach((arrow) =>{

    arrow.addEventListener('click'  ,(ar) =>{
        result.innerHTML +=  `${ar.target.dataset.arrow}`;
    });
});

persent.addEventListener('click' ,  (p)=>{
    result.innerHTML +=  `${p.target.dataset.persent}`;
})

del.addEventListener('click' ,  (d)=>{
    result.innerHTML = ``;
});


equalBtn.addEventListener('click' , function(){
    let finalResult = result.innerHTML;
    result.innerHTML = eval(finalResult);
    result.style.color = '#2196F3';
    result.style.fontWeight = 'bold';
    
});