const btn = document.querySelector('.btn');
const yes = document.querySelector('#yesButton');
const no = document.querySelector('#noButton');
yes.addEventListener('click',()=>{
    const n = document.querySelector('#noButton');
    if(yes.innerHTML === 'YES'){
        // yes.innerHTML = 'NO';
        yes.style.backgroundColor = "green";
        // n.innerHTML = 'YES';
        n.style.backgroundColor = "transparent";

    }

    else{
        yes.innerHTML = 'YES';
        yes.style.backgroundColor = "green";
        n.innerHTML = 'NO';
        n.style.backgroundColor = "transparent";

    }

});

no.addEventListener('click',()=>{
    const y = document.querySelector('#yesButton');
    if(no.innerHTML === 'NO'){
        no.innerHTML = 'YES';
        no.style.backgroundColor = "green";
        y.innerHTML = 'NO';
        y.style.backgroundColor = "transparent";
    }

    else{
        // no.innerHTML = 'NO';
        no.style.backgroundColor = "green";
        // y.innerHTML = 'YES';
        // y.style.backgroundColor = "green";
    }

});




