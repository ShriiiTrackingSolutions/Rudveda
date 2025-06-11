// WhatsApp URL Adjuster (Responsive)
(function () {
  const whatsappLinks = [
    "https://web.whatsapp.com/send?phone=919429184432",
    "https://api.whatsapp.com/send?phone=919429184432"
  ];

  function updateWhatsAppLink() {
    const isMobile = window.innerWidth <= 767.98;
    document.querySelectorAll(".set-url-target").forEach(el =>
      el.setAttribute("href", whatsappLinks[isMobile ? 1 : 0])
    );
  }

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateWhatsAppLink, 200);
  });

  updateWhatsAppLink(); // Call on load
})();

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  loadHeaderFooter(() => {
    highlightActiveLink();
    initHeaderBehavior();
    initMobileNavToggle();
    document.querySelector(".year").textContent = new Date().getFullYear();
  });
});

// Load Header and Footer
function loadHeaderFooter(callback) {
  document.getElementById("header").innerHTML = `  <nav class="mynavbar bg-light">
              <div class="container-fluid header">
                <a class="brandLogo" href="index.html">
                  <img src="image/RudvedaLogo.webp" alt="Rudveda Logo">
                </a>
                <button class="navToggle">
                  <i class="fa fa-bars" aria-hidden="true"></i>
                </button>
                <ul class="navMenu mx-auto mb-2 mb-lg-0">
                  <li class="nav-close">
                    <button class="btn-nav-close"><span class="close-btn">+</span></button>
                  </li>
                  <li class="navLi"><a class="navLink" href="index.html">Home</a></li>
                  <li class="navLi"><a class="navLink" href="Yoga.html">Yoga</a></li>
                  <li class="navLi"><a class="navLink" href="ayurveda.html">Ayurveda</a></li>
                  <li class="navLi"><a class="navLink" href="panchkarma.html">Panchkarma</a></li>
                  <li class="navLi"><a class="navLink" href="https://shriiitrackingsolutions.github.io/Rudveda_Astro/">Astrology</a></li>
                  <li class="navLi"><a class="navLink" href="mentalHealthAyurveda.html">Mental Health</a></li>
                  <li class="navLi"><a href="vastu.html" class="navLink">Vastu</a></li>
                  <li class="navLi"><a href="gurukulSanskar.html" class="navLink">Gurukul Sanskar</a></li>
                  <li class="navLi"><a href="contact.html" class="navLink">Contact</a></li>
                </ul>
              </div>
            </nav>
`; // Keep your current header HTML here
  document.getElementById("footer").innerHTML = `<div class="container">
        <div class="container">
        <div class="footWrap defaultPadding">
             <a href="" class="footerBrandLogo"><img src="image/RudvedaLogoWhite.webp" alt="Rudveda Logo"></a>
              <div class="socialIons">
                <a target="_blank" href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a>
                <a target="_blank" href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a>
                <a target="_blank" href="https://www.youtube.com/"><i class="fa-brands fa-youtube"></i></a>
                <a target="_blank" href="https://x.com/"><i class="fa-brands fa-x-twitter"></i></a>
              </div>
              <div class="footerContacts mt-5">
                <div class="row">
                  <div class="col-lg-4">
                    <div class="callLinkwrap">
                      <div class="footConIcon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34px" height="34px" viewBox="0 0 256 256"><path fill="currentColor" d="M146.2 46.45a6 6 0 0 1 7.35-4.25a84.24 84.24 0 0 1 60.25 60.25a6 6 0 0 1-4.25 7.35a6 6 0 0 1-1.55.2a6 6 0 0 1-5.8-4.45a72.34 72.34 0 0 0-51.75-51.75a6 6 0 0 1-4.25-7.35m-3.75 39.35C157 89.68 166.32 99 170.2 113.55A6 6 0 0 0 176 118a6 6 0 0 0 1.55-.2a6 6 0 0 0 4.25-7.35c-5-18.71-17.54-31.25-36.25-36.25a6 6 0 1 0-3.1 11.6m79.44 97A54.25 54.25 0 0 1 168 230C89.7 230 26 166.3 26 88a54.25 54.25 0 0 1 47.17-53.89a14 14 0 0 1 14.56 8.39l21.1 47.1a14 14 0 0 1-1.12 13.28a6 6 0 0 1-.42.57l-21.07 25.06a1.89 1.89 0 0 0 0 1.67c7.66 15.68 24.1 32 40 39.65a1.88 1.88 0 0 0 1.68-.06l24.69-21a5 5 0 0 1 .56-.42a14 14 0 0 1 13.28-1.22l47.24 21.17a14 14 0 0 1 8.22 14.53ZM210 181.32a2 2 0 0 0-1.21-2l-47.25-21.17a1.92 1.92 0 0 0-1.6.1l-24.68 21c-.18.15-.37.29-.56.42a14 14 0 0 1-13.77 1c-18.36-8.87-36.66-27-45.53-45.19a14 14 0 0 1 .91-13.73a5 5 0 0 1 .43-.57l21.05-25.09a2 2 0 0 0 0-1.67L76.74 47.31A2 2 0 0 0 74.9 46h-.23A42.24 42.24 0 0 0 38 88c0 71.68 58.32 130 130 130a42.24 42.24 0 0 0 42-36.68"/></svg>
                      </div>
                      <div class="footConText">
                        <h5 class="fifthH">Call Us</h5>
                        <a class="footerLinkHover" target="_blank" href="tel:+919429184432"> +91 94291 84432</a>
                       
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="callLinkwrap">
                      <div class="footConIcon">
                       <svg xmlns="http://www.w3.org/2000/svg" width="34px" height="34px" viewBox="0 0 24 24"><path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5h14.77q.69 0 1.152.463T21 6.616v10.769q0 .69-.463 1.153T19.385 19zM12 12.116L4 6.885v10.5q0 .269.173.442t.443.173h14.769q.269 0 .442-.173t.173-.443v-10.5zM12 11l7.692-5H4.308zM4 6.885V6v11.385q0 .269.173.442t.443.173H4z"/></svg>
                      </div>
                      <div class="footConText">
                        <h5 class="fifthH">Mail Us</h5>
                        <a class="footerLinkHover" target="_blank" href="mailto:rudveda4@yoga.com">rudveda4@yoga.com</a>  
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="callLinkwrap">
                      <div class="footConIcon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="34px" height="34px" viewBox="0 0 32 32"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="16" cy="11" r="4"/><path d="M24 15c-3 7-8 15-8 15s-5-8-8-15s2-13 8-13s11 6 8 13"/></g></svg>
                      </div>
                      <div class="footConText">
                        <h5 class="fifthH">Main Center</h5>
                        <a class="footerLinkHover" target="_blank" href="https://maps.app.goo.gl/QuEBXvCtkPd3TiQA9">202 Siddharth Patel Square, Near HDFC BANK, Malhar Point, OP Road, Vadodara, 390015</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="footerPageLinks">
                <a class="footerLinkHover" href="index.html">Home</a>
                <a class="footerLinkHover" href="panchkarma.html">Panchkarma</a>
                <a class="footerLinkHover" href="gurukulSanskar.html">Gurukul Sanskar</a>
                <a class="footerLinkHover" href="contact.html">Contact</a>
              </div>
        </div>
      </div>
      <div class="f-bottom">
        <div class="container">
          <div class="row ">
            <div class="col-12">
              <div class="inner">
                <div class="copyright text-center"> <span class="year"></span>  All Rights Reserved by Rudveda | Developed by <a href="https://shriiitrackingsolution.in/" target="_blank">
                    <b>Shriii&nbsp;Tracking&nbsp;Solution</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> `; // Keep your current footer HTML here
  callback?.();
}

// Highlight current page in navbar
function highlightActiveLink() {
  const current = (window.location.pathname.split("/").pop() || "index.html").split("?")[0];
  document.querySelectorAll(".navLink").forEach(link => {
    const href = link.getAttribute("href")?.split("?")[0];
    if (!href || href === "#") return;
    if (href === current) {
      link.classList.add("active");
      link.closest(".dropdownList")?.closest(".navLi")?.querySelector(".navLink")?.classList.add("active");
    }
  });
}

// Sticky Header on Scroll
function initHeaderBehavior() {
  const header = document.getElementById("main-header");
  const belowContent = document.getElementById("headBelowContent");

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const stickyStart = header.offsetTop + header.offsetHeight + 5;
    const resetPoint = belowContent.offsetTop + belowContent.offsetHeight + 4;

    if (scrollTop > stickyStart) {
      header.classList.add("sticky-header", "visible");
      header.classList.remove("headerAnimate");
    } else if (scrollTop < resetPoint) {
      header.classList.remove("sticky-header", "visible");
      header.classList.add("headerAnimate");
    }
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("load", handleScroll);
}

// Mobile Nav Toggle and Submenu
function initMobileNavToggle() {
  const toggleBtn = document.querySelector(".navToggle");
  const navMenu = document.querySelector(".navMenu");
  const closeBtn = document.querySelector(".btn-nav-close");

  toggleBtn?.addEventListener("click", () => navMenu.classList.toggle("active"));
  closeBtn?.addEventListener("click", () => navMenu.classList.remove("active"));

  document.querySelectorAll(".toggleSub").forEach(toggle => {
    toggle.addEventListener("click", e => {
      e.preventDefault();
      const submenu = toggle.closest(".navLi").querySelector(".dropdownList");

      // Close all others
      document.querySelectorAll(".dropdownList.open").forEach(menu => {
        if (menu !== submenu) menu.classList.remove("open");
      });

      submenu?.classList.toggle("open");
    });
  });
}


 