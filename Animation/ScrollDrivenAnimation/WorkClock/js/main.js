/**
 * animation-timeline
 * 只能是祖先dom的scroll控制子元素的动画效果
 * 
 * 动画效果1：主界面向下滚动，气泡框出现
 * 动画效果2：时间线上涨
 * 动画效果3：人物立绘和气泡框变化
 */
window.onload = function(){
    // 主界面时间线
    const mainTimeline = document.querySelector('.game-time-line')
    // 主界面
    const mainContent = document.querySelector('.main-content')
    // 游戏盒子
    const gameBox = document.querySelector(".game-box")
    // 上侧时间线
    const currentTimeline = document.querySelector(".current-timeline")
    // 第一个气泡框
    const questionBox = document.querySelector(".question-box")
    // 数值框外部
    const dataPreogress = document.querySelector(".data-preogress")
    const dataLeftList = document.querySelectorAll(".data-left")
    // 初始状态时间线距离顶部的高度
    let firstTop = questionBox.offsetTop;

    function resize(){
        mainTimeline.style.height = '0px'
        mainTimeline.style.height = gameBox.scrollHeight - document.body.clientHeight * 0.6 * 2 + 'px';
        let per = Math.ceil( (gameBox.scrollTop + gameBox.clientHeight * 0.6 - firstTop) / (gameBox.scrollHeight - gameBox.clientHeight * 0.4 - firstTop)  * 100)
        currentTimeline.style.width = per + '%'
        dataLeftList[0].style.width = ((100 - per)/100)*(100 - 60) + 60 + '%'
        dataLeftList[1].style.width = ((100 - per)/100)*(100 - 30) + 30 + '%'
        dataLeftList[2].style.width = (100 - per) + '%'

        let totalNum = 12
        let currentIndex = Math.floor(per/100*12)
        switch(currentIndex){
            case 0:loadStatus('./img/7.png','<p>Want</p><p>Back to Bed</p><p>Sleepy...😪</p>');break;
            case 1:loadStatus('./img/1.png','<p>Egg🍳 + </p><p>Bread🍞 +</p><p>Apple🍎</p>');break;
            case 2:loadStatus('./img/3.png','<p>Get a </p><p>Website</p><p>to Dev💻</p>');break;
            case 3:loadStatus('./img/8.png','<p>HOT </p><p>LIKE</p><p>HELL👿</p>');break;
            case 4:loadStatus('./img/3.png','<p>Thank God</p><p>Air-Con❄️</p><p>Back</p>');break;
            case 5:loadStatus('./img/4.png','<p>I Cant.</p><p>Need </p><p>Fix Bug🐞</p>');break;
            case 6:loadStatus('./img/2.png','<p>Today is</p><p>Green</p><p>Salad!!🥦</p>');break;
            case 7:loadStatus('./img/7.png','<p>No Power🔋</p><p>For</p><p>Work...</p>');break;
            case 8:loadStatus('./img/5.png','<p>When</p><p>Can I Play</p><p>Game🎮</p>');break;
            case 9:loadStatus('./img/9.png','<p>Only</p><p>2 More😣</p><p>Hours...</p>');break;
            case 10:loadStatus('./img/8.png','<p>Only </p><p>ONE😖</p><p>HOURS!</p>');break;
            case 11:loadStatus('./img/6.png','<p>Finally🎊</p><p>Works</p><p>End!</p>');break;
            default:break;
        }
    }
    window.addEventListener('resize', resize)
    resize()
    gameBox.addEventListener('scroll', e=>{
        resize()
    })
    function loadStatus(imgUrl, words){
        const bubbleText = document.querySelector('.bubble-text')
        const headBox = document.querySelector('.head-box')
        bubbleText.innerHTML = words;
        headBox.style.backgroundImage = `url(${imgUrl})`
    }
}

