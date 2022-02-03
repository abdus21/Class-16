

const apply = document.querySelector('#apply');
const samad_modal = document.querySelector('.samad-modal');
const close = document.querySelector('.close');
const modal_contant = document.querySelector('.modal_contant');


apply.addEventListener('click', function(e){
    e.preventDefault();
    samad_modal.classList.add('active');
});

close.addEventListener('click', function(){
    samad_modal.classList.remove('active')
})

samad_modal.addEventListener('click', function(e){

    if(e.target == this){

        samad_modal.classList.remove('active')
    }
})