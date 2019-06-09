$(document).ready(function () {
    //相册图片组
    var mypic1 = ["images/pic1-1.jpg", "images/pic1-2.jpg", "images/pic1-3.jpg", "images/pic1-4.jpg", "images/pic1-5.jpg"]
    var mypic2=["images/pic2-1.jpg","images/pic2-2.jpg","images/pic2-2.jpg","images/pic2-4.jpg"]
    var mypic3=["images/pic3-1.jpg","images/pic3-2.jpg","images/pic3-3.jpg"]
    //当前图片下标
    var thispic = 0;
    //控制播放开关的变量
    var timer;
    $("#album1").mouseover(function(){
        timer = setInterval(function () {
            //每隔700毫秒依次循环显示相册中的图片
            thispic++;
            thispic = thispic % mypic1.length;
            album1.src = mypic1[thispic];
        }, 700);
    }).mouseout(function(){
        clearInterval(timer);
        thispic=0;
        album1.src=mypic1[thispic]
    });
    $("#album2").mouseover(function(){
        timer = setInterval(function () {
            //每隔700毫秒依次循环显示相册中的图片
            thispic++;
            thispic = thispic % mypic2.length;
            album2.src = mypic2[thispic];
        }, 700);
    }).mouseout(function(){
        clearInterval(timer);
        thispic=0;
        album2.src=mypic2[thispic]
    })
    $("#album3").mouseover(function(){
        timer = setInterval(function () {
            //每隔700毫秒依次循环显示相册中的图片
            thispic++;
            thispic = thispic % mypic3.length;
            album3.src = mypic3[thispic];
        }, 700);
    }).mouseout(function(){
        clearInterval(timer);
        thispic=0;
        album3.src=mypic3[thispic]
    })
})