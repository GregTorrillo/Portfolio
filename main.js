const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

// INTRO 
tl.to('.text', {y: '0%', duration: 1, stagger: 0.15 });
tl.to('.slider', {y: '-100%', duration: 1.5, delay: 1 });
tl.to('.intro', {y: '-100%', duration: .25 }, "-=1");
tl.fromTo('.nameContainer', { opacity: 0 }, { opacity: 1, duration: 2 }, "-=.5");


window.addEventListener('scroll', reveal);

function reveal(){
    let reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++){

        let windowheight = window.innerHeight;
        let revealtop = reveals[i].getBoundingClientRect().top;
        let revealpoint = 50;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

// PROJECT PAGE
tl.fromTo('.contentLeft', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=3.75");
tl.fromTo('.skillsWrapper', { opacity: 0 }, { opacity: 1, duration: 1 }, "-=3.75");

gsap.from("video", 1.5, {
    autoAlpha: 0,
    x: -200,
    y: 200,
    scale: 2,
    rotate: -15,
    delay: 0.3,
    ease: Power4.easeInOut
  });

  gsap.from(".contentRight img", 1.5, {
    autoAlpha: 0,
    x: -200,
    y: 200,
    scale: 2,
    rotate: -15,
    delay: 0.3,
    ease: Power4.easeInOut
  });


  pageTransition = () => {
    let timeline = gsap.timeline();

    timeline.to(".pageTransition", {
        duration: .35,
        height: "100%",
        top: "0%"
    });

    timeline.to(".pageTransition", {
        duration: .8,
        height: "100%",
        left: "100%",
        delay: .3
    });

    timeline.set(".pageTransition", {
        left: "100%"
    });
}

pageTransition()