const slide2_Images = [{
        url: 'picture/slide2_0.jpg',
        name: '状元'
    },
    {
        url: 'picture/slide2_1.jpg',
        name: '榜眼'
    },
    {
        url: 'picture/slide2_2.jpg',
        name: '探花'
    },
    {
        url: 'picture/slide2_3.jpg',
        name: '如此丧心病狂的作者你可见过？情侣全悲剧！单身狗必看！'
    },
    {
        url: 'picture/slide2_4.jpg',
        name: '进士出身'
    },
    {
        url: 'picture/slide2_5.jpg',
        name: '同进士出身'
    },
    {
        url: 'picture/slide2_6.jpg',
        name: '传胪'
    },
    {
        url: 'picture/slide2_7.jpg',
        name: 'wowowowwowow'
    }
]

//创建slide2的8个显示框，超过显示框的部分用overflow:hidden隐藏
let slide2_images = document.querySelectorAll('.slide2_images');

let createSlide2 = () => {
    for (let i = 0; i < 8; i++) {
        const html = `
        <div class="slide2_images">
        <a href="#">
          <img src="${slide2_Images[i].url}">
        </a>
        <div class="slide2_hide" >
         <a href="#" >${slide2_Images[i].name}</a>
         <a href="#" title="稍后再看">
           <img class="slide2_clock" src="picture/slide2_clock.png">
         </a>
        </div>
        </div>
    `
        slide2_images[i].innerHTML = html;
    }
}

let showSlide2 = () => {
    createSlide2();
    //鼠标悬停，弹出详细内容,css用transform:translateY(-100px);实现
    slide2_images.forEach((e, index) => {
        let slide2_hide = document.querySelectorAll('.slide2_hide');
        e.onmouseover = () => {
            slide2_hide[index].className = 'slide2_show';
        }
        e.onmouseout = () => {
            slide2_hide[index].className = 'slide2_hide';
        }
    })

}

showSlide2();