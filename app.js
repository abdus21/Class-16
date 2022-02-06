
//Banner Design with  Modal & custom alert

const apply = document.querySelector('#apply');
const samad_modal = document.querySelector('.custom_alert');
const mclose = document.querySelector('.custom_alert-header .close');
const aclose = document.querySelector('.alert-header .close');
const modal_contant = document.querySelector('.custom_alert_contant');
const samad_alert = document.querySelector('.samad-alert');
const Editing = document.querySelector('.samad-alert .samad-alert-content .btns a:nth-child(1)');
const discard = document.querySelector('.samad-alert .samad-alert-content .btns a:nth-child(2)');

apply.addEventListener('click', function(e){
    e.preventDefault();
    samad_modal.classList.add('active');
});

mclose.addEventListener('click', function(){
    //samad_modal.classList.remove('active')
    samad_alert.style.display = 'flex'
})

samad_modal.addEventListener('click', function(e){

    if(e.target == this){

        //samad_modal.classList.remove('active')
        samad_alert.style.display = 'flex'
    }
})

samad_alert.addEventListener('click', function(e){
    if(e.target == this){
        samad_alert.style.display = 'none'
    }
 
})

aclose.addEventListener('click', function(){
    samad_alert.style.display = 'none'
});
Editing.addEventListener('click', function(){
    samad_alert.style.display = 'none'
});

discard.addEventListener('click', function(){
    samad_alert.style.display = 'none'
    samad_modal.classList.remove('active')
});


