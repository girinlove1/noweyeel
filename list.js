

//배경 움직임
window.addEventListener('mousemove', e=>{

    const bgbg = document.querySelector('.bgbg');
        let x = e.pageX;
        let y = e.pageY;
        
        let cx = -x/30;
        let cy = -y/30;
    //너무 급격하게 움직이는 거 방지
    
        bgbg.style.transform = `translate(${cx}px, ${cy}px)`;
    
    })
 function info (){
    const inn = document.querySelectorAll('.inner');
    const right = document.querySelector('.right');
    const aar = document.querySelectorAll('.aa');

    let tit = document.querySelector('.title');
    let art = document.querySelector('.artist');
    let len = document.querySelector('.length');
    let alb = document.querySelector('.album');
    let rel = document.querySelector('.released');


    inn.forEach((aar, index) => { 
        aar.addEventListener('mouseover', function(){
            const idid = aar.getAttribute('id');
            right.classList.add('on');
            if(idid=="a1"){
                tit.innerHTML = "kimi.no.mune.ni.dakaretai";
                art.innerHTML = "kirinji";
                len.innerHTML = "4:11";
                alb.innerHTML = "3";
                rel.innerHTML = "00/07/12";
            } else if(idid=="a2"){
                tit.innerHTML = "zatsumu";
                art.innerHTML = "kirinji";
                len.innerHTML = "5:00";
                alb.innerHTML = "cherish";
                rel.innerHTML = "19/11/20";
            }else if(idid=="a3"){
                tit.innerHTML = "uchuu.hikoshi.no.uta";
                art.innerHTML = "kirinji";
                len.innerHTML = "4:29";
                alb.innerHTML = "request";
                rel.innerHTML = "00/00/00";
            } else if(idid=="a4"){
                tit.innerHTML = "drifter";
                art.innerHTML = "kirinji";
                len.innerHTML = "5:13";
                alb.innerHTML = "drifter";
                rel.innerHTML = "01/07/25";
            } else if(idid=="a5"){
                tit.innerHTML = "nora.no.nizi";
                art.innerHTML = "kirinji";
                len.innerHTML = "4:26";
                alb.innerHTML = "paper.driver’s.music";
                rel.innerHTML = "98/10/25";
            }else if(idid=="a6"){
                tit.innerHTML = "natsu.no.hikari";
                art.innerHTML = "kirinji";
                len.innerHTML = "4:49";
                alb.innerHTML = "bouyancy";
                rel.innerHTML = "10/07/07";
            } else if(idid=="a7"){
                tit.innerHTML = "ashita.ko.wa_it's.not.over.yet";
                art.innerHTML = "kirinji";
                len.innerHTML = "4:46";
                alb.innerHTML = "ai.wo.arudake.subete";
                rel.innerHTML = "18/06/13";
            } else if(idid=="a8"){
                tit.innerHTML = "hibi.kore.kanko";
                art.innerHTML = "kirinji";
                len.innerHTML = "4:40";
                alb.innerHTML = "neo";
                rel.innerHTML = "16/08/03";
            }else if(idid=="a9"){
                tit.innerHTML = "kaori.to.kage";
                art.innerHTML = "tomita.labo.feat.kirinji";
                len.innerHTML = "4:49";
                alb.innerHTML = "shipbuilding";
                rel.innerHTML = "03/02/05";
            }else{
                 tit.innerHTML = "";
                art.innerHTML = "";
                len.innerHTML = "";
                alb.innerHTML = "";
                rel.innerHTML = "";
            }
            
        });
        aar.addEventListener('mouseout', function(){
            right.classList.remove('on');
            tit.innerHTML = "";
            art.innerHTML = "";
            len.innerHTML = "";
            alb.innerHTML = "";
            rel.innerHTML = "";
        });
    });
};
info();

     

const back = document.querySelector('.back');
const addr = document.querySelector('.address');
const f1 = document.querySelector('.f1');
const all = document.querySelector('.allfolder');
const ff1 = document.getElementById('ff1');
const left = document.querySelector('.left');
// const fo1op = document.querySelector('.fo1op');

const btnr = document.querySelector('.btnr');
const btnl = document.querySelector('.btnl');

all.classList.add('on');
back.addEventListener('click', ()=>{
    all.classList.add('on');
    addr.innerHTML = "/all°｡*°｡*";
    f1.classList.remove('on');
    back.classList.remove('on');
    left.classList.remove('on');
    btnl.classList.remove('on');
    btnr.classList.remove('on');
    
})

btnr.addEventListener('click', ()=>{
    all.classList.add('on');
    addr.innerHTML = "/all°｡*°｡*";
    f1.classList.remove('on');
    back.classList.remove('on');
    left.classList.remove('on');
    btnl.classList.remove('on');
    btnr.classList.remove('on');
    
})

ff1.addEventListener('click', ()=>{
    all.classList.remove('on');
    addr.innerHTML = "/all/kirinji_1023°｡*";
    f1.classList.add('on');
    back.classList.add('on');
    left.classList.add('on');
    btnl.classList.add('on');
    btnr.classList.add('on');
    
})




function mobileapp (){
    const cl = document.querySelector(".far");
    console.log(cl);
    
    const infobox = document.querySelector('.infobox');
   
    const btnl = document.querySelector('.btnl');


    btnl.addEventListener('click', ()=>{
        
        infobox.classList.toggle('on');
       
    });


    cl.addEventListener('click', () =>{
        infobox.classList.remove('on');
    });

}
mobileapp();







