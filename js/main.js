window._wpemojiSettings = {
  baseUrl: "https://s.w.org/images/core/emoji/16.0.1/72x72/",
  ext: ".png",
  svgUrl: "https://s.w.org/images/core/emoji/16.0.1/svg/",
  svgExt: ".svg",
  source: {
    concatemoji:
      "./js/wp-emoji-release.min.js?ver=4bc7e34cee88072655e34415f8630486",
  },
};

var mytheme_urls = {
  theme_base_url: "./",
  framework_base_url: "./",
  ajaxurl: "#",
  url: "#",
  scroll: "disable",
  stickynav: "enable",
  is_admin: "",
  skin: "orange",
  layout: "wide",
  isResponsive: "enable",
  layout_pattern: "",
};

!(function (s, n) {
  var o, i, e;

  function c(e) {
    try {
      var t = {
        supportTests: e,
        timestamp: new Date().valueOf(),
      };
      sessionStorage.setItem(o, JSON.stringify(t));
    } catch (e) {}
  }

  function p(e, t, n) {
    e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0);
    var t = new Uint32Array(
        e.getImageData(0, 0, e.canvas.width, e.canvas.height).data
      ),
      a =
        (e.clearRect(0, 0, e.canvas.width, e.canvas.height),
        e.fillText(n, 0, 0),
        new Uint32Array(
          e.getImageData(0, 0, e.canvas.width, e.canvas.height).data
        ));
    return t.every(function (e, t) {
      return e === a[t];
    });
  }

  function u(e, t) {
    e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.fillText(t, 0, 0);
    for (var n = e.getImageData(16, 16, 1, 1), a = 0; a < n.data.length; a++)
      if (0 !== n.data[a]) return !1;
    return !0;
  }

  function f(e, t, n, a) {
    switch (t) {
      case "flag":
        return n(
          e,
          "\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f",
          "\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f"
        )
          ? !1
          : !n(
              e,
              "\ud83c\udde8\ud83c\uddf6",
              "\ud83c\udde8\u200b\ud83c\uddf6"
            ) &&
              !n(
                e,
                "\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f",
                "\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f"
              );
      case "emoji":
        return !a(e, "\ud83e\udedf");
    }
    return !1;
  }

  function g(e, t, n, a) {
    var r =
        "undefined" != typeof WorkerGlobalScope &&
        self instanceof WorkerGlobalScope
          ? new OffscreenCanvas(300, 150)
          : s.createElement("canvas"),
      o = r.getContext("2d", {
        willReadFrequently: !0,
      }),
      i = ((o.textBaseline = "top"), (o.font = "600 32px Arial"), {});
    return (
      e.forEach(function (e) {
        i[e] = t(o, e, n, a);
      }),
      i
    );
  }

  function t(e) {
    var t = s.createElement("script");
    (t.src = e), (t.defer = !0), s.head.appendChild(t);
  }
  "undefined" != typeof Promise &&
    ((o = "wpEmojiSettingsSupports"),
    (i = ["flag", "emoji"]),
    (n.supports = {
      everything: !0,
      everythingExceptFlag: !0,
    }),
    (e = new Promise(function (e) {
      s.addEventListener("DOMContentLoaded", e, {
        once: !0,
      });
    })),
    new Promise(function (t) {
      var n = (function () {
        try {
          var e = JSON.parse(sessionStorage.getItem(o));
          if (
            "object" == typeof e &&
            "number" == typeof e.timestamp &&
            new Date().valueOf() < e.timestamp + 604800 &&
            "object" == typeof e.supportTests
          )
            return e.supportTests;
        } catch (e) {}
        return null;
      })();
      if (!n) {
        if (
          "undefined" != typeof Worker &&
          "undefined" != typeof OffscreenCanvas &&
          "undefined" != typeof URL &&
          URL.createObjectURL &&
          "undefined" != typeof Blob
        )
          try {
            var e =
                "postMessage(" +
                g.toString() +
                "(" +
                [
                  JSON.stringify(i),
                  f.toString(),
                  p.toString(),
                  u.toString(),
                ].join(",") +
                "));",
              a = new Blob([e], {
                type: "text/javascript",
              }),
              r = new Worker(URL.createObjectURL(a), {
                name: "wpTestEmojiSupports",
              });
            return void (r.onmessage = function (e) {
              c((n = e.data)), r.terminate(), t(n);
            });
          } catch (e) {}
        c((n = g(i, f, p, u)));
      }
      t(n);
    })
      .then(function (e) {
        for (var t in e)
          (n.supports[t] = e[t]),
            (n.supports.everything = n.supports.everything && n.supports[t]),
            "flag" !== t &&
              (n.supports.everythingExceptFlag =
                n.supports.everythingExceptFlag && n.supports[t]);
        (n.supports.everythingExceptFlag =
          n.supports.everythingExceptFlag && !n.supports.flag),
          (n.DOMReady = !1),
          (n.readyCallback = function () {
            n.DOMReady = !0;
          });
      })
      .then(function () {
        return e;
      })
      .then(function () {
        var e;
        n.supports.everything ||
          (n.readyCallback(),
          (e = n.source || {}).concatemoji
            ? t(e.concatemoji)
            : e.wpemoji && e.twemoji && (t(e.twemoji), t(e.wpemoji)));
      }));
})((window, document), window._wpemojiSettings);

// ===============================
// MENU DINÁMICO
// ===============================
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = [
    { text: "Inicio", href: "index.html", class: "mustard current-menu-item" },
    { text: "Portafolio", href: "index.html#portafolio", class: "red" },
    { text: "Staff", href: "index.html#staff", class: "green" },
    { text: "Eventos", href: "index.html#eventos", class: "pink" },
    { text: "Contacto", href: "index.html#contacto", class: "lavender" },
  ];

  const socialIcons = [
    { icon: "facebook", title: "Facebook" },
    { icon: "dribbble", title: "Dribbble" },
    { icon: "flickr", title: "Flickr" },
    { icon: "technorati", title: "Technorati" },
  ];

  // =========================
  // HEADER
  // =========================
  const header = document.getElementById("header");
  if (!header) return;

  header.className = "header1";

  const headerContainer = document.createElement("div");
  headerContainer.className = "container";

  // LOGO
  const logoDiv = document.createElement("div");
  logoDiv.className = "logo";

  const logoLink = document.createElement("a");
  logoLink.href = "index.html";
  logoLink.title = "Vianney";

  const normalLogo = document.createElement("img");
  normalLogo.className = "normal_logo";
  normalLogo.src = "./img/logo.png";
  normalLogo.alt = "Vianney";

  const retinaLogo = document.createElement("img");
  retinaLogo.className = "retina_logo";
  retinaLogo.src = "./img/logo@2x.png";
  retinaLogo.alt = "Vianney";
  retinaLogo.style.width = "227px";
  retinaLogo.style.height = "47px";

  logoLink.appendChild(normalLogo);
  logoLink.appendChild(retinaLogo);
  logoDiv.appendChild(logoLink);

  // INFO CONTACTO
  const headerInfo = document.createElement("div");
  headerInfo.className = "header-more-info contact-details";

  const topRight = document.createElement("div");
  topRight.className = "top-right";

  topRight.innerHTML = `
    <p class="dt-sc-contact-info">
      <span class="fa fa-user"></span>
      <a href="mailto:admin@kidslife.com">admin@kidslife.com</a>
    </p>
    <p class="dt-sc-contact-info">
      <span class="fa fa-phone"></span>+91 1234567890
    </p>
  `;

  headerInfo.appendChild(topRight);

  headerContainer.appendChild(logoDiv);
  headerContainer.appendChild(headerInfo);

  // =========================
  // MENU
  // =========================
  const menuContainer = document.createElement("div");
  menuContainer.id = "menu-container";

  const menuInner = document.createElement("div");
  menuInner.className = "container";

  const nav = document.createElement("nav");
  nav.id = "main-menu";

  const toggle = document.createElement("div");
  toggle.id = "dt-menu-toggle";
  toggle.className = "dt-menu-toggle";
  toggle.innerHTML = `Menu <span class="dt-menu-toggle-icon"></span>`;

  const ulMenu = document.createElement("ul");
  ulMenu.id = "menu-main-menu";
  ulMenu.className = "menu";

  menuItems.forEach((item) => {
    const li = document.createElement("li");
    li.className = `${item.class} menu-item menu-item-depth-0 menu-item-simple-parent`;

    const a = document.createElement("a");
    a.href = item.href;
    a.textContent = item.text;

    li.appendChild(a);
    ulMenu.appendChild(li);
  });

  nav.appendChild(toggle);
  nav.appendChild(ulMenu);

  const ulSocial = document.createElement("ul");
  ulSocial.className = "dt-sc-social-icons";

  socialIcons.forEach((social) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <a class="dt-sc-tooltip-top ${social.icon}" href="#" title="${social.title}" target="_blank">
        <span class="fa fa-${social.icon}"></span>
      </a>
    `;
    ulSocial.appendChild(li);
  });

  menuInner.appendChild(nav);
  menuInner.appendChild(ulSocial);
  menuContainer.appendChild(menuInner);

  header.appendChild(headerContainer);
  header.appendChild(menuContainer);

  // =========================
  // COPYRIGHT
  // =========================
  const copyrightEl = document.querySelector(".copyright");
  if (copyrightEl) {

    const currentYear = new Date().getFullYear();
    copyrightEl.innerHTML = "";

    const container = document.createElement("div");
    container.className = "container";

    // INFO
    const info = document.createElement("div");
    info.className = "copyright-info";
    info.innerHTML = `
        &copy; ${currentYear} Vianney. All rights reserved.
        Design by <a href="#" target="_blank">amvsoft.tech</a>
    `;

    // FOOTER LINKS
    const footerLinks = document.createElement("div");
    footerLinks.className = "footer-links";

    const followText = document.createElement("p");
    followText.textContent = "Follow us";

    const ulSocial = document.createElement("ul");
    ulSocial.className = "dt-sc-social-icons";

    const footerSocials = [
        { name: "facebook", img: "./img/facebook.png" },
        { name: "dribbble", img: "./img/dribbble.png" },
        { name: "flickr", img: "./img/flickr.png" },
        { name: "technorati", img: "./img/technorati.png" }
    ];

    footerSocials.forEach(social => {
        const li = document.createElement("li");
        li.className = social.name;
        li.innerHTML = `
        <a href="#" target="_blank" title="${social.name}">
            <img src="${social.img}" alt="${social.name}" />
        </a>
        `;
        ulSocial.appendChild(li);
    });

    footerLinks.appendChild(followText);
    footerLinks.appendChild(ulSocial);

    // ARMAR ESTRUCTURA
    container.appendChild(info);
    container.appendChild(footerLinks);
    copyrightEl.appendChild(container);
  }


  var lsjQuery = jQuery;
  lsjQuery(document).ready(function () {
    if (typeof lsjQuery.fn.layerSlider == "undefined") {
      if (window._layerSlider && window._layerSlider.showNotice) {
        window._layerSlider.showNotice("layerslider_1", "jquery");
      }
    } else {
      lsjQuery("#layerslider_1").layerSlider({
        sliderVersion: "",
        responsiveUnder: 1170,
        layersContainer: 1170,
        hideUnder: 0,
        hideOver: 100000,
        pauseOnHover: "on",
        skin: "",
        skinsPath: "./",
        type: "responsive",
        showCircleTimer: false,
      });
    }
  });
});
