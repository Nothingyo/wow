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
var sider = document.querySelector("#sider");
for (var i = 0; i < 19; i++) {
    var sider_context = sider.innerHTML;
    var sider_item = `
    <div class="sider_item">${sider_Items[i].name}</div>
  `
    sider_context += sider_item;
    sider.innerHTML = sider_context;
}