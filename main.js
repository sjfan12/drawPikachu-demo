!function () {
    function writeCode(prefix, code, fn) {
        let domCode = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n=0;

        let id = setInterval(()=>{
            n+=1;
            domCode.innerHTML = prefix + code.substring(0,n)
            styleTag.innerHTML = prefix + code.substring(0,n)
            domCode.scrollTop = domCode.scrollHeight
            if (n >= code.length){
                window.clearInterval(id)
                fn.call()
            }
        },10)
    }

    var result= `/*我们来画一只皮卡丘吧*/
    /*首先我们先画一个鼻子*/
    .nose{
    width: 0px;
    height: 0px;
    border: 11px solid;
    border-radius: 50%;
    border-color: black  transparent transparent;
    position: absolute;
    left: 50%;
    margin-left: -11px;
    top: 28px;
}
/*然后我们画眼睛*/
.eye{
    border: 2px solid black;
    width: 49px;
    height: 49px;
    background: #2E2E2E;
    border-radius: 50%;
    position: absolute;
}
/*左眼来了哟*/
.eye.left{
    right: 50%;
    margin-right: 90px;
}
/*右眼来了哟*/
.eye.right{
    left: 50%;
    margin-left: 90px;

}
.eye::before{
    content:'';
    display: block;
    border: 2px solid #000;
    width: 24px;
    height: 24px;
    background: white;
    border-radius: 50%;
    position: absolute;
    left: 6px;
    top: -1px;
}
/*来打个腮红*/
.face{
    border: 2px solid black;
    width: 68px;
    height: 68px;
    background: #FC0D1C;
    border-radius: 50%;
    position: absolute;
}
/*左腮红给你画上哟*/
.face.left{
    right: 50%;
    margin-right: 116px;
    top: 85px;
}
/*右腮红给你画上哟*/
.face.right{
    left: 50%;
    margin-left: 116px;
    top: 85px;
}
/*小嘴巴怎么少的了*/
.uplip{
    width: 80px;
    height: 20px;
    border: 2px solid black;
    position: absolute;
    background: #FEE433;
    z-index: 1;
}
/*上嘴唇给你画上*/
.uplip.left{
    border-bottom-left-radius: 40px 20px;
    border-top: none;
    border-right: none;
    right: 50%;
    transform: rotate(-20deg);
    top: 52px;
}
.uplip.right{
    border-bottom-right-radius: 40px 20px;
    border-top: none;
    border-left: none;
    left: 50%;
    transform: rotate(20deg);
    top: 52px;
}
/*但是这只皮卡丘有点开心*/
.lowerLip{
    width: 150px;
    height: 3000px;
    background: #990513;
    border-radius: 100px/480px;
    border: 2px solid black;
    position: absolute;
    bottom: 0px;
    overflow:hidden;
}
/*嘴巴笑的都咧开了*/
.lowerLip-wrapper{
    width:150px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -77px;
    overflow: hidden;
    height: 106px;

}
/*都看到小红舌头了*/
.lowerLip::after{
    content: '';
    position: absolute;
    bottom: -20px;
    width:100px;
    height: 100px;
    border-radius: 50px;
    left: 50%;
    margin-left: -50px;
    background: red;
}
/*好了，一只皮卡丘画好了*/
    
    `
    writeCode('',result)

}.call()