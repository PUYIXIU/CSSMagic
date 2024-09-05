/**
 * animation-timeline
 * 只能是祖先dom的scroll控制子元素的动画效果
 */
window.onload = function(){
    // 主界面时间线
    const mainTimeline = document.querySelector('.game-time-line')
    const mainContent = document.querySelector('.main-content')
    // 游戏盒子
    const gameBox = document.querySelector(".game-box")
    // 上侧时间线
    const currentTimeline = document.querySelector(".current-timeline")
    function resize(){
        mainTimeline.style.height = gameBox.scrollHeight - mainContent.clientHeight * 1.5 + 'px';
        let per = Math.ceil( (gameBox.scrollTop + gameBox.clientHeight) / gameBox.scrollHeight  * 100)
        currentTimeline.style.width = per + '%'
    }
    resize()
    gameBox.addEventListener('scroll', e=>{
        let target = e.srcElement
        let per = Math.ceil( (target.scrollTop + target.clientHeight) / target.scrollHeight  * 100)
        currentTimeline.style.width = per + '%'
    })
}

