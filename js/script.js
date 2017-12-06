$(document).ready(function(){
    $('#fullPage').fullpage({
        verticalCentered: false,
        //sectionsColor: ['aqua','crimson','green','darkviolet'],
        anchors: ['page1','page2','page3','page4'],
        navigation: false,
        recordHistory:false,
        //婊氬姩鍒版煇涓€灞忓悗浜х敓鐨勫姩鐢绘晥鏋�
        afterLoad: function(link, index){
            switch (index){
                case 1:
                    move('.section1 img').set('transform','translate(20px,-50%) scale(0.6)').set('transition','all 1s ease-out').end(function(){
                        move('.section1 img').set('transform','translate(20px,-50%) scale(1)').set('transition','all 0.6s ease-out').end();
                    });
                    move('.section1 .border').set('transform',' translateY(-50%) scale(1)').set('transition','all 1s ease-out').end();
                    break;
                case 2:
                     move('.section2 h1').set('transform','translateY(0)').set('transition','all 0.6s ease-out').end();
                     move('.section2 p').set('transform','translateY(0)').set('transition','all 1s ease-out').end();
                     move('.section2 p').set('line-height','35px').set('transition','all 1s ease-out').end();
                    break;
                case 3:
                    move('.section3 .author').set('transform','translateY(0)').set('transition','all 0.6s ease-out').end();
                    move('.section3 p').set('transform','translateY(0)').set('transition','all 0.6s ease-out').end();
                    move('.section3 p').set('line-height','35px').set('transition','all 1s ease-out').end();
                    break;
                case 4:
                    break;
                default :
                    break;
            }
        },
        //绂诲紑鏌愪竴灞忓悗鎭㈠鍒板垵濮嬫晥鏋�
        onLeave: function(link, index){
            switch (index){
                case 1:
                    move('.section1 img').set('transform','translate(50%,-100%) scale(0.6)').set('transition','all 0s').end();
                    move('.section1 .border').set('transform',' translateY(-50%) scale(1.8)').set('transition','all 0s').end();
                    break;
                case 2:
                    move('.section2 h1').set('transform','translateY(70px)').set('transition','all 0s').end();
                    move('.section2 p').set('transform','translateY(70px)').set('transition','all 0s').end();
                    move('.section2 p').set('line-height','60px').set('transition','all 0s').end();
                    break;
                case 3:
                    move('.section3 .author').set('transform','translateY(70px)').set('transition','all 0s').end();
                    move('.section3 p').set('transform','translateY(70px)').set('transition','all 0s').end();
                    move('.section3 p').set('line-height','60px').set('transition','all 0s').end();
                    break;
                case 4:
                    break;
                default :
                    break;
            }
        },
    })


});