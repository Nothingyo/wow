const Days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
const Digits = ['h1', 'h2', ':', 'm1', 'm2', ':', 's1', 's2']
const DigitsName = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

//创建周一到周日
let createDays = () => {
    let weekdays = document.querySelector('.weekdays');
    for (let i = 0; i < 7; i++) {
        html = `<span>${Days[i]}</span>`;
        weekdays.innerHTML += html;
    }
}

//创建时钟数字，每个数字由七个数码管（d1-d7)构成，数码管显示用CSS布局实现
let createDigits = () => {
    let digits = document.querySelector('.digits');
    let html;
    Digits.forEach((e, index) => {
        if (e == ':') {
            html = `<div class='dots'></div>`
        } else {
            html = `
        		<div>
        			<span class="d1"></span>
        			<span class="d2"></span>
        			<span class="d3"></span>
        			<span class="d4"></span>
        			<span class="d5"></span>
        			<span class="d6"></span>
        			<span class="d7"></span>
        		</div>
        		`
        }
        digits.innerHTML += html;
    })
}

//hh mm ss d A 分别为 时 分 秒 星期几 AM/PM
//digits[]的className表示要显示的数字，比如className='zero',数码管显示'0'
let update_time = () => {
    let now = moment().format("hhmmssdA");
    let digits = document.querySelectorAll('.digits div');
    digits[0].className = DigitsName[now[0]];
    digits[1].className = DigitsName[now[1]];
    digits[3].className = DigitsName[now[2]];
    digits[4].className = DigitsName[now[3]];
    digits[6].className = DigitsName[now[4]];
    digits[7].className = DigitsName[now[5]];
    let ampm = document.querySelector('.ampm');
    ampm.innerHTML = now[7] + now[8];

    let weekdays = document.querySelectorAll('.weekdays span');
    weekdays[now[6] - 1].className = 'active';
    weekdays[(now[6] - 2 + 7) % 7].className = '';
}

let main = () => {
    createDays();
    createDigits();
    setInterval(update_time, 1000);
}
main();