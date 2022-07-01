function getUrlX() {
    var href = location.href.split("/");
    href = href[href.length - 1];
    href = href.replace('.html', '')
    href = href.replace('#', '')
    href = href.replace('?', '')
    return href
}

function getUrl(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getLanguage() {
    var languageText = localStorage.getItem('language')
    if (languageText != null) {
        return languageText
    } else {
        var sys = (navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage).toLowerCase().split('-')[0];
        if (sys == 'zh') {
            localStorage.setItem('language', 'TW');
            return 'TW'
        }
        if (sys == 'en') {
            localStorage.setItem('language', 'EN');
            return 'EN'
        }

    }
}

function customload() {
    var customload = document.querySelector('.customload');
    customload?customload.classList.add('active'):''
}

function closeload() {
    var customload = document.querySelector('.customload')
    customload?customload.classList.remove('active'):''
}

// function getAjax(o) {
//     var u = o.u || location.href,
//         m = o.m || 'post',
//         form = o.form || '', //document.getElementById('idname')
//         value = o.value || ''; //add form value=>[{'n':'v'},{'n':'v'}]
//     // console.log(o.u)    
//     return new Promise(function(resolve, reject) {
//         var fd = new FormData();
//         if (form) {
//             fd = new FormData(form);
//         }
//         if (value) {
//             value.forEach(function(v, k) {
//                 fd.append(Object.keys(v)[0], v[Object.keys(v)[0]])
//             })
//         }
//         var xhr = new XMLHttpRequest();
//         xhr.open(m, u, true);
//         xhr.onload = function() {
//             //console.log(xhr.responseText);
//             resolve(JSON.parse(xhr.responseText))
//         };
//         xhr.onerror = function() {
//             reject(JSON.parse(xhr.statusText))
//         };
//         xhr.send(fd);
//     });
// }

function getImgHref() {
    var a = getUrl('a')
    if (!a.indexOf('ba')) {
        return './html/img/baimg/';
    } else {
        return './html/img/';
    }
}

function creatPageNumberX(o) {
    var p = o.p;
    var pn = o.pn;
    var t = o.d['totle'] || ''; //總數
    var fn = o.fn || 'seach'; //函數
    var $row = '';
    var $active = '';
    var $Total = Math.ceil(t / pn); // 總頁數
    var $search = o.search ? ",a:{'search':'" + o.search + "'}" : '';
    if (p >= 2) {
        $row += ' <li class="page-item">' +
            '<a class="page-link" onclick="' + fn + '({p:' + (p - 1) + $search + '})">上一頁</a>' +
            '</li>';
    } //上頁
    if ($Total < 10) {
        //頁數少
        for (var $i = 1; $i <= $Total; $i++) {
            $i == p ? $active = 'page-item active' : $active = '';
            $row += '<li class="' + $active + '"><a class="page-link" onclick="' + fn + '({p:' + $i + $search + '})">' + $i + '</a></li>';
        }
    } else {
        //頁數多
        var s = p - 1;
        var e = p * 1 + 1;
        if (p > 2) {
            $row += '<li class="page-item"><a class="page-link">...</a></li>';
        }
        if (p == 1) {
            s = 1;
            e += 1;
        }
        if (p == $Total) {
            s -= 1;
            e = $Total;
        }
        for (var $i = s; $i <= e; $i++) {
            $i == p ? $active = 'page-item active' : $active = '';
            $row += '<li class="' + $active + '"><a class="page-link" onclick="' + fn + '({p:' + $i + $search + '})">' + $i + '</a></li>';
        }
        if (p < $Total - 1) {
            $row += '<li class="page-item"><a class="page-link">...</a></li>';
        }
    } //中間
    if (p < $Total) {
        $row += '<li class="page-item">' +
            '<a class="page-link" onclick="' + fn + '({p:' + (p + 1) + $search + '})">下一頁</a>' +
            '</li>';
    } //下頁
    var ul = $('<ul class="list-inline" id="ProductsPage"></ul>').append($row);
    var ProductsPage = $('<div class="ProductsPage"></div>').append(ul);
    return ProductsPage;
}

function creatPageNumber(o) {
    var p = o.p;
    var pn = o['pn'];
    var t = o['totle'] || ''; //總數
    var fn = o.fn || 'seach'; //函數
    var $row = '';
    var $Total = Math.ceil(t / pn); // 總頁數
    var $search = o.search ? ",a:{'search':'" + o.search + "'}" : '';
    //上頁
    var previous = '';
    if (p >= 2) {
        previous = fn + '({p:' + (p - 1) + $search + '})'
    }
    $row += '<li>' +
        '<a class="previous" onclick="' + previous + '"></a>' +
        '</li>';
    //中間
    $row += '<li><a>' + p + ' / ' + $Total + '</a></li>';
    //下頁
    var next = ''
    if (p < $Total) {
        next = fn + '({p:' + (p + 1) + $search + '})'
    }
    $row += ' <li>' +
        '<a class="next" onclick="' + next + '"></a>' +
        '</li>';
    var ul = $('<ul class="list-inline" id="ProductsPage"></ul>').append($row);
    var ProductsPage = $('<div class="ProductsPage"></div>').append(ul);
    return ProductsPage;
}

function creatPageNumber1(o) {
    var p = o.p;
    var pn = o['pn'];
    var t = o['totle'] || ''; //總數
    var fn = o.fn || 'seach'; //函數
    var $Total = Math.ceil(t / pn); // 總頁數
    return creatHtml({
        'tage': 'div',
        'cl':'ProductsPage',
        'addHtml':[
            creatHtml({
                'tage': 'ul',
                'addHtml':[
                    creatHtml({
                        'tage': 'li',
                        'addHtml':creatHtml({
                            'tage': 'a',
                            'cl':'previous',
                            'handler': p >= 2?()=>{
                                window[fn]({'p': p - 1})
                            }:''
                        }),
                    }),
                    creatHtml({
                        'tage': 'li',
                        'addHtml':creatHtml({
                            'tage': 'a',
                            'text': p + ' / ' + $Total
                        }),
                    }),
                    creatHtml({
                        'tage': 'li',
                        'addHtml':creatHtml({
                            'tage': 'a',
                            'cl':'next',
                            'handler': p < $Total?()=>{
                                window[fn]({'p': p + 1})
                            }:''
                        }),
                    })
                ]
            })
        ]
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


