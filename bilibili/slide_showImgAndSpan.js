let currentIndex = 0;
const images = [{
        url: 'picture/1.jpg',
        name: '挑战第一次，不试你怎么知道？'
    },
    {
        url: 'picture/2.jpg',
        name: '疑案追声'
    },
    {
        url: 'picture/3.jpg',
        name: '考研冲鸭！'
    },
    {
        url: 'picture/4.jpg',
        name: '舞蹈'
    },
    {
        url: 'picture/5.jpg',
        name: '爱是孤独的开始'
    }
]

var slide1 = document.querySelector("#slide1");
var time;

//显示图片、title和链接模块
function showImgAndTitleAndMore() {
    var slide1_img = document.querySelector('.picture');
    var str = ` 
      <li>
        <a href="#">
         <img src=${images[currentIndex].url}>
        </a>
        <a href="#" class="title">${images[currentIndex].name}</a>
        <a href="#" class="more">更多></a>
      </li>
      `
    slide1_img.innerHTML = str;
}
//鼠标悬浮图片,轮播停止，显示.more链接模块；鼠标离开，轮播继续，隐藏.more链接模块
function setOnmouseEvent1() {
    slide1.addEventListener('mouseover', function() {
        var more = document.querySelector('.more');
        clearInterval(time);
        more.style.display = 'inline-block';
    })
    slide1.addEventListener('mouseleave', function() {
        var more = document.querySelector('.more');
        showTime();
        more.style.display = 'none';
    })
}

//显示小圆点,currentIndex圆点高亮,currentIndex前一个圆点恢复
function showTrig() {
    var trig_span = document.querySelectorAll('span');
    trig_span.forEach((e, index) => {
        if (currentIndex == index) {
            e.className = 'on';
        }
        if ((currentIndex + 4) % 5 == index) {
            e.className = 'hide';
        }
    })
}
//小圆点   on，ready，hide  分别对应鼠标的  点击/currentIndex,悬浮,不显示  三种状态
function setOnmouseEvent2() {
    var trig_span = document.querySelectorAll('span');
    trig_span.forEach((e, index) => {
        e.onmouseover = function() {
            //鼠标悬浮，且不是currentIndex小圆点
            if (this.className != 'on') {
                this.className = 'ready';
            }
        }
        e.onmouseout = function() {
            //鼠标离开，若不是currentIndex小圆点，则恢复原样
            if (this.className != 'on') {
                this.className = 'hide';
            }
        }
        e.onclick = function() {
            trig_span[currentIndex].className = 'hide';
            currentIndex = index;
            showImgAndTitleAndMore();
            showTrig();
        }
    })
}

//轮播
function showTime() {
    time = setInterval(() => {
        currentIndex += 1;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        showImgAndTitleAndMore();
        showTrig();

    }, 3000);
}

function main() {
    showImgAndTitleAndMore();
    setOnmouseEvent1();
    showTrig();
    setOnmouseEvent2();
    showTime();
}
main();