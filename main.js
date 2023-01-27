let comp = 0;
function slide(){
    if (comp==3){
        comp=0;
    }
    const imgParent = document.querySelector('.imgParent');
    imgParent.style.transform= 'translateX('+(-1*1280)*comp+'px)';
    comp+=1
}
slide();
setInterval(slide,3000)