//校验函数
//type为1时校验PhoneNumber,PhoneNumber以1开头总共11位
//type为2时校验Email
//type为3时校验Url
let check = (type, str) => {
    let Phone = /^1\d{10}$/;
    let Email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let Url = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
    if (type === 1) {
        console.log(str);
        return Phone.test(str);
    } else if (type === 2) {
        console.log(Email.test(str));
        return Email.test(str);
    } else {
        console.log(str);
        console.log(Url.test(str));
        return Url.test(str);
    }
}


//cookie存储时间为24小时
/*let setCookie = (name, value) => {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();

}*/

//Phone Email Url 分别用LocalStorage SessionStorage Cookie 存储
let createClick = () => {
    let phone = document.querySelector("#Phone");
    let localstorage = document.querySelector("#localstorage")
    localstorage.addEventListener('click', () => {
        console.log(phone);
        if (check(1, phone.value)) {
            localStorage.setItem("phone", phone.value);
            alert(localStorage.getItem("phone") + "Submit Success!LocalStorage");
        } else {
            alert("Phone Format Error!");
        }

    })

    let email = document.querySelector("#Email");
    let sessionstorage = document.querySelector("#sessionstorage");
    sessionstorage.addEventListener("click", () => {
        if (check(2, email.value)) {
            sessionStorage.setItem("email", email.value);
            alert(sessionStorage.getItem("email") + "Submit Success!SessionStorage");
        } else {
            alert("Email Format Error!");
        }
    })

    //测试用例
    //http://electronics.cnet.com/electronics/0-6342366-8-8994967-1.html
    //http://regxlib.com/Default.aspx
    let cookie = document.querySelector("#cookie");
    let url = document.querySelector("#Url");
    cookie.addEventListener("click", () => {
        if (check(3, url.value)) {
            if (navigator.cookieEnabled) {
                document.cookie = "url=" + encodeURIComponent(url.value);
                alert(document.cookie + "Submit Success!Cookie");
            }

        } else {
            alert("Url Format Error!");
        }
    })



}

createClick();