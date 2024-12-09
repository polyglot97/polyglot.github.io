$(function(){

    
    // fontArr1 = [ 'Abril Fatface', 
    // 'Indie Flower', 'Julee', 
    // 'Nanum Myeongjo', 'Noto Serif Khojki',
    //  'Permanent Marker', 'DM Serif Display',
    //   'Courgette' ];
    // fontArr2 = [ 'Courgette', 'Abril Fatface', 'Nanum Myeongjo', 'DM Serif Display', 'Permanent Marker', 'Indie Flower', 'Noto Serif Khojki', 'Julee', ];
    
    // setInterval(() => {
    //     introText('#textAni1',fontArr1);
    //     introText('#textAni2',fontArr2);
    // }, 300*fontArr1.length);

    // introText('#textAni1',fontArr1);
    // introText('#textAni2',fontArr2);

    // function introText(frame,arr){
    //     for (let i = 0; i < arr.length; i++) {
    //         setTimeout(() => {
    //             $(frame).css('font-family',arr[i]);
    //         }, 300*i);
    //     }
    // }

    // var swiper = new Swiper(".sc-recruit .swiper", {
    //     slidesPerView:'auto',
    //     spaceBetween: 0,

    // });

    // $(window).scroll(function(){
    //     curr = $(this).scrollTop();
    //     if(curr ){

    //     }
    // })
    // $(window).trigger('scroll')

  
    
 



    

    

    ScrollTrigger.matchMedia({


        // large
        "(min-width: 1025px)": function() {

            
        let i = 0;
        const mateMotion = gsap.timeline({
            scrollTrigger:{
                trigger:".sc-mate",
                start:"0% 0%",
                end:"+=300%",
                pin:true,
                scrub:1,
            }
        })
        document.querySelectorAll('.sc-mate .line').forEach(element => {
            mateMotion
            .to(element,{
                delay:`0.${i}`,
                width:'100%'
            })
            i++;
        });



            const mateMotion2 = gsap.timeline({
                scrollTrigger:{
                    trigger:".sc-mate",
                    start:"0% 0%",
                    end:"+=300%",
                    scrub:1,
                }
            })
            mateMotion2
            .addLabel('a')
            .to('.run.student',{
                left:'70%',
            },'a')
            .to('.run.mate',{
                left:'80%',
            },'a')
        
        },
        // medium
        "(min-width: 768px) and (max-width: 1024px)": function() {
        
        },
        // small
        "(max-width: 767px)": function() {

            const whyList = document.querySelectorAll('.sc-why .why-list li')
            whyList.forEach(element => {
                xVal = element.dataset.x;
                
                const slogunMaotion = gsap.timeline({
                    scrollTrigger:{
                        trigger:element,
                        start:"0% 100%",
                        end:"100% 0%",
                        scrub:1,
                    }
                })
                slogunMaotion.to(element,{
                    x:xVal
                })

                

            });


            
                
                const slogunMaotion = gsap.timeline({
                    scrollTrigger:{
                        trigger:'.sc-company',
                        start:"0% 100%",
                        end:"100% 80%",
                        scrub:1,
                    }
                })
                slogunMaotion.from('.sc-company .list .item',{
                    opacity:0,
                    stagger:0.1,
                    yPercent:50,
                    scale:0.9   

                })

                



            


              
        },
        // all
        "all": function() {
          
        }
      });

      

    const textMotion1 = gsap.timeline({

    })
    textMotion1
    .addLabel('a')
    .to('#textMotion1 .review-list',50,{xPercent:-100,ease:'none',repeat:-1},'a')
    .to('#textMotion2 .review-list',50,{xPercent:100,ease:'none',repeat:-1},'a')


    $('.btn-menu').click(function(){
        $(this).toggleClass('active');
        $('.side-nav').toggleClass('active');
    })

    // $('.sc-reivew .contents').hover(function(){
    //     textMotion1.pause()
    // },function(){
    //     textMotion1.play()
    // })


    // $(window).scroll(function(){
    //     var st = $(this).scrollTop();
    //     if (st > lastScrollTop){
            
    //     } else {
    //         console.log('scroll up');
    //     }

    //     // var $loop = setInterval(function () {
    //     //     curr = $(window).scrollTop();
    //     //     xVal += 0.1;
    //     //     if(xVal >=100){
    //     //         xVal = 0;
    //     //     }
    //     //     $('#textMotion1 .review-list').css('transform', `translateX(-${xVal}%)`);
    //     // }, 10);


    //     lastScrollTop = st;
    //  });
    // xxx=0;
    // var $loop = setInterval(function () {
    //     xxx+=0.1;
    //     gsap.to('#textMotion1 .review-list',{xPercent:-xxx,ease:'none'})
    //     // curr = $(window).scrollTop();
        
    //     // if(xVal >=100){ //100%가되면 초기화
    //     //     xVal = 0;
    //     // }
    //     // $('#textMotion1 .review-list').css('transform', `translateX(-${xVal}%)`);
    // }, 1);

    // ScrollTrigger.create({
    //     trigger:".sc-reivew",
    //     start:"0% 0%",
    //     end:"100% 0%",
    //     markers:true,
    //     // onEnter:function(){}
    //     onUpdate:function(self){
    //         let xVal = 0;
    //          if(self.direction >= 1){
    //             gsap.to('#textMotion1 .review-list',10,{xPercent:-100,ease:'none',repeat:-1})
    //         }else{
    //             gsap.to('#textMotion1 .review-list',10,{xPercent:100,ease:'none',repeat:-1})
    //         }

            

    //         // var $loop = setInterval(function () {
    //             // curr = $(window).scrollTop();
                
               
              
    //             // if(xVal >=100){ //100%가되면 초기화
    //             //     xVal = 0;
    //             // }
    //             // $('#textMotion1 .review-list').css('transform', `translateX(-${xVal}%)`);
    //         // }, 1);

    //     }
    // })



    //  var $moveX = 0,
    //  $xp = 0;
    // var xPos = 0;
    // var trigger = true;
    // var currentValue = 0,
    // currentValue2 = 0;
    
    // let xVal = 0;
    // let lastScroll  = 0;

    // let curr = $(window).scrollTop();
    // let lastScrollTop = 0;

   

   



    // const mateMotion = gsap.timeline({
    //     scrollTrigger:{
    //         trigger:".sc-mate",
    //         start:"0% 0%",
    //         end:"+=300%",
    //         markers:true,
    //         pin:true,
    //         scrub:1,
    //     }
    // })

    // mateMotion
 



    ScrollTrigger.create({
        trigger:"[data-theme]",
        start:"200px 0%",
        end:"100% 0%",
        markers:false,
        toggleClass: {targets: ".header", className: "fixed"}
    })



    $('.btn-family').click(function(){
        $('.group-family').toggleClass('on');
    })

})