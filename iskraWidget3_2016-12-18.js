'use strict';

function PopUp(options) {

  var picLink = options.link || null;
  var picUrl = options.image || null;
  var showOnce = options.showOnce || false;
  var popupPosition = options.position || { x: 'center', y: 'center' };
  var popupStyle = '\n  display: block;\n  max-width: 100%;\n  max-height: 100%;\n  position: fixed;\n  z-index: 1000;\n  background: white;\n  box-shadow: 0 0 6px 6px rgba(0, 0, 0, 0.3);\n  ';

  var popupInside = '\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  ';
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
      if (!showOnce || existingCookies.join(',').indexOf(newCookie) == -1) {
        views.openPopup();
        setEventListeners();
      } else {
        /*console.log('requested popup image was already shown');*/
      }
    },
    positionPopup: function positionPopup() {
      var positionStyles = '';
      switch (popupPosition.x) {
        case "left":
          coordX = 0;
          tX = 0;
          // positionStyles += 'left: 0%; transform: ';
          break;
        case "center":
          coordX = 50;
          tX = -50;
          // positionStyles += 'left: 50%; transform: translateX(-50%);';
          break;
        case "right":
          coordX = 100;
          tX = -100;
          // positionStyles += 'left: 100%; transform: translateX(-100%);';
          break;
        default:
        // positionStyles += 'left: 0%; transform: translateX(-50%);';
      }
      switch (popupPosition.y) {
        case "top":
          coordY = 0;
          tY = 0;
          // positionStyles += 'top: 0%; transform: ';
          break;
        case "center":
          coordY = 50;
          tY = -50;
          // positionStyles += 'top: 50%; transform: translateY(-50%);';
          break;
        case "bottom":
          coordY = 100;
          tY = -100;
          // positionStyles += 'top: 100%; transform: translateY(-100%);';
          break;
        default:
          coordY = 'top: 50%;';
          tY = 'translateY(-50%);';
        // positionStyles += 'top: 50%; transform: translateY(-50%);';
      }
      return {
        coord: { x: coordX, y: coordY },
        transform: { tX: tX, tY: tY }
      };
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

      var popup = document.createElement('div');
      popup.id = 'iskraPopup';
      // TODO
      popupStyle += handlers.positionPopup();
      popup.style.cssText = popupStyle;

      var img = '<img src="' + picUrl + '">';
      if (picLink) img = '<a id="iskraPopupClick" style=' + popupInside + ' href="' + picLink + '">' + img + '</a>';

      popup.style.opacity = '0';
      popup.innerHTML = '<div id="iskraPopupClose" style="' + closeButtonStyle + '"><span>&#10006</span></div>' + img;
      document.body.appendChild(popup);
      setTimeout(function () {
        // document.getElementById('iskraPopup').style.transform = 'scale(1)';
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

var popup = new PopUp({
  image: 'https://banzai-sushi.ru/image/cache/data/Tempura/HOROMI_TEMPURA-500x500.jpg',
  link: 'http://iskra-crm.com/',
  showOnce: true,
  position: { x: 'right', y: 'bottom' }
});
popup.init();