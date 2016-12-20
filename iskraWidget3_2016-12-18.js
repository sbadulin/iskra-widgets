'use strict';

function PopUp(options) {
  var picLink = options.link || null;
  var picUrl = options.image || null;
  var showOnce = options.showOnce || false;
  var popupPosition = options.position || { x: 'center', y: 'center' };
  var popupStyle = '\n  display: block;\n  max-width: 100%;\n  max-height: 100%;\n  position: fixed;\n  z-index: 1000;\n  background: white;\n  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 4px, rgba(0, 0, 0, 0.2) -1px 0px 4px;\n transition: all .7s cubic-bezier(0.845, -0.265, 0.190, 1.280);';
  var closeButtonStyle = 'position: absolute; z-index: 3; top: 10px; right: 10px; background-color: white; width: 20px; height: 20px; cursor: pointer; align-items: center; justify-content: center; display: flex; border-radius: 20px;';

  function init() {
    handlers.showPopup();
  }

  function setEventListeners() {
    var figure = document.getElementById('iskraPopup');
    figure.addEventListener('click', function (event) {
      if (event.target.parentNode.id === 'iskraPopupClose' || event.target.parentNode.id === 'iskraPopupClick') {
        handlers.closePopup();
      }
    });
  }

  var handlers = {
    createCookie: function createCookie(url) {
      return 'iskra_popup_' + this.hash(url);
    },
    setCookie: function setCookie() {
      document.cookie = newCookie + '=1';
    },

    // djb2 hash
    hash: function hash(str) {
      var hash = 5381;
      for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = (hash << 5) + hash + char;
      }
      return hash;
    },
    showPopup: function showPopup() {
      var existingCookies = document.cookie.match(/(iskra_popup_(\S+))/g) || [];
      if (!showOnce || existingCookies.join(',').indexOf(newCookie) === -1) {
        views.openPopup();
        setEventListeners();
      } else {
        /*console.log('requested popup image was already shown');*/
      }
    },
    positionPopup: function positionPopup() {
      // координаты и трансформации для абсолютного позиционирования поп-апа
      let coordX,
          coordY,
          tX,
          tY;
      // отступ от краев экрана
      const margin = 10;
      switch (popupPosition.x) {
        case 'left':
          coordX = `${margin}px`;
          tX = 0;
          break;
        case 'center':
          coordX = '50%';
          tX = -50;
          break;
        case 'right':
          coordX = `calc(100% - ${margin}px)`;
          tX = -100;
          break;
        default:
          coordX = `${margin}px`;
          tX = 0;
      }
      switch (popupPosition.y) {
        case 'top':
          coordY = `${margin}px`;
          tY = 0;
          break;
        case 'center':
          coordY = '50%';
          tY = -50;
          break;
        case 'bottom':
          coordY = `calc(100% - ${margin}px)`;
          tY = -100;
          break;
        default:
          coordY = `calc(100% + ${margin}px)`;
          tY = -100;
      }
      return [coordX, coordY, tX, tY];
    },
    closePopup: function closePopup() {
      views.closePopup();
      this.setCookie();
    }
  };

  var newCookie = handlers.createCookie(picUrl);

  var views = {
    openPopup: function openPopup() {
      if (!picUrl) return;

      const popup = document.createElement('div');
      popup.id = 'iskraPopup';
      const positioning = handlers.positionPopup();
      const popupPos = `left: ${positioning[0]}; top: ${positioning[1]}; transform: translate(${positioning[2]}%, ${positioning[3]}%)`;
      const popupStylePosition = popupStyle + popupPos;
      popup.style.cssText = popupStylePosition;

      let img = '<img src="' + picUrl + '">';
      if (picLink) img = '<a id="iskraPopupClick" style="cursor:pointer" href="' + picLink + '">' + img + '</a>';

      popup.style.opacity = '0';
      popup.innerHTML = `<div id="iskraPopupClose" style="${closeButtonStyle}"><span>&#10006</span></div>` + img;
      document.body.appendChild(popup);
      setTimeout(function () {
        document.getElementById('iskraPopup').style.transform += 'scale(1)';
        document.getElementById('iskraPopup').style.opacity = '1';
      }, 100);
    },
    closePopup: function closePopup() {
      document.getElementById('iskraPopup').style.transform = 'scale(0)';
      var popUp = document.getElementById('iskraPopup');
      setTimeout(function () {
        document.body.removeChild(popUp);
      }, 500);
    }
  };
  this.init = init;
  this.close = handlers.close;
}

const popup = new PopUp({
  image: 'https://banzai-sushi.ru/image/cache/data/Tempura/HOROMI_TEMPURA-500x500.jpg',
  link: 'http://iskra-crm.com/',
  showOnce: true,
  // варианты по x: left, center, top
  // варианты по y: top, center, bottom
  position: { x: 'right', y: 'top' },
});
popup.init();
