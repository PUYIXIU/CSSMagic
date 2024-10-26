let sectionName = 'cursor-1'
let sectionPrev = ""
let sectionList = [
    "cursor-1",
    "cursor-2",
    "cursor-3",
    "cursor-4",
    "cursor-5",
    "cursor-6"
]
let cursorList = [
    "arrow-pointer",
    "big-circle",
    "ring-dot",
    "circle-and-dot",
    "glitch-effect",
    "motion-blur"
]

let isShiftDone = false

// 前一个按钮
const btnPrevious = document.querySelector(".btn-previous")
// 后一个按钮
const btnNext = docuemnt.querySelector(".btn-next")
// 头部
const header = docuemnt.querySelector("header")
// 脚部
const footer = document.querySelector("footer")

const root = document.querySelector(":root")

window.onload = function(){
    shiftIn()
}

btnPrevious.addEventListener("click", function(){
    if(isShiftDone){
        location.href = "#" + sectionList[(sectionList.indexOf(sectionName))]
    }
})

btnNext.addEventListener("click", function(){
    if(isShiftDone){
        location.href = "#" + sectionList[(sectionList.indexOf(sectionName) + 1) % sectionList.length]
    }
})

// 鼠标移入next/previous按钮
btnPrevious.addEventListener('mouseenter',()=>{
    shiftUp(".btn-previos small.shift-in")
})
btnNext.addEventListener("mouseenter", ()=>{
    shiftUp('.btn-next small.shift-in')
})

let shiftup = setInterval(()=>{
    shiftUp('.btn-next small.shift-in')
}, 3000)

window.addEventListener('popstate', function(){
    sectionPrev = sectionName
    sectionName = getAnchor()
    this.clearInterval(shiftup)
    pageChange(sectionName, sectionPrev)
})

// 移入
function shiftIn(){
    
}

// 移入dom
function shiftUp(el){

}

// 获取锚点
function getAnchor(){

}

// 页面切换
function pageChange(sectionName, sectionPrev){

}

// 修改焦点
function changeCursor(index){}


let cursor = new ArrowPointer()

// 鼠标移动
document.onmousemove = e => {

}
 
// 触摸移动
document.ontouchmove = e => {

}

document.onclick = e => {

}