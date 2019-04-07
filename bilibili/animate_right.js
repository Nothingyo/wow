const Right_Items = [{
        seq: 0,
        url: 'picture/animate_0.jpg',
        illustration: 'aaa看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    },
    {
        seq: 0,
        url: 'picture/animate_1.jpg',
        illustration: 'bbb看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    },
    {
        seq: 0,
        url: 'picture/animate_2.jpg',
        illustration: 'ccc看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    },
    {
        seq: 0,
        url: 'picture/animate_3.jpg',
        illustration: 'ddd看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    },
    {
        seq: 0,
        url: 'picture/animate_4.jpg',
        illustration: 'eee看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    },
    {
        seq: 0,
        url: 'picture/animate_5.jpg',
        illustration: 'fff看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    },
    {
        seq: 0,
        url: 'picture/animate_6.jpg',
        illustration: 'ggg看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    },
    {
        seq: 0,
        url: 'picture/animate_7.jpg',
        illustration: 'hhh看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    },
    {
        seq: 0,
        url: 'picture/animate_8.jpg',
        illustration: 'iii看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    },
    {
        seq: 0,
        url: 'picture/animate_9.jpg',
        illustration: 'jjj看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    },
    {
        seq: 0,
        url: 'picture/animate_10.jpg',
        illustration: 'kkk看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    },
    {
        seq: 0,
        url: 'picture/animate_11.jpg',
        illustration: 'lll看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    },
    {
        seq: 0,
        url: 'picture/animate_12.jpg',
        illustration: 'mmm看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    },
    {
        seq: 0,
        url: 'picture/animate_13.jpg',
        illustration: 'nnn看点看点看点看点看点看点内容介绍内容介绍内容介绍'
    }

]

var flag=1;
//flag用于判断Tab当前处于“全部”还是“原创”板块，初始页面默认为“全部”板块
//seq为点击量排名
//创建animate-right结构
function createAnimateRight() {
    var animate_right = document.querySelector(".animate_right");
    html = `
		<header class="rank-head">
			<h3>排行</h3>
			<div class="rank-tab">
			  <div class="rank-tabon">全部</div>
			  <div class="rank-taboff">原创</div>
			</div>
			<div class="select-date">三日></div>
		</header>
		<div class="rank-list">
			<ul class="rank-list-items"></ul>
		</div>
		<a href="#" class="search-more">查看更多</a>
	`
    animate_right.innerHTML = html;
}

//排名展示部分
function createAnimateRightItems() {
    var rank_list_items = document.querySelector(".rank-list-items");
    for (var i = 0; i < 7; i++) {
        var number = i + 1;
        if (i == 0) {
            html = ` 
	  		  <li class="rank-item">
					<i class="rank-number-first">${number}</i>
					<a class="rank-item-illustration">
						<img src=${Right_Items[i].url}>
						${Right_Items[i].illustration}
					</a>
			  </li>
			`
        } else if (i == 1 || i == 2) {
            html = ` 
	  		  <li class="rank-item">
					<i class="rank-number-red">${number}</i>
					<a class="rank-item-illustration">${Right_Items[i].illustration}</a>
			  </li>
			`
        } else {
            html = ` 
	 		 <li class="rank-item">
				<i class="rank-number">${number}</i>
				<a class="rank-item-illustration">${Right_Items[i].illustration}</a>
	  		 </li>
			`
        }

        rank_list_items.innerHTML += html;
    }
    var rank_item = document.querySelector(".rank-item");
    rank_item.style.height = "50px";
}
//按照tab切换、点击量显示内容
//tab切换“全部”、“原创”板块
//num=0显示前7个Right_Items排序内容，num=7显示后7个
var num = 0;
function showItemsAgain(num) {
    var rank_item_illustration = document.querySelectorAll(".rank-item-illustration");
    if (num == '0') {
        for (var i = 0; i < 7; i++) {
            if (i == 0) {
                html = ` <img src=${Right_Items[i%7].url}>${Right_Items[i%7].illustration}`
            } else {
                html = ` ${Right_Items[i%7].illustration}`
            }
            rank_item_illustration[i].innerHTML = html;
        }
    } else {
        for (var i = 0; i < 7; i++) {
            if (i == 0) {
                html = ` <img src=${Right_Items[i+7].url}>${Right_Items[i+7].illustration}`
            } else {
                html = ` ${Right_Items[i+7].illustration}`
            }
            rank_item_illustration[i].innerHTML = html;
        }
    }

}
//降序排列
function sortNumber(b, a) {
    return a.seq - b.seq;
}
//每次点击，点击量seq+1
function addSeq() {
    var rank_item = document.querySelectorAll(".rank-item");
    rank_item.forEach((e, index) => {
        e.addEventListener('click', function() {
            if (flag == 1) {
                Right_Items[index].seq += 1;
                Right_Items.sort(sortNumber);
                showItemsAgain(0);
            } else {
                Right_Items[index + 7].seq += 1;
                Right_Items.sort(sortNumber);
                showItemsAgain(7);
            }
        })
    })
}

//切换Tab,flag=1表示当前显示的是“全部”板块,flag=2则为“原创”板块
function changeTab() {
    var rank_tabon = document.querySelector(".rank-tabon");
    var rank_taboff = document.querySelector(".rank-taboff");
    rank_tabon.addEventListener('click', function() {
        rank_taboff.className = 'rank-taboff';
        this.className = 'rank-tabon';
        flag = 1;
        showItemsAgain(0);
    })
    rank_taboff.addEventListener('click', function() {
        rank_tabon.className = 'rank-taboff';
        this.className = 'rank-tabon';
        flag = 2;
        showItemsAgain(7);
    })
}

function showAnimateRight() {
    createAnimateRight();
    createAnimateRightItems();
    addSeq();
    changeTab();
}
showAnimateRight();