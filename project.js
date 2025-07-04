const dd=document.querySelector('.dd');
const ff =document.querySelector('.ff');
const qq =document.querySelector('.qq');
const zq =document.querySelector('.zq');
const ddRect = dd.getBoundingClientRect();
const zqReact =zq.getBoundingClientRect();
qq.addEventListener('click',() => {
    ff.innerText = 'love you ';
    });
zq.addEventListener('mouseover' , ()=> {
    const i = Math.floor(Math.random() * 
    (ddRect.width - zqReact.width))
    +1;
    const j = Math.floor(Math.random() *
    (ddRect.height - zqReact.height)) + 1 ;
    zq.style.left = i + 'px';
    zq.style.top = j + 'px';
});




