/**
* Template Name: iPortfolio - v3.10.0
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/



(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Hero type effect
   */
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  /**
   * Skills animation
   */
  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()

alert("Hello there!!!!...If you need help the virtual asistant is on the Help buton on the side menu");


  function myFunction() {
    let text;
  let person = prompt("Im, Roxane, Im a Virtual Asistant, Can you tellme your name?:", "");
  if (person == null || person == "") {
    text = "User cancelled the prompt.";
  } else {
    text = "Hello " + person + " nice to meet you, im here to help you with anything you need.";
  }
  alert(text);
  let responseone = prompt("There is something that i can help you?:", "Yes = contunue, No=back to page, Help = examples");
  switch(responseone){
    case "yes":
      let respuestasi = prompt("What can i do for you? or what is your question? (if you need help type help):", "Please if you are gona ask something put ? at the end");
      let dobleclick = ["Please if you are gona ask something put ? at the end"]
      const keywordstwo = ["como te llamas","names", "what is your name", "your name","your name is lucy", "cual es tu nombre", "tu nombre", "como te llamabas","Lucy" + "?"]
      const keywords = ["nombre completo", "name", "name of your develop","who create you","who are you","who program you", "program","programs", "nombre","nombre de tu creador","quien te creo","quien te hizo","te programo" + "?"]
      const keywordsaño = ["año", "edad", "Age", "year", "cuantos años", "how old" + "?"]
      const keywordshelp = ["ayuda", "help", "nose", "i dont know", "idk", "h" + "?"]
      const keywordsgood = ["lenguages?", "what lenguages Victor know?", "what lenguages", "lenguages that Victor", "lenguages victor", "lenguages that victor", "lenguages that victor knows" + "?"]
      const keywordsenglish = ["idiom", "english", "ingles", "Victor knows english", "idioma"+ "?"]
      const text = respuestasi
      const textLucy = respuestasi
      if( keywords.some(keyword => text.includes(keyword) )) {
      console.log("Found")
      window.confirm("Who creates me?");
      if (confirm("Who creates me?")) {
       alert("I was develop by Victor Manuel Velazquez Rodriguez with JavaScript and Html.")
      } else {
        alert("Lo lamento no comprendo...")
      }
      }
      if( keywordstwo.some(keyword => textLucy.includes(keyword) )) {
        console.log("Found")
        window.confirm("Are you asking my name?");
        if (confirm("Are you asking my name?")) {
         alert("My name is Lucy :*")
        } else {
          alert("Im sorry i cant understand, if you need me im in the side menu on Help button")
        }
      }
      if( dobleclick.some(keyword => textLucy.includes(keyword) )) {
        console.log("Found")
        window.confirm("OK...Cool, let me know if there is something i can do for you");
        if (confirm("OK...Cool, let me know if there is something i can do for you")) {
         alert("Im in the menu side, on Help button")
        } else {
          alert("Im sorry i cant understand, if you need me im in the side menu on Help button")
        }
      }
      if( keywordsaño.some(keyword => textLucy.includes(keyword) )) {
        console.log("Found")
        window.confirm("The Age of Victor Velazquez?");
        if (confirm("The Age of Victor Velazquez?")) {
         alert("He Born on November of 1999 he is currently 23 years old.")
        } else {
          alert("Im sorry i cant understand, if you need me im in the side menu on Help button")
        }
      }
      if( keywordshelp.some(keyword => textLucy.includes(keyword) )) {
        console.log("Found")
        window.confirm("You need some help?");
        if (confirm("You need some help?")) {
         alert("If you need some help i can give you some examples: insert -name?, -your name?, -what is your name?, -who creates you?, -Age?, -lenguages?, -what lenguages Victor know? -is good Victor at C#?.")
        } else {
          alert("Im sorry i cant understand, if you need me im in the side menu on Help button")
        }
      }
      if( keywordsgood.some(keyword => textLucy.includes(keyword) )) {
        console.log("Found")
        window.confirm("Lenguages that Victor know?");
        if (confirm("Lenguages that Victor know?")) {
         alert("Victor knows Javascript and C#/C++ very well, and other lenguages like Dart and Python fairly good")
        } else {
          alert("Im sorry i cant understand, if you need me im in the side menu on Help button")
        }
      }
      if( keywordsenglish.some(keyword => textLucy.includes(keyword) )) {
        console.log("Found")
        window.confirm("Are you asking me if Victor knows english?");
        if (confirm("Are you asking me if Victor knows english?")) {
         alert("Of course they know very well, we are talking in english.")
        } else {
          alert("Im sorry i cant understand, if you need me im in the side menu on Help button")
        }
      }
      break;
    case "Yes":
      if( keywords.some(keyword => text.includes(keyword) )) {
      console.log("Found")
      window.confirm("Who creates me?");
      if (confirm("Who creates me?")) {
       alert("I was develop by Victor Manuel Velazquez Rodriguez with JavaScript and Html.")
      } else {
        alert("Lo lamento no comprendo...")
      }
      }
      if( keywordstwo.some(keyword => textLucy.includes(keyword) )) {
        console.log("Found")
        window.confirm("Are you asking my name?");
        if (confirm("Are you asking my name?")) {
         alert("My name is Lucy :*")
        } else {
          alert("Im sorry i cant understand, if you need me im in the side menu on Help button")
        }
      }
      if( dobleclick.some(keyword => textLucy.includes(keyword) )) {
        console.log("Found")
        window.confirm("OK...Cool, let me know if there is something i can do for you");
        if (confirm("OK...Cool, let me know if there is something i can do for you")) {
         alert("Im in the menu side, on Help button")
        } else {
          alert("Im sorry i cant understand, if you need me im in the side menu on Help button")
        }
      }
      if( keywordsaño.some(keyword => textLucy.includes(keyword) )) {
        console.log("Found")
        window.confirm("The Age of Victor Velazquez?");
        if (confirm("The Age of Victor Velazquez?")) {
         alert("He Born on November of 1999 he is currently 23 years old.")
        } else {
          alert("Im sorry i cant understand, if you need me im in the side menu on Help button")
        }
      }
      if( keywordshelp.some(keyword => textLucy.includes(keyword) )) {
        console.log("Found")
        window.confirm("You need some help?");
        if (confirm("You need some help?")) {
         alert("If you need some help i can give you some examples: insert -name?, -your name?, -what is your name?, -who creates you?, -Age?, -lenguages?, -what lenguages Victor know? -is good Victor at C#?.")
        } else {
          alert("Im sorry i cant understand, if you need me im in the side menu on Help button")
        }
      }
      if( keywordsgood.some(keyword => textLucy.includes(keyword) )) {
        console.log("Found")
        window.confirm("Lenguages that Victor know?");
        if (confirm("Lenguages that Victor know?")) {
         alert("Victor knows Javascript and C#/C++ very well, and other lenguages like Dart and Python fairly good")
        } else {
          alert("Im sorry i cant understand, if you need me im in the side menu on Help button")
        }
      }
      if( keywordsenglish.some(keyword => textLucy.includes(keyword) )) {
        console.log("Found")
        window.confirm("Are you asking me if Victor knows english?");
        if (confirm("Are you asking me if Victor knows english?")) {
         alert("Of course they know very well, we are talking in english.")
        } else {
          alert("Im sorry i cant understand, if you need me im in the side menu on Help button")
        }
      }
        break;
    case "No":
      alert("ok, im in the side menu, in the Help button");
      break;
    case "no":
      alert("ok, im in the side menu, in the Help button");
      break;
      case "":
        alert("Ok, if you needme im in the left menue in the Help button");
      break;
      case "Help":
        window.confirm("You need some help?");
        if (confirm("You need some help?")) {
         alert("If you need some help i can give you some examples: insert -name?, -your name?, -what is your name?, -who creates you?, -Age?, -lenguages?, -what lenguages Victor know? -is good Victor at C#?. (to open me again, click in the help button in the side menu.)")
        } else {
          alert("Im sorry i cant understand, if you need me im in the side menu on Help button")
        }
      break;
      case "help":
        window.confirm("You need some help?");
        if (confirm("You need some help?")) {
         alert("If you need some help i can give you some examples: insert -name?, -your name?, -what is your name?, -who creates you?, -Age?, -lenguages?, -what lenguages Victor know? -is good Victor at C#?. (to open me again, click in the help button in the side menu.))")
        } else {
          alert("Im sorry i cant understand, if you need me im in the side menu on Help button")
        }
      break;
  }
}
  


