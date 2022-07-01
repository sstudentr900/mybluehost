/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/default.js":
/*!*********************************!*\
  !*** ./resources/js/default.js ***!
  \*********************************/
/***/ (() => {

window.imgFn = function (w, h) {
  var preview2 = function preview2(input, imgWidth, imgHight, imgSize) {
    //固定
    var imgSizeNumber = imgSize * 1048576; //大小

    var file = input.files[0];
    var type = file.type.split('/')[1];
    var idName = input.getAttribute('id');

    var closeImg = function closeImg(obj) {
      obj.querySelector('.img').remove();
    };

    var inImage = function inImage(o) {
      var publicImg = o.obj.closest(".publicImg");

      if (publicImg.querySelector('img')) {
        closeImg(publicImg);
      } // publicImg.classList.add('active');


      publicImg.append(creatHtml({
        'tage': 'div',
        'cl': 'img',
        'addHtml': [creatHtml({
          'tage': 'img',
          'attr': {
            'src': o.img
          }
        }), creatHtml({
          'tage': 'i',
          'text': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg>',
          'handler': function handler() {
            closeImg(publicImg); // publicImg.querySelector('.img').remove()
            // o.obj.value='';
          }
        }), creatHtml({
          'tage': 'input',
          'attr': {
            'type': 'hidden',
            'name': idName,
            'value': o.img
          }
        })]
      }));
    };

    var file2Image = function file2Image(file, callback) {
      var image = new Image();
      var url = URL.createObjectURL(file);

      image.onload = function () {
        callback(image);
        URL.revokeObjectURL(url);
      };

      image.src = url;
    };

    if (!(type == 'jpeg' || type == 'jpg' || type == 'png')) {
      alert('錯誤 : 圖片類型只能是 jpg , jpeg , png');
      input.value = '';
      return;
    }

    if (imgSizeNumber <= file.size) {
      alert('錯誤 : 圖片大小需小於' + imgSize + 'M');
      input.value = '';
      return;
    } //不自動切圖
    // file2Image(file, function(img) {
    //     if (img.width!=imgWidth || img.height!=imgHight) {
    //         alert('錯誤 : 圖片尺寸'+imgWidth+'*'+imgHight);
    //         input.value='' ;
    //         return;
    //     }
    //     var canvas = document.createElement("canvas");
    //     var context = canvas.getContext("2d");
    //     canvas.width = img.width;
    //     canvas.height = img.height;
    //     context.drawImage(img, 0, 0, img.width, img.height);
    //     inImage({ 'obj': input, 'img': canvas.toDataURL("image/jpeg", 0.9)})
    // })
    //自動切圖


    file2Image(file, function (img) {
      var canvas = document.createElement("canvas");
      var context = canvas.getContext("2d");

      if (imgWidth) {
        canvas.width = imgWidth;
        canvas.height = imgHight;
        var imageWidth = img.width;
        var imageHeight = img.height;
        context.clearRect(0, 0, canvas.width, canvas.height);

        if (imageWidth / imgWidth > imageHeight / imgHight) {
          context.drawImage(img, imgWidth / 2 - imgHight * imageWidth / imageHeight / 2, 0, imgHight * imageWidth / imageHeight, imgHight);
        } else {
          context.drawImage(img, 0, imgHight / 2 - imgWidth * imageHeight / imageWidth / 2, imgWidth, imgWidth * imageHeight / imageWidth);
        }
      } else {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);
      }

      inImage({
        'obj': input,
        'img': canvas.toDataURL("image/jpeg", 0.9)
      });
    });
  };

  var cover = document.querySelector('#cover');

  if (cover) {
    cover.addEventListener('change', function () {
      preview2(this, w, h, 1);
    });
  }

  var img = document.querySelector('.publicImg .img');

  if (img) {
    img.querySelector('i').addEventListener('click', function () {
      img.remove();
    });
  }
};

window.creatHtml = function (o) {
  var tage = o.tage || '';
  var text = o.text || '';
  var cl = o.cl || '';
  var attr = o.attr || '';
  var addHtml = o.addHtml || '';
  var method = o.method || 'click';
  var handler = o.handler || '';
  var handler2 = o.handler2 || '';
  var method2 = o.method2 || method;
  var html = document.createElement(tage);

  if (text) {
    html.innerHTML = text;
  }

  if (cl) {
    html.className = cl;
  }

  if (attr) {
    attr = Array.isArray(attr) ? attr : [attr];
    attr.forEach(function (element) {
      Object.keys(element).forEach(function (item, i) {
        html.setAttribute(item, element[item]);
      });
    }); // for(var i=0;i<attr.length;i++){
    //     html.setAttribute(attr[i]['n'],attr[i]['v'])
    // }
  }

  if (addHtml) {
    addHtml = Array.isArray(addHtml) ? addHtml : [addHtml]; // console.log(addHtml)

    addHtml.forEach(function (element) {
      return html.append(element);
    });
  }

  if (handler) {
    html.addEventListener(method, handler.bind(html), false);
  }

  if (handler2) {
    window.addEventListener(method2, handler2, false);
  }

  return html;
};

window.loadRemove = function () {
  var publicLoad = document.querySelector('.publicLoad');
  publicLoad.classList.remove('active');
  publicLoad.addEventListener('transitionrun', function () {
    //公告
    if (bulletinMessage) {
      alert(bulletinMessage);
    }
  }, false);
};

window.showLoad = function () {
  document.querySelector('.publicLoad').classList.add('active');
};

window.menu = function () {
  var menu = document.querySelectorAll('.menu>ul>li>b');
  if (!menu) return;
  menu.forEach(function (element) {
    element.addEventListener('click', function () {
      var li = this.closest('li');

      if (li.classList.contains('active')) {
        li.classList.remove('active');
      } else {
        menu.forEach(function (obj) {
          // var li = obj.closest('li')
          // if(li.classList.contains('active')){
          //     li.classList.remove('active')
          // }
          obj.closest('li').classList.remove('active');
        });
        li.classList.add('active');
      }
    });
  });
};

/***/ }),

/***/ "./resources/js/fndefault.js":
/*!***********************************!*\
  !*** ./resources/js/fndefault.js ***!
  \***********************************/
/***/ (() => {

window.passowdButton = function (o) {
  var input = o.nextElementSibling;
  var type = input.getAttribute('type');

  if (type == 'password') {
    o.classList.add('active');
    input.setAttribute('type', 'text');
  } else {
    o.classList.remove('active');
    input.setAttribute('type', 'password');
  }
};

window.navButton = function () {
  var navButton = document.querySelector('.navButton');
  var publicSection = document.querySelector('.publicSection');
  var body = document.querySelector('body');
  navButton.addEventListener('click', function () {
    if (publicSection.classList.contains('active')) {
      publicSection.classList.remove('active');
      body.style.overflow = '';
    } else {
      publicSection.classList.add('active');
      body.style.overflow = 'hidden';
    }
  });
  menu();
};

window.slideFn = function () {
  var slide = document.querySelector('.slide');
  var lis = slide.querySelectorAll('.content li');
  var liLength = lis.length;
  var pre = slide.querySelector('.pre');
  var next = slide.querySelector('.next');
  var dot = slide.querySelector('.dot');
  var nowIndex = 0;

  var slideAnimation = function slideAnimation(number) {
    console.log('now', number);
    var dotLis = dot.querySelectorAll('li');

    for (var i = 0; i < liLength; i++) {
      lis[i].classList.remove('active');
      dotLis[i].classList.remove('active');
    }

    lis[number].classList.add('active');
    dotLis[number].classList.add('active');
  };

  var _loop = function _loop(i) {
    dot.append(creatHtml({
      'tage': 'li',
      'cl': i == 0 ? 'active' : '',
      'handler': function handler() {
        console.log('dot', i);
        slideAnimation(i);
      }
    }));
  };

  for (var i = 0; i < liLength; i++) {
    _loop(i);
  }

  pre.addEventListener('click', function () {
    // console.log('pre',nowIndex,liLength-1,liLength-1)
    nowIndex = nowIndex < 1 ? liLength - 1 : nowIndex - 1;
    slideAnimation(nowIndex);
  });
  next.addEventListener('click', function () {
    // console.log('next',nowIndex,liLength-1,nowIndex>liLength-1)
    nowIndex = nowIndex > liLength - 2 ? 0 : nowIndex + 1;
    slideAnimation(nowIndex);
  });
};

window.fnhomeFn = function () {
  function changePage(name) {
    var objDiv = document.querySelector('.' + name);
    var element_preButton = objDiv.querySelectorAll('.control button')[0];
    var element_nextButton = objDiv.querySelectorAll('.control button')[1];
    var pageNow = 1;
    var pageTotle = 2;

    var fetchFn = function fetchFn(number) {
      if (number > 0) {
        pageNow = pageNow < pageTotle ? pageNow * 1 + number : pageTotle;
      } else {
        pageNow = pageNow > 1 ? pageNow * 1 - 1 : 1;
      }

      fetch("fnhome/" + name + "/" + pageNow, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
        }
      }).then(function (res) {
        return res.json();
      }).then(function (result) {
        result.data.forEach(function (el, index) {
          var element_li = objDiv.querySelectorAll('li');
          var element_a = element_li[index].querySelector('a');
          var element_span = element_li[index].querySelector('span');
          element_a.setAttribute('href', element_a.getAttribute('href').split('fnnews')[0] + '/fnnews/' + el['id']);
          element_a.textContent = el['title'];
          element_span.textContent = el['updated_at'].split('T')[0].replace('-', '/');
        });
        pageNow = result.pageNow;
        pageTotle = result.pageTotle;

        if (pageNow > 1) {
          element_preButton.classList.add('active');
        } else {
          element_preButton.classList.remove('active');
        }

        if (pageNow < pageTotle) {
          element_nextButton.classList.add('active');
        } else {
          element_nextButton.classList.remove('active');
        }
      });
    };

    element_preButton.addEventListener('click', function () {
      fetchFn(-1);
    });
    element_nextButton.addEventListener('click', function () {
      fetchFn(1);
    });
  }

  changePage('new');
  changePage('bulletin');
  slideFn();
};

window.onload = function () {
  var getUrl = document.querySelector('.fn').className.split(' ')[1];

  if (getUrl == "fnhome") {
    fnhomeFn();
  } else if (getUrl == "fnregister" || getUrl == "fnmember_information") {
    imgFn(300, 300);
  }

  navButton();
  loadRemove();
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./resources/js/fnapp.js ***!
  \*******************************/
// require('./bootstrap');
// require('./tinymce/js/tinymce/tinymce.min');
__webpack_require__(/*! ./default */ "./resources/js/default.js");

__webpack_require__(/*! ./fndefault */ "./resources/js/fndefault.js");
})();

/******/ })()
;