$(function () {

     $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#toTopBtn').fadeIn();
        } else {
            $('#toTopBtn').fadeOut();
        }
    });

    $('#toTopBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false;
    });

    ScrollTrigger.matchMedia({


        // large
        "(min-width: 1025px)": function () {


            let i = 0;
            const mateMotion = gsap.timeline({
                scrollTrigger: {
                    trigger: ".sc-mate",
                    start: "0% 0%",
                    end: "+=300%",
                    pin: true,
                    scrub: 1,
                }
            })
            document.querySelectorAll('.sc-mate .line').forEach(element => {
                mateMotion
                    .to(element, {
                        delay: `0.${i}`,
                        width: '100%'
                    })
                i++;
            });



            const mateMotion2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".sc-mate",
                    start: "0% 0%",
                    end: "+=300%",
                    scrub: 1,
                }
            })
            mateMotion2
                .addLabel('a')
                .to('.run.student', {
                    left: '70%',
                }, 'a')
                .to('.run.mate', {
                    left: '80%',
                }, 'a')

        },
        // medium
        "(min-width: 768px) and (max-width: 1024px)": function () {

        },
        // small
        "(max-width: 767px)": function () {

            const whyList = document.querySelectorAll('.sc-why .why-list li')
            whyList.forEach(element => {
                xVal = element.dataset.x;

                const slogunMaotion = gsap.timeline({
                    scrollTrigger: {
                        trigger: element,
                        start: "0% 100%",
                        end: "100% 0%",
                        scrub: 1,
                    }
                })
                slogunMaotion.to(element, {
                    x: xVal
                })



            });

            const slogunMaotion = gsap.timeline({
                scrollTrigger: {
                    trigger: '.sc-company',
                    start: "0% 100%",
                    end: "100% 80%",
                    scrub: 1,
                }
            })
            slogunMaotion.from('.sc-company .list .item', {
                opacity: 0,
                stagger: 0.1,
                yPercent: 50,
                scale: 0.9

            })


        },
        // all
        "all": function () {

        }
    });



    const textMotion1 = gsap.timeline({

    })
    textMotion1
        .addLabel('a')
        .to('#textMotion1 .review-list', 50, { xPercent: -100, ease: 'none', repeat: -1 }, 'a')
        .to('#textMotion2 .review-list', 50, { xPercent: 100, ease: 'none', repeat: -1 }, 'a')


    $('.btn-menu').click(function () {
        $(this).toggleClass('active');
        $('.side-nav').toggleClass('active');
    })



    ScrollTrigger.create({
        trigger: "[data-theme]",
        start: "200px 0%",
        end: "100% 0%",
        markers: false,
        toggleClass: { targets: ".header", className: "fixed" }
    })



    $('.btn-family').click(function () {
        $('.group-family').toggleClass('on');
    })

})