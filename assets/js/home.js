function Dom(element){
    return document.querySelector(element);
}
function DomALL(element) {
    return document.querySelectorAll(element);
}
// same jquery


// banner_slide
var time_out_slide = '';
var slide_act = 0;
const dots = DomALL(".slide_banner .dots .dot");
dots.forEach((value,index)=>{
    value.addEventListener('click',()=>{
        slide_act = index;
        change_slide(index);
        clearInterval(time_out_slide);
        auto_slide();
    });
});

auto_slide()
function auto_slide(){
    time_out_slide = setInterval(()=>{
        ++slide_act;
        if(slide_act === dots.length){slide_act = 0}
        change_slide(slide_act);
    },4000);
}

function change_slide(index){
    const imgs = DomALL(".slide_banner .item");
    const img_old = Dom('.slide_banner .item.active_banner');
    img_old.classList.remove('active_banner');
    imgs[index].classList.add('active_banner');
    const dot_old = Dom('.slide_banner .dots .dot.dot_act');
    dot_old.classList.remove('dot_act');
    dots[index].classList.add('dot_act');
}


