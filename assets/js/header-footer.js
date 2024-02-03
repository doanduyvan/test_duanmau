function Dom(element){
    return document.querySelector(element);
}
function DomALL(element) {
    return document.querySelectorAll(element);
}

document.addEventListener('DOMContentLoaded',()=>{
    
const icon_user = Dom('#icon_user');
const sub_user = Dom('#sub_user'); 

icon_user.addEventListener('click',()=>{
    sub_user.classList.toggle('check');
});
document.addEventListener('click',function(e){
    const element = e.target;
    if(!icon_user.contains(element) && !sub_user.contains(element)){
        console.log('xóa');
    sub_user.classList.remove('check');
    }
});


});   


function tonggle_check(){
        const check_array = DomALL('.check');
        let check = check_array[0].checked === false ? false : true ;
        console.log('check = ', check);
        check_array.forEach(item=>{
            if(!check){
                item.checked = true;
            }else{
                item.checked = false;
            }
        })
}