const animate_images = [{
        url: 'picture/animate_0.jpg',
        time: '09:08'
    },
    {
        url: 'picture/animate_1.jpg',
        time: '04:48'
    },
    {
        url: 'picture/animate_2.jpg',
        time: '05:22'
    },
    {
        url: 'picture/animate_3.jpg',
        time: '23:01'
    },
    {
        url: 'picture/animate_4.jpg',
        time: '20:41'
    },
    {
        url: 'picture/animate_5.jpg',
        time: '02:22'
    },

    {
        url: 'picture/animate_6.jpg',
        time: '06:52'
    },
    {
        url: 'picture/animate_7.jpg',
        time: '12:57'
    },
    {
        url: 'picture/animate_8.jpg',
        time: '09:08'
    },
    {
        url: 'picture/animate_9.jpg',
        time: '09:08'
    },
    {
        url: 'picture/animate_10.jpg',
        time: '09:08'
    },
    {
        url: 'picture/animate_11.jpg',
        time: '09:08'
    },
    {
        url: 'picture/animate_12.jpg',
        time: '09:08'
    },
    {
        url: 'picture/animate_13.jpg',
        time: '09:08'
    },
    {
        url: 'picture/animate_14.jpg',
        time: '09:08'
    },
    {
        url: 'picture/animate_15.jpg',
        time: '09:08'
    }
]
//新动态数字
const numberhop = [1000];
//创建动画和排行模块
function createTab() {
    var animate = document.querySelector("#animate");
    var html = `
        <div class="animate_left">
            <div class="animate_headline">
                <div class="headline_picture"></div>
                <a href="#">动画</a>
                <div class="animate_tab">
                    <div class="animate_tab_itemon">有新动态</div>
                    <div class="animate_tab_item">最新投稿</div>
                </div>
                <a href="#" class="animate_headline_numberhop">${numberhop}条新动态</a>
                <a href="#" class="animate_headline_more">更多></a>
                
            </div>
            <div class="animate_content"></div>
        </div>
        <div class="animate_right"></div>
    `
    animate.innerHTML = html;
}

//有新动态、最新投稿切换
function changeTab(str){
var animate_content_images_a=document.querySelectorAll('.animate_content_images_a');
    if(str=='dongtai'){
        animate_content_images_a.forEach((e,index)=>{
        e.innerHTML=`<img src="${animate_images[index+8].url}">`;
    })
    }
    else{
        animate_content_images_a.forEach((e,index)=>{
        e.innerHTML=`<img src="${animate_images[index%8].url}">`;
    })
    } 
}

function changeTabItemClass() {
    var animate_tab_itemon = document.querySelector('.animate_tab_itemon');
    var animate_tab_item = document.querySelector('.animate_tab_item');
    animate_tab_item.addEventListener('click', function() {
        animate_tab_itemon.className = 'animate_tab_item';
        this.className = 'animate_tab_itemon';
        changeTab('dongtai');
    })
    animate_tab_itemon.addEventListener('click', function() {
        animate_tab_item.className = 'animate_tab_item';
        this.className = 'animate_tab_itemon';
changeTab('tougao');
    })
    
}
//动画展示框
function createContentItems() {
    for (var i = 0; i < 8; i++) {
        var animate_content=document.querySelector('.animate_content');
        const html = `
        <div class="animate_content_item">
            <div class="animate_content_images">
             <a href="#" class="animate_content_images_a">
              <img src="${animate_images[i].url}">
             </a>
            </div>
            <div class="animate_content_item_hide" >
             <a href="#" >${animate_images[i].time}</a>
             <a href="#" title="稍后再看">
              <img class="animate_clock" src="picture/slide2_clock.png">
             </a>
            </div>
        </div>
    `
        animate_content.innerHTML += html;
    }
}

//鼠标浮动在动画框，滑动框显示
function showContentItemHide(){
    var animate_content_item=document.querySelectorAll('.animate_content_item');
    var animate_content_item_hide=document.querySelectorAll('.animate_content_item_hide');
    animate_content_item.forEach((e,index)=>{
        e.addEventListener('mouseover',function(){
            animate_content_item_hide[index].className='animate_content_item_show';
        })
        e.addEventListener('mouseleave',function(){
            animate_content_item_hide[index].className='animate_content_item_hide';
        })

    })
}

createTab();
createContentItems();
changeTabItemClass();
showContentItemHide();
