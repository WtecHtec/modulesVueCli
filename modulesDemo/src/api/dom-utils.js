
//判断当前元素是不是处于全屏状态 dom:标签对象
let isFullScreenOfDom = function (dom) {
    var isFull = false;
    if (dom) {
        var target = document.fullscreenElement
            || document.msFullscreenElement
            || document.mozFullScreenElement
            || document.webkitFullscreenElement;
        if (target === dom) {
            isFull = true;
        }
    }
    return isFull;
};

//设置标签对象进入全屏
let setFullScreenOfDom = function (dom) {
    if (dom) {
        let rfs = dom.requestFullScreen
            || dom.webkitRequestFullScreen
            || dom.mozRequestFullScreen
            || dom.msRequestFullscreen;
        if (typeof rfs != "undefined" && rfs) {
            rfs.call(dom);
        }
    }
};

//退出全屏
let exitFullScreen = function () {
    if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
        // IE 、360等浏览器退出全屏
        document.msExitFullscreen();
    } else if (document.cancelFullScreen) {
        document.cancelFullScreen();
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    } else {
        //浏览器不支持全屏API或已被禁用
    }
    return;
};

export default{
    isFullScreenOfDom:isFullScreenOfDom,
    setFullScreenOfDom:setFullScreenOfDom,
    exitFullScreen:exitFullScreen
};