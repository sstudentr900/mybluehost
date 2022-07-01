


// function previewX(input, imgWidth, imgHight, imgSize) {
//     var imgSizeNumber = imgSize*1048576
//     // var imgSize = imgSize || 1048576;
//     var imgWidth = imgWidth || 640;
//     var imgHight = imgHight || 210;
//     var file = input.files[0];
//     var type = file.type.split('/')[1]; //類型
//     var fileReader = new FileReader();
//     var img = new Image();
//     var canvas = document.createElement("canvas");
//     var context = canvas.getContext("2d");
//     var inImage = function(o) {
//         var Jcrophtml = "<div class='imgdiv'>" +
//             "<div class='imgW'>" +
//             "<img class='imgclass' src='" + o.img + "'>" +
//             "<i onclick='closeImg(this);'><svg viewBox='0 0 24 24'><path d='M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z'/></svg></i>" +
//             "</div></div>";
//         var parent = $(o.obj).parent('label')
//         var coveInput = parent.find('.coveInput')
//         parent.addClass('active').after(Jcrophtml);
//         coveInput.val(o.img);
//     }
    
//     fileReader.readAsDataURL(file); //讀取檔案內容,以DataURL格式回傳結果
//     fileReader.onload = function(event) { //讀取完後執行的動作
//         img.src = event.target.result;
//         img.onload = function() {
//             //判斷圖片尺寸,圖片大小,圖片類型
//             if (file.size < imgSizeNumber) {
//                 if (type == 'jpeg' || type == 'jpg' || type == 'png') {
//                     canvas.width = imgWidth;
//                     canvas.height = imgHight;
//                     var imageWidth = img.width;
//                     var imageHeight = img.height;
//                     context.clearRect(0, 0, canvas.width, canvas.height);
//                     if ((imageWidth / imgWidth) > (imageHeight / imgHight)) {
//                         context.drawImage(img, imgWidth / 2 - (imgHight * imageWidth / imageHeight) / 2, 0, imgHight * imageWidth / imageHeight, imgHight);
//                     } else {
//                         context.drawImage(img, 0, imgHight / 2 - (imgWidth * imageHeight / imageWidth) / 2, imgWidth, imgWidth * imageHeight / imageWidth);
//                     }

                    
//                     var data = canvas.toDataURL("image/jpeg", 0.9);


//                     inImage({ 'obj': input, 'img': data })
//                 } else {
//                     alert('錯誤 : 圖片類型只能是 jpg , jpeg , png');
//                     $('.coverLabel').find("input").val('');
//                 }
//             } else {
//                 alert('錯誤 : 圖片大小不能超過: '+imgSize+'M');
//                 $('.coverLabel').find("input").val('');
//             }
//         }
//     };
// }
//Form---------------------------------------------------
// function creatFormBtn(o) {
//     //取消
//     var bottomC = '';
//     if (o.btCT) {
//         bottomC = $('<button class="btn">' + o.btCT + '</button>');
//         bottomC.on('click', function(e) {
//             modalHide();
//             if (o.btcfn) o.btcfn();
//             return false; //阻止上傳
//         });
//     }

//     //確認
//     var bottomT = $('<button class="btn" type="submit">' + o.btTT + '</button>');
//     bottomT.on('click', o.btTFn);

//     return $('<div class="bottom"></div>').append(bottomC, bottomT);
// }

// function creatForm(o) {
//     //to=>總數, ad=>加入hidden自訂值, se=>select值
//     var to = o.to || '',
//         formId = o.id || 'myForm',
//         plt = o.pl || '',
//         ad = o.ad || '';
//     var form = $('<form id="' + formId + '" autocomplete="off" onsubmit="return false;"></form>');


//     //ro
//     $.each(o.ro.tableName, function(k, v) {
//         if (!v.t) return;
//         var formRow = $('<div class="row"></div>');
//         var formLabel = $('<label class="col-3 col-form-label"></label>');
//         var formInputP = $('<div class="col-9"></div>');
//         var pl = plt + v.n;

//         if (v.t == 'text' || v.t == 'number' || v.t == 'date' || v.t == 'password') {
//             var formInput = $('<input type="text" class="form-control">');
//             formLabel.append(v.n).attr('for', v.i); //label name
//             if (v.t == 'number') formInput.attr('type', v.t); //type
//             if (v.t == 'date') formInput.attr('type', v.t); //type
//             if (v.t == 'password') {
//                 formInput.attr('type', v.t); //type
//                 formInput.attr('autocomplete', 'off'); //autocomplete
//             }
//             if (v.i == 'sort') formInput.attr('value', to + 1) //sort
//             formInput.attr('id', v.i).attr('name', v.i).attr('placeholder', pl); //id,name,placeholder
//             if (v.v) formInput.val(v.v); //value
//             formInputP.append(formInput);
//             formRow.addClass('form-group');
//         }
//         if (v.t == 'checkbox') {
//             var custom_checkbox = $('<div class="custom_checkbox">')
//             $.each(v.se, function(index, val) {
//                 var label = $('<label>' + val.Name + '</label>').attr('for', v.i + index)
//                 var checkbox = $('<input type="checkbox" value=' + val.id + '>').attr('id', v.i + index).attr('name', v.i + '[]'); //label name
//                 if (v.v) {
//                     v.v.split(',').forEach((v, i) => {
//                         // console.log(val.id == v, val.id, v)
//                         if (val.id == v) {
//                             checkbox.prop('checked', 'true')
//                         }
//                     })
//                 }
//                 custom_checkbox.append($('<div>').append(checkbox, label));
//             })
//             formInputP.append(custom_checkbox);
//             formLabel.append(v.n);
//             formRow.addClass('form-group');
//         }
//         if (v.t == 'file') {
//             var w = v.w || '';
//             var h = v.h || '';
//             var s = v.s || 1;
//             var model = v.model || '';
//             // var pl = v.pl || '檔案大小限制1M，建議長寬';
//             var fileDiv = $('<div class="' + v.t + '"></div>');
//             // var file = $('<input class="cove" type="' + v.t + '" accept=".jpg, .jpeg, .png" name="Image">');
//             var file = $('<input class="cove" type="' + v.t + '" accept=".jpg, .jpeg, .png">');
//             // var hidden = $('<input class="coveInput" type="hidden" name="Image2">');
//             var hidden = $('<input class="coveInput" type="hidden" name="'+v.i+'">');
//             var label = $('<label for="cove" class="coverLabel"></label>');
//             var relative = $('<div class="position-relative"></div>');
//             // var small = $('<small class="form-text text-muted pl-3">' + pl + w + 'px*' + h + 'px</small>');
//             var small = '';
//             file.on('change', function() {
//                 if(model=='fixed'){
//                     preview2(this, w, h, s);
//                 }else{
//                     preview(this, w, h, s);
//                 }
//             })
//             formLabel.append(v.n).attr('for', v.i); //label name
//             label.append(file, hidden);
//             relative.append(label);
//             fileDiv.append(relative, small);
//             formInputP.append(fileDiv);
//             formRow.addClass('form-group');
//             if (v.v) {
//                 var imgUrl = v.v;
//                 if (imgUrl.search('htt') != 0) {
//                     imgUrl = getImgHref() + imgUrl + '?v=' + new Date().getMilliseconds()
//                 }
//                 var Jcrophtml = "<div class='imgdiv'>" +
//                     "<div class='imgW'>" +
//                     "<img class='imgclass' src='" + imgUrl + "'>" +
//                     "<i onclick='closeImg(this);'><svg viewBox='0 0 24 24'><path d='M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z'/></svg></i>" +
//                     "</div></div>";
//                 label.addClass('active').after(Jcrophtml);
//                 hidden.val(v.v);
//                 // file.attr('name', 'ImageX'); //不驗證
//             }
//         }
//         if (v.t == 'link') {
//             var link = $('<div class="link"></div>');
//             var input = $('<input class="form-control form-control-lg" name="' + v.i + '" type="text" id="' + v.i + '">');
//             var showLink = $('<div class="showLink"></div>');
//             var content = $('<div class="content"></div>');
//             var i = $('<i><svg viewBox="0 0 24 24"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"></path></svg></i>');
//             var iframe = $('<iframe frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
//             var youtubeUrl = /https:\/\/www.youtube.com\/watch\?v=/;
//             var showVideo = function(o) {
//                 var video = o.v;
//                 if (video.match(youtubeUrl)) {
//                     var urlName = video.replace(youtubeUrl, '')
//                     link.addClass('active');
//                     iframe.attr('src', 'https://www.youtube.com/embed/' + urlName);
//                     content.append(iframe);
//                 }
//             };
//             input.on('change', function() {
//                 showVideo({ 'v': input.val() })
//             });
//             i.on('click', function() {
//                 link.removeClass('active');
//                 content.html('');
//                 input.val('');
//             });
//             if (v.v) {
//                 showVideo({ 'v': v.v })
//                 input.val(v.v)
//             } else {
//                 input.attr('placeholder', pl);
//             }
//             showLink.append(i, content);
//             link.append(input, showLink);
//             formLabel.append(v.n).attr('for', v.i); //label name
//             formInputP.append(link);
//             formRow.addClass('form-group');
//         }
//         if (v.t == 'select') {
//             var select = $('<select class="form-control"></select>');
//             formLabel.append(v.n).attr('for', v.i); //label name
//             select.attr('id', v.i).attr('name', v.i);
//             $.each(v.se, function(seK, seV) {
//                 var option = $('<option></option>');
//                 option.attr('value', seV.id).text(seV.Name); //value,text
//                 select.append(option);
//             })

//             // if (v.v) select.val(v.v); //value
//             if (v.v) {
//                 $.each(v.se, function(key, value) {
//                     if (value['Name'] == v.v) {
//                         select.val(value['id']);
//                     }
//                 })
//             }
//             formInputP.append(select);
//             formRow.addClass('form-group');
//         }
//         if (v.t == 'textarea') {
//             formLabel.append(v.n).attr('for', v.i); //label name
//             var formInput = $('<textarea rows="5" class="form-control"></textarea>');
//             formInput.attr('id', v.i).attr('name', v.i).attr('placeholder', pl); //id,name,placeholder
//             if (v.v) {
//                 formInput.val(v.v);
//             } //value
//             formInputP.append(formInput);
//             formRow.addClass('form-group');
//         }
//         if (v.t == 'tinymce') {
//             var formInput = $('<textarea class="form-control"></textarea>');
//             if (v.v) {
//                 formInput.val(v.v);
//             } //value
//             // console.log(formInput)
//             // console.log(formInput.html())
//             formInput.attr('id', v.i).attr('name', v.i).attr('placeholder', pl); //id,name,placeholder
//             formInputP.append(formInput);
//             formRow.addClass('form-group');
//             formLabel.append(v.n).attr('for', v.i); //label name
//         }
//         if (v.t == 'is_Release') {
//             var releasePY = $('<div class="form-check form-check-inline">');
//             var releasePN = $('<div class="form-check form-check-inline">');
//             var releaseInputY = $('<input type="radio" class="form-check-input" id="Y" name="' + v.i + '" value="Y">');
//             var releaseInputN = $('<input type="radio" class="form-check-input" id="N" name="' + v.i + '" value="N">');
//             var releaseLabelY = $('<label class="form-check-label" for="Y">' + v.yes + '</label>');
//             var releaseLabelN = $('<label class="form-check-label" for="N">' + v.no + '</label>');
//             formLabel.append(v.n);
//             if (!v.v || v.v == 'Y') {
//                 releaseInputY.prop('checked', true);
//                 releaseInputN.prop('checked', false);
//             } else {
//                 releaseInputN.prop('checked', true);
//                 releaseInputY.prop('checked', false);
//             }
//             releasePY.append(releaseInputY, releaseLabelY);
//             releasePN.append(releaseInputN, releaseLabelN);
//             formInputP.append(releasePY, releasePN);
//         }
//         if (v.t == 'textadd') {
//             var divRow = $('<div class="baprescriptionTextRow">');

//             var baprescriptionText = function(o) {
//                 var divFlex = $('<div class="baprescriptionTextFlex">');
//                 var addBtn = $('<a class="addBtn"><i class="fa fa-plus fa-fw"></i></a>');
//                 var deletBtn = $('<a class="deletBtn"><i class="fa fa-trash fa-fw"></i></a>');
//                 var formInput = $('<input type="text" class="form-control">');
//                 formInput.attr('name', v.i).attr('placeholder', pl); //id,name,placeholder
//                 var oValue = o ? o.v : ''
//                 if (oValue) {
//                     oValue = oValue.split(',')
//                     formInput.val(oValue[1]); //value
//                     formInput.attr('data-id', oValue[0]);
//                     divFlex.append(formInput)
//                 } else {
//                     divFlex.append(formInput, addBtn, deletBtn)
//                 }
//                 divRow.append(divFlex)
//             }
//             if (v.v) {
//                 var vv = v.v.split(';')
//                 $.each(vv, function(key, value) {
//                     baprescriptionText({ v: value })
//                 })
//             } else {
//                 baprescriptionText()
//             }
//             formInputP.append(divRow);
//             formLabel.append(v.n).attr('for', v.i); //label name
//             $(document).off("click", ".baprescriptionTextRow .addBtn");
//             $(document).off("click", ".baprescriptionTextRow .deletBtn");
//             $(document).on("click", ".baprescriptionTextRow .addBtn", function(e) {
//                 e.stopPropagation();
//                 $(this).parents('.baprescriptionTextRow').append($(this).parents('.baprescriptionTextFlex').clone())
//             })
//             $(document).on("click", ".baprescriptionTextRow .deletBtn", function(e) {
//                 e.stopPropagation();
//                 if ($(this).parents('.baprescriptionTextRow').find('.baprescriptionTextFlex').length > 1) {
//                     $(this).parents('.baprescriptionTextFlex').remove()
//                 }
//             })
//             formRow.addClass('form-group');
//         }
//         if (v.t == 'color') {
//             formLabel.append(v.n).attr('for', v.i); //label name
//             var formInput = $('<input type="text" class="form-control">');
//             formInput.attr('type', v.t).attr('name', v.i); //id,name
//             if (v.v) formInput.val(v.v);
//             formInputP.append(formInput);
//             formRow.addClass('form-group');
//             // <input type="color" name="color" value="#f6b73c"></input>
//         }
//         if (v.t == 'selectadd') {
//             var divRow = $('<div class="selectadd">');
//             var objs = $('<div class="objs">');
//             var selectDiv = $('<div class="selectDiv">');
//             var addBtn = $('<a class="addBtn"><i class="fa fa-plus fa-fw"></i></a>');
//             var selectControl = $('<div class="selectControl">');
//             var selectOptions = $('<div class="selectOptions">');
//             var addObj = function(o) {
//                 var deletBtn = $('<a class="deletBtn"><i class="fa fa-times fa-fw"></i></a>');
//                 var p = $('<p class="' + v.i + '"  data-value="' + o.i + '">')
//                 var flex = $('<div class="flex">');
//                 p.text(o.n);
//                 flex.append(p, deletBtn);
//                 objs.append(flex)
//                 deletBtn.on("click", function() {
//                     $(this).parents('.flex').remove()
//                 })
//             }
//             selectControl.append(selectOptions);
//             selectDiv.append(addBtn, selectControl)
//             divRow.append(objs, selectDiv)
//             formInputP.append(divRow);
//             formLabel.append(v.n).attr('for', v.i); //label name
//             formRow.addClass('form-group');

//             $.each(v.se, function(index, val) {
//                 var option = $('<span class="option" data-value="' + val.id + '">' + val.Name + '</span>');
//                 selectOptions.append(option)
//             })
//             addBtn.on("click", function(e) {
//                 e.stopPropagation();
//                 selectControl.toggleClass('open');
//                 $(".selectOptions .option").off("click")
//                 $(".selectOptions .option").on("click", function() {
//                     var p = $(this).parents('.selectadd').find('.objs p')
//                     var pValue = this.dataset.value
//                     var addObjBoolean = 1
//                     if (p.length) {
//                         $.each(p, function(index, val) {
//                             if ($(val).data('value') == pValue) {
//                                 addObjBoolean = 0
//                                 return false;
//                             }
//                         })
//                     }
//                     if (addObjBoolean) {
//                         addObj({ 'i': pValue, 'n': this.textContent })
//                     }
//                     selectControl.toggleClass('open');
//                 })
//             })

//             if (v.v) {
//                 var vv = v.v.split(';')
//                 $.each(vv, function(key, value) {
//                     value = value.split(',')
//                     addObj({ 'i': value[0], 'n': value[1] })
//                 })
//             }

//         }
//         if(v.t == 'citi'){
//             var select = $('<select class="form-control"></select>');
//             formLabel.append(v.n).attr('for', v.i); //label name
//             select.attr('id', v.i).attr('name', v.i);
//             v.se.forEach(function(item, index, array) {
//                 var option = $('<option></option>');
//                 option.attr('value', index).text(item); //value,text
//                 select.append(option);
//             });
//             if (v.v) {
//                 v.se.forEach(function(item, index, array) {
//                     if(index==v.v){
//                         select.val(index);
//                     }
//                 });
//             }
//             formInputP.append(select);
//             formRow.addClass('form-group');
//         }

//         formRow.append(formLabel, formInputP);
//         form.append(formRow);
//     })

//     //加入密碼
//     if (o.ro.ebp) {
//         var password = $('<div class="row form-group">' +
//             '<label class="col-3 col-form-label" for="Password">' + o.ro.ebp.n + '</label>' +
//             '<div class="col-9">' +
//             '<input type="password" class="form-control" id="Password" name="Password" placeholder="' + o.ro.ebp.n1 + '" autocomplete="off">' +
//             '</div>' +
//             '</div>');

//         var parent =  form.find('.row #Account').parents('.row');
//         if (parent.length) {
//             //新增密碼放在帳號後面
//             parent.after(password);
//         } else {
//             //修改密碼
//             form.append(password);
//         }
//     }

//     //加入hidden自訂值
//     $.each(ad, function(k, v) {
//         form.append($('<input type="hidden" name="' + v.n + '" value="' + v.v + '">'));
//     })

//     //按鈕
//     if (o.btTFn) {
//         form.append(creatFormBtn(o));
//     }
//     return form;
// }
//load---------------------------------------------------------
// function loadShow() {
//     $('body').append('<div class="load"><div class="cp-spinner cp-round"></div></div>');
// }
// function loadHide(fn) {
//     $('.load').remove();
//     if (fn) {
//         fn();
//     }
// }
//modal---------------------------------------------------------
// function modal(o) {
//     var ti = o.ti || ''
//     var co = o.co || ''
//     var showbtn = o.btTFn || ''
//     var closeFN = o.btifn || ''
//     var obj = $('<div class="overlaymodal ' + getUrl('a') + ' ' + o.addclass + '">\n' +
//         '        <div class="box">\n' +
//         '            <div class="top">\n' +
//         '                <h4></h4>\n' +
//         '                <i class="fa fa-times"></i>\n' +
//         '            </div>\n' +
//         '            <div class="middle"></div>\n' +
//         '        </div>\n' +
//         '    </div>');
//     var middle = $(obj.find('.middle'));
//     var closeBtn = $(obj.find('.top>i'));
//     var title = $(obj.find('.top>h4'));

//     //X
//     closeBtn.on('click', function() {
//         modalHide();
//         if (closeFN) closeFN();
//     });

//     //標題ti
//     title.html(ti);


//     //內容co
//     middle.html(co);


//     //確定和取消(X)
//     if (showbtn) {
//         middle.append(creatFormBtn(o));
//     }

//     //html
//     modalHide();
//     $('body').addClass('overflow')
//     $('body').append(obj);

//     //tinymce
//     o.data ? $.each(o.data['customRow']['tableName'], function(k, v) {
//         if (v.t == 'tinymce') {
//             tinymceFn({'select': "#" + v.i})
//         }
//     }) : ''


//     closeload();
// }


// function modalHide(o) {
//     $('body').removeClass('overflow')
//     $('.overlaymodal').remove();
//     if (o && o.fn) {
//         fn();
//     }
// }

// function validateFn(o) {
//     var id = o.id ? '#' + o.id : '#myForm';
//     $(id).validate({
//         debug: true,
//         rules: o.rules,
//         messages: o.messages,
//         submitHandler: function(form) {
//             // loadShow(); //send load
//             closeload();
//             o.handler(form);
//         }
//     })
// }

// function send(o) {
//     var form = o.form || '';
//     var value = o.value || '';
//     var handler = o.handler || '';
//     var p = o.p || 1;
//     modalHide();  //delet fromHtml
//     customload(); 
//     // console.log(value)
//     getAjax({ 'form': form, 'value': value }).then(function(data) {
//         if (handler) {
//             handler({ 'data': data, 'p': p });
//         } else {
//             if (data.result) {
//                 seach({ 'p': p });
//             } else {
//                 modal({
//                     'addclass': 'error',
//                     'data': o,
//                     'co': data.message,
//                     'btc': 'n',
//                     'bte': function() {
//                         modalHide()
//                     }
//                 });
//             }
//         }
//     })
// }

// function creatContentNavHtml(o) {
//     //標題
//     var title = function() {
//         var ti = o.ti ? o.ti : (() => {
//             var a = o.a ? o.a : getUrl('a');
//             var n = $('#leftNav');
//             var link = n.find('.' + a);
//             link.addClass('active');
//             var b = n.find('.balanguage');
//             //二級
//             b.off('click');
//             b.on('click', function(e) {
//                 e.stopPropagation()
//                 var ul = $(this).find('+ul');
//                 if (ul.hasClass('active')) {
//                     ul.removeClass('active')
//                 } else {
//                     ul.addClass('active')
//                 }
//             })
//             return link.find('p').html();
//         })();

//         return $('<div class="title"><h4>' + ti + '</h4></div>')
//     }

//     //按鈕
//     var btnFn = function() {
//         var ro = o['customRow'] || ''; //項目
//         var to = o['totle'] || ''; //總數
//         var p = o.p || ''; //頁
//         //新增
//         var ProductsAdd = '';
//         if (ro.ab) {
//             var addFn = o.addFn ? o.addFn : function() {
//                 modal({
//                     'addclass': 'add',
//                     'data': o,
//                     'ti': ro.ab.ti,
//                     'co': creatForm({
//                         'ro': ro,
//                         'pl': ro.pl,
//                         'to': to,
//                         'btCT': ro.btCT,
//                         'btTT': ro.btTT,
//                         'btTFn': o.btTFn ? o.btTFn : function(){
//                             validateFn({
//                                 'rules': ro.validate.rules,
//                                 'messages': ro.validate.messages,
//                                 'handler': function(form) {
//                                     send({ 'form': form, 'value': [{ 'add': 0 }], 'p': p })
//                                 },
//                             })
//                         }
//                     })
//                 })
//                 $(document).keypress(function(event){
//                     if (event.which == '13') {
//                         return false; 
//                     }
//                 });
//             }

//             ProductsAdd = $('<a class="btn"><i><svg viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg></i>' + ro.ab.ti + '</a>').on('click', addFn)
//         }

//         //查詢(X)
//         var ProductsSeach = '';
//         if (ro.se) {
//             var seachFn = function() {
//                 modal({
//                     'addclass': 'select',
//                     'data': o,
//                     'ti': ro.se.ti,
//                     'co': creatForm({
//                         'ro': ro.se,
//                         'pl': ro.pl,
//                         'btCT': ro.btCT,
//                         'btTT': ro.btTT,
//                         'btTFn': function() {
//                             validateFn({
//                                 'rules': ro.se.validate.rules,
//                                 'messages': ro.se.validate.messages,
//                                 'handler': function(form) {
//                                     send({
//                                         'form': form,
//                                         'value': [{ 'seach': 0 }],
//                                         'handler': function(o) {
//                                             if (o.data.message) {
//                                                 modal({
//                                                     'addclass': 'error',
//                                                     'data': o,
//                                                     'ti': ro.ti,
//                                                     'co': o.data.message,
//                                                 });
//                                             } else {
//                                                 seach2({ 'data': o.data });
//                                             }
//                                         }
//                                     })
//                                 },
//                             })
//                         }
//                     })
//                 })
//             }
//             var seach = o.seachFn ? o.seachFn : seachFn
//             ProductsSeach = $('<a class="btn"><i class="fa fa-search"></i>' + ro.se.ti + '</a>').on('click', seach)
//         }

//         return $(' <div class="ProductsAdd"></div>').append(ProductsAdd, ProductsSeach);
//     }

//     return $('<div class="ProductsNav"></div>').append(title(), btnFn());
// }

// function creatContentMidHtml(o) {
//     var cr = o['customRow'] || ''; //項目
//     var tableName = o['tableName'];
//     var ro = o['row'] || ''; //row
//     var p = o.p || ''; //頁
//     var editText = o['edit'] ? { 'edit_two': 0 } : { 'edit': 0 };
//     var ProductsContentUl = $('<ul></ul>');
//     var ProductsContentLi = function(o) {
//         var html = '';
//         var newName = [];
//         var n = o.n;
//         var v = o.v;

//         function imgSrc(o) {
//             return '<img src="' + o + '" alt="">'
//         }

//         function imgSrcAb(o) {
//             var href = getImgHref() + o + '?v=' + new Date().getMilliseconds()
//             return '<a href="'+ href +'" target="_blank"><img src="'+ href +'" alt=""><a>'
//         }

//         function isRelease(o) {
//             var v = o.yes;
//             if (o.v != 'Y') {
//                 v = o.no
//                 return '<p class="red">' + v + '</p>';
//             } else {
//                 return '<p>' + v + '</p>';
//             }
//         }

//         function isUndefined(o) {
//             var v = o;
//             if (v === null || v == undefined || v == 'undefined') {
//                 v = ''
//             }
//             return '<p>' + v + '</p>';
//         }

//         function isbaprescriptionBp(o) {
//             var ps = '';
//             o.split(';').forEach(e => {
//                 var value = e.split(',')
//                 ps += '<div class="flex"><div class="img">' + imgSrcAb(value[0]) + '</div>' +
//                     '<div class="texts"><p>' + value[1] + '</p>' + '<p>' + value[2] + '</p>' + '<p>' + value[3] + '</p></div></div>'
//             })
//             return '<div class="customText">' + ps + '</div>'
//         }

//         function textadd(o) {
//             var ps = ' ';
//             if (o) {
//                 o.split(';').forEach(e => {
//                     e = e.split(',')
//                     ps += '<p class="color" style="background:' + e[2] + '">' + e[1] + '</p>'
//                 });
//             }
//             return '<div class="customText">' + ps + '</div>'
//         }

//         function isImage(o) {
//             var imageUrl = imgSrc(o);
//             // console.log(o)
//             if (o.search('htt') != 0) {
//                 imageUrl = imgSrcAb(o)
//             }
//             return imageUrl
//         }

//         function isLink(o) {
//             var youtubeUrl = /https:\/\/www.youtube.com\/watch\?v=/;
//             var urlName = o.replace(youtubeUrl, '');
//             return '<iframe frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="https://www.youtube.com/embed/' + urlName + '"></iframe>';
//         }

//         function source(o) {
//             var img = ''
//             if (o == 'm') {
//                 img = imgSrcAb('bamember-m.png')
//             } else if (o == 'f') {
//                 img = imgSrcAb('bamember-f.png')
//             } else if (o == 't') {
//                 img = imgSrcAb('bamember-t.png')
//             } else if (o == 'g') {
//                 img = imgSrcAb('bamember-g.png')
//             }
//             return img
//         }

//         function seName(o) {
//             var html = []
//             var se = n.filter(v => v.i == o['i'])[0]['se']
//             // console.log(o,o['v'])
//             o['v']!=null && o['v']!=undefined && o['v']?o['v'].split(',').forEach((o_v) => {
//                 se.forEach((se_v) => {
//                     if (se_v.id == o_v) {
//                         html.push('<p>' + se_v.Name + '</p>')
//                     }
//                 })
//             }):''
//                 // return '<div class="seName">' + html.join('') + '</div>'
//             return html.join()
//         }
//         function color(o) {
//             return '<div class="color" style="background:' + o + '"></div>'
//         }
//         $.each(n, function(j, a) {
//             var value = '';
//             var bashow = a['bashow']=='no'?'bashowNo':''
//             // if (a['i'] && v[a.i] != undefined) {
//             if (a['i']) {
//                 //i
//                 if (a['i'] == 'is_Release' || a['i'] == 'is_Email') {
//                     value = isRelease({ 'v': v[a.i], 'yes': a.yes, 'no': a.no });
//                 } else if (a['i'] == 'Image'||a['i'] == 'Image1'||a['i'] == 'Image2'||a['i'] == 'Image3') {
//                     value = isImage(v[a.i]);
//                 } else if (a['i'] == 'Link') {
//                     value = isLink(v[a.i]);
//                 } else if (a['i'] == 'source') {
//                     value = source(v[a.i]);
//                 } else if (a['i'] == 'color') {
//                     value = color(v[a.i]);
//                 } else if (a['i'] == 'professional_id') {
//                     value = seName({ 'v': v[a.i], 'i': a['i'] });
//                 } else if (a['i'] == 'citi') {
//                     value = '<p>' +a.se[v[a.i]]+ '</p>';
//                 } else {
//                     value = isUndefined(v[a.i]);
//                 }
//                 html += '<div class="'+bashow+'">' + value + '</div>';

//                 //物件深度拷貝，放入新陣列
//                 var copeName = JSON.parse(JSON.stringify(a)); //JOSON深度拷貝
//                 // if (copeName.i == 'Account') {
//                 //     copeName.i = 'email'
//                 // } //帳號修改改變Namea名
//                 // if (copeName.i == 'Date') {
//                 //     copeName.i = 'DateNo'
//                 // } 
//                 var objs = Object.assign(copeName, { 'v': v[a.i] }); //object.assign合併物件
//                 newName.push(objs);
//             }
//         })
//         return { 'html': html, 'newName': newName }
//     }

//     //li-title
//     var topLi = $('<li></li>');
//     $.each(tableName, function(k, v) {
//         var bashow = v['bashow']=='no'?'bashowNo':''
//         if (v.n) topLi.append('<div class="'+bashow+'"><p>' + v.n + '</p></div>')
//     })
//     ProductsContentUl.append(topLi);

//     //li-content
//     $.each(ro, function(k, v) {
//         var id = v.id;
//         var li = $('<li></li>');

//         //content
//         // console.log(tableName)
//         // if (v['bashow']=='no') {
//         //     return true;
//         // }
//         var div = ProductsContentLi({ 'n': tableName, 'v': v });

//         //修改
//         var editShowHtml = $('<button><svg viewBox="0 0 24 24"><path d="M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z"/></svg></button>');
//         editShowHtml.on('click', function() {
//             var tableName = div.newName;

//             //不顯示帳號
//             if (cr.ebp) {
//                 tableName = tableName.filter(function(el) { return el.i != "Account"; });
//             }

//             modal({
//                 'data': o,
//                 'ti': cr.ed.ti,
//                 'addclass': 'edit',
//                 'co': creatForm({
//                     'ad': [{ n: 'id', v: id }],
//                     'ro': { 'tableName': tableName },
//                     'pl': cr.pl,
//                     'btCT': cr.btCT,
//                     'btTT': cr.btTT,
//                     'btTFn': o.btTFn ? o.btTFn : function() {
//                         validateFn({
//                             'rules': cr.validate.rules,
//                             'messages': cr.validate.messages,
//                             'handler': function(form) {
//                                 send({ 'form': form, 'value': [editText, { 'id': id }], 'p': p })
//                             },
//                         })
//                     }
//                 })
//             })
//         })

//         //刪除
//         var deleteShowHtml = '';
//         if (cr.de) {
//             deleteShowHtml = $('<button><svg viewBox="0 0 24 24"><path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z"/></svg></button>');
//             deleteShowHtml.on('click', function() {
//                 modal({
//                     'addclass': 'delet',
//                     'data': o,
//                     'ti': cr.de.ti,
//                     'co': cr.de.co,
//                     'btCT': cr.btCT,
//                     'btTT': cr.btTT,
//                     'btTFn': function() {
//                         send({ 'value': [{ 'Delete': 0 }, { 'id': id }], 'p': p })
//                     }
//                 });
//             })
//         }

//         //改密碼
//         var keyShowHtml = '';
//         if (cr.ebp) {
//             keyShowHtml = $('<button><svg viewBox="0 0 24 24"><path d="M16 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm0-2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-5.405 16.4l-1.472 1.6h-3.123v2h-2v2h-2v-2.179l5.903-5.976c-.404-.559-.754-1.158-1.038-1.795l-6.865 6.95v5h6v-2h2v-2h2l2.451-2.663c-.655-.249-1.276-.562-1.856-.937zm7.405-11.4c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm0-1c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"/></svg></button>');
//             keyShowHtml.on('click', function() {
//                 modal({
//                     'addclass': 'editpassword',
//                     'data': o,
//                     'ti': cr.ebp.ti,
//                     'co': creatForm({
//                         'ro': { 'ebp': { 'n': cr.ebp.n, 'n1': cr.ebp.n1 } },
//                         'pl': cr.pl,
//                         'btCT': cr.btCT,
//                         'btTT': cr.btTT,
//                         'btTFn': function() {
//                             validateFn({
//                                 'rules': cr.validate.rules,
//                                 'messages': cr.validate.messages,
//                                 'handler': function(form) {
//                                     send({ 'form': form, 'value': [{ 'passwordEdite': 0 }, { 'id': id }], 'p': p })
//                                 },
//                             })
//                         }
//                     })
//                 })
//             })
//         }

//         var ProductsModify = $('<div class="ProductsModify"></div>');
//         ProductsModify.append(editShowHtml, keyShowHtml, deleteShowHtml); //編輯show
//         li.append(div.html, ProductsModify);
//         ProductsContentUl.append(li);
//     });

//     return $('<div class="ProductsContent"></div>').append(ProductsContentUl);
// }

// function creatContentHtml(o) {
//     $('#main').html($('<div class="BaAllProducts ' + o.a + '"></div>').append(
//         creatContentNavHtml({
//             'customRow': o.data['customRow'],
//             'totle': o.data['totle'],
//             'a': o.a
//         }),
//         creatContentMidHtml({
//             'customRow': o.data['customRow'],
//             'tableName': o.data['customRow']['tableName'],
//             'row': o.data['row'],
//             'p': o.p,
//             'a': o.a
//         }),
//         creatPageNumber({
//             'pn': o.data['pn'],
//             'totle': o.data['totle'],
//             'p': o.p,
//             'a': o.a
//         })
//     ));
// }

// function creatNav() {
//     return creatHtml({
//         'tage': 'div',
//         'cl': 'baleft',
//         'addHtml': [
//             creatHtml({
//                 'tage': 'div',
//                 'cl': 'logo',
//                 'addHtml': creatHtml({
//                     'tage': 'a',
//                     'attr': { 'href': "?a=bamanager" },
//                     'text': '<svg viewBox="0 0 140 120"><path d="M38.69,101.23h-30l26-100h30l-8.4,32.25L94.34,1.18h38.1L84,40.93l26.25,60.3H72.59L58,61.63,46.49,71.38Z"></path><path d="M2.22,119.09V107.64H3.74v5.68l5.69-5.68h2.05l-4.8,4.64,5,6.81h-2l-4.08-5.8-1.87,1.83v4Z"></path><path d="M15.13,119.09V107.64h1.52v11.45Z"></path><path d="M21.23,119.09V107.64h1.55l6,9v-9h1.45v11.45H28.7l-6-9v9Z"></path><path d="M40.08,114.6v-1.34h4.85v4.25a8.58,8.58,0,0,1-2.3,1.34,6.83,6.83,0,0,1-2.44.45,6.51,6.51,0,0,1-3.07-.72A4.78,4.78,0,0,1,35,116.48a6.58,6.58,0,0,1-.7-3.05,7.09,7.09,0,0,1,.7-3.12,4.65,4.65,0,0,1,2-2.15,6.3,6.3,0,0,1,3-.7,6,6,0,0,1,2.25.4A3.73,3.73,0,0,1,43.89,109a5,5,0,0,1,.87,1.88l-1.37.38a4.24,4.24,0,0,0-.64-1.37,2.63,2.63,0,0,0-1.09-.8,4,4,0,0,0-1.58-.3,4.65,4.65,0,0,0-1.8.32,3.35,3.35,0,0,0-1.22.83,4,4,0,0,0-.72,1.13,6,6,0,0,0-.44,2.3,5.59,5.59,0,0,0,.53,2.56A3.37,3.37,0,0,0,38,117.42a4.76,4.76,0,0,0,2.14.5,5.08,5.08,0,0,0,1.92-.38,5,5,0,0,0,1.42-.81V114.6Z"></path><path d="M55.38,119.09V107.64h4.3a5.32,5.32,0,0,1,2.11.35A2.71,2.71,0,0,1,63,109.06a2.82,2.82,0,0,1,.45,1.51,2.6,2.6,0,0,1-.4,1.38,2.84,2.84,0,0,1-1.2,1,3,3,0,0,1,1.6,1,2.78,2.78,0,0,1,.56,1.73,3.35,3.35,0,0,1-.34,1.5,2.9,2.9,0,0,1-.84,1.07,3.51,3.51,0,0,1-1.25.57,7.61,7.61,0,0,1-1.85.19Zm1.52-6.64h2.48a5.51,5.51,0,0,0,1.45-.13,1.61,1.61,0,0,0,.87-.57,1.64,1.64,0,0,0,.29-1,1.84,1.84,0,0,0-.27-1,1.38,1.38,0,0,0-.78-.59,6.54,6.54,0,0,0-1.74-.16H56.9Zm0,5.29h2.85a6.61,6.61,0,0,0,1-.05,2.48,2.48,0,0,0,.88-.31,1.66,1.66,0,0,0,.58-.64,2,2,0,0,0,.23-1,1.9,1.9,0,0,0-.33-1.11,1.73,1.73,0,0,0-.91-.66,5.63,5.63,0,0,0-1.68-.19H56.9Z"></path><path d="M67.58,113.51A6.22,6.22,0,0,1,69.11,109a5.21,5.21,0,0,1,4-1.61,5.49,5.49,0,0,1,2.86.76,5,5,0,0,1,1.94,2.11,6.86,6.86,0,0,1,.67,3.07,6.75,6.75,0,0,1-.7,3.12,4.8,4.8,0,0,1-2,2.08,5.69,5.69,0,0,1-2.78.71,5.42,5.42,0,0,1-2.89-.78,5,5,0,0,1-1.93-2.13A6.47,6.47,0,0,1,67.58,113.51Zm1.56,0a4.59,4.59,0,0,0,1.11,3.26,3.88,3.88,0,0,0,5.61,0A4.87,4.87,0,0,0,77,113.37a5.87,5.87,0,0,0-.47-2.44,3.64,3.64,0,0,0-1.38-1.62,3.75,3.75,0,0,0-2-.57,3.87,3.87,0,0,0-2.77,1.11A4.94,4.94,0,0,0,69.14,113.54Z"></path><path d="M85.32,119.09V109H81.55v-1.35h9.08V109H86.83v10.1Z"></path><path d="M97,119.09V109H93.24v-1.35h9.08V109H98.53v10.1Z"></path><path d="M105.73,119.09V107.64h1.52v10.1h5.64v1.35Z"></path><path d="M116.64,119.09V107.64h8.28V109h-6.77v3.51h6.34v1.34h-6.34v3.9h7v1.35Z"></path><path d="M128.69,115.41l1.43-.12a3.15,3.15,0,0,0,.47,1.41,2.58,2.58,0,0,0,1.15.89,4.36,4.36,0,0,0,1.76.34,4.21,4.21,0,0,0,1.53-.26,2.12,2.12,0,0,0,1-.71,1.64,1.64,0,0,0,.32-1A1.49,1.49,0,0,0,136,115a2.32,2.32,0,0,0-1-.68,20.21,20.21,0,0,0-2-.56,10.45,10.45,0,0,1-2.21-.71,3.09,3.09,0,0,1-1.22-1.07,2.61,2.61,0,0,1-.4-1.43,2.91,2.91,0,0,1,.49-1.62,3,3,0,0,1,1.44-1.14,5.45,5.45,0,0,1,2.1-.39,5.74,5.74,0,0,1,2.25.41,3.24,3.24,0,0,1,1.5,1.21,3.47,3.47,0,0,1,.56,1.8L136,111a2.35,2.35,0,0,0-.79-1.64,3.09,3.09,0,0,0-2-.55,3.2,3.2,0,0,0-2,.5,1.51,1.51,0,0,0-.63,1.21,1.3,1.3,0,0,0,.45,1,6,6,0,0,0,2.29.82,15.13,15.13,0,0,1,2.54.73,3.47,3.47,0,0,1,1.48,1.17,2.85,2.85,0,0,1,.48,1.63,3.12,3.12,0,0,1-.52,1.72,3.45,3.45,0,0,1-1.5,1.26,5.24,5.24,0,0,1-2.21.45,6.59,6.59,0,0,1-2.61-.45,3.65,3.65,0,0,1-1.65-1.36A3.86,3.86,0,0,1,128.69,115.41Z"></path></svg>'
//                 }),
//             }),
//             creatHtml({
//                 'tage': 'ul',
//                 'cl': 'item',
//                 'addHtml': [
//                     { 'cl': 'bamanager', 'text': '管理員', 'svg': '<svg viewBox="0 0 1000 1000"><path d="M108.1,949.3c-0.6,27.1-23,48.5-50.1,48c-27.1-0.6-48.5-23-48-50.1c5.4-255.2,259.2-418.6,490-418.6c236.2,0,484.6,163.4,490,418.6c0.5,27.1-21,49.5-48,50.1c-27.1,0.5-49.5-21-50.1-48C887.7,750.1,685.2,626.7,500,626.7C314,626.7,112.1,756.4,108.1,949.3"></path><path d="M500,493c108.2,0,196.2-88,196.2-196.2c0-108.1-88-196.2-196.2-196.2c-108.1,0-196.1,88-196.1,196.2C303.9,405,391.8,493,500,493 M500,591.1c-162.5,0-294.2-131.7-294.2-294.2C205.8,134.4,337.5,2.7,500,2.7c162.5,0,294.3,131.7,294.3,294.2C794.2,459.4,662.5,591.1,500,591.1L500,591.1L500,591.1z"></path></svg>' },
//                     { 'cl': 'baproduct', 'text': '商品展示', 'svg': '<svg viewBox="0 0 24 24"><path d="M12.434 22.586l7.859-7.858.707.707-8.565 8.565-.001-.001v.001l-12.434-12.434.707-.707 11.727 11.727zm-.033-1.7l-12.401-12.405v-8.481h8.441l12.445 12.401-8.485 8.485zm-4.373-19.886h-7.028v7.067l11.401 11.405 7.07-7.07s-7.534-7.506-11.443-11.402zm-1.598 2.594c.78.78.78 2.048 0 2.828-.781.781-2.048.781-2.829 0-.78-.78-.78-2.048 0-2.828.781-.781 2.048-.781 2.829 0zm-.707.707c.39.39.39 1.024 0 1.414-.391.39-1.024.39-1.414 0-.391-.39-.391-1.024 0-1.414.39-.39 1.023-.39 1.414 0z"></path></svg>' },
//                     { 'cl': 'fnindex', 'text': '回到首頁', 'svg': '<svg viewBox="0 0 24 24"><path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z"></path></svg>' },
//                     { 'cl': 'balogout', 'text': '登出後台', 'svg': '<svg viewBox="0 0 24 24"><path d="M10 9.408l2.963 2.592-2.963 2.592v-1.592h-8v-2h8v-1.592zm-2-4.408v4h-8v6h8v4l8-7-8-7zm6-3c-1.787 0-3.46.474-4.911 1.295l.228.2 1.396 1.221c1.004-.456 2.114-.716 3.287-.716 4.411 0 8 3.589 8 8s-3.589 8-8 8c-1.173 0-2.283-.26-3.288-.715l-1.396 1.221-.228.2c1.452.82 3.125 1.294 4.912 1.294 5.522 0 10-4.477 10-10s-4.478-10-10-10z"></path></svg>' }
//                 ]
//             })
//         ]
//     })
// }

// function showPage(o) {
//     setTimeout(function() {
//         $('.BaAllProducts').each(function(i) {
//             $(this).removeClass('active');
//             $(this).addClass('active');
//         })
//     }, 300)
// }

// function seach(o) {
//     if (location.protocol !== "https:") {
//         location.protocol = "https:";
//     }
//     var a = getUrl('a');
//     var p = o.p || 1;
//     getAjax({ 'value': [{ 'p': p }, { 'seach': '0' }] }).then(function(data) {
//         closeload();
//         if (data.result) {
//             if (a == 'basilde') {
//                 // window[a]({ 'data': data, 'p': p, 'a': a });
//                 basilde({ 'data': data, 'p': p, 'a': a });
//             } else if ( a == 'bafounding' || a == 'baarchitecture' || a == 'bajoin' || a == 'badisclaimer') {
//                 creatTemplate_textarea({ 'data': data, 'p': p, 'a': a });
//             } else {
//                 creatContentHtml({ 'data': data, 'p': p, 'a': a })
//             }
//             showPage({ 'data': data })
//         } else {
//             console.log(data.message)
//         }
//     })
// }
// window.onload = seach({});
// window.onload = seach;
/*page*/

// function basilde(o) {
//     creatContentHtml({ 'data': o.data, 'p': o.p, 'a': o.a })
//     $('#main').append($('<div class="BaAllProducts ' + o.a + '"></div>').append(
//         creatContentNavHtml({
//             'ti': '跑馬燈',
//             'customRow': o.data['customRow2'],
//             'totle': 0,
//             'a': o.a
//         }),
//         creatContentMidHtml({
//             'customRow': o.data['customRow2'],
//             'tableName': o.data['customRow2']['tableName'],
//             'row': o.data['row2'],
//             'p': o.p,
//             'edit': true,
//             'a': o.a
//         }),
//     ));
//     $('#main').append($('<div class="BaAllProducts ' + o.a + '"></div>').append(
//         creatContentNavHtml({
//             'ti': '會員跑馬燈',
//             'customRow': o.data['customRow2'],
//             'totle': 0,
//             'a': o.a
//         }),
//         creatContentMidHtml({
//             'customRow': o.data['customRow2'],
//             'tableName': o.data['customRow2']['tableName'],
//             'row': o.data['row3'],
//             'p': o.p,
//             'edit': true,
//             'a': o.a
//         }),
//     ));
// }

// function creatTemplate_textarea(o) {
//     var ProductsContent =  $('<div class="ProductsContent"></div>')
//     var textarea = $('<textarea id="tinymce" name="tinymce">'+o.data.row[0].tinymce+'</textarea>')
//     var button =  $('<div class="bottom"><button class="btn" type="button">'+o.data.bt+'</button></div>')

//     $('#main').html($('<div class="BaAllProducts template_textarea ' + o.a + '"></div>').append(
//         creatContentNavHtml({}),
//         ProductsContent.append(textarea,button),
//     ));
//     tinymceFn({'select': '#tinymce'})
//     button.on('click', ()=>{
//         customload()
//         var tinyText = tinyMCE.get('tinymce').getContent()
//         if(tinyText.length>5500000){
//             alert('超過存取大小，請減少文字或是圖片大小')
//             closeload();
//         }else{
//             send({ 
//                 'value': [{'edit':0},{'tinymce':tinyText}],
//                 'handler': function(o) {
//                     modal({
//                         'ti': o.data.ti,
//                         'co': o.data.message,
//                         'btCT': o.data.btCT,
//                         'btTT': o.data.btTT,
//                         'btTFn': function() {
//                             modalHide()
//                         }
//                     });
//                 }
//             })
//         }
//     });
//     closeload();
// }



/*--------------------------------------------------------------------------*/
//圖片---------------------------------------------------
function canvas2Blob(canvas,callback,quality){
    canvas.toBlob(function(blob) {
        callback(blob);
    },'image/jpeg', quality || 0.8);
}
function file2DataUrl(blob, callback) {
    var reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = function(e) {
        callback(e.target.result);
    }
}
function preview(input, imgWidth, imgHight, imgSize) {
    // console.log('preview')
    // var imgSize = imgSize || 1048576;
    var imgSizeNumber = imgSize*1048576
    var imgWidth = imgWidth || '';
    var imgHight = imgHight || '';
    var file = input.files[0];
    var type = file.type.split('/')[1]; //類型
    // var fileReader = new FileReader();
    // var img = new Image();
    var inImage = function(o) {
        var Jcrophtml = "<div class='imgdiv'>" +
            "<div class='imgW'>" +
            "<img class='imgclass' src='" + o.img + "'>" +
            "<i onclick='closeImg(this);'><svg viewBox='0 0 24 24'><path d='M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z'/></svg></i>" +
            "</div></div>";
        var parent = $(o.obj).parent('label')
        var coveInput = parent.find('.coveInput')
        parent.addClass('active').after(Jcrophtml);
        coveInput.val(o.img);
    }
    var img2Canvas = function(imgWidth,imgHight,img){
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        if(imgWidth){
            canvas.width = imgWidth;
            canvas.height = imgHight;
            var imageWidth = img.width;
            var imageHeight = img.height;
            context.clearRect(0, 0, canvas.width, canvas.height);
            if ((imageWidth / imgWidth) > (imageHeight / imgHight)) {
                context.drawImage(img, imgWidth / 2 - (imgHight * imageWidth / imageHeight) / 2, 0, imgHight * imageWidth / imageHeight, imgHight);
            } else {
                context.drawImage(img, 0, imgHight / 2 - (imgWidth * imageHeight / imageWidth) / 2, imgWidth, imgWidth * imageHeight / imageWidth);
            }
        }else{
            canvas.width = img.width;
            canvas.height = img.height;
            context.drawImage(img, 0, 0, img.width, img.height);
        }
        return canvas;
    }
    var file2Image = function(file,callback){
        var image = new Image();
        var url = URL.createObjectURL(file);
        image.onload = function() {
            callback(image);
            URL.revokeObjectURL(url);
        };
        image.src = url;
    }

    if (!(type == 'jpeg' || type == 'jpg' || type == 'png')) {
        alert('錯誤 : 圖片類型只能是 jpg , jpeg , png');
        $('.coverLabel').find("input").val('');
        return;
    }

    
    file2Image(file, function(img) {
        var canvas = img2Canvas(imgWidth,imgHight,img)
        var loopTime = 10;
        (async function loop() {
            for (let i = 1; i < loopTime; i++) {
                var quality = ((loopTime - i) * 0.1).toFixed(1) * 1
                await new Promise(resolve => canvas2Blob(canvas, function(blob) {
                    // blob.width = canvas.width;
                    // blob.height = canvas.height;
                    // console.log(i, quality, blob.size, '>=' + imgSize)
                    if (i == loopTime - 1) {
                        // console.log('檔案太大')
                        alert('錯誤 : 圖片大小不能超過: '+imgSize+'M');
                        $('.coverLabel').find("input").val('');
                    } else if (blob.size >= imgSizeNumber) {
                        resolve()
                    } else {
                        // console.log(blob)
                        file2DataUrl(blob, function(url) {
                            inImage({ 'obj': input, 'img': url })
                        })
                    }
                }, quality))
            }
        })()
    })
}
function preview2(input, imgWidth, imgHight, imgSize) {
    //固定
    var imgSizeNumber = imgSize*1048576 //大小
    var file = input.files[0]; 
    var type = file.type.split('/')[1]; 
    var idName = input.getAttribute('id'); 
    var inImage = function(o) {
        var publicImg = o.obj.closest(".publicImg");
        if(publicImg.querySelector('img')){
            closeImg(publicImg)
        }
        // publicImg.classList.add('active');
        publicImg.append(creatHtml({
            'tage': 'div',
            'cl': 'img',
            'addHtml': [
                creatHtml({
                    'tage': 'img',
                    'attr': { 'src': o.img  },
                }),
                creatHtml({
                    'tage': 'i',
                    'text': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg>',
                    'handler': function(){
                        closeImg(publicImg)
                        // publicImg.querySelector('.img').remove()
                        // o.obj.value='';
                    }
                }),
                creatHtml({
                    'tage': 'input',
                    'attr': { 'type': 'hidden','name': idName,'value': o.img  },
                }),
            ]
        }))
    }
    var file2Image = function(file,callback){
        var image = new Image();
        var url = URL.createObjectURL(file);
        image.onload = function() {
            callback(image);
            URL.revokeObjectURL(url);
        };
        image.src = url;
    }

    if (!(type == 'jpeg' || type == 'jpg' || type == 'png')) {
        alert('錯誤 : 圖片類型只能是 jpg , jpeg , png');
        input.value='' ;
        return;
    }

    
    if (imgSizeNumber<=file.size) {
        alert('錯誤 : 圖片大小需小於'+imgSize+'M');
        input.value='' ;
        return;
    }

    
    file2Image(file, function(img) {
        if (img.width!=imgWidth || img.height!=imgHight) {
            alert('錯誤 : 圖片尺寸'+imgWidth+'*'+imgHight);
            input.value='' ;
            return;
        }
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);
        inImage({ 'obj': input, 'img': canvas.toDataURL("image/jpeg", 0.9)})
    })
}
function closeImg(obj) {
    obj.querySelector('.img').remove()
}
function imgFn(w,h){
    document.querySelector('#cover').addEventListener('change',function(){
        preview2(this, w, h, 1);
    })
    var img = document.querySelector('.publicImg .img');
    if(img){
        img.querySelector('i').addEventListener('click',function(){
            img.remove();
        })
    }
    loadRemove()
}
function getAjax(o) {
    var url = o.url ,
        method = o.method || 'post',
        form = o.form || '', //document.getElementById('idname')
        value = o.value || ''; //add form value=>[{'n':'v'},{'n':'v'}]
    return new Promise(function(resolve, reject) {
        var fd = new FormData();
        if (form) {
            fd = new FormData(form);
        }
        if (value) {
            value.forEach(function(v, k) {
                fd.append(Object.keys(v)[0], v[Object.keys(v)[0]])
            })
        }
        var xhr = new XMLHttpRequest();
        xhr.open(method, url, true);
        xhr.onload = function() {
            //console.log(xhr.responseText);
            resolve(JSON.parse(xhr.responseText))
        };
        xhr.onerror = function() {
            reject(JSON.parse(xhr.statusText))
        };
        xhr.send(fd);
    });
}
function seachFn(o) {
    var p = o.p || 1;
    var url = o.url;
    var token = document.querySelector('meta[name="csrf-token"]').content
    return new Promise ((resolve,reject)=>{
        getAjax({ 'url': url ,'value': [{ 'p': p },{ '_token': token },{ 'seach': '0' }] }).then(function(data) {
            if (data.result) {
                resolve({ 'data': data, 'p': p })
            } else {
                reject(data.message)
            }
        })
    })
}
function creatHtml(o) {
    var tage = o.tage || ''
    var text = o.text || ''
    var cl = o.cl || ''
    var attr = o.attr || ''
    var addHtml = o.addHtml || ''
    var method = o.method || 'click'
    var handler = o.handler || ''
    var handler2 = o.handler2 || ''
    var method2 = o.method2 || method
    var html = document.createElement(tage)
    if (text) {
        html.innerHTML = text
    }
    if (cl) {
        html.className = cl
    }
    if (attr) {
        attr = Array.isArray(attr) ? attr : [attr]
        attr.forEach((element) => {
                Object.keys(element).forEach((item, i) => {
                    html.setAttribute(item, element[item])
                })
            })
            // for(var i=0;i<attr.length;i++){
            //     html.setAttribute(attr[i]['n'],attr[i]['v'])
            // }
    }
    if (addHtml) {
        addHtml = Array.isArray(addHtml) ? addHtml : [addHtml]
            // console.log(addHtml)
        addHtml.forEach(element => html.append(element))
    }
    if (handler) {
        html.addEventListener(method, handler.bind(html), false)
    }
    
    if (handler2) {
        window.addEventListener(method2, handler2, false)
    }
    return html;

}
function loadRemove(){
    var publicLoad = document.querySelector('.publicLoad');
    publicLoad.classList.remove('active')
}
function tinymceFn(o) {
    var select = o.select
    tinymce.remove()
    tinymce.init({
        selector: select, // 目標物件
        theme: "modern", // 模板風格
        language: "zh_TW", //語系
        // paste_data_images: true,
        // image_advtab: true,
        menubar: false,
        verify_html: false, //禁清除html
        // inline: true, //內連
        plugins: [
            "advlist autolink lists link image charmap print preview hr anchor pagebreak",
            "searchreplace wordcount visualblocks visualchars code fullscreen",
            "insertdatetime media nonbreaking save table contextmenu directionality",
            "emoticons template paste textcolor colorpicker textpattern"
        ],
        //引入套件=>
        //advlist進階清單','autolink自動連結,link連結,image上傳圖片,lists清單,charmap特殊字元表,print列印,preview預覽,media影音,
        //forecolor文字顏色,backcolor文字背景,emoticons表情,undo復原,styleselect格式, bold粗體,italic斜體, alignleft置左對齊, 
        //bullist項目清單,numlist數字清單, outdent減少縮排, indent增加縮排,fontselect字體樣式 ,fontsizeselect字體大小,code程式碼,table表單
        toolbar: "undo redo | fontsizeselect bold italic forecolor image table code", //bar1顯示套件
        /* enable title field in the Image dialog*/
        image_title: true,
        /* enable automatic uploads of images represented by blob or data URIs*/
        // automatic_uploads: true,
        file_picker_types: 'image',
        file_picker_callback: function(cb, value, meta) {
            var input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            input.onchange = function() {
                var file = this.files[0];
                var type = file.type.split('/')[1]; //類型
                var size = file.size;
                var imgSize = 1070000; //單張圖大小
                if (!(type == 'jpeg' || type == 'jpg' || type == 'png')) {
                    alert('錯誤 : 圖片類型只能是 jpg , jpeg , png');
                }else if (size>imgSize) {
                    alert('錯誤 : 圖片大小需小於1M');
                }else{
                    var reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = function() {
                        var base64 = reader.result.split(',')[1];
                        var id = 'blobid' + (new Date()).getTime();
                        var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                        // console.log(id, file, base64)
                        var blobInfo = blobCache.create(id, file, base64);
                        blobCache.add(blobInfo);
                        cb(blobInfo.blobUri(), { title: file.name });
                    };
                }

                // var imgurl = window.URL.createObjectURL(file)
                // var image = new Image()
                // image.src = imgurl
                // image.onload = function () {
                //     var myCanvas = document.createElement("canvas");
                //     var ctx = myCanvas.getContext("2d");
                //     var img_width = 620
                //     var img_height = image.height
                //     myCanvas.width = img_width
                //     myCanvas.height = img_height
                //     //縮圖
                //     if(image.width>img_width){
                //         img_height = img_width*image.height/image.width
                //         myCanvas.height = img_height
                //     }else{
                //         img_width = image.width
                //         myCanvas.width = img_width
                //     }
                //     ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, img_width,img_height)

                //     //XX
                //     // var base64 = myCanvas.toDataURL("image/jpeg", 0.9);
                //     // var id = 'blobid' + (new Date()).getTime();
                //     // var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                //     // console.log(id, file, base64)
                //     // var blobInfo = blobCache.create(id, file, base64);
                //     // blobCache.add(blobInfo);
                //     // cb(blobInfo.blobUri(), { title: file.name });

                //     //縮size
                //     var loopTime = 10;
                //     var imgSize = 1048576; //單張圖大小
                //     (async function loop() {
                //         for (let i = 1; i < loopTime; i++) {
                //             var quality = ((loopTime - i) * 0.1).toFixed(1) * 1
                //             await new Promise(resolve => canvas2Blob(myCanvas, function(blob) {
                //                 console.log(blob.size)
                //                 if (i == loopTime - 1) {
                //                     // console.log('檔案太大')
                //                     alert('錯誤 : 圖片大小不能超過: 1M');
                //                 } else if (blob.size >= imgSize) {
                //                     resolve()
                //                 } else {
                //                     file2DataUrl(blob, function(url) {
                //                         var id = 'blobid' + (new Date()).getTime();
                //                         var blobCache = tinymce.activeEditor.editorUpload.blobCache;
                //                         console.log(id, file, url)
                //                         var blobInfo = blobCache.create(id, file, url);
                //                         blobCache.add(blobInfo);
                //                         console.log(blobInfo)
                //                         cb(blobInfo.blobUri(), { title: file.name });
                                    
                //                     })
                //                 }
                //             }, quality))
                //         }
                //     })()
                // }
            };

            input.click();
        },
        setup: function (editor) {
            editor.on('init', function (e) {
                //載入完成移除load
                loadRemove()
            });
        }
    });
}
window.tableDelet=function(url){
    var html = creatHtml({
        'tage': 'div',
        'cl': 'publicOverlay delet',
        'addHtml':  creatHtml({
            'tage': 'div',
            'cl': 'publicform',
            'addHtml': [
                creatHtml({
                    'tage': 'div',
                    'cl': 'title',
                    'addHtml':  creatHtml({
                        'tage': 'h3',
                        'cl': 'title',
                        'text': "訊息通知"
                    }),
                }),
                creatHtml({
                    'tage': 'div',
                    'cl': 'content',
                    'addHtml': [
                        creatHtml({
                            'tage': 'p',
                            'text': '你確定刪除?'
                        }),
                        creatHtml({
                            'tage': 'div',
                            'cl': 'bottom',
                            'addHtml':  [
                                creatHtml({
                                    'tage': 'button',
                                    'cl': 'publicBtn2',
                                    'text':  '取消',
                                    'handler': function(){
                                        document.querySelector('.publicOverlay.delet').remove()
                                        // alert('取消',id)
                                    }
                                }),
                                creatHtml({
                                    'tage': 'button',
                                    'cl': 'publicBtn2',
                                    'text':  '確認',
                                    'handler': function(){
                                        // alert('確認',id)
                                        location.href= url;
                                    }
                                }),
                            ]
                        }),
                    ]
                }),
            ]
        }),
    })
    document.querySelector('body').append(html)
}
window.tablePassowd=function(url){
    var html = creatHtml({
        'tage': 'div',
        'cl': 'publicOverlay password',
        'addHtml':  creatHtml({
            'tage': 'div',
            'cl': 'publicform',
            'addHtml': [
                creatHtml({
                    'tage': 'div',
                    'cl': 'title',
                    'addHtml':  creatHtml({
                        'tage': 'h3',
                        'cl': 'title',
                        'text': "修改密碼"
                    }),
                }),
                creatHtml({
                    'tage': 'div',
                    'cl': 'content',
                    'addHtml': [
                        creatHtml({
                            'tage': 'ul',
                            'addHtml':  creatHtml({
                                'tage': 'li',
                                'addHtml':  creatHtml({
                                    'tage': 'input',
                                    'attr': { 'type': 'password','name': 'password','placeholder': '請輸入密碼'  },
                                }),
                            }),
                        }),
                        creatHtml({
                            'tage': 'div',
                            'cl': 'bottom',
                            'addHtml':  [
                                creatHtml({
                                    'tage': 'button',
                                    'cl': 'publicBtn2',
                                    'text':  '取消',
                                    'handler': function(){
                                        document.querySelector('.publicOverlay.password').remove()
                                    }
                                }),
                                creatHtml({
                                    'tage': 'button',
                                    'cl': 'publicBtn2',
                                    'text':  '送出',
                                    'handler': function(){
                                        var password = document.querySelector('.publicOverlay.password input[type="password"]')
                                        var passwordValue = password.value;
                                        if(!passwordValue){
                                            var puplicError = password.querySelector('.puplicError')
                                            if(puplicError){
                                                puplicError.remove()
                                            }
                                            password.after(creatHtml({
                                                'tage': 'div',
                                                'cl': 'puplicError',
                                                'text': '密碼不能為空',
                                            }))
                                        }else{
                                            location.href= url+'/'+passwordValue;
                                        }
                                    }
                                }),
                            ]
                        }),
                    ]
                }),
            ]
        }),
    })
    document.querySelector('body').append(html)
}
window.passowdButton=function(obj){
    var input = obj.nextSibling.nextSibling
   if(obj.classList.contains('active')){
        obj.classList.remove('active')
        input.setAttribute('type','password')
   }else{
        obj.classList.add('active')
        input.setAttribute('type','text')
   }
}
window.onload = function(){
    var getUrl = document.querySelector('.ba').className.split(' ')[1];
    if(getUrl=="baintroduction" || 
    getUrl=="baacademic" || 
    getUrl=="bajournal" || 
    getUrl=="balist" || 
    getUrl=="bajoin" || 
    getUrl=="banews_add" || 
    getUrl=="banews_update" || 
    getUrl=="babulletin_add" || 
    getUrl=="babulletin_update" || 
    getUrl=="bameeting_add" || 
    getUrl=="bameeting_update"){
        tinymceFn({'select': '#tinymce'})
    }else if(getUrl=="bamanager_add" ||
    getUrl=='bamanager_update' || 
    getUrl=="bamember_add" ||
    getUrl=='bamember_update'){
        imgFn(300,300)
    }else if( getUrl=="bacarousel_add" ||
    getUrl=='bacarousel_update'){    
        imgFn(1500,750)
    }else if(getUrl=="XX"){
        seachFn({'url':'./'+getUrl+'/seach'}).then((o)=>{
            console.log(o)
            var publicMain = document.querySelector('.publicMain')
            var nav = publicMain.querySelector('.nav')
            nav.append(creatHtml({
                'tage': 'div',
                'cl': 'publicFlex',
                'addHtml':  creatHtml({
                    'tage': 'a',
                    'cl': 'publicBtn',
                    'addHtml': [
                        creatHtml({
                            'tage': 'i',
                            'text': '<svg viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"></path></svg>'
                        }),
                        '新增'
                    ],
                    'handler': function(){

                    }
                }),
            }))
            var content  = publicMain.querySelector('.content')
            var customJson = {
                'nav': [
                    {'name':'新增','handler':function(){

                    }}
                ],
                'content':[
                    {'name':'#','id':'id'},
                    {'name':'排序','id':'sort','input':'number','rules':{'required':true},'messages':{'required':'請輸入排序'}},
                    {'name':'建立時間','id':'created_at'},
                    {'name':'標題','id':'title','input':'text','rules':{'required':true,'max':30},'messages':{'required':'請輸入標題','max':'最多30個字'}},
                    {'name':'簡述','id':'short','input':'text','rules':{'required':true,'max':80},'messages':{'required':'請輸入簡述','max':'最多80個字'}},
                    {'name':'內文','id':'tinymce','input':'tinymce','rules':{'required':true,'tinymce_size':3},'messages':{'required':'請輸入內文','tinymce_size':'檔案太大請減少圖片或字數'}},
                    {'name':'狀態','id':'release','input':'release','y':'發布','n':'停用'},
                    {'name':'動作','button':[
                        {'svg':"<svg viewBox='0 0 24 24'><path d='M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z'></path></svg>",'handler':function(){console.log('mide')}},
                        {'svg':"<svg viewBox='0 0 24 24'><path d='M16 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm0-2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-5.405 16.4l-1.472 1.6h-3.123v2h-2v2h-2v-2.179l5.903-5.976c-.404-.559-.754-1.158-1.038-1.795l-6.865 6.95v5h6v-2h2v-2h2l2.451-2.663c-.655-.249-1.276-.562-1.856-.937zm7.405-11.4c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm0-1c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z'></path></svg>",'handler':function(){console.log('password')}},
                        {'svg':"<svg viewBox='0 0 24 24'><path d='M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z'></path></svg>",'handler':function(){console.log('delet')}},
                    ]}
                ]
            }
            contentUl.append(creatHtml({
                'tage': 'ul',
                'cl': 'item',
                'addHtml':  o.data.map((element) => {
                    return creatHtml({
                        'tage': 'li',
                        'addHtml': creatHtml({
                            'tage': 'div',
                            // 'addHtml': creatHtml({
                            //     'tage': 'a',
                            //     'cl': element.cl,
                            //     'attr': { 'href': element.href, 'target': '_blank' },
                            //     'text': element.svg
                            // })
                        })
                    })
                })
            }))
            loadRemove()
        }).catch((message)=>{
            console.log(message)
        })
    }else{
        loadRemove()
    }
  
}