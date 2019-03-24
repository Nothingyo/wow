
var slide=document.createElement("div"),
    slide1=document.createElement("div"),
    slide2=document.createElement("div"),
	picture=document.createElement("ul"),
	ad=document.createElement("ul"),
	trig=document.createElement("ul");

slide.setAttribute("id","slide");
slide1.setAttribute("id","slide1");
slide2.setAttribute("id","slide2");
picture.setAttribute("id","picture");
ad.setAttribute("id","ad");
trig.setAttribute("id","trig");
/*slide1.style.display="inline-block";
slide2.style.display="inline-block";
slide.style.height="220px";
slide.style.width="980px";
slide1.style.height="220px";
slide1.style.width="440px";
slide2.style.height="220px";
slide2.style.width="540px";*/

var main=document.getElementById("main");
main.appendChild(slide);
slide.appendChild(slide1);
slide.appendChild(slide2);
slide1.appendChild(picture);
slide1.appendChild(ad);
slide1.appendChild(trig);

const li=[
	{seq:0,src:'picture/1.jpg'},
	{seq:1,src:'picture/2.jpg'},
	{seq:2,src:"picture/3.jpg"},
	{seq:3,src:"picture/4.jpg"},
	{seq:4,src:"picture/5.jpg"}
]

li.forEach(function(item,index){
	li[index]=document.createElement("li");
	li[index].setAttribute("class","");
	picture.appendChild(li[index]);
	
	var a=document.createElement("a"),
		img=document.createElement("img");
	a.setAttribute("href","#");
	img.setAttribute("src",item.src);
	
	li[index].appendChild(a);
	a.appendChild(img);
})


//轮播效果



var li_picture=document.getElementById("picture").getElementsByTagName("li");

function showtime(){
	setInterval(function(){
		li.forEach(function(item,index){
			if(item.seq!=0){console.log(item.seq);
			item.seq--;
			//var li_picture=document.getElementById("picture").getElementsByTagName("li");
			if(item.seq<0) {
				item.seq+=5;
				li_picture[index].style.transform="translate("+440*item.seq+"px,220px)";
			}else{
				li_picture[index].style.transform="translate("+440*item.seq+"px,220px)";
			}}
			
		}
		
		)
	},5000);//5s轮转一张图片
}

showtime();





