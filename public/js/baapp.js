/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/badefault.js":
/*!***********************************!*\
  !*** ./resources/js/badefault.js ***!
  \***********************************/
/***/ (() => {

window.tinymceFn = function (o) {
  var select = o.select;
  tinymce.remove();
  tinymce.init({
    selector: select,
    // 目標物件
    theme: "modern",
    // 模板風格
    language: "zh_TW",
    //語系
    // paste_data_images: true,
    // image_advtab: true,
    menubar: false,
    verify_html: false,
    //禁清除html
    // inline: true, //內連
    plugins: ["advlist autolink lists link image charmap print preview hr anchor pagebreak", "searchreplace wordcount visualblocks visualchars code fullscreen", "insertdatetime media nonbreaking save table contextmenu directionality", "emoticons template paste textcolor colorpicker textpattern"],
    //引入套件=>
    //advlist進階清單','autolink自動連結,link連結,image上傳圖片,lists清單,charmap特殊字元表,print列印,preview預覽,media影音,
    //forecolor文字顏色,backcolor文字背景,emoticons表情,undo復原,styleselect格式, bold粗體,italic斜體, alignleft置左對齊, 
    //bullist項目清單,numlist數字清單, outdent減少縮排, indent增加縮排,fontselect字體樣式 ,fontsizeselect字體大小,code程式碼,table表單
    toolbar: "undo redo | fontsizeselect bold italic forecolor image table link code",
    //bar1顯示套件

    /* enable title field in the Image dialog*/
    image_title: true,

    /* enable automatic uploads of images represented by blob or data URIs*/
    // automatic_uploads: true,
    file_picker_types: 'image',
    file_picker_callback: function file_picker_callback(cb, value, meta) {
      var input = document.createElement('input');
      input.setAttribute('type', 'file');
      input.setAttribute('accept', 'image/*');

      input.onchange = function () {
        var file = this.files[0];
        var type = file.type.split('/')[1]; //類型

        var size = file.size;
        var imgSize = 1070000; //單張圖大小

        if (!(type == 'jpeg' || type == 'jpg' || type == 'png')) {
          alert('錯誤 : 圖片類型只能是 jpg , jpeg , png');
        } else if (size > imgSize) {
          alert('錯誤 : 圖片大小需小於1M');
        } else {
          var reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onload = function () {
            var base64 = reader.result.split(',')[1];
            var id = 'blobid' + new Date().getTime();
            var blobCache = tinymce.activeEditor.editorUpload.blobCache; // console.log(id, file, base64)

            var blobInfo = blobCache.create(id, file, base64);
            blobCache.add(blobInfo);
            cb(blobInfo.blobUri(), {
              title: file.name
            });
          };
        }
      };

      input.click();
    },
    setup: function setup(editor) {
      editor.on('init', function (e) {
        //載入完成移除load
        loadRemove();
      });
    }
  });
};

window.tableDelet = function (url) {
  var html = creatHtml({
    'tage': 'div',
    'cl': 'publicOverlay delet',
    'addHtml': creatHtml({
      'tage': 'div',
      'cl': 'publicform',
      'addHtml': [creatHtml({
        'tage': 'div',
        'cl': 'title',
        'addHtml': creatHtml({
          'tage': 'h3',
          'cl': 'title',
          'text': "訊息通知"
        })
      }), creatHtml({
        'tage': 'div',
        'cl': 'content',
        'addHtml': [creatHtml({
          'tage': 'p',
          'text': '你確定刪除?'
        }), creatHtml({
          'tage': 'div',
          'cl': 'bottom',
          'addHtml': [creatHtml({
            'tage': 'button',
            'cl': 'publicBtn2',
            'text': '取消',
            'handler': function handler() {
              document.querySelector('.publicOverlay.delet').remove(); // alert('取消',id)
            }
          }), creatHtml({
            'tage': 'button',
            'cl': 'publicBtn2',
            'text': '確認',
            'handler': function handler() {
              // alert('確認',id)
              location.href = url;
            }
          })]
        })]
      })]
    })
  });
  document.querySelector('body').append(html);
};

window.tablePassowd = function (url) {
  var html = creatHtml({
    'tage': 'div',
    'cl': 'publicOverlay password',
    'addHtml': creatHtml({
      'tage': 'div',
      'cl': 'publicform',
      'addHtml': [creatHtml({
        'tage': 'div',
        'cl': 'title',
        'addHtml': creatHtml({
          'tage': 'h3',
          'cl': 'title',
          'text': "修改密碼"
        })
      }), creatHtml({
        'tage': 'div',
        'cl': 'content',
        'addHtml': [creatHtml({
          'tage': 'ul',
          'addHtml': creatHtml({
            'tage': 'li',
            'addHtml': creatHtml({
              'tage': 'input',
              'attr': {
                'type': 'password',
                'name': 'password',
                'placeholder': '請輸入密碼'
              }
            })
          })
        }), creatHtml({
          'tage': 'div',
          'cl': 'bottom',
          'addHtml': [creatHtml({
            'tage': 'button',
            'cl': 'publicBtn2',
            'text': '取消',
            'handler': function handler() {
              document.querySelector('.publicOverlay.password').remove();
            }
          }), creatHtml({
            'tage': 'button',
            'cl': 'publicBtn2',
            'text': '送出',
            'handler': function handler() {
              var password = document.querySelector('.publicOverlay.password input[type="password"]');
              var passwordValue = password.value;

              if (!passwordValue) {
                var puplicError = password.querySelector('.puplicError');

                if (puplicError) {
                  puplicError.remove();
                }

                password.after(creatHtml({
                  'tage': 'div',
                  'cl': 'puplicError',
                  'text': '密碼不能為空'
                }));
              } else {
                location.href = url + '/' + passwordValue;
              }
            }
          })]
        })]
      })]
    })
  });
  document.querySelector('body').append(html);
};

window.passowdButton = function (obj) {
  var input = obj.nextSibling.nextSibling;

  if (obj.classList.contains('active')) {
    obj.classList.remove('active');
    input.setAttribute('type', 'password');
  } else {
    obj.classList.add('active');
    input.setAttribute('type', 'text');
  }
};

window.fileUploader = function (obj) {
  var fileDiv = document.querySelector('[data-target="fileDiv"]');
  if (!fileDiv) return;
  var adds = fileDiv.querySelectorAll('[data-target="add"]');
  var minus = fileDiv.querySelectorAll('[data-target="minus"]');
  var inputs = fileDiv.querySelectorAll('[data-target="file"]');
  var ul = fileDiv.querySelector('ul');

  function fileFn(e) {
    var file = e.target.files[0];
    if (!file) return; //驗證

    var validFileTypes = ["jpeg", "jpg", "png", "pdf", "doc", "docx", "xls", "xlsx"];
    var isValidFileType = validFileTypes.includes(file.name.split('.').pop());

    if (!isValidFileType) {
      alert("格式只能是jpg,png,pdf,doc,xls");
      e.target.value = '';
      return;
    }

    var isValidFileSize = file.size / 1024 / 1024 < 5;

    if (!isValidFileSize) {
      alert("檔案需小於 5MB!");
      e.target.value = '';
      return;
    }
  }

  function minusFn() {
    var id = this.dataset.id;
    var length = this.closest('ul').querySelectorAll('li').length;
    this.closest('li').remove(); //判斷修改時才能刪除資料

    if (id) {
      fetch("/appendix_delet/" + id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
        }
      }).then(function (res) {
        return res.json();
      }).then(function (result) {
        console.log(result);
      });
    } //刪除到只剩一個就新增


    if (length == 1) {
      addFn();
    }
  }

  function addFn() {
    var li = document.createElement('li');
    var add = document.createElement('a');
    var minus = document.createElement('a');
    var input = document.createElement('input');
    var inputDiv = document.createElement('div');
    input.setAttribute('type', 'file');
    input.setAttribute('data-target', 'file');
    input.setAttribute('name', 'file[]');
    add.setAttribute('data-target', 'add');
    add.innerText = '新增';
    minus.setAttribute('data-target', 'minus');
    minus.innerText = '刪除';
    add.addEventListener('click', addFn);
    minus.addEventListener('click', minusFn);
    input.addEventListener('change', fileFn);
    inputDiv.append(input);
    li.append(inputDiv, add, minus);
    ul.append(li);
  }

  adds.forEach(function (el) {
    return el.addEventListener('click', addFn);
  });
  minus.forEach(function (el) {
    return el.addEventListener('click', minusFn);
  });
  inputs.forEach(function (el) {
    return el.addEventListener('change', fileFn);
  });
};

window.selectFn = function () {
  var selectDiv = document.querySelector('[data-target="selectDiv"]');
  if (!selectDiv) return;
  var select = selectDiv.querySelector('select');
  var inputDiv = selectDiv.querySelector('.inputDiv');
  var link = selectDiv.querySelector('.button');
  var origin = window.location.origin;
  var pathname = window.location.pathname.split('/')[1];
  var page = window.location.pathname.split('/')[2];
  var selectValue = window.location.pathname.split('/')[3];
  var serchValue = window.location.pathname.split('/')[4];

  var inputDivFn = function inputDivFn() {
    var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    inputDiv.textContent = '';
    inputDiv.insertAdjacentHTML('beforeend', html);
  };

  var showDiv = function showDiv(selectValueNew) {
    var serchValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    selectValue = selectValueNew;

    if (selectValueNew == 0) {
      inputDivFn();
    }

    if (selectValueNew == 1) {
      inputDivFn('<input type="text" name="serchValue" placeholder="請輸入訂單編號" value="' + serchValue + '">');
    }

    if (selectValueNew == 2) {
      inputDivFn('<input type="text" name="serchValue" placeholder="請輸入綠界編號" value="' + serchValue + '">');
    }

    if (selectValueNew == 3) {
      fetch("/barecord_get_dues", {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
        }
      }).then(function (res) {
        return res.json();
      }).then(function (result) {
        var array = result.data.map(function (el) {
          if (serchValue == el.id) {
            return "<option value=" + el.id + " selected>" + el.name + "</option>";
          } else {
            return "<option value=" + el.id + ">" + el.name + "</option>";
          }
        });
        var html = "<select name=\"serchValue\">\n                    ".concat(array.join(''), "\n                </select>");
        inputDivFn(html);
      });
    }

    if (selectValueNew == 4) {
      inputDivFn('<input type="text" name="serchValue" placeholder="請輸入會員姓名" value="' + serchValue + '">');
    }
  };

  select.addEventListener('change', function () {
    showDiv(this.value);
  });
  link.addEventListener('click', function () {
    serchValue = selectDiv.querySelector('[name="serchValue"]');

    if (serchValue) {
      serchValue = serchValue.value;
    } else {
      serchValue = '';
    }

    document.location.href = origin + '/' + pathname + '/' + page + '/' + selectValue + '/' + serchValue;
  });
  console.log(window.location.pathname.split('/'), pathname, page, selectValue);
  showDiv(selectValue, serchValue);
}; // window.fileUploader = function(obj){
//     document.querySelector('[data-target="fileUploader"]').addEventListener('change',handleFileUpload)
//     async function handleFileUpload(e) {
//         const file = e.target.files[0];
//         if (!file) return;
//         //驗證
//         const validFileTypes = ["jpeg","jpg", "png", "pdf", "doc", "docx","xls","xlsx"];
//         const isValidFileType = validFileTypes.includes(file.name.split('.').pop());
//         if (!isValidFileType) {
//             alert("格式只能是jpg,png,pdf,doc,xls");
//             return ;
//         }
//         const isValidFileSize = file.size / 1024 / 1024 < 5;
//         if (!isValidFileSize) {
//             alert("檔案需小於 5MB!");
//             return ;
//         }
//         //顯示
//         const fileList = document.querySelector('[data-target="fileList"]');
//         let result = document.createElement('li');
//         let top = document.createElement('div');
//         let h4 = document.createElement('h4');
//         let deletBtn = document.createElement('div');
//         let inputHidden  = document.createElement('input');
//         h4.innerText = file.name;
//         inputHidden.setAttribute('type','hidden')
//         inputHidden.setAttribute('name','file[]')
//         inputHidden.setAttribute('value',file)
//         top.setAttribute('class','top');
//         deletBtn.setAttribute('class','deletBtn');
//         top.append(h4,deletBtn);
//         result.append(top,inputHidden);
//         fileList.append(result)
//         deletBtn.addEventListener('click',function(){
//             result.remove()
//         })
//     }
// }
// window.appendixFnX = function(obj){
// const fileUploader = document.querySelector('[data-target="fileUploader"]');
// const fileList = document.querySelector('[data-target="fileList"]');
// const fileUpload = document.querySelector('#fileUpload');
// console.log(fileUpload)
// fileUploader.addEventListener('change',handleFileUpload)
// async function handleFileUpload(e) {
// try {
// console.log(this.value.split('.').pop())
// const file = e.target.files[0];
// console.log(file)
//setUploading(true);
// if (!file) return;
//驗證
//const beforeUploadCheck = await beforeUpload(file);
// const beforeUploadCheck = await beforeUpload(file);
// if (!beforeUploadCheck.isValid) throw beforeUploadCheck.errorMessages;
//上傳
// const arrayBuffer = await getArrayBuffer(file);
// const response = await uploadFileAJAX(file);
//顯示
// showItem(file)
// alert("File Uploaded Success");
// showPreviewImage(file);
// } catch (error) {
// alert(error);
// console.log("Catch Error: ", error);
// } finally {
// e.target.value = '';  // reset input file
//   setUploading(false);
// }
// }
// STEP 2: showPreviewImage with createObjectURL
// If you prefer Base64 image, use "FileReader.readAsDataURL"
// function showPreviewImage(fileObj) {
//     const image = URL.createObjectURL(fileObj);
//     imagePreview.src = image;
// }
// STEP 3: change file object into ArrayBuffer
// function getArrayBuffer(fileObj) {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         // Get ArrayBuffer when FileReader on load
//         reader.addEventListener("load", () => {
//             resolve(reader.result);
//         });
//         // Get Error when FileReader on error
//         reader.addEventListener("error", () => {
//             reject("error occurred in getArrayBuffer");
//         });
//         // read the blob object as ArrayBuffer
//         // if you nedd Base64, use reader.readAsDataURL
//         reader.readAsArrayBuffer(fileObj);
//     });
// }
// STEP 4: upload file throguth AJAX
// - use "new Uint8Array()"" to change ArrayBuffer into TypedArray
// - TypedArray is not a truely Array,
//   use "Array.from()" to change it into Array
// function uploadFileAJAX(file) {
// correct it to your own API endpoint
// console.log(file)
// let form = new FormData();
// form.append("file", file)
// return fetch("bameeting_appendix", {
//     headers: {
//         'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
//     },
//     credentials: "same-origin",
//     method: "POST",
//     body: form
// })
// .then(res => {
//     return res.json();
// })
// .then(res => {
//     return res
// })
// .catch(err => console.log("err", err));
// }
// function showItem(file){
//     let result = document.createElement('li');
//     let top = document.createElement('div');
//     let h4 = document.createElement('h4');
//     let deletBtn = document.createElement('div');
//     h4.innerText=res.name;
//     top.setAttributes('class','top');
//     deletBtn.setAttributes('class','deletBtn');
//     top.appendChild(h4,deletBtn);
//     result.appendChild(top);
//     fileList.appendChild(result)
// }
// STEP 5: Create before upload checker if needed
// function beforeUploadX(fileObject) {
//     return new Promise(resolve => {
//         const validFileTypes = ["image/jpeg", "image/png", "application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];
//         console.log(fileObject.type,fileObject.value)
//         const isValidFileType = validFileTypes.includes(fileObject.type);
//         let errorMessages = [];
//         if (!isValidFileType) {
//             errorMessages.push("You can only upload JPG or PNG file!");
//         }
//         const isValidFileSize = fileObject.size / 1024 / 1024 < 2;
//         if (!isValidFileSize) {
//             errorMessages.push("Image must smaller than 2MB!");
//         }
//         resolve({
//             isValid: isValidFileType && isValidFileSize,
//             errorMessages: errorMessages.join("\n")
//         });
//     });
// }
// function beforeUpload(fileObject) {
//     return new Promise(resolve => {
//         const validFileTypes = ["jpeg","jpg", "png", "pdf", "doc", "docx","xls","xlsx"];
//         const isValidFileType = validFileTypes.includes(fileObject.name.split('.').pop());
//         let errorMessages = [];
//         if (!isValidFileType) {
//             errorMessages.push("格式只能是jpg,png,pdf,doc,xls");
//         }
//         const isValidFileSize = fileObject.size / 1024 / 1024 < 5;
//         if (!isValidFileSize) {
//             errorMessages.push("檔案需小於 5MB!");
//         }
//         resolve({
//             isValid: isValidFileType && isValidFileSize,
//             errorMessages: errorMessages.join("\n")
//         });
//     });
// }
// function setUploading(isUploading) {
// if (isUploading === true) {
//     spinner.classList.add("opacity-1");
// } else {
//     spinner.classList.remove("opacity-1");
// }
// }
// }


window.onload = function () {
  var getUrl = document.querySelector('.ba').className.split(' ')[1];

  if (getUrl == "baintroduction" || getUrl == "baacademic" || getUrl == "bajournal" || getUrl == "balist" || getUrl == "bajoin" || getUrl == "banews_add" || getUrl == "banews_update" || getUrl == "babulletin_add" || getUrl == "babulletin_update") {
    tinymceFn({
      'select': '#tinymce'
    });
  } else if (getUrl == "bameeting_add" || getUrl == "bameeting_update" || getUrl == "bameeting_year_add" || getUrl == "bameeting_year_update") {
    fileUploader();
    tinymceFn({
      'select': '#tinymce'
    });
  } else if (getUrl == "bamanager_add" || getUrl == 'bamanager_update' || getUrl == "bamember_add" || getUrl == 'bamember_update') {
    imgFn(300, 300);
  } else if (getUrl == "bacarousel_add" || getUrl == 'bacarousel_update') {
    imgFn(1500, 750);
  } else if (getUrl == "barecord") {
    selectFn();
  }

  menu();
  loadRemove();
};

/***/ }),

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
  !*** ./resources/js/baapp.js ***!
  \*******************************/
// require('./bootstrap');
// require('./tinymce/js/tinymce/tinymce.min');
__webpack_require__(/*! ./default */ "./resources/js/default.js");

__webpack_require__(/*! ./badefault */ "./resources/js/badefault.js");
})();

/******/ })()
;