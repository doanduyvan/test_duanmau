function Dom(element){
    return document.querySelector(element);
}
function DomALL(element) {
    return document.querySelectorAll(element);
}


// js code
document.addEventListener('DOMContentLoaded',()=>{
    
// show-hide login logout    
const icon_user = Dom('#icon_user');
const sub_user = Dom('#sub_user'); 
icon_user.addEventListener('click',()=>{
    sub_user.classList.toggle('check');
});
document.addEventListener('click',function(e){
    const element = e.target;
    if(!icon_user.contains(element) && !sub_user.contains(element)){
    sub_user.classList.remove('check');
    }
});

// animation show-hide menu
var positon_old = 0;
const menu = Dom('#an_menu');
window.addEventListener('scroll',(e)=>{
    const position_now = this.scrollY;
    if(position_now >= 100){
        menu.classList.add('fixed');
        if(position_now > positon_old){
        menu.style.top = '-130px';
        }else{
        menu.style.top = '0px';
        }
    }else{
        menu.classList.remove('fixed');
    }
    positon_old = position_now;
});


});   



// function
function tonggle_check(){
        const check_array = DomALL('.check');
        let check = check_array[0].checked === false ? false : true ;
        check_array.forEach(item=>{
            if(!check){
                item.checked = true;
            }else{
                item.checked = false;
            }
        })
}