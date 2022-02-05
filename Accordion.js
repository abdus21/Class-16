
//FAQ with  Accordion
const accordion_header = document.querySelectorAll('.accordion-header');

const accordion_body = document.querySelectorAll('.accordion-body');

const samad_accordion = document.querySelector('.samad-accordion');

accordion_header.forEach(item =>{
    item.addEventListener('click', function(e){


        accordion_header.forEach(active =>{
            if( active != this ){
                active.classList.remove('active-accordion');
                active.nextElementSibling.style.height ='0px';
            }

        })

        item.classList.toggle('active-accordion');
        

        if(item.classList.contains('active-accordion')){
            item.nextElementSibling.style.height = item.nextElementSibling.scrollHeight + 'px'
        }else{
            item.nextElementSibling.style.height ='0px'
        }
    })
})


