let nextDom = document.getElementById('next');
let prevDom =document.getElementById('prev');
let webDom= document.querySelector('.web');
let listItemDom=document.querySelector('.web .list');
let thumbnailDom=document.querySelector('.web .thumbnail');
  

nextDom.onclick = function(){
    showSlider('next');
}
prevDom.onclick = function(){
    showSlider('prev')
}
let timeRunning= 3000;
let timeAutoNext= 7000;
let runTimeout;
let runAutoRun = setTimeout(()=>{
    nextDom.click();
},timeAutoNext);

function showSlider(type){
    let itemSlider =document.querySelectorAll('.web .list .item');
    let itemThumbnail = document.querySelectorAll('.web .thumbnail .item ');
    if (type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild( itemThumbnail[0]);
        webDom.classList.add('next');

    } else{
        let positionLastItem= itemSlider.length -1;
        listItemDom.prepend(itemSlider[positionLastItem]);
        thumbnailDom.prepend(itemThumbnail[positionLastItem]);
        webDom.classList.add('prev');
    }
    clearTimeout(runTimeout);
    runTimeout= setTimeout(() =>{
webDom.classList.remove('next');
webDom.classList.remove('prev');
    }
    ,timeRunning)
    clearTimeout(runAutoRun);
    runAutoRun= setTimeout(()=>{
 nextDom.click();
    }, timeAutoNext);
}