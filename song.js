!async function main() {
    "use strict";
    const winna = document.getElementById('doctitle');
    const fname = winna.className.toString();
   
    const dom = {
        lyric: document.querySelector(".lyric"),
        player: document.querySelector(".player")
    };

    //가사
    const res = await fetch(`lrc/${fname}.lrc`);
    const lrc = await res.text();
    const lyrics = parseLyric(lrc);

    //음악
    let musicn = `./mp3/${fname}.mp4`;
    dom.player.setAttribute('src',`${musicn}`);

    //각 음악 메모
    const memotxt = await fetch (`txt/memotxt/${fname}.txt`);
    const memtxt = await memotxt.text();
    const memo = document.querySelectorAll('.memolog');
    memo.forEach(memo=>{
        memo.innerHTML = memtxt;
    })

    //음악 플레이 버튼
    const article = document.querySelector('article');
    const group = document.querySelector('.vidimg');
    const play = article.querySelector('.play');
    const pause = article.querySelector('.pause');
    play.addEventListener('click', e=>{
        group.querySelector('video').play();
    })
    pause.addEventListener('click', e=>{
        group.querySelector('video').pause();
    })

    //싱크 맞추기 + 시간 표시
    dom.player.ontimeupdate = () => {
        const time = dom.player.currentTime;
        const index = syncLyric(lyrics, time);
        
        if (index == null) return;

        dom.lyric.innerHTML = lyrics[index].text;

        let play = document.querySelector(".player");
        let tim =play.currentTime;
        const sect = document.querySelector('.sec');
        const mint = document.querySelector('.min');
        const min = Math.floor(tim/60);
        const sec = Math.floor(tim % 60);
        
        const ctsec = sec.toString().padStart(2,"0");
        
        mint.innerText = min;
        sect.innerText =  ctsec;

    };

}();

function parseLyric(lrc) {
     // will match "[00:00.00] ooooh yeah!"
    // note: i use named capturing group
    const regex = /^\[(?<time>\d{2}:\d{2}(.\d{2})?)\](?<text>.*)/;

    const lines = lrc.split("\n");
    // split lrc string to individual lines
    //전체 가사가 한 줄이 한 요소로 됨. split이 문자열을 배열로 변환하는 함수다; /n을 기준으로 나눴대...?


    const output = [];
    //0:{time: 0, text: 'Baby Blue Jean'} 이렇게 한 줄씩 시간/가사 뜬다. array래요. 그리고 맨 위 3줄 정보는 안 뜸
    //[]안의 배열로 만드는 건가...?

// console.log(output);

    lines.forEach(line => {
        //가사 배열 안의 각 요소
        const match = line.match(regex);

        // if doesn't match, return.
        if (match == null) return;

        const { time, text } = match.groups;

        output.push({
            time: parseTime(time),
            text: text.trim()
        });
    });

    // parse formated time
    // "03:24.73" => 204.73 (total time in seconds)
    function parseTime(time) {
        const minsec = time.split(":");
        //현재 시간을 :을 기준으로 나눠서 배열로 만듦

        const min = parseInt(minsec[0]) * 60;
        //배열 첫 요소인 분을 *60으로 초로 변환
        const sec = parseFloat(minsec[1]);

        return min + sec;
        //암튼 이렇게 초단위로 시간 설정함
    }

    return output;
}
function syncLyric(lyrics, time) {
    const scores = [];

    lyrics.forEach(lyric => {
        // get the gap or distance or we call it score
        const score = time - lyric.time;

        //  time: parseTime(time)=초단위로 변환된 현재 시간, lyric: Html의 div lyric
//즉 현재시간 -각 가사의 설정 시간? = score

        // only accept score with positive values
        if (score >= 0) scores.push(score);
    });
    //스코어가 0보다 크거나 같다= 현재 시간이 각 가사 설정 시간보다 똑같거나 더 나중이다
    //push(): 배열 끝에 ()의 요소 요소 추가
    //즉 scores에 score=현재시간 - 각 가사 설정시간 추가시킴

    if (scores.length == 0) return null;

    //그렇게 나온 배열의 값이 0이라면 아무것도 안 뜸? 뭔소리야 현재시간이 가사시간과 똑같으면 안 뜨나..?

    // get the smallest value from scores
    const closest = Math.min(...scores);
    //Math.min():인수로 넣은 값 중 최소값 반환
    //...:. Rest파라미터=> 함수에 매개변수를 여러개 전달할 때 주로 사용!(매개변수 갯수를 모를 때).여러개의 인수를 전달 받아 배열로 변환한다

    // return the index of closest lyric
    return scores.indexOf(closest);
    //배열 안에서 인수 중 최솟값 찾아 출력하기?
    
    
    
}


//로딩
window.addEventListener('DOMContentLoaded', function()
{

    const topbox = document.querySelector('.topbox');
    const loading = document.querySelector('.loading');
    const footer = document.querySelector('footer');
    const right = document.querySelector('.right');

    
    const winna = document.getElementById('doctitle');
    const fname = winna.className.toString();
    
        loading.classList.add('on');
        footer.classList.add('on');
        topbox.classList.add('on');
        right.classList.add('load');
        
    setTimeout(()=>{
        loading.classList.remove('on');
        footer.classList.remove('on');
        topbox.classList.remove('on');
        right.classList.remove('load');
        
    }, 1900);

    setTimeout(()=>{
        loading.remove();
    }, 2200);

}); 


//모바일 팝업
function mobileapp (){
    const cl = document.querySelectorAll(".far");
    const listmob = document.querySelector('.listmob');
    const infobox = document.querySelector('.infobox');
    const aabox = document.querySelector('.aabox');
    const memobox = document.querySelector('.memobox');
    const abbox = document.querySelector('.about');

    const abt = document.querySelector('.f4');
    const fold = document.querySelector('.f1');
    const memo = document.querySelector('.f2');
    const cover = document.querySelector('.f3');
    const btnl = document.querySelector('.btnl');


    abt.addEventListener('click', ()=>{
        abbox.classList.toggle('on');
        listmob.classList.remove('on');
        aabox.classList.remove('on');
        memobox.classList.remove('on');
        infobox.classList.remove('on'); 
    });
    fold.addEventListener('click', ()=>{
        listmob.classList.toggle('on');
        aabox.classList.remove('on');
        abbox.classList.remove('on');
        memobox.classList.remove('on');
        infobox.classList.remove('on'); 
    });
    cover.addEventListener('click', ()=>{
        listmob.classList.remove('on');

        abbox.classList.remove('on');
        aabox.classList.toggle('on');
        memobox.classList.remove('on');
        infobox.classList.remove('on');
    });
    memo.addEventListener('click', ()=>{
        aabox.classList.remove('on');
        memobox.classList.toggle('on');
        abbox.classList.remove('on');
        infobox.classList.remove('on');
        listmob.classList.remove('on');
    });
    btnl.addEventListener('click', ()=>{
        aabox.classList.remove('on');
        memobox.classList.remove('on');
        infobox.classList.toggle('on');
        listmob.classList.remove('on');
        abbox.classList.remove('on');
    });


cl.forEach( cl =>{

    cl.addEventListener('click',()=>{
    aabox.classList.remove('on');
    listmob.classList.remove('on');
    memobox.classList.remove('on');

    abbox.classList.remove('on');
    infobox.classList.remove('on');
});

});


}
mobileapp();


//메모확장
const memol = document.getElementById('arrow');
const bottoml = document.querySelector('.bottoml');
const bottomr = document.querySelector('.bottomr');
memol.addEventListener('click',()=>{
    bottoml.classList.toggle('on');
    bottomr.classList.toggle('on');

});

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


const winna = document.getElementById('doctitle');
const fname = winna.className.toString();


//자동화시작

//폰배경
let vidb = document.querySelector('.vidb');
vidb.src = `./img/phonebg/${fname}.jpg`;

//앨범아트
const aapic = document.querySelectorAll('.aapic');
aapic.forEach(aapic=>{
    aapic.src = `./img/aa/${fname}.jpg`;
})



// 색깔
  const yy = getComputedStyle(document.documentElement).getPropertyValue("--yy");
  const bg = getComputedStyle(document.documentElement).getPropertyValue("--bg");

    if (fname === "mune"){

        const dfdf = "#e9e9e9";
        const yyyy = "#668251";
        document.documentElement.style.setProperty("--yy", yyyy);
        document.documentElement.style.setProperty("--bg", dfdf);
    }
    else if (fname === "zats"){

        const dfdf = "#e9e9e9";
        const yyyy = "#937a63";
        document.documentElement.style.setProperty("--yy", yyyy);
        document.documentElement.style.setProperty("--bg", dfdf);
    }

    else if (fname === "uchu"){


        const dfdf = "#e9e9e9";
        const yyyy = "#417358";
        document.documentElement.style.setProperty("--yy", yyyy);
        document.documentElement.style.setProperty("--bg", dfdf);
     
    }
    else if (fname === "drif"){


        const dfdf = "#e9e9e9";
        const yyyy = "#483450";
        document.documentElement.style.setProperty("--yy", yyyy);
        document.documentElement.style.setProperty("--bg", dfdf);
     
    }
    else if (fname === "nora"){


        const dfdf = "#e9e9e9";
        const yyyy = "#736e9f";
        document.documentElement.style.setProperty("--yy", yyyy);
        document.documentElement.style.setProperty("--bg", dfdf);
     
    }
    else if (fname === "nats"){


        const dfdf = "#e9e9e9";
        const yyyy = "#5e94a4";
        document.documentElement.style.setProperty("--yy", yyyy);
        document.documentElement.style.setProperty("--bg", dfdf);
     
    }
    else if (fname === "ashi"){


        const dfdf = "#bebebe";
        const yyyy = "#585858";
        document.documentElement.style.setProperty("--yy", yyyy);
        document.documentElement.style.setProperty("--bg", dfdf);
     
    }
    else if (fname === "hibi"){


        const dfdf = "#e9e9e9";
        const yyyy = "#727521";
        document.documentElement.style.setProperty("--yy", yyyy);
        document.documentElement.style.setProperty("--bg", dfdf);
     
    }
    else if (fname === "kage"){


        const dfdf = "#e9e9e9";
        const yyyy = "#5b594b";
        document.documentElement.style.setProperty("--yy", yyyy);
        document.documentElement.style.setProperty("--bg", dfdf);
     
    }
    else {


        const dfdf = "#e9e9e9";
        const yyyy = "#bebebe";
        document.documentElement.style.setProperty("--yy", yyyy);
        document.documentElement.style.setProperty("--bg", dfdf);
     
    }
          
 



    




