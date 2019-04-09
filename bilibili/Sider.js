const sider_Items = [{
        name: "直播"
    },
    {
        name: "动画"
    },
    {
        name: "番剧"
    },
    {
        name: "国创"
    },
    {
        name: "音乐"
    },
    {
        name: "舞蹈"
    },
    {
        name: "游戏"
    },
    {
        name: "科技"
    },
    {
        name: "数码"
    },
    {
        name: "生活"
    },
    {
        name: "鬼畜"
    },
    {
        name: "时尚"
    },
    {
        name: "广告"
    },
    {
        name: "娱乐"
    },
    {
        name: "专栏"
    },
    {
        name: "电影"
    },
    {
        name: "TV剧"
    },
    {
        name: "影视"
    },
    {
        name: "纪录片"
    }
]

let showSider=()=> {
    let sider = document.querySelector("#sider");
    for (let i = 0; i < 19; i++) {
        let sider_context = sider.innerHTML;
        let sider_item = `
    <div class="sider_item">${sider_Items[i].name}</div>
  `
        sider_context += sider_item;
        sider.innerHTML = sider_context;
    }

    //sider_item[0]的css圆角处理
    let sider_item = document.querySelectorAll(".sider_item");
    sider_item[0].style = "border-top-right-radius:4px;border-top-left-radius:4px";
    sider_item[sider_item.length-1].style = "border-bottom-right-radius:4px;border-bottom-left-radius:4px";
}

showSider();