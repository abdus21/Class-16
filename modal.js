

const click = document.querySelector('#click');
const samad_modal2 = document.querySelector('.samad_modal2');
const m2_close = document.querySelector('.samad_modal2_header .close');




click.addEventListener('click', function(e){
    e.preventDefault();

    samad_modal2.classList.add('active2');
})
m2_close.addEventListener('click', function(){
    samad_modal2.classList.remove('active2');
})

samad_modal2.addEventListener('click', function(e){
    if(e.target == this){
        samad_modal2.classList.remove('active2');
    }
    
})



