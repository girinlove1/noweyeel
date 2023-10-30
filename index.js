window.addEventListener('mousemove', e=>{

    const bgbg = document.querySelector('.bgbg');
        let x = e.pageX;
        let y = e.pageY;
        
        let cx = -x/70;
        let cy = -y/70;
    //너무 급격하게 움직이는 거 방지
    
        bgbg.style.transform = `translate(${cx}px, ${cy}px)`;
    
    })


    
    const btn1 = document.querySelector('.btn1');
    const btn2 = document.querySelector('.btn2');
    const btn3 = document.querySelector('.btn3');

    let wid = window.innerWidth;
    let hei = window.innerHeight;

    let btn2w= wid*0.8;
    let btn2h = hei*0.5

    btn1.addEventListener('click', ()=>{
        window.scrollTo(0, 0);
    });
    
    btn2.addEventListener('click', ()=>{
        window.scrollTo((wid), (btn2h));
    });

    btn3.addEventListener('click', ()=>{
        window.scrollTo(0, (hei));
    });


    const d1 = document.getElementById('d1');
    const d2 = document.getElementById('d2');
    const d3 = document.getElementById('d3');

    const btnl = document.querySelector('.btnl');
    const btnc = document.querySelector('.btnc');

    const btnr = document.querySelector('.btnr');

    const g = document.querySelector('.g');

    btnl.addEventListener('click', ()=>{
        g.classList.add('one');
        g.classList.remove('two');
        g.classList.remove('thr');

        btnl.classList.add('on');
        btnc.classList.remove('on');
        btnr.classList.remove('on');
        
        
        d1.classList.add('on');
        d2.classList.remove('on');
        d3.classList.remove('on');
    });
    btnc.addEventListener('click', ()=>{
        g.classList.add('two');

        g.classList.remove('one');
        g.classList.remove('thr');

        d2.classList.add('on');
        d1.classList.remove('on');
        d3.classList.remove('on');

        btnc.classList.add('on');
        btnl.classList.remove('on');
        btnr.classList.remove('on');
    });
    btnr.addEventListener('click', ()=>{
        g.classList.add('thr');
        g.classList.remove('one');
        g.classList.remove('two');

        d3.classList.add('on');
        d1.classList.remove('on');
        d2.classList.remove('on');

        btnr.classList.add('on');
        btnc.classList.remove('on');
        btnl.classList.remove('on');
    });
