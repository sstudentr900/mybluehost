function creatPage(o) {
    var creatNav = ()=>{
        //固定TW
        localStorage.setItem('language', 'TW');
        var json = {
            'logo': '<svg viewBox="0 0 284.46 44.11"><style>.cls-1{fill:#151d62;}.cls-2{fill:#ec6f11;}</style><path class="cls-1" d="M73.27,16.54c-.51.83-1,1.68-1.61,2.51V34.93H69.2V22.13a30.35,30.35,0,0,1-8.31,6.58,12.77,12.77,0,0,0-1.56-2,27,27,0,0,0,11-10.14H60V14.23H80.88v2.32Zm.19,3.71a58.15,58.15,0,0,1,8.22,6.46l-1.9,1.76a55.14,55.14,0,0,0-8-6.75Z"/><path class="cls-1" d="M106.41,18.15s0,.8,0,1.07c-.24,10-.46,13.41-1.24,14.46a2.3,2.3,0,0,1-1.83,1,19.67,19.67,0,0,1-3,0,5.39,5.39,0,0,0-.66-2.07c1.17.1,2.19.12,2.68.12a.87.87,0,0,0,.83-.39c.56-.68.8-3.88,1-12.14h-2.88C101,26.93,100,32,95.78,35.24a7,7,0,0,0-1.71-1.78c.17-.12.34-.24.51-.39-3.51.41-7,.78-9.61,1.07l-.34-2c1.39-.1,3.17-.27,5.1-.44V29.93H85.3V28.27h4.44V27.05H85.37V19.69h4.36V18.42h-5V16.71h5V15.42c-1.51.15-3,.22-4.44.27a5.83,5.83,0,0,0-.54-1.63A72.85,72.85,0,0,0,95.3,12.81l1.12,1.66a38.73,38.73,0,0,1-4.61.76v1.49h4.85v1.44h2.56c0-1.63,0-3.36,0-5.19h2.17c0,1.8,0,3.54,0,5.19ZM87.2,22.66h2.54V21.2H87.2Zm2.54,2.88V24.05H87.2v1.49Zm2.07,6c1.51-.15,3.1-.29,4.63-.46,1.93-2.71,2.54-6.34,2.73-10.83H96.59V18.42H91.81v1.27h4.54v7.36H91.81v1.22h4.68v1.66H91.81Zm2.61-8.9V21.2H91.81v1.46Zm-2.61,1.39v1.49h2.61V24.05Z"/><path class="cls-1" d="M132.34,32.39v1.85H114.47V32.39h7.66v-2h-5.41V28.61h5.41V26.83h-4.58a13.77,13.77,0,0,1-2.41,3.1,11.74,11.74,0,0,0-1.1-2,13,13,0,0,1-2.54,7.27,8,8,0,0,0-1.73-1.44c2-2.34,2.17-5.63,2.17-8.1V20.93h3.12a9.28,9.28,0,0,0-1-1c1.85-.32,4-.78,6-1.27-1.76-.49-3.51-.93-5.12-1.27l1.24-1h-4V14.69h8.68a13.07,13.07,0,0,0-1.12-1.58l1.58-.76A13.59,13.59,0,0,1,123,14.69h8.27v1.78h-3.63l1.07.68a36.83,36.83,0,0,1-3.44,1.44c1.63.46,3.15,1,4.34,1.37l-1.12,1H132v1.85H114.13v2.9c0,.71,0,1.46-.1,2.24a12.67,12.67,0,0,0,3.1-4.83l2,.56c-.17.46-.37.9-.58,1.37h3.63v-1.8h2.24V25h6.31v1.8h-6.31v1.78H130v1.78h-5.68v2Zm-4.95-11.46c-1.29-.46-3-1-4.71-1.51-2,.61-4,1.1-5.95,1.51Zm-10.14-4.46c1.78.41,3.71.9,5.56,1.41a24.92,24.92,0,0,0,3.75-1.41Z"/><path class="cls-1" d="M157.27,20.88s0,.68,0,1c-.24,8.29-.46,11.14-1.1,12a2,2,0,0,1-1.58.9,11.85,11.85,0,0,1-2.34,0,5.79,5.79,0,0,0-.58-2l.37,0-.12-.34c-3.24.34-6.58.63-9,.88l-.22-1.88,4.88-.37v-1.8h-3.88V24.54c-.19.19-.41.37-.61.54-.27-.24-.76-.68-1.19-1,0,.54,0,1.07,0,1.61,0,3.44-.24,6.85-1.24,8.24a2.21,2.21,0,0,1-1.39.83,10,10,0,0,1-2.63.15,4.7,4.7,0,0,0-.61-2.17,14.31,14.31,0,0,0,2.27,0,.93.93,0,0,0,.71-.41c.56-.71.76-3.66.76-6.71v-.2a20.17,20.17,0,0,1-3.27,3.66,7.75,7.75,0,0,0-1.37-1.76,15.79,15.79,0,0,0,4.44-5.27,14.88,14.88,0,0,0-.63-2.93,23.86,23.86,0,0,1-2.34,2.15A8.63,8.63,0,0,0,135,19.81,19.55,19.55,0,0,0,137.93,17a13.47,13.47,0,0,0-2.46-3.1l1.58-1.19a16.5,16.5,0,0,1,2.24,2.58,22.78,22.78,0,0,0,1.58-2.56l2,1a23.85,23.85,0,0,1-2.41,3.54,16.93,16.93,0,0,1,1.37,6.1,13,13,0,0,0,3.19-4H143.2v-5.9h13.56v5.9h-9.51a15.91,15.91,0,0,1-.73,1.44Zm-3.51,12a.82.82,0,0,0,.51-.37c.41-.56.66-3.07.85-9.85h-9.85a15.37,15.37,0,0,1-1.56,1.73h3.78V23.15h1.78v1.29h4v4.93h-1.15a13.84,13.84,0,0,1,1.66,3.54Zm-8.63-15.19h2V15.27h-2Zm2.37,10.14v-2h-2.15v2Zm1.32-10.14h2.12V15.27h-2.12Zm.46,10.14h2.19v-2h-2.19Zm1.9,3c-.2-.37-.37-.71-.56-1l1.27-.49h-2.61V31Zm1.41-13.14h2.17V15.27h-2.17Z"/><path class="cls-1" d="M182.78,31.68V34H161.05V31.68h11.8a71.71,71.71,0,0,0,3.39-11.29l2.56.49a104.17,104.17,0,0,1-3.51,10.8Zm-1-12.36H162.1V17h19.68ZM167.49,30.83a80.27,80.27,0,0,0-2.19-9.92l2.29-.56a82.32,82.32,0,0,1,2.32,9.88Zm3.63-13.9A30.84,30.84,0,0,0,170,13l2.24-.56c.46,1.22,1,2.83,1.29,3.85Z"/><path class="cls-1" d="M187.1,24.27h8.83V34.78h-2.24v-1.1h-4.44V35H187.1Zm2.15,2.17v5.07h4.44V26.44Zm14.92-4.54H190.54V13.59h13.63Zm-2.32-6.15h-9.14v4h9.14Zm5.73,8.51V34.83h-2.27V33.68h-4.83V35h-2.17V24.27Zm-2.27,7.24V26.44h-4.83v5.07Z"/><path class="cls-1" d="M217.27,12.59h1.88v8.49H215v1.19c0,.63,0,1.27,0,2h4.12V35h-2.07V26.17h-2.12A30.5,30.5,0,0,1,213.32,35a19.61,19.61,0,0,0-2-.71c1.44-3.46,1.66-8.51,1.66-12V13.13H215v6h2.24ZM233.8,30.12h-4v4.8h-2v-4.8h-7.92v-2h2.46a6.94,6.94,0,0,0-1-.78,10.1,10.1,0,0,0,2.66-2.49h-3.27V15.08H224a18,18,0,0,0,1-2.46l2.54.34c-.39.76-.78,1.49-1.12,2.12h6.22v9.78H226.2a10.62,10.62,0,0,1-2.66,3.27h4.19V25.39h2v2.73h4Zm-11-11h2.93V16.88h-2.93ZM225,23a8.84,8.84,0,0,0,.63-2.22h-2.83V23Zm5.54-2.22h-2.88A19.67,19.67,0,0,1,227,23h3.44Zm0-3.93h-2.78v2.19h2.78Z"/><path class="cls-1" d="M244.27,15.62V35h-1.9V30.59c-1.85.32-3.68.66-5.17.93l-.44-2,1.37-.19V15.62h-1.07v-2h8.07v2Zm-1.9,0H240v3h2.39Zm0,4.9H240v3.07h2.39Zm0,8.14V25.47H240V29Zm8.46-8.61c.44,1.29,1,3,1.19,4l-1.41.46c-.07-.34-.17-.78-.29-1.22-4.12.51-4.73.66-5.12.85-.1-.46-.32-1.46-.49-2A3.41,3.41,0,0,0,246.12,21a18.67,18.67,0,0,0,1.37-1.78,6.58,6.58,0,0,0-2.12.39c-.07-.46-.34-1.49-.51-2.07a2.2,2.2,0,0,0,1-.83,19.74,19.74,0,0,0,2.17-4l1.68.73A27.81,27.81,0,0,1,247,17.76l1.54-.07a23,23,0,0,0,1.24-2.12l1.54.8a36.9,36.9,0,0,1-4.15,5.73l2.73-.27c-.12-.51-.29-1-.44-1.44Zm.44,4.54v3.68A6.92,6.92,0,0,1,247,35.1a6.89,6.89,0,0,0-1.22-1.56,5.55,5.55,0,0,0,3.41-3.39h-3.29V24.59h1.85v3.66h1.68V24.59Zm6.73-.22c-.1-.34-.24-.8-.37-1.29-4.1.63-4.73.8-5.12,1-.07-.46-.34-1.44-.49-2A2.61,2.61,0,0,0,253.29,21a14.57,14.57,0,0,0,1.37-2,6.61,6.61,0,0,0-2.39.44c-.1-.44-.34-1.41-.51-2,.32,0,.61-.34,1-.78a17.54,17.54,0,0,0,2.15-3.88l1.51.76a26.75,26.75,0,0,1-2.44,4l1.63-.1c.34-.61.71-1.29,1-2l1.51.78A38.1,38.1,0,0,1,254.51,22l2.61-.34c-.17-.51-.37-1-.54-1.46l1.29-.41a37.19,37.19,0,0,1,1.51,4Zm-1.71.39h1.85V31h-1.85v-.85h-1.68V35h-2V24.56h2V28.2h1.68Z"/><path class="cls-1" d="M284.46,32.29v2H262.22v-2h2.83V26.61h16.73v5.68Zm-18.8-7.61h-2.07v-11h7.92v9.73h-5.85Zm0-9.22v2.22h3.8V15.47Zm3.8,6.17V19.42h-3.8v2.22Zm-2.29,10.66h2.73v-3.9h-2.73ZM275.29,22a7.75,7.75,0,0,1-2.71,4.27A7.64,7.64,0,0,0,271,24.81c2.39-1.8,2.66-4.41,2.66-6.56V13.3H283V23.69c0,1.07-.24,1.61-1,1.93a10,10,0,0,1-3.49.37,7,7,0,0,0-.83-1.9c1.17,0,2.27,0,2.58,0s.46-.1.46-.41V22ZM272,28.39v3.9h2.76v-3.9Zm8.78-8V18.54h-5a16.45,16.45,0,0,1-.12,1.85Zm-5-5.29v1.83h5V15.1Zm1.07,13.29v3.9h2.76v-3.9Z"/><path class="cls-1" d="M22,44.11a15,15,0,0,1-15-15c0-6.95,4.4-12.1,12.38-14.51l.87,2.87c-3.83,1.16-10.25,4.21-10.25,11.64a12,12,0,0,0,12,12c7.49,0,12-4.1,12-11V15.92L25.82,7.56,28,5.47l9,9.23V30.14C37,38.62,31.12,44.11,22,44.11Z"/><circle class="cls-1" cx="4.19" cy="39.42" r="4.19"/><path class="cls-2" d="M34.06,30H21.12v-15A15.09,15.09,0,1,1,39.26,29.82l-.6-2.94A12.07,12.07,0,1,0,24.12,15.06V27h9.94Z"/><rect class="cls-2" x="26.28" y="16.84" width="1.94" height="1.94"/><rect class="cls-2" x="29.25" y="16.84" width="1.94" height="1.94"/><rect class="cls-2" x="26.28" y="19.81" width="1.94" height="1.94"/><rect class="cls-2" x="29.25" y="19.81" width="1.94" height="1.94"/></svg>',
            'list_TW': [
                // {'text':'回到首頁','href':'?a=fnhome'},
                {
                    'text': '關於聯盟',
                    'child': [
                        { 'text': '聯盟創始', 'href': '?a=fnfounding' },
                        { 'text': '聯盟架構', 'href': '?a=fnarchitecture' },
                        { 'text': '聯盟入會', 'href': '?a=fnjoin' },
                    ]
                },
                {
                    'text': '會員專區',
                    'child': [
                        { 'text': '會員註冊', 'href': '?a=fnregistered' },
                        { 'text': '會員登入', 'href': '?a=fnsign' },
                        { 'text': '會員登出', 'href': '?a=fnsignout' },
                        { 'text': '會員編輯', 'href': '?a=fnedit' },
                        { 'text': '下載專區', 'href': '?a=fndownload' },
                    ]
                },
                {
                    'text': '本站資訊',
                    'child': [
                        { 'text': '影音訊息', 'href': '?a=fnvideo' },
                        { 'text': '行事曆', 'href': '?a=fncalendar' },
                        { 'text': '聯盟公告', 'href': '?a=fnbulletin' },
                        { 'text': '活動花絮', 'href': '?a=fnactivity' },
                        { 'text': '公益活動', 'href': '?a=fnpublic' },
                        { 'text': '房產新聞', 'href': '?a=fnestatenews' },
                        { 'text': '最新消息', 'href': '?a=fnmessage' },
                        { 'text': '免責聲名', 'href': '?a=fndisclaimer' },
                    ]
                },
                {
                    'text': '協力廠商',
                    'child': [
                        { 'text': '新進會員', 'href': '?a=fnmember' },
                        { 'text': '特約代書', 'href': '?a=fnessay' },
                        { 'text': '合作廠商', 'href': '?a=fnvendor' },
                        { 'text': '廠商推薦', 'href': '?a=fnadvertising' },
                    ]
                },
                { 'text': '菁英店家', 'href': '?a=fnelite' },
            ],
            // 'list_EN': [
            //     {'text':'正在建設中','href':'?a=fnconstruct'},
            //     {'text':'product','href':'?a=fnproduct'},
            //     {'text':'equipment','href':'?a=fnequipment'},
            //     {'text':'certification','href':'?a=fncertification'},
            //     {'text':'contact','href':'?a=fncontact'},
            // ]
        }
        return creatHtml({
            'tage': 'div',
            'cl': 'fnNav',
            'addHtml': creatHtml({
                'tage': 'div',
                'cl': 'container',
                'addHtml': [
                    creatHtml({
                        'tage': 'a',
                        'cl': 'logo scrollAnimation',
                        'attr': { 'href': '?a=fnhome' },
                        'text': json['logo']
                    }),
                    creatHtml({
                        'tage': 'ul',
                        'cl': 'list scrollAnimation',
                        'addHtml': json['list_' + getLanguage()].map((element) => {
                            function addHtmlA(element) {
                                return element.href ? creatHtml({
                                    'tage': 'a',
                                    'cl': element.href.split('=')[1] == getUrl('a') ? 'active' : '',
                                    'attr': { 'href': element.href },
                                    'text': element.text,
                                }) : creatHtml({
                                    'tage': 'a',
                                    'cl': (() => {
                                        return element.child.find((element2) => element2.href.split('=')[1] == getUrl('a')) ? 'active' : ''
                                    })(),
                                    'text': element.text,
                                })
                            }

                            function addHtmlUl(element) {
                                return element.child ? creatHtml({
                                    'tage': 'ul',
                                    'addHtml': element.child.map((element2) => {
                                        return creatHtml({
                                            'tage': 'li',
                                            'addHtml': creatHtml({
                                                'tage': 'a',
                                                'attr': { 'href': element2.href },
                                                'text': element2.text
                                            })
                                        })
                                    })
                                }) : '';
                            }
                            return creatHtml({
                                'tage': 'li',
                                'addHtml': [
                                    addHtmlA(element),
                                    addHtmlUl(element)
                                ]
                            })
                        })
                    }),
                    // creatHtml({
                    //     'tage': 'ul',
                    //     'cl':'language scrollAnimation',
                    //     'addHtml': ['TW','EN'].map((element)=>{
                    //         return creatHtml({
                    //             'tage': 'li',
                    //             'cl': getLanguage()==element?'active':'',
                    //             'text': element,
                    //             'handler': function(){
                    //                 localStorage.setItem('language', element);
                    //                 window[getUrl('a')]({})
                    //             }
                    //         })
                    //     })
                    // }),
                    creatHtml({
                        'tage': 'div',
                        'cl': 'bar',
                        'addHtml': [0, 1, 2].map((element) => {
                            return creatHtml({ 'tage': 'div' })
                        }),
                        'handler': function() {
                            var body = document.querySelector('body')
                            var fnNav = this.closest('.fnNav')
                            if (fnNav.classList.contains('active')) {
                                fnNav.classList.remove('active')
                                body.style.overflow = '';
                            } else {
                                fnNav.classList.add('active')
                                body.style.overflow = 'hidden';
                            }
                        }
                    }),
                ]
            })
        })
    }
    var creatFooter = ()=>{
        var json = {
            'logo': '<svg viewBox="0 0 113.33 70"><path d="M8,59.17c-.25.41-.51.83-.79,1.24v7.84H6V61.93a15,15,0,0,1-4.11,3.25,6.31,6.31,0,0,0-.77-1,13.34,13.34,0,0,0,5.42-5H1.49V58H11.8v1.14ZM8.14,61a28.72,28.72,0,0,1,4.06,3.19l-.94.87a27.24,27.24,0,0,0-4-3.34Z"/><path d="M24.41,60s0,.4,0,.53c-.12,5-.23,6.62-.61,7.14a1.13,1.13,0,0,1-.9.52,9.72,9.72,0,0,1-1.47,0,2.66,2.66,0,0,0-.33-1c.58,0,1.08.06,1.32.06a.43.43,0,0,0,.41-.19c.28-.34.4-1.92.49-6H21.89c-.14,3.29-.67,5.81-2.73,7.4a3.44,3.44,0,0,0-.84-.88l.25-.19c-1.73.2-3.47.39-4.75.53l-.17-1c.69,0,1.57-.13,2.52-.22v-.9H14V65h2.19v-.6H14V60.72h2.16V60.1H13.69v-.84h2.48v-.64c-.75.07-1.51.11-2.19.13a2.88,2.88,0,0,0-.27-.81,36,36,0,0,0,5.2-.61l.55.82a19.13,19.13,0,0,1-2.28.37v.73h2.4V60h1.26c0-.81,0-1.66,0-2.57H22c0,.89,0,1.75,0,2.57Zm-9.49,2.23h1.25v-.72H14.92Zm1.25,1.42v-.73H14.92v.73Zm1,3,2.29-.23A9.83,9.83,0,0,0,20.83,61H19.56V60.1H17.2v.63h2.24v3.64H17.2V65h2.31v.82H17.2Zm1.29-4.4v-.72H17.2v.72Zm-1.29.69v.73h1.29v-.73Z"/><path d="M37.22,67v.92H28.39V67h3.78V66H29.5v-.88h2.67v-.88H29.91a6.8,6.8,0,0,1-1.19,1.53,5.8,5.8,0,0,0-.54-1,6.4,6.4,0,0,1-1.25,3.59,4,4,0,0,0-.86-.71,6.21,6.21,0,0,0,1.07-4V61.34h1.54a4.58,4.58,0,0,0-.49-.48c.92-.16,2-.39,3-.63-.87-.24-1.73-.46-2.53-.63l.61-.47h-2v-.88h4.29a6.45,6.45,0,0,0-.55-.78l.78-.37a6.71,6.71,0,0,1,.84,1.16h4.08v.88H34.88l.53.34a18.19,18.19,0,0,1-1.7.71c.81.23,1.55.47,2.14.67l-.55.48h1.75v.92H28.22v1.43c0,.35,0,.72,0,1.11a6.26,6.26,0,0,0,1.53-2.38l1,.28c-.08.23-.18.45-.29.67h1.79v-.89h1.11v.89H36.4v.89H33.28v.88h2.81V66H33.28v1Zm-2.45-5.66c-.64-.23-1.46-.48-2.32-.75-1,.3-2,.54-2.94.75Zm-5-2.2c.88.2,1.83.45,2.75.7a12.31,12.31,0,0,0,1.85-.7Z"/><path d="M49.53,61.31s0,.34,0,.48c-.12,4.1-.23,5.5-.54,6a1,1,0,0,1-.78.45,5.85,5.85,0,0,1-1.16,0,2.86,2.86,0,0,0-.29-1l.18,0-.06-.17c-1.6.17-3.25.31-4.47.43l-.11-.93,2.41-.18V65.5H42.79V63.12c-.1.1-.2.18-.3.26-.13-.12-.37-.34-.59-.51,0,.27,0,.53,0,.79,0,1.7-.12,3.38-.61,4.07a1.09,1.09,0,0,1-.69.41,4.93,4.93,0,0,1-1.3.07,2.32,2.32,0,0,0-.3-1.07,7.07,7.07,0,0,0,1.12,0,.46.46,0,0,0,.35-.2,8.65,8.65,0,0,0,.37-3.31v-.1a10,10,0,0,1-1.61,1.81,3.83,3.83,0,0,0-.67-.87,7.8,7.8,0,0,0,2.19-2.6,7.35,7.35,0,0,0-.31-1.45,11.79,11.79,0,0,1-1.16,1.06,4.26,4.26,0,0,0-.75-.72A9.66,9.66,0,0,0,40,59.41a6.66,6.66,0,0,0-1.22-1.53l.78-.59a8.15,8.15,0,0,1,1.11,1.28,11.25,11.25,0,0,0,.78-1.26l1,.51a11.78,11.78,0,0,1-1.19,1.75,8.36,8.36,0,0,1,.67,3,6.42,6.42,0,0,0,1.58-2h-.88V57.69h6.7V60.6h-4.7a7.86,7.86,0,0,1-.36.71Zm-1.73,6a.4.4,0,0,0,.25-.18c.2-.28.33-1.52.42-4.87H43.61a7.59,7.59,0,0,1-.77.86H44.7v-.64h.88v.64h2V65.5H47a6.84,6.84,0,0,1,.82,1.75Zm-4.26-7.5h1V58.54h-1Zm1.17,5v-1H43.64v1Zm.65-5h1V58.54h-1Zm.23,5h1.08v-1H45.58Zm.94,1.48c-.1-.18-.18-.35-.28-.51l.63-.24H45.58v.82Zm.7-6.49h1.07V58.54H47.22Z"/><path d="M62.13,66.65v1.13H51.4V66.65h5.83a35.42,35.42,0,0,0,1.67-5.58l1.26.24a51.46,51.46,0,0,1-1.73,5.34Zm-.49-6.11H51.92V59.41h9.72Zm-7.06,5.69a39.65,39.65,0,0,0-1.08-4.9L54.63,61a40.66,40.66,0,0,1,1.14,4.88Zm1.79-6.87a15.23,15.23,0,0,0-.58-2l1.11-.28c.23.6.51,1.4.64,1.9Z"/><path d="M64.27,63h4.36v5.19H67.52v-.54H65.33v.63H64.27Zm1.06,1.07v2.51h2.19V64.06Zm7.37-2.24H66V57.71H72.7Zm-1.14-3H67v2h4.52ZM74.39,63V68.2H73.27v-.57H70.88v.63H69.81V63Zm-1.12,3.58V64.06H70.88v2.51Z"/><path d="M79.17,57.22h.93v4.19h-2V62c0,.31,0,.63,0,1h2v5.29h-1V63.93H78a15.06,15.06,0,0,1-.79,4.34,9.69,9.69,0,0,0-1-.35A17,17,0,0,0,77,62V57.48h1v3h1.11Zm8.17,8.66h-2v2.37h-1V65.88H80.43v-1h1.22a3.43,3.43,0,0,0-.49-.39,5,5,0,0,0,1.31-1.23H80.85V58.45h1.67A8.91,8.91,0,0,0,83,57.23l1.25.17-.55,1h3.07v4.83h-3.2a5.25,5.25,0,0,1-1.31,1.61h2.07V63.54h1v1.35h2Zm-5.46-5.46h1.45V59.34H81.88Zm1.08,2a4.37,4.37,0,0,0,.31-1.1h-1.4v1.1Zm2.73-1.1H84.28a9.72,9.72,0,0,1-.28,1.1h1.7Zm0-1.94H84.33v1.08H85.7Z"/><path d="M92.51,58.71v9.55h-.94V66.11L89,66.56l-.22-1,.67-.1V58.71h-.53v-1h4v1Zm-.94,0H90.39V60.2h1.18Zm0,2.42H90.39v1.52h1.18Zm0,4V63.58H90.39v1.75Zm4.18-4.25c.22.64.48,1.48.59,2l-.7.23c0-.17-.08-.39-.14-.6a10.51,10.51,0,0,0-2.53.42c0-.23-.16-.72-.24-1a1.68,1.68,0,0,0,.7-.58,9.22,9.22,0,0,0,.67-.88,3.25,3.25,0,0,0-1,.19c0-.23-.17-.73-.25-1a1.09,1.09,0,0,0,.48-.41,9.75,9.75,0,0,0,1.07-2l.83.36a13.74,13.74,0,0,1-1.32,2.13l.76,0a11.34,11.34,0,0,0,.61-1l.76.4a18.23,18.23,0,0,1-2,2.83l1.35-.13c-.06-.25-.14-.48-.22-.71ZM96,63.14V65a3.42,3.42,0,0,1-2.13,3.37,3.4,3.4,0,0,0-.6-.77,2.74,2.74,0,0,0,1.69-1.67H93.29V63.14h.92V65H95V63.14ZM99.29,63c0-.17-.12-.4-.18-.64a10.07,10.07,0,0,0-2.53.51c0-.23-.17-.71-.24-1a1.29,1.29,0,0,0,.63-.57,7.2,7.2,0,0,0,.67-1,3.27,3.27,0,0,0-1.18.22c0-.22-.17-.7-.25-1,.16,0,.3-.17.47-.39a8.67,8.67,0,0,0,1.06-1.92l.75.37a13.21,13.21,0,0,1-1.2,2l.81,0c.17-.3.35-.64.49-1l.75.39a18.82,18.82,0,0,1-1.76,2.79l1.29-.17c-.08-.25-.18-.49-.26-.72l.64-.2a18.37,18.37,0,0,1,.75,2Zm-.84.19h.92v3.08h-.92v-.42h-.83v2.38h-1V63.13h1v1.79h.83Z"/><path d="M112.36,66.95v1h-11v-1h1.4V64.14H111v2.81Zm-9.29-3.76h-1V57.76H106v4.81h-2.89Zm0-4.55v1.1H105v-1.1Zm1.88,3v-1.1h-1.88v1.1Zm-1.13,5.26h1.35V65h-1.35Zm4-5.07A3.83,3.83,0,0,1,106.5,64a3.78,3.78,0,0,0-.78-.73A3.73,3.73,0,0,0,107,60V57.57h4.61V62.7c0,.53-.12.79-.48,1a4.94,4.94,0,0,1-1.72.18,3.43,3.43,0,0,0-.41-.94c.58,0,1.12,0,1.28,0s.23,0,.23-.2v-.82ZM106.2,65v1.93h1.36V65Zm4.34-4v-.92h-2.48a8.13,8.13,0,0,1-.06.92Zm-2.48-2.61v.9h2.48v-.9Zm.53,6.56v1.93h1.36V65Z"/><path d="M52.5,52.62A17.6,17.6,0,0,1,34.92,35c0-8.16,5.16-14.21,14.54-17l1,3.37c-4.49,1.36-12,4.94-12,13.67A14.09,14.09,0,0,0,52.5,49.1c8.8,0,14.05-4.81,14.05-12.88V19.53L56.95,9.71l2.52-2.46L70.08,18.09V36.22C70.08,46.18,63.18,52.62,52.5,52.62Z"/><circle cx="31.55" cy="47.12" r="4.92"/><path d="M66.63,36.1H51.43V18.51a17.73,17.73,0,1,1,21.3,17.33L72,32.39A14.17,14.17,0,1,0,55,18.51V32.57H66.63Z"/><rect x="57.49" y="20.61" width="2.28" height="2.28"/><rect x="60.98" y="20.61" width="2.28" height="2.28"/><rect x="57.49" y="24.09" width="2.28" height="2.28"/><rect x="60.98" y="24.09" width="2.28" height="2.28"/></svg>',
            'list_share_TW': [
                { 'svg': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5c3.453 0 5.891 2.797 5.567 6.78 1.745-.046 4.433.751 4.433 3.72 0 1.93-1.57 3.5-3.5 3.5h-13c-1.93 0-3.5-1.57-3.5-3.5 0-2.797 2.479-3.833 4.433-3.72-.167-4.218 2.208-6.78 5.567-6.78zm0-2c-4.006 0-7.267 3.141-7.479 7.092-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408-.212-3.951-3.473-7.092-7.479-7.092z"/></svg>', 'cl': 'otherlogin', 'href': 'http://builders.88888.com.tw/account/member/sign_in' },
                { 'svg': '<svg viewBox="0 0 24 24"><path d="M 3 4 C 2.448 4 2 4.448 2 5 L 2 7 C 2 7.552 2.448 8 3 8 L 21 8 C 21.552 8 22 7.552 22 7 L 22 5 C 22 4.448 21.552 4 21 4 L 3 4 z M 5 5 C 5.552 5 6 5.448 6 6 C 6 6.552 5.552 7 5 7 C 4.448 7 4 6.552 4 6 C 4 5.448 4.448 5 5 5 z M 3 10 C 2.448 10 2 10.448 2 11 L 2 13 C 2 13.552 2.448 14 3 14 L 21 14 C 21.552 14 22 13.552 22 13 L 22 11 C 22 10.448 21.552 10 21 10 L 3 10 z M 5 11 C 5.552 11 6 11.448 6 12 C 6 12.552 5.552 13 5 13 C 4.448 13 4 12.552 4 12 C 4 11.448 4.448 11 5 11 z M 3 16 C 2.448 16 2 16.448 2 17 L 2 19 C 2 19.552 2.448 20 3 20 L 21 20 C 21.552 20 22 19.552 22 19 L 22 17 C 22 16.448 21.552 16 21 16 L 3 16 z M 5 17 C 5.552 17 6 17.448 6 18 C 6 18.552 5.552 19 5 19 C 4.448 19 4 18.552 4 18 C 4 17.448 4.448 17 5 17 z"></path></svg>', 'cl': 'balogin', 'href': '?a=balogin' },
                { 'svg': '<svg viewBox="0 0 24 24"><path d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"/></svg>', 'cl': 'fb', 'href': '#' },
                { 'svg': '<svg viewBox="0 0 24 24"><path d="M4.652 0h1.44l.988 3.702.916-3.702h1.454l-1.665 5.505v3.757h-1.431v-3.757l-1.702-5.505zm6.594 2.373c-1.119 0-1.861.74-1.861 1.835v3.349c0 1.204.629 1.831 1.861 1.831 1.022 0 1.826-.683 1.826-1.831v-3.349c0-1.069-.797-1.835-1.826-1.835zm.531 5.127c0 .372-.19.646-.532.646-.351 0-.554-.287-.554-.646v-3.179c0-.374.172-.651.529-.651.39 0 .557.269.557.651v3.179zm4.729-5.07v5.186c-.155.194-.5.512-.747.512-.271 0-.338-.186-.338-.46v-5.238h-1.27v5.71c0 .675.206 1.22.887 1.22.384 0 .918-.2 1.468-.853v.754h1.27v-6.831h-1.27zm2.203 13.858c-.448 0-.541.315-.541.763v.659h1.069v-.66c.001-.44-.092-.762-.528-.762zm-4.703.04c-.084.043-.167.109-.25.198v4.055c.099.106.194.182.287.229.197.1.485.107.619-.067.07-.092.105-.241.105-.449v-3.359c0-.22-.043-.386-.129-.5-.147-.193-.42-.214-.632-.107zm4.827-5.195c-2.604-.177-11.066-.177-13.666 0-2.814.192-3.146 1.892-3.167 6.367.021 4.467.35 6.175 3.167 6.367 2.6.177 11.062.177 13.666 0 2.814-.192 3.146-1.893 3.167-6.367-.021-4.467-.35-6.175-3.167-6.367zm-12.324 10.686h-1.363v-7.54h-1.41v-1.28h4.182v1.28h-1.41v7.54zm4.846 0h-1.21v-.718c-.223.265-.455.467-.696.605-.652.374-1.547.365-1.547-.955v-5.438h1.209v4.988c0 .262.063.438.322.438.236 0 .564-.303.711-.487v-4.939h1.21v6.506zm4.657-1.348c0 .805-.301 1.431-1.106 1.431-.443 0-.812-.162-1.149-.583v.5h-1.221v-8.82h1.221v2.84c.273-.333.644-.608 1.076-.608.886 0 1.18.749 1.18 1.631v3.609zm4.471-1.752h-2.314v1.228c0 .488.042.91.528.91.511 0 .541-.344.541-.91v-.452h1.245v.489c0 1.253-.538 2.013-1.813 2.013-1.155 0-1.746-.842-1.746-2.013v-2.921c0-1.129.746-1.914 1.837-1.914 1.161 0 1.721.738 1.721 1.914v1.656z"/></svg>', 'cl': 'youtube', 'href': '#' },
                { 'svg': '<svg viewBox="0 0 24 24"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.121.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992zm-18.988-2.595c.129 0 .234.105.234.234v4.153h2.287c.129 0 .233.104.233.233v.842c0 .129-.104.234-.233.234h-3.363c-.063 0-.119-.025-.161-.065l-.001-.001-.002-.002-.001-.001-.003-.003c-.04-.042-.065-.099-.065-.161v-5.229c0-.129.104-.234.233-.234h.842zm14.992 0c.129 0 .233.105.233.234v.842c0 .129-.104.234-.233.234h-2.287v.883h2.287c.129 0 .233.105.233.234v.842c0 .129-.104.234-.233.234h-2.287v.884h2.287c.129 0 .233.105.233.233v.842c0 .129-.104.234-.233.234h-3.363c-.063 0-.12-.025-.162-.065l-.003-.004-.003-.003c-.04-.042-.066-.099-.066-.161v-5.229c0-.062.025-.119.065-.161l.004-.004.003-.003c.042-.04.099-.066.162-.066h3.363zm-10.442.001c.129 0 .234.104.234.233v5.229c0 .128-.105.233-.234.233h-.842c-.129 0-.234-.105-.234-.233v-5.229c0-.129.105-.233.234-.233h.842zm2.127 0h.008l.012.001.013.001.01.001.013.003.008.003.014.004.008.003.013.006.007.003.013.007.007.004.012.009.006.004.013.011.004.004.014.014.002.002.018.023 2.396 3.236v-3.106c0-.129.105-.233.234-.233h.841c.13 0 .234.104.234.233v5.229c0 .128-.104.233-.234.233h-.841l-.06-.008-.004-.001-.015-.005-.007-.003-.012-.004-.011-.006-.007-.003-.014-.009-.002-.002-.06-.058-2.399-3.24v3.106c0 .128-.104.233-.234.233h-.841c-.129 0-.234-.105-.234-.233v-5.229c0-.129.105-.233.234-.233h.841z"/></svg>', 'cl': 'line', 'href': '#' },
            ],
            'list_infor_TW': [
                { 'title': '地址 :', 'text': '高雄市802苓雅區四維三路263號8樓', 'cl': 'addr', 'href': 'https://www.google.com.tw/maps/search/%E9%AB%98%E9%9B%84%E5%B8%82%E8%8B%93%E9%9B%85%E5%8D%80%E8%AD%BD%E7%82%BA%E4%B8%89%E8%B7%AF263%E8%99%9F+8F/@22.6193659,120.299915,17z/data=!3m1!4b1?' },
                { 'title': '電話 :', 'text': '0988-325428', 'cl': 'phone', 'href': 'tel:0988-325428' },
                { 'title': '信箱 :', 'text': 'kaohsiungrea@gmail.com', 'cl': 'email', 'href': 'mailto:kaohsiungrea@gmail.com' },
            ],
            // 'list_EN': [
            //     {'text':'about','href':'?a=fnintroduction'},
            //     {'text':'product','href':'?a=fnproduct'},
            //     {'text':'equipment','href':'?a=fnequipment'},
            //     {'text':'certification','href':'?a=fncertification'},
            //     {'text':'contact','href':'?a=fncontact'},
            // ]
        }
        return creatHtml({
            'tage': 'div',
            'cl': 'container',
            'addHtml': creatHtml({
                'tage': 'div',
                'cl': 'fnFooter',
                'addHtml': [
                    // creatHtml({
                    //     'tage': 'div',
                    //     'cl': 'logo',
                    //     'text': json['logo']
                    // }),
                    creatHtml({
                        'tage': 'div',
                        'cl': 'personal',
                        'addHtml': [
                            creatHtml({
                                'tage': 'ul',
                                'cl': 'infor',
                                'addHtml': json['list_infor_' + getLanguage()].map((element) => {
                                    return creatHtml({
                                        'tage': 'li',
                                        'cl': element.cl,
                                        'addHtml': [
                                            element.cl != 'addr' ? creatHtml({
                                                'tage': 'span',
                                                'text': element.title,
                                            }) : '',
                                            creatHtml({
                                                'tage': 'a',
                                                'attr': { 'href': element.href },
                                                'text': element.text,
                                            }),
                                        ]
                                    })
                                })
                            }),
                            creatHtml({
                                'tage': 'div',
                                'cl': 'copy-area',
                                'addHtml': creatHtml({
                                    'tage': 'span',
                                    'text': 'Copyright © 2021 不動產獨立品牌聯盟 版權所有'
                                })
                            }),
                        ]
                    }),
                    creatHtml({
                        'tage': 'ul',
                        'cl': 'share',
                        'addHtml': json['list_share_' + getLanguage()].map((element) => {
                            return creatHtml({
                                'tage': 'li',
                                'addHtml': creatHtml({
                                    'tage': 'a',
                                    'cl': element.cl,
                                    'attr': { 'href': element.href, 'target': '_blank' },
                                    'text': element.svg
                                })
                            })
                        })
                    }),
                ]
            })
        })
    }
    var creatContentHtml = o.creatContentHtml;
    var handler = o.handler ? o.handler : '';
    var getA = getUrl('a');
    var body = document.querySelector('body')
    var oldChild = document.querySelector('.fn');
    var cl = o.cl ? 'fn' + ' ' + o.cl + ' ' + getA : 'fn' + ' ' + getA
    var newChild = creatHtml({
        'tage': 'div',
        'cl': cl,
        'addHtml': [
            creatNav(),
            creatHtml({
                'tage': 'div',
                'cl': 'fnContent',
                'addHtml': creatContentHtml
            }),
            creatFooter()
        ]
    })
    body.replaceChild(newChild,oldChild)

    //
    if (handler) {
        handler()
    }

    setTimeout(() => {
         //
        closeload();

        /*scroll*/
        effectScroll();

    }, 500)
}

function creatJump(o) {
    closeload();
    closeJump();
    document.querySelector('body').append(creatHtml({
        'tage': 'div',
        'cl': 'customjump' + ' ' + getUrl('a'),
        'addHtml': [
            creatHtml({
                'tage': 'div',
                'cl': 'box',
                'addHtml': creatForm(o)
            })

        ]
    }))
}

function closeJump(o) {
    var reset = o?o.reset?o.reset:false:false
    if(reset){
        var creatForm = document.forms['creatForm']
        creatForm?creatForm.reset():''
    }
    var customjump = document.querySelector('.customjump')
    customjump ? customjump.remove() : ''
}

function creatCloseJump(o) {
    var lo = o.lo || ''
    return lo ? () => {location = lo} :  () => {closeJump(o)}
}

function creatFormError(o){
    var li = o.obj.closest('li')
    var error = li.querySelector('.error')
    error?'':li.append(creatHtml({
        'tage': 'span',
        'cl': 'error',
        'text': o.me
    }))
}

function creatForm(o) {
    var titleText = o.titleText || ''
    var content = o.content || ''
    var closeFn = o.closeFn || closeJump
    var sendText = o.sendText || ''
    var cancelText = o.cancelText || ''
    var sendFn = o.sendFn || ''
    var creatinput = {
        verificationFn: (o) => {
            var id = o.id
            var reg = o.reg
            var obj = document.querySelector("#" + id );
            creatinput.removeError({ 'obj': obj })
            return Promise.all(
                reg.map(async(element) => {
                    //reg 已有錯誤不再判斷
                    if (obj.closest('li').querySelector('.error')) {
                        return false
                    } else {
                        return await creatinput[element.rules]({ 'obj': obj, 'element': element })
                    }
                })
            )
        },
        removeError: (o) => {
            var error = o.obj.closest('li').querySelector('.error')
            error ? error.remove() : ''
        },
        error: (o) => {
            creatFormError({
                'obj': o.obj,
                'me':  o.element.me
            })
            // o.obj.closest('li').append(creatHtml({
            //     'tage': 'span',
            //     'cl': 'error',
            //     'text': o.element.messages
            // }))
            return false;
        },
        required: (o) => {
            return new Promise((resolve, reject) => {
                if (o.obj.type && o.obj.value) {
                    //一般
                    resolve(true)
                } else if (o.obj.className=='cover' && o.obj.closest('.box').classList.contains('active')) {
                    //圖片
                    resolve(true)
                }else{
                    resolve(creatinput.error(o))
                }
            })
        },
        custom_checkbox:(o)=>{
            return new Promise((resolve, reject) => {
                var number = 0
                document.querySelectorAll("input[name='custom_checkbox[]']").forEach(element=>element.checked==true?number++:'')
                if(number<=o.element.maxlength && number>=o.element.minlength){
                    resolve(true)
                }else{
                    resolve(creatinput.error(o))
                }
            })
            // document.querySelectorAll("input[name='custom_checkbox[]']").forEach(element=>element.checked==true?number++:'')
            // if(number<=o.element.maxlength && number>=o.element.minlength){
            //     return true
            // }else{
            //     return creatinput.error(o)
            // }
        },
        email: (o) => {
            return new Promise((resolve, reject) => {
                var rules = new RegExp("^\\S+@\\S+\\.\\S+$")
                if (rules.test(o.obj.value)) {
                    resolve(true)
                }else{
                    resolve(creatinput.error(o))
                }
            })
            // var rules = new RegExp("^\\S+@\\S+\\.\\S+$")
            // if (rules.test(o.obj.value)) {
            //     return true
            // } else {
            //     return creatinput.error(o)
            // }
        },
        password: (o) => {
            return new Promise((resolve, reject) => {
                var rules = new RegExp("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])\\w{6,10}")
                if (rules.test(o.obj.value)) {
                    resolve(true)
                } else {
                    resolve(creatinput.error(o))
                }
            })
        },
        againPassword: (o) => {
            return new Promise((resolve, reject) => {
                var password = document.querySelector("input[name='password']")
                var againPassword = document.querySelector("input[name='againPassword']")
                if (password.value == againPassword.value) {
                    creatinput.removeError({ 'obj': password })
                    creatinput.removeError({ 'obj': againPassword })
                    resolve(true)
                } else {
                    creatFormError({'obj': password,'me': o.element.me})
                    creatFormError({'obj': againPassword,'me': o.element.me})
                    resolve(false)
                }
            })
        },
        text: (o) => {
            return new Promise((resolve, reject) => {
                var rules = new RegExp("^[\\u4e00-\\u9fa5_a-zA-Z0-9.@]{" + o.element.minlength + "," + o.element.maxlength + "}$")
                if (rules.test(o.obj.value)) {
                    resolve(true)
                } else {
                    resolve(creatinput.error(o))
                }
            })
            // '字串3~10個字'
            // var rules = new RegExp("^[\\u4e00-\\u9fa5_a-zA-Z0-9.@]{" + o.element.minlength + "," + o.element.maxlength + "}$")
            // if (rules.test(o.obj.value)) {
            //     return true
            // } else {
            //     return creatinput.error(o)
            // }
        },
        ajax: (o) => {
            var obj = o.obj
            var objId = obj.id
            var objValue = obj.value
            return new Promise(function(resolve, reject) {
                getAjax({
                    'm': 'get',
                    'u': location.href + '&' + objId + "=" + objValue
                }).then(function(data) {
                    if (data.result) {
                        resolve(true)
                    } else {
                        // var error = creatinput.error({ 'obj': obj, 'element': { 'messages': data.message } })
                        // resolve(error)
                        resolve(creatinput.error(o))
                    }
                })
            })
            // var obj = o.obj
            // var objId = obj.id
            // var objValue = obj.value
            // getAjax({
            //     'm': 'get',
            //     'u': location.href + '&' + objId + "=" + objValue
            // }).then(function(data) {
            //     if (data.result) {
            //         return true
            //     } else {
            //         return creatinput.error({ 'obj': obj, 'element': { 'me': data.message } })
            //     }
            // })
        },
        phone: (o) => {
            return new Promise((resolve, reject) => {
                var rules = new RegExp("^[0-9]{6,12}$");
                if (rules.test(o.obj.value)) {
                    resolve(true)
                } else {
                    resolve(creatinput.error(o))
                }
            })
            //手機號碼錯誤
            // var rules = new RegExp("^[0-9]{10,12}$");
            // if (rules.test(o.obj.value)) {
            //     return true
            // } else {
            //     return creatinput.error(o)
            // }
        },
        image:(input, imgWidth, imgHight,imgSize)=>{
            var imgSize = imgSize?imgSize:1
            var imgSizeNumber = imgSize*1048576;
            var file = input.files[0];
            var type = file.type.split('/')[1]; //類型
            var customCover = input.closest('.customCover')
            var box = customCover.querySelector('.box')
            creatinput.removeError({'obj':customCover})
            //判斷圖片尺寸,圖片大小,圖片類型
            if (file.size < imgSizeNumber) {
                if (type == 'jpeg' || type == 'jpg' || type == 'png') {
                    var fileReader = new FileReader();
                    fileReader.onload = function(event) { //讀取完後執行的動作
                        var img = new Image();
                        img.src = event.target.result;
                        img.onload = function() {
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
                                canvas.width = this.width;
                                canvas.height = this.height;
                                context.drawImage(this, 0, 0, this.width, this.height);
                            }
                            var name = canvas.toDataURL("image/jpeg", 0.9)
                            box.classList.add('active')
                            box.querySelector('img').src = name
                        }
                    };
                    fileReader.readAsDataURL(file); //讀取檔案內容,以DataURL格式回傳結果
                } else {
                    input.value = '';
                    creatinput.error({'obj':customCover,'element':{'me':'錯誤 : 圖片類型只能是 jpg , jpeg , png'}})
                }
            } else {
                input.value = '';
                creatinput.error({'obj':customCover,'element':{'me':'錯誤 : 圖片大小不能超過: '+imgSize+'M'}})
            }
        },
        identity: () => {
            // '身分字號錯誤'
            return "[A-Za-z]{1}[1-2]{1}[0-9]{8}"
        },
        bankCode: () => {
            //格式錯誤
            return "\\d"
        },
        bankCover: () => {
            return "jpg|jpeg|png$"
        },
        common: (o) => {
            var id = o.id
            var text = o.text
            var type = o.type
            var se = o.se || ''
            var addhandler = o.addhandler || ''
            var value = o.value || ''
            var pla = o.reg ? o.reg[0]['me'] : ''
            if (type == 'message') {
                //訊息通知
                return creatHtml({
                    'tage': 'div',
                    'text': text,
                })
            } else {
                //表單
                return [
                    creatHtml({
                        'tage': 'label',
                        'attr': { 'for': id },
                        'text': text
                    }),
                    id=='Image'?creatHtml({
                        'tage': 'div',
                        'cl': 'customCover',
                        'addHtml': [
                            creatHtml({
                                'tage': 'div',
                                'cl': value?'box active':'box',
                                'addHtml': [
                                    creatHtml({
                                        'tage': 'i',
                                        'cl': 'close',
                                        'text': '✖',
                                        'handler': function() {
                                            var customCover = this.closest('.customCover')
                                            var box = customCover.querySelector('.box')
                                            box.classList.remove('active')
                                            box.querySelector('img').src = ''
                                            // customCover.querySelector('#'+id).value = null
                                        }
                                    }),
                                    creatHtml({
                                        'tage': 'img',
                                        'cl': 'cover',
                                        'attr': value?{'src': './html/img/baimg/'+value+'?'+Date.now(),'id':o.class?o.class:id}:{'id':o.class?o.class:id}
                                    }),
                                    creatHtml({
                                        'tage': 'label',
                                        'attr': {'for': 'file'+(o.class?o.class:id)},
                                        'addHtml': [
                                            creatHtml({
                                                'tage': 'i',
                                                'text': '<svg viewBox="0 0 24 24"><path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z"></path></svg>',
                                            }),
                                        ]
                                    }),
                                ],
                            }),
                            creatHtml({
                                'tage': 'input',
                                'attr': {
                                    'type':'file',
                                    'id': 'file'+(o.class?o.class:id),
                                    'accept':'.jpg, .jpeg, .png',
                                },
                                'method': 'change',
                                'handler': function() {
                                    creatinput.image(this, o.imgW?o.imgW:'', o.imgH?o.imgH:'',o.imgSize?o.imgSize:'')
                                },
                            }),
                        ]
                    }):id=='custom_checkbox'?creatHtml({
                        'tage': 'div',
                        'attr': {'id':id},
                        'addHtml': se.map((element)=>{
                            var elementID = element.id
                            var elementIDName = id+elementID
                            var checked =  value.split(',').some(element=>element == elementID)?{'checked': true}:''
                            return creatHtml({
                                'tage': 'div',
                                'addHtml': [
                                    creatHtml({
                                        'tage': 'input',
                                        'attr': Object.assign({ 'id': elementIDName, 'type': 'checkbox', 'name': id+'[]','value': elementID},checked),
                                    }),
                                    creatHtml({
                                        'tage': 'label',
                                        'attr': { 'for': elementIDName },
                                        'text': element.Name
                                    }),
                                ]
                            })
                        })
                    }):id=='custom_captcha'?creatHtml({
                        'tage': 'div',
                        'cl': id,
                        'addHtml': [
                            creatHtml({
                                'tage': 'img',
                                // 'attr': {'src': 'html/img/baimg/captcha.png'},
                                'attr': {'id':'captcha','src': 'captcha.php'},
                                'handler': function() {
                                    document.getElementById("captcha").src="captcha.php"; 
                                }
                            }),
                            creatHtml({
                                'tage': 'input',
                                'attr': {'id':id,'type': type, 'name': id,'placeholder': pla},
                                'method': 'input',
                                'handler': function() {
                                    creatinput['verificationFn'](o)
                                }
                            })
                        ]
                    }):id=='custom_citi'?creatHtml({
                        'tage': 'select',
                        'attr': {'id':id, 'name': id},
                        'addHtml': se.map(function(text,index){
                            var attr = {'value': index}
                            if(index==(value*1)){
                                attr = {'value': index,'selected':true}
                            }
                            return creatHtml({ 
                                'tage': 'option',
                                'attr': attr,
                                'text': text 
                            })
                        }),
                    }):creatHtml({
                        'tage': 'input',
                        'attr': { 'id': id, 'type': type, 'name': id, 'placeholder': pla,'value': value},
                        'method': 'input',
                        'handler': function() {
                            addhandler ? addhandler(this) : ''
                            pla ? creatinput['verificationFn'](o) : ''
                        }
                    })
                ]
            }
        },
    }
    return creatHtml({
        'tage': 'form',
        'attr': { 'id': 'creatForm' },
        'addHtml':[
            titleText?creatHtml({ 
                'tage': 'div',
                'cl': 'title', 
                'addHtml':[
                    creatHtml({ 'tage': 'h3', 'text': titleText }),
                    creatHtml({ 'tage': 'div', 'cl': 'close', 'text': '&#10006;', 'handler': closeFn })
                ]
            }):'',
            creatHtml({ 
                'tage': 'ul',
                'cl': 'content',
                'addHtml': content.map(data =>creatHtml({ 'tage': 'li', 'addHtml': creatinput.common(data) }))
            }),
            creatHtml({ 
                'tage': 'div',
                'cl': 'link',
                'addHtml':[
                    cancelText?creatHtml({
                        'tage': 'input',
                        'cl': 'cancel',
                        'attr': { 'value': cancelText, 'type': 'button' },
                        'handler': closeFn
                    }):'',
                    sendText?creatHtml({
                        'tage': 'input',
                        'cl': 'send',
                        'attr': { 'value': sendText, 'type': 'button' },
                        'handler': function(){
                            Promise.all(
                                content.map(async(data) => {
                                    //需驗證
                                    if(data.reg){
                                        const value = await creatinput['verificationFn']({
                                            'id': data.id,
                                            'reg': data.reg
                                        })
                                        if (value.every(Boolean)) {
                                            return true
                                        } else {
                                            return false
                                        }
                                    }else{
                                        //訊息
                                        return true
                                    }
                                })
                            ).then((value) => {
                                if (value.every(Boolean)) {
                                    sendFn()
                                }
                            })
                        }
                    }):''
                ] 
            })
        ]

    })
}

function creatTitle(o) {
    return creatHtml({
        'tage': 'div',
        'cl': o.addcl ? 'customTitle ' + o.addcl : 'customTitle',
        'addHtml': [
            creatHtml({
                'tage': 'h3',
                'text': o.title,
            }),
            o.more ? creatHtml({
                'tage': 'a',
                'cl': 'customMore',
                'attr': { 'href': o.more['id'] },
                'text': o.more['text'],
            }) : '',
        ]
    })
}

function creatTitle2(o) {
    var title = o.title
    return creatHtml({
        'tage': 'div',
        'cl': 'customTitle2',
        'addHtml': [
            creatTitle({ 'title': title }),
        ]
    })
}

function creatTemplate(o) {
    return creatHtml({
        'tage': 'a',
        'attr': { 'href': o.href },
        'addHtml': [
            creatHtml({
                'tage': 'div',
                'cl': 'img',
                'addHtml': [
                    creatHtml({
                        'tage': 'img',
                        'attr': { 'src': './html/img/baimg/' + o.src }
                    }),
                    // creatHtml({
                    //     'tage': 'div',
                    //     'cl': 'customdate',
                    //     'addHtml': [
                    //         creatHtml({
                    //             'tage': 'h4',
                    //             'text': element.Create_Time.split(' ')[0].split('-')[1]
                    //         }),
                    //         creatHtml({
                    //             'tage': 'p',
                    //             'text': element.Create_Time.split(' ')[0].split('-').splice(0, 2).join('-')
                    //         }),
                    //     ]
                    // }),
                ]
            }),
            creatHtml({
                'tage': 'h4',
                'cl': 'title',
                'text': o.title,
            }),
            o.text ? creatHtml({
                'tage': 'p',
                'cl': 'text',
                'text': o.text,
            }) : '',
            // o.arrow?creatHtml({
            //     'tage': 'i',
            //     'cl': 'arrow',
            // }):'',
        ],
    })
}

function creatTemplate2(o) {
    var title = o.title
    var obj = { 'cl': o.cl, 'list': o.data.row, 'content': o.content }
    var obj2 = { 'pn': o.data['pn'], 'totle': o.data['totle'], 'p': o.p, 'a': getUrl('a') }
    creatPage({
        'creatContentHtml': creatHtml({
            'tage': 'div',
            'cl': getUrl('b') ? 'tinymce' : 'customMultiple',
            'addHtml': [
                creatTitle2({ 'title': title }),
                obj.content == 'fncalendar' && !getUrl('b') ? creatTemplate3(obj) : '',
                obj.content == 'fnadvertising' && !getUrl('b') ? creatTemplate3(obj) : '',
                obj.content == 'fnvideo' && !getUrl('b') ? creatTemplate3(obj) : '',
                getUrl('b') ? creatHtml({
                    'tage': 'div',
                    'cl': 'container',
                    'addHtml': [
                        creatHtml({
                            'tage': 'div',
                            'cl': 'container_left',
                            'addHtml': [
                                creatTitle({ 'title': obj.list[0].title }),
                                creatHtml({
                                    'tage': 'div',
                                    'cl': 'content',
                                    'text': obj.list[0].tinymce
                                }),
                            //     creatHtml({
                            //         'tage': 'div',
                            //         'cl': 'customShare',
                            //         'addHtml': [
                            //             creatHtml({
                            //                 'tage': 'p',
                            //                 'cl': 'text',
                            //                 'text': '分享'
                            //             }),
                            //             creatHtml({
                            //                 'tage': 'div',
                            //                 'cl': 'share',
                            //                 'addHtml': [
                            //                     creatHtml({
                            //                         'tage': 'a',
                            //                         'cl': 'fb',
                            //                         'text': 'fb'
                            //                     }),
                            //                     creatHtml({
                            //                         'tage': 'a',
                            //                         'cl': 'twitter',
                            //                         'text': 'twitter'
                            //                     }),
                            //                     creatHtml({
                            //                         'tage': 'a',
                            //                         'cl': 'google',
                            //                         'text': 'google'
                            //                     }),
                            //                     creatHtml({
                            //                         'tage': 'a',
                            //                         'cl': 'link',
                            //                         'text': 'link'
                            //                     })
                            //                 ]
                            //             })
                            //         ]
                            //     })

                            ]
                        }),
                        o.data.nextRow[0]?creatHtml({
                            'tage': 'div',
                            'cl': 'container_right',
                            'addHtml': creatHtml({
                                'tage': 'div',
                                'cl': 'customTemplat',
                                'addHtml': creatTemplate({
                                    'href': '?a=' + getUrl('a') + '&b=' + o.data.nextRow[0].id,
                                    'src': o.data.nextRow[0].Image,
                                    'title': o.data.nextRow[0].title,
                                    'text': o.data.nextRow[0].text,
                                    // 'arrow': true
                                })
                            })
                        }):''
                    ]
                // }) : creatPageNumber(obj2)[0]
                }) : creatPageNumber1(obj2)
            ]
        }),
    })

}

function creatTemplate3(o) {
    var cl = o.cl ? 'customTemplat ' + o.cl : 'customTemplat'
    var href = o.href ? o.href : getUrl('a')
    var title = o.title ? creatTitle({ 'title': o.title, 'more': o.more ? o.more : '' }) : ''
    var list = o.list
    var content = o.content
    return creatHtml({
        'tage': 'div',
        'cl': cl,
        'addHtml': creatHtml({
            'tage': 'div',
            'cl': 'container',
            'addHtml': [
                title,
                creatHtml({
                    'tage': 'ul',
                    'addHtml': list.map((element) => {
                        return creatHtml({
                            'tage': 'li',
                            'addHtml': [
                                content == 'fncalendar' ? creatTemplate({
                                    'href': '?a=' + href + '&b=' + element.id,
                                    'src': element.Image,
                                    'title': element.title,
                                    'text': element.text,
                                }) : '',
                                content == 'fnadvertising' ? creatHtml({
                                    'tage': 'a',
                                    'attr': { 'href': element.src.indexOf('http') == 0 ?element.src:'https://'+element.src, 'target': '_blank' },
                                    'addHtml': [
                                        creatHtml({
                                            'tage': 'div',
                                            'cl': 'img',
                                            'addHtml': creatHtml({
                                                'tage': 'img',
                                                'attr': { 'src': './html/img/baimg/' + element.Image }
                                            })
                                        }),
                                        creatHtml({
                                            'tage': 'h4',
                                            'cl': 'text',
                                            'text': element.title,
                                        })
                                    ],
                                }) : '',
                                content == 'fnvideo' ? creatHtml({
                                    'tage': 'div',
                                    'addHtml': [
                                        creatHtml({
                                            'tage': 'iframe',
                                            'attr': { 'src': element.Link.indexOf('https://www.youtube.com/watch?v=') == 0 ? element.Link.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/') : element.video }
                                        }),
                                        creatHtml({
                                            'tage': 'h4',
                                            'cl': 'text',
                                            'text': element.title,
                                        })
                                    ],
                                }) : ''
                            ]
                        })
                    })
                })
            ]
        })
    })
}

function creatTemplate4(o) {
    creatPage({
        'creatContentHtml': creatHtml({
            'tage': 'div',
            'cl': 'tinymce',
            'addHtml': [
                creatTitle2({ 'title': o.title }),
                creatHtml({
                    'tage': 'div',
                    'cl': 'container',
                    'addHtml': creatHtml({
                        'tage': 'div',
                        'cl': 'content',
                        'text': o.data.row[0].tinymce
                    })
                })
            ]
        })
    })
}

//2021/09 REA物件
function createObjTemplate(o){
    var cl = o.cl ? 'customTemplat ' + o.cl : 'customTemplat'
    var href = o.href ? o.href : getUrl('a')
    var title = o.title ? creatTitle({ 'title': o.title, 'more': o.more ? o.more : '' }) : ''
    var list = o.list
    var content = o.content
    var type = o.type == 'rent' ? o.type : 'buy'
    return creatHtml({
        'tage': 'div',
        'cl': cl,
        'addHtml': creatHtml({
            'tage': 'div',
            'cl': 'container obj',
            'addHtml': [
                title,
                creatHtml({
                    'tage': 'ul',
                    'cl': 'objul',
                    'addHtml': list.map((element) => {
                        return creatHtml({
                            'tage': 'li',
                            'cl': 'objli',
                            'addHtml': [
                                content == 'fncalendar' ? createObjTemplate2({
                                    'href': 'http://builders.88888.com.tw/'+ type +'/objects/' + element.obj_id,
                                    'src': 'http://builders.88888.com.tw/uploads/'+ element.store_id +'/'+ element.obj_id + '/A.jpg',
                                    'title': element.object_name,
                                    'text': element.layout_room + ' 房 ' + element.layout_hall + ' 廳 ' + element.layout_toilet + ' 衛 ; ' + element.address_city + ' ' + element.address_region + '<br>' + element.building_area + ' 坪 ' + (element.sell_total_price/10000) + ' 萬元 ',
                                }) : ''
                            ]
                        })
                    })
                })
            ]
        })
    })
}

function createObjTemplate2(o){
    return creatHtml({
        'tage': 'a',
        'attr': { 'href': o.href },
        'addHtml': [
            creatHtml({
                'tage': 'div',
                'cl': 'img',
                'addHtml': [
                    creatHtml({
                        'tage': 'img',
                        'cl':'objimg',
                        'attr': { 'src': o.src }
                    }),
                    // creatHtml({
                    //     'tage': 'div',
                    //     'cl': 'customdate',
                    //     'addHtml': [
                    //         creatHtml({
                    //             'tage': 'h4',
                    //             'text': element.Create_Time.split(' ')[0].split('-')[1]
                    //         }),
                    //         creatHtml({
                    //             'tage': 'p',
                    //             'text': element.Create_Time.split(' ')[0].split('-').splice(0, 2).join('-')
                    //         }),
                    //     ]
                    // }),
                ]
            }),
            creatHtml({
                'tage': 'h4',
                'cl': 'title',
                'text': o.title,
            }),
            o.text ? creatHtml({
                'tage': 'p',
                'cl': 'text',
                'text': o.text,
            }) : '',
            // o.arrow?creatHtml({
            //     'tage': 'i',
            //     'cl': 'arrow',
            // }):'',
        ],
    })
}

function creatFnhomeError(message) {
    location = '?a=fnhome&error='+message
}

function effectScroll() {
    var scrollAnimation = document.querySelectorAll('.scrollAnimation');
    if (!scrollAnimation.length) return;
    var getoffset = function(el) {
        var box = el.getBoundingClientRect();
        return {
            top: box.top + window.pageYOffset - document.documentElement.clientTop,
            left: box.left + window.pageXOffset - document.documentElement.clientLeft
        }
    }
    var active = function() {
        for (var i = 0; i < scrollAnimation.length; i++) {
            var scrollY = window.scrollY || window.pageYOffset; //IE
            var slideInAt = (scrollY + window.innerHeight) - scrollAnimation[i].offsetHeight / 2;
            var offsetTop = getoffset(scrollAnimation[i]).top;
            var vBottom = offsetTop + scrollAnimation[i].offsetHeight;
            var isShow = slideInAt > offsetTop;
            var isScroll = window.scrollY < vBottom;
            if (isShow) {
                scrollAnimation[i].classList.add('active');
            }
        }
    }
    document.addEventListener('scroll', function() {
        active();
    }, false)
    active()
}

function effectSlide(o) {
    var time = o.time || 8000
    var obj = document.querySelector(o.obj)
    var ul = obj.querySelector('ul')
    var lis = obj.querySelectorAll('li')
    var content = obj.querySelector('.content')
    var liLength = lis.length
    Array.from(lis, element => {
        ul.append(element.cloneNode(true));
    })
    var slideIndex = 0;
    var liW;
    var flow;
    var ulMove = (n) => {
        var n = n || 1;
        var now = slideIndex + n;
        ul.style.left = -(liW * now) + '%'
        ul.style.transition = '.5s'
        ul.addEventListener('transitionend', function() {
            if (now == liLength) {
                ul.style.left = 0
                ul.style.transition = '0s'
                now = 0;
            }
            slideIndex = now;
        }, false);
    }
    var init = () => {
        var mid = window.matchMedia("(min-width: 992px)");
        var md = window.matchMedia("(max-width: 992px)");
        var sm = window.matchMedia("(max-width: 620px)");
        if (mid.matches) {
            liW = 33.333;
        }
        if (md.matches) {
            liW = 50;
        }
        if (sm.matches) {
            liW = 100;
        }

        Array.from(obj.querySelectorAll('li'), element => {
            element.style.flex = '0 0 ' + liW + '%';
        });
        return liW
    }
    var slideInterval = () => {
        flow = setInterval(ulMove, time);
    }

    content.addEventListener('mouseover', function() {
        clearInterval(flow);
    }, false);
    content.addEventListener('mouseout', function() {
        slideInterval()
    }, false);
    window.addEventListener('resize', init, false)

    init()
    slideInterval()
}

function seach(o) {
    var p = o.p || 1;
    return new Promise ((resolve,reject)=>{
        getAjax({ 'value': [{ 'p': p }, { 'seach': '0' }] }).then(function(data) {
            if (data.result) {
                resolve({ 'data': data, 'p': p })
            } else {
                reject(data.message)
            }
        })
    })
    
}

// window.onload = seach;
// window.onload = window[getUrl('a')]

/*creatFnhomeError*/
function fnhome(o) {
    seach(o).then((o)=>{
        //console.log(o);
        var json = {
            'slide': o.data.silde,
            'marquee': o.data.silde_marquee[0]['text'],
            'marquee2': o.data.silde_marquee2[0]['text'],
            'professionalLink_title': '專業連結',
            'professionalLink_list': o.data.professionallink,
            'calendar_more': { 'text': '查看更多', "id": "?a=fncalendar" },
            'calendar_title': '行事曆',
            'calendar_list': o.data.calendar,
            'estateNews_more': { 'text': '查看更多', "id": "?a=fnestatenews" },
            'estateNews_title': '房產新聞',
            'estateNews_list': o.data.estatenews,
            'video_more': { 'text': '查看更多', "id": "?a=fnvideo" },
            'video_title': '影音訊息',
            'video_list': o.data.video,
            'member_more': { 'text': '查看更多', "id": "?a=fnmember" },
            'member_title': '聯盟會員',
            'member_list': o.data.member,
            'advertising_more': { 'text': '查看更多', "id": "?a=fnadvertising" },
            'advertising_title': '廠商推薦',
            'advertising_list': o.data.advertising,
            'activity_more': { 'text': '查看更多', "id": "?a=fnactivity" },
            'activity_title': '活動花絮',
            'activity_list': o.data.activity,
            'message_more': { 'text': '查看更多', "id": "?a=fnmessage" },
            'message_title': '最新消息',
            'message_list': o.data.message,
            //2021/09/13 物件
            'object_sale_title':'精選買賣物件',
            'object_sale_more':{ 'text': '查看更多', "id": "http://builders.88888.com.tw/buy/objects" },
            'object_sale_list': o.data.sale_obj,
            'object_rent_title':'獨家租賃物件',
            'object_rent_more':{ 'text': '查看更多', "id": "http://builders.88888.com.tw/rent/objects" },
            'object_rent_list': o.data.rent_obj,
        }
        creatPage({
            'creatContentHtml': [
                creatHtml({
                    'tage': 'div',
                    'cl': 'slideAll',
                    'addHtml': [
                        creatHtml({
                            'tage': 'div',
                            'cl': 'slide',
                            'addHtml': creatHtml({
                                'tage': 'ul',
                                'addHtml': json['slide'].map((element, index) => {
                                    return creatHtml({
                                        'tage': 'li',
                                        'addHtml': creatHtml({
                                            'tage': 'a',
                                            'attr': { 'href': element.src.indexOf('http') == 0 ?element.src:'https://'+element.src, 'target': '_blank' },
                                            'addHtml': creatHtml({
                                                'tage': 'img',
                                                'attr': { 'src': './html/img/baimg/' + element.Image }
                                            })
                                        })
                                    })
                                })
                            }),
                        }),
                        creatHtml({
                            'tage': 'div',
                            'cl': 'marquee',
                            'addHtml': creatHtml({
                                'tage': 'marquee',
                                'attr': { 'scrollamount': '5' },
                                'text': json['marquee'],
                            }),
                        }),
                    ]
                }),
                creatHtml({
                    'tage': 'div',
                    'cl': 'professionalLink',
                    'addHtml': creatHtml({
                        'tage': 'div',
                        'cl': 'container',
                        'addHtml': [
                            creatTitle({ 'title': json['professionalLink_title'] }),
                            creatHtml({
                                'tage': 'ul',
                                'cl': 'content',
                                'addHtml': (()=>{
                                    var array = []
                                    json['professionalLink_list'].forEach((element,index) => {
                                        if(index<9){
                                            array.push(creatHtml({
                                                'tage': 'li',
                                                'addHtml': [
                                                    creatHtml({
                                                        'tage': 'div',
                                                        'cl': 'img',
                                                        'addHtml': creatHtml({
                                                            'tage': 'img',
                                                            'attr': { 'src': './html/img/baimg/' + element.Image }
                                                        }),
                                                    }),
                                                    creatHtml({
                                                        'tage': 'p',
                                                        'cl': 'text',
                                                        'text': element.text,
                                                    }),
                                                ],
                                                'handler': function() {
                                                    location = '?a=fnprofessionalLink&b=' + element.id
                                                }
                                            }))
                                        }
                                    })
                                    return array
                                })()
                            }),
                            creatHtml({
                                'tage': 'ul',
                                'cl': 'content',
                                'addHtml': (()=>{
                                    var array = []
                                    json['professionalLink_list'].forEach((element,index) => {
                                        if(index>9){
                                            array.push(creatHtml({
                                                'tage': 'li',
                                                'addHtml': [
                                                    creatHtml({
                                                        'tage': 'div',
                                                        'cl': 'img',
                                                        'addHtml': creatHtml({
                                                            'tage': 'img',
                                                            'attr': { 'src': './html/img/baimg/' + element.Image }
                                                        }),
                                                    }),
                                                    creatHtml({
                                                        'tage': 'p',
                                                        'cl': 'text',
                                                        'text': element.text,
                                                    }),
                                                ],
                                                'handler': function() {
                                                    location = '?a=fnprofessionalLink&b=' + element.id
                                                }
                                            }))
                                        }
                                    })
                                    return array
                                })()
                            }),
                        ]
                    })
                }),
                createObjTemplate({
                    'href': 'fnrentobj',
                    'type':'rent',
                    'more': json['object_rent_more'],
                    'title': 　json['object_rent_title'],
                    'list': 　json['object_rent_list'],
                    'content': 'fncalendar',
                }),
                createObjTemplate({
                    'href': 'fnsaleobj',
                    'type':'sale',
                    'more': json['object_sale_more'],
                    'title': 　json['object_sale_title'],
                    'list': 　json['object_sale_list'],
                    'content': 'fncalendar',
                }),
                creatTemplate3({
                    'href': 'fncalendar',
                    'more': json['calendar_more'],
                    'title': 　json['calendar_title'],
                    'list': 　json['calendar_list'],
                    'content': 'fncalendar'
                }),
                creatTemplate3({
                    'href': 'fnestatenews',
                    'more': json['estateNews_more'],
                    'title': 　json['estateNews_title'],
                    'list': 　json['estateNews_list'],
                    'content': 'fncalendar'
                }),
                creatTemplate3({
                    'href': 'fnactivity',
                    'more': json['activity_more'],
                    'title': 　json['activity_title'],
                    'list': 　json['activity_list'],
                    'content': 'fncalendar'
                }),
                creatTemplate3({
                    'href': 'fnmessage',
                    'more': json['message_more'],
                    'title': 　json['message_title'],
                    'list': 　json['message_list'],
                    'content': 'fncalendar'
                }),
                creatHtml({
                    'tage': 'div',
                    'cl': 'marquee',
                    'addHtml': creatHtml({
                        'tage': 'marquee',
                        'attr': { 'scrollamount': '5' },
                        'text': json['marquee2'],
                    }),
                }),
                creatTemplate3({
                    'cl': 'member',
                    'more': json['member_more'],
                    'title': 　json['member_title'],
                    'list': 　json['member_list'],
                    'content': 'fnadvertising'
                }),
                creatTemplate3({
                    'cl': 'advertising',
                    'more': json['advertising_more'],
                    'title': 　json['advertising_title'],
                    'list': 　json['advertising_list'],
                    'content': 'fnadvertising'
                }),
                creatTemplate3({
                    'cl': 'video',
                    'more': json['video_more'],
                    'title': 　json['video_title'],
                    'list': 　json['video_list'],
                    'content': 'fnvideo'
                }),
            ],
            'handler': function() {
                /*slides*/
                (() => {
                    var lis = document.querySelectorAll('.slideAll li')
                    var liLength = lis.length
                    var slideIndex = 0
                    var active = function(n) {
                        slideIndex = (slideIndex + n + liLength) % liLength;
                        lis.forEach(element => element.classList.remove('active'))
                        lis[slideIndex].classList.add('active')
                    }
                    setInterval(function() {
                        active(1)
                    }, 6000)
                    active(0)
                })();
    
                /*error*/
                (()=>{
                    var error = getUrl('error')
                    var sendFn =  creatCloseJump({'lo':'?a=fnhome'})
                    if(error){
                        creatJump({
                            'titleText': '訊息通知',
                            'content': [{
                                'text': error,
                                'type': 'message',
                            }],
                            'closeFn': sendFn,
                            'sendText': '確定',
                            'sendFn':  sendFn
                        })
                    }
                })();
                //memberslide
                // effectSlide({ 'obj': '.member' })
                //advertising
                // effectSlide({ 'obj': '.advertising', 'time': 5000 })
            }
        })

    }).catch((message)=>{
        console.log(message)
    })
}
function fnregistered(o) {
    seach(o).then((data)=>{
        creatPage({
            'creatContentHtml': [
                creatTitle2({ 'title': '會員註冊' }),
                creatHtml({
                    'tage': 'div',
                    'cl': 'container customfrom',
                    'addHtml': [
                        creatForm({
                            'content': [{
                                    'id': 'email',
                                    'text': '帳號(E-mail)',
                                    'type': 'email',
                                    'reg': [
                                        { 'rules': 'required', 'me': '請輸入帳號' },
                                        { 'rules': 'email', 'me': '格式錯誤' },
                                        { 'rules': 'text', 'minlength': 2, 'maxlength': 100, 'me': '最多2~100個字' },
                                        { 'rules': 'ajax', 'me': '帳號已被註冊'},
                                    ],
                                },
                                {
                                    'id': 'title',
                                    'text': '公司名稱',
                                    'type': 'text',
                                    'reg': [
                                        { 'rules': 'required', 'me': '請輸入公司名稱' },
                                        { 'rules': 'text', 'minlength': 2, 'maxlength': 20, 'me': '最多2~20個字' },
                                    ]
                                },
                                {
                                    'id': 'password',
                                    'text': '密碼',
                                    'type': 'text',
                                    'reg': [
                                        { 'rules': 'required', 'me': '請輸入密碼' },
                                        { 'rules': 'password', 'me': '密碼6~10個字，需有大小寫和數字' },
                                        { 'rules': 'againPassword', 'me': '密碼不相同' },
                                    ],
                                    'addhandler': function(obj) {
                                        //輸入type try password
                                        obj.type = 'password'
                                    }
                                },
                                {
                                    'id': 'againPassword',
                                    'text': '確認密碼',
                                    'type': 'text',
                                    'reg': [
                                        { 'rules': 'required', 'me': '請輸入密碼' },
                                        { 'rules': 'password', 'me': '密碼6~10個字，需有大小寫和數字' },
                                        { 'rules': 'againPassword', 'me': '密碼不相同' },
                                    ],
                                    'addhandler': function(obj) {
                                        //輸入type try password
                                        obj.type = 'password'
                                    }
                                },
                                // {
                                //     'id': 'custom_captcha',
                                //     'text': '驗證碼',
                                //     'type': 'text',
                                //     'reg': [
                                //         { 'rules': 'required', 'me': '請輸入驗證碼' },
                                //     ]
                                // },
    
                            ],
                            'sendText': '送出',
                            'sendFn': function() {
                                customload();
                                getAjax({
                                    'value': [{ 'add': '0' }],
                                    'form': document.getElementById('creatForm')
                                }).then(function(data) {
                                    closeload()
                                    if(data.from_error){
                                         //表單錯誤
                                        var error = document.querySelectorAll('#creatForm .error')
                                        error ? error.forEach(el=>el.remove()) : ''
                                        data.from_error.forEach((el)=>{
                                            creatFormError({
                                                'obj': document.querySelector('#'+el.id),
                                                'me': el.me
                                            })
                                        })
                                    }else{
                                        //訊息通知
                                        var closeFn = creatCloseJump({'lo':data.result?'?a=fnsign':''})
                                        creatJump({
                                            'titleText': '訊息通知',
                                            'content': [{
                                                'text': data.message,
                                                'type': 'message',
                                            }],
                                            'closeFn': closeFn,
                                            'sendText': '確定',
                                            'sendFn': closeFn
                                        })
                                    }
                                })
                            },
                        }),
                        creatHtml({
                            'tage': 'div',
                            'cl': 'agree',
                            'text': '建立帳戶及表示您同意我們的 <a href="?a=fndisclaimer" target="_blank">服務條款和隱私權政策 </a>'
                        }),
                        creatHtml({
                            'tage': 'a',
                            'cl': 'sign',
                            'attr': { 'href': '?a=fnsign' },
                            'text': '登入會員'
                        })
                    ]
                }),
            ],
        })
    }).catch((message) => {
        console.log(message);
    });
}
function fnprofessionalLink(o) {
    seach(o).then((o)=>{
        var json = {
            'list': ['#', '名稱', '信箱', '電話', '專業'],
            'list_content': o.data.member,
            'se': o.data.professionallink,
        }
        var seFn = (b) => {
            return json['se'].find(element => element.id == b)
        }
        var pHtml = (o) => {
            return creatHtml({
                'tage': 'li',
                'addHtml': [
                    creatHtml({
                        'tage': 'span',
                        'text': o.i
                    }),
                    creatHtml({
                        'tage': 'p',
                        'text': o.v
                    })
                ]
            })
        }
        var imgHtml = (o) => {
            return creatHtml({
                'tage': 'li',
                'addHtml': [
                    creatHtml({
                        'tage': 'span',
                        'text': o.i
                    }),
                    creatHtml({
                        'tage': 'div',
                        'cl': 'img',
                        'addHtml': creatHtml({
                            'tage': 'img',
                            'attr': { 'src': './html/img/baimg/' + o.v }
                        })
                    })
                ]
            })
        }
        creatPage({
            'creatContentHtml': [
                creatTitle2({ 'title': '專業連結/' + seFn(getUrl('b')).text }),
                creatHtml({
                    'tage': 'div',
                    'cl': 'content',
                    'addHtml': creatHtml({
                        'tage': 'div',
                        'cl': 'container',
                        'addHtml': [
                            creatHtml({
                                'tage': 'div',
                                'cl': 'table',
                                'addHtml': (() => {
                                    var array = []
                                    array.push(creatHtml({
                                        'tage': 'ul',
                                        'cl': 'table_top',
                                        'addHtml': json['list'].map((element, index) => {
                                            return creatHtml({
                                                'tage': 'li',
                                                'addHtml': creatHtml({
                                                    'tage': 'p',
                                                    'text': element
                                                })
                                            })
                                        })
                                    }))
                                    json['list_content'].map(element => {
                                        array.push(creatHtml({
                                            'tage': 'ul',
                                            'cl': 'table_bottom',
                                            'addHtml': Object.keys(element).map((v, i) => {
                                                var span = json['list'][i - 1]
                                                var html = ''
                                                if (v == 'id') {
                                                    html = ''
                                                } else if (v == 'Image') {
                                                    html = imgHtml({ 'v': element[v], 'i': span })
                                                } else if (v == 'professional_id') {
                                                    html = pHtml({ 'v': element[v].split(',').map(v => seFn(v) ? seFn(v).text : ''), 'i': span })
                                                } else {
                                                    html = pHtml({ 'v': element[v], 'i': span })
                                                }
                                                return html
                                            })
                                        }))
                                    })
                                    return array
                                })()
                            }),
                            creatPageNumber1({
                                'pn': o.data['pn'],
                                'totle': o.data['totle'],
                                'p': o.p,
                                'a': getUrl('a'),
                                'fn':'fnprofessionalLink'
                            })
                        ]
                    })
                })
            ]
        })
    }).catch((message)=>{
        creatFnhomeError(message)
    })
}
function fnsign(o) {
    seach(o).then((o)=>{
        creatPage({
            'creatContentHtml': [
                creatTitle2({ 'title': '會員登入' }),
                creatHtml({
                    'tage': 'div',
                    'cl': 'container customfrom',
                    'addHtml': [
                        creatForm({
                            'content': [{
                                    'id': 'email',
                                    'text': '帳號(E-mail)',
                                    'type': 'email',
                                    'reg': [
                                        { 'rules': 'required', 'me': '請輸入帳號' },
                                        { 'rules': 'email', 'me': '格式錯誤' },
                                        // { 'rules': 'text', 'minlength': 2, 'maxlength': 50, 'me': '最多2~50個字' },
                                    ],
                                },
                                {
                                    'id': 'password',
                                    'text': '密碼',
                                    'type': 'text',
                                    'reg': [
                                        { 'rules': 'required', 'me': '請輸入密碼' },
                                        // { 'rules': 'password', 'me': '密碼6~10個字，需有大小寫和數字' },
                                    ],
                                    'addhandler': function(obj) {
                                        //輸入type try password
                                        obj.type = 'password'
                                    }
                                }
                            ],
                            'cancelText': '加入會員',
                            'closeFn': function() {
                                location = '?a=fnregistered'
                            },
                            'sendText': '登入',
                            'sendFn': function() {
                                customload();
                                getAjax({
                                    'value': [{ 'edit': '0' }],
                                    'form': document.getElementById('creatForm')
                                }).then(function(data) {
                                    var closeFn = creatCloseJump({'lo':data.result?'?a=fnhome':'','reset':true})
                                    creatJump({
                                        'titleText': '登入訊息',
                                        'content': [{
                                            'text': data.message,
                                            'type': 'message',
                                        }],
                                        'closeFn': closeFn,
                                        'sendText': '確定',
                                        'sendFn': closeFn
                                    })
                                })
                            },
                        }),
                        creatHtml({
                            'tage': 'a',
                            'cl': 'sign',
                            'attr': { 'href': '?a=fnforget' },
                            'text': '忘記密碼'
                        })
                    ]
                }),
            ],
            'handler': ()=>{
                if(o.data.result && o.data.message){
                    creatJump({
                        'titleText': '認證訊息',
                        'content': [{
                            'text': o.data.message,
                            'type': 'message',
                        }],
                        'closeFn': closeJump,
                        'sendText': '確定',
                        'sendFn': closeJump
                    })
                }
            }
        })

    }).catch((message)=>{
        creatFnhomeError(message)
    })
}
function fnforget(o) {
    seach(o).then((o)=>{
        creatPage({
            'creatContentHtml': [
                creatTitle2({ 'title': '忘記密碼' }),
                creatHtml({
                    'tage': 'div',
                    'cl': 'container customfrom',
                    'addHtml': [
                        o.data.status =='entermail' ? creatForm({
                            'content': [{
                                'id': 'email',
                                'text': '帳號(E-mail)',
                                'type': 'email',
                                'reg': [
                                    { 'rules': 'required', 'me': '請輸入帳號' },
                                    { 'rules': 'email', 'me': '格式錯誤' },
                                    { 'rules': 'text', 'minlength': 2, 'maxlength': 50, 'me': '最多2~50個字' },
                                ],
                            }],
                            'sendText': '送出',
                            'sendFn': function() {
                                customload();
                                getAjax({
                                    'value': [{ 'get_email': '0' }],
                                    'form': document.getElementById('creatForm')
                                }).then(function(data) {
                                    creatJump({
                                        'titleText': '寄件通知',
                                        'content': [{
                                            'text': data.message,
                                            'type': 'message',
                                        }],
                                        'sendText': '確定',
                                        'sendFn': ()=>{closeJump({'reset':true})}
                                    })
                                })
                            },
                        }): creatForm({
                            'content': [
                                {
                                    'id': 'password',
                                    'text': '密碼',
                                    'type': 'text',
                                    'reg': [
                                        { 'rules': 'required', 'me': '請輸入密碼' },
                                        { 'rules': 'password', 'me': '密碼6~10個字，需有大小寫和數字' },
                                        { 'rules': 'againPassword', 'me': '密碼不相同' },
                                    ],
                                    'addhandler': function(obj) {
                                        //輸入type try password
                                        obj.type = 'password'
                                    }
                                },
                                {
                                    'id': 'againPassword',
                                    'text': '確認密碼',
                                    'type': 'text',
                                    'reg': [
                                        { 'rules': 'required', 'me': '請輸密碼' },
                                        { 'rules': 'againPassword', 'me': '密碼不相同' },
                                    ],
                                    'addhandler': function(obj) {
                                        //輸入type try password
                                        obj.type = 'password'
                                    }
                                },
                            ],
                            'sendText': '送出',
                            'sendFn': function() {
                                customload();
                                getAjax({
                                    'value': [{ 'edit': '0' }],
                                    'form': document.getElementById('creatForm')
                                }).then(function(data) {
                                    var closeFn = creatCloseJump({'lo':'?a=fnsign'})
                                    creatJump({
                                        'titleText': '修改通知',
                                        'content': [{
                                            'text': data.message,
                                            'type': 'message',
                                        }],
                                        'closeFn': closeFn,
                                        'sendText': '確定',
                                        'sendFn': closeFn
                                    })
                                })
                            },
                        }),
                        o.data.status =='html' ?creatHtml({
                            'tage': 'a',
                            'cl': 'sign',
                            'attr': { 'href': '?a=fnsign' },
                            'text': '回上一頁'
                        }):''
                    ]
                }),
            ]
        })

    }).catch((message)=>{
        creatFnhomeError(message)
    })
}
function fnedit(o) {
    seach(o).then((o)=>{
        // 會員編輯
        var data =  o.data.row[0];
        var se =  o.data.se;
        var citi =  o.data.citi;
        creatPage({
            'creatContentHtml': [
                creatTitle2({ 'title': '會員編輯' }),
                creatHtml({
                    'tage': 'div',
                    'cl': 'container customfrom',
                    'addHtml': [
                        creatForm({
                            'content': [
                                {
                                    'id': 'Image',
                                    'text': '圖片',
                                    'imgW': 400,
                                    'imgH': 400,
                                    'value': data['Image'],
                                    'reg': [
                                        { 'rules': 'required', 'me': '請上傳圖片' },
                                    ]
                                },
                                {
                                    'id': 'Image',
                                    'class':'Image1',
                                    'text': '表單上傳',
                                    'value': data['Image1'],
                                    'imgSize': 2,
                                    'reg': [
                                        { 'rules': 'required', 'me': '請上傳表單' },
                                    ]
                                },
                                {
                                    'id': 'Image',
                                    'class':'Image2',
                                    'text': '匯款明細',
                                    'value': data['Image2'],
                                    'imgSize': 2,
                                    'reg': [
                                        { 'rules': 'required', 'me': '請上傳匯款明細' },
                                    ]
                                },
                                {
                                    'id': 'Image',
                                    'class':'Image3',
                                    'text': '商標圖',
                                    'imgW': 800,
                                    'imgH': 800,
                                    'value': data['Image3'],
                                    'reg': [
                                        { 'rules': 'required', 'me': '請上傳商標圖' },
                                    ]
                                },
                                {
                                    'id': 'name',
                                    'text': '名稱',
                                    'type': 'text',
                                    'value': data['Name'],
                                    'reg': [
                                        { 'rules': 'required', 'me': '請輸入名稱' },
                                        { 'rules': 'text', 'minlength': 2, 'maxlength': 20, 'me': '最多2~20個字' },
                                    ]
                                },
                                {
                                    'id': 'title',
                                    'text': '公司名稱',
                                    'type': 'text',
                                    'value': data['title'],
                                    'reg': [
                                        { 'rules': 'required', 'me': '請輸入公司名稱' },
                                        { 'rules': 'text', 'minlength': 2, 'maxlength': 20, 'me': '最多2~20個字' },
                                    ]
                                },
                                {
                                    'id': 'custom_citi',
                                    'text': '縣市',
                                    'value': data['citi'],
                                    'se': citi,
                                    'reg': [
                                        { 'rules': 'required', 'me': '請輸入縣市' },
                                    ]
                                },
                                {
                                    'id': 'phone',
                                    'text': '電話',
                                    'type': 'text',
                                    'value': data['Phone'],
                                    'reg': [
                                        { 'rules': 'required', 'me': '請輸入電話' },
                                        { 'rules': 'phone', 'me': '格式錯誤' },
                                        { 'rules': 'text', 'minlength': 6, 'maxlength': 12, 'me': '最多6~12個字' },
                                    ]
                                },
                                {
                                    'id': 'src',
                                    'text': '公司連結',
                                    'type': 'text',
                                    'value': data['src'],
                                    'reg': [
                                        { 'rules': 'required', 'me': '請輸入連結' },
                                        { 'rules': 'text', 'minlength': 2, 'maxlength': 200, 'me': '最多2~200個字' },
                                    ],
                                },
                                {
                                    'id': 'custom_checkbox',
                                    'text': '專業連結',
                                    'se': se,
                                    'value': data['professional_id'],
                                    'reg': [
                                        { 'rules': 'custom_checkbox', 'minlength': 1, 'maxlength': 3,'me': '請選1~3個' },
                                    ],
                                },

                            ],
                            'sendText': '儲存',
                            'sendFn': function() {
                                customload();
                                getAjax({
                                    'value': [
                                        { 'edit': '2'},
                                        {'Image':document.querySelector('#Image').src},
                                        {'Image1':document.querySelector('#Image1').src},
                                        {'Image2':document.querySelector('#Image2').src},
                                        {'Image3':document.querySelector('#Image3').src},
                                    ],
                                    'form': document.getElementById('creatForm')
                                }).then(function(data) {
                                    closeload()
                                    if(data.from_error){
                                        var error = document.querySelectorAll('#creatForm .error')
                                        error ? error.forEach(el=>el.remove()) : ''
                                        //表單錯誤
                                        data.from_error.forEach((el)=>{
                                            creatFormError({
                                                'obj': document.querySelector('#'+el.id),
                                                'me': el.me
                                            })
                                        })
                                    }else{
                                        //訊息通知
                                        creatJump({
                                            'titleText': '訊息通知',
                                            'content': [{
                                                'text': data.message,
                                                'type': 'message',
                                            }],
                                            'closeFn': closeJump,
                                            'sendText': '確定',
                                            'sendFn': closeJump
                                        })
                                    }
                                })
                            },
                        }),
                    ]
                }),
            ]
        })
    }).catch((message)=>{
        creatFnhomeError(message)
    })
}
function fnsignout(o) {
    seach(o).catch((message)=>{
        creatFnhomeError(message)
    })
}
function fnelite(o) {
    seach(o).then((o)=>{
        var json = {
            'list': ['#', '名稱', '信箱', '電話', '專業'],
            'list_content': o.data.member,
            'se': o.data.professionallink,
        }
        var seFn = (b) => {
            return json['se'].find(element => element.id == b)
        }
        var pHtml = (o) => {
            return creatHtml({
                'tage': 'li',
                'addHtml': [
                    creatHtml({
                        'tage': 'span',
                        'text': o.i
                    }),
                    creatHtml({
                        'tage': 'p',
                        'text': o.v
                    })
                ]
            })
        }
        var imgHtml = (o) => {
            return creatHtml({
                'tage': 'li',
                'addHtml': [
                    creatHtml({
                        'tage': 'span',
                        'text': o.i
                    }),
                    creatHtml({
                        'tage': 'div',
                        'cl': 'img',
                        'addHtml': creatHtml({
                            'tage': 'img',
                            'attr': { 'src': './html/img/baimg/' + o.v }
                        })
                    })
                ]
            })
        }
        creatPage({
            'creatContentHtml': [
                creatTitle2({ 'title': '專業連結' }),
                creatHtml({
                    'tage': 'div',
                    'cl': 'content',
                    'addHtml': creatHtml({
                        'tage': 'div',
                        'cl': 'container',
                        'addHtml': [
                            creatHtml({
                                'tage': 'div',
                                'cl': 'table',
                                'addHtml': (() => {
                                    var array = []
                                    array.push(creatHtml({
                                        'tage': 'ul',
                                        'cl': 'table_top',
                                        'addHtml': json['list'].map((element, index) => {
                                            return creatHtml({
                                                'tage': 'li',
                                                'addHtml': creatHtml({
                                                    'tage': 'p',
                                                    'text': element
                                                })
                                            })
                                        })
                                    }))
                                    json['list_content'].map(element => {
                                        array.push(creatHtml({
                                            'tage': 'ul',
                                            'cl': 'table_bottom',
                                            'addHtml': Object.keys(element).map((v, i) => {
                                                var span = json['list'][i - 1]
                                                var html = ''
                                                if (v == 'id') {
                                                    html = ''
                                                } else if (v == 'Image') {
                                                    html = imgHtml({ 'v': element[v], 'i': span })
                                                } else if (v == 'professional_id') {
                                                    html = pHtml({ 'v': element[v].split(',').map(v => seFn(v) ? seFn(v).text : ''), 'i': span })
                                                } else {
                                                    html = pHtml({ 'v': element[v], 'i': span })
                                                }
                                                return html
                                            })
                                        }))
                                    })
                                    return array
                                })()
                            }),
                            creatPageNumber1({
                                'pn': o.data['pn'],
                                'totle': o.data['totle'],
                                'p': o.p,
                                'a': getUrl('a'),
                                'fn':'fnprofessionalLink'
                            })
                        ]
                    })
                })
            ]
        })
    }).catch((message)=>{
        creatFnhomeError(message)
    })
}


/*fnconstruct*/
function fnconstruct(o) {
    creatPage({
        'cl': 'fnconstruct',
        'creatContentHtml': creatHtml({
            'tage': 'div',
            'cl': 'container',
            'addHtml': [
                creatHtml({
                    'tage': 'div',
                    'cl': 'img',
                    'text': '<svg viewBox="0 0 24 24"><path d="M21.167 21h1.833v2h-22v-2h1.833l7.334-20h3.666l7.334 20zm-3.231-3h-11.872l-1.1 3h14.072l-1.1-3zm-9.306-7l-1.1 3h8.94l-1.1-3h-6.74zm2.934-8l-1.467 4h3.806l-1.467-4h-.872z"/></svg>'
                }),
                creatTitle({ 'title': '正在建設中!' }),
            ]
        })
    })
}
function fnessay(o) {
    fnconstruct(o)
}
function fnvendor(o) {
    fnconstruct(o)
}
// function fnelite(o) {
//     fnconstruct(o)
// }
function fndownload(o) {
    fnconstruct(o)
}


/*creatTemplate2*/
function fncalendar(o) {
    seach(o).then((o)=>{
        creatTemplate2({
            'content': 'fncalendar',
            'title': '行事曆',
            'data': o.data,
            'p': o.p,
        })
    }).catch((message)=>{
        console.log(message)
    })
}
function fnbulletin(o) {
    seach(o).then((o)=>{
        creatTemplate2({
            'content': 'fncalendar',
            'title': '聯盟公告',
            'data': o.data,
            'p': o.p,
        })
    }).catch((message)=>{
        console.log(message)
    })
}
function fnpublic(o) {
    seach(o).then((o)=>{
        creatTemplate2({
            'content': 'fncalendar',
            'title': '公益活動',
            'data': o.data,
            'p': o.p,
        })
    }).catch((message)=>{
        console.log(message)
    })
}
function fnestatenews(o) {
    seach(o).then((o)=>{
        creatTemplate2({
            'content': 'fncalendar',
            'title': '房產新聞',
            'data': o.data,
            'p': o.p,
        })
    }).catch((message)=>{
        console.log(message)
    })
}
function fnactivity(o) {
    seach(o).then((o)=>{
        creatTemplate2({
            'content': 'fncalendar',
            'title': '活動花絮',
            'data': o.data,
            'p': o.p,
        })
    }).catch((message)=>{
        console.log(message)
    })
}
function fnmessage(o) {
    seach(o).then((o)=>{
        creatTemplate2({
            'content': 'fncalendar',
            'title': '最新消息',
            'data': o.data,
            'p': o.p,
        })
    }).catch((message)=>{
        console.log(message)
    })
}
function fnadvertising(o) {
    seach(o).then((o)=>{
        creatTemplate2({
            'content': 'fnadvertising',
            'title': '廠商推薦',
            'cl': 'advertising',
            'data': o.data,
            'p': o.p,
        })
    }).catch((message)=>{
        console.log(message)
    })
}
function fnmember(o) {
    seach(o).then((o)=>{
        creatTemplate2({
            'content': 'fnadvertising',
            'title': '新進會員',
            'cl': 'member',
            'data': o.data,
            'p': o.p,
        })
    }).catch((message)=>{
        console.log(message)
    })
}
function fnvideo(o) {
    seach(o).then((o)=>{
        creatTemplate2({
            'content': 'fnvideo',
            'title': '影音訊息',
            'cl': 'video',
            'data': o.data,
            'p': o.p,
        })
    }).catch((message)=>{
        console.log(message)
    })
}


/*creatTemplate4*/
function fnfounding(o) {
    seach(o).then((o)=>{
        creatTemplate4({
            'title': '聯盟創始',
            'data': o.data,
        })
    }).catch((message)=>{
        console.log(message)
    })
}
function fnarchitecture(o) {
    seach(o).then((o)=>{
        creatTemplate4({
            'title': '聯盟架構',
            'data': o.data,
        })
    }).catch((message)=>{
        console.log(message)
    })
}
function fnjoin(o) {
    seach(o).then((o)=>{
        creatTemplate4({
            'title': '聯盟入會',
            'data': o.data,
        })
    }).catch((message)=>{
        console.log(message)
    })
}
function fndisclaimer(o) {
    seach(o).then((o)=>{
        creatTemplate4({
            'title': '免責聲名',
            'data': o.data,
        })
    }).catch((message)=>{
        console.log(message)
    })
}
/*----------------------------------------------------------------------- */
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



window.onload = function(){
    var getUrl = document.querySelector('.fn').className.split(' ')[1];
    console.log(getUrl)
    if(getUrl=="fnhome"){
        var slide = document.querySelector('.slide');
        var lis = slide.querySelectorAll('.content li');
        var liLength = lis.length;
        var pre = slide.querySelector('.pre');
        var next = slide.querySelector('.next');
        var dot = slide.querySelector('.dot');
        var nowIndex = 0; 
        var slideAnimation = function(number){
            console.log('now',number)
            var dotLis = dot.querySelectorAll('li');
            for(var i=0;i<liLength;i++){
                lis[i].classList.remove('active')
                dotLis[i].classList.remove('active')
            }
            lis[number].classList.add('active')
            dotLis[number].classList.add('active')

        }
        for(let i=0;i<liLength;i++){
            dot.append(creatHtml({
                'tage': 'li',
                'cl': i==0?'active':'',
                'handler': function(){
                    console.log('dot',i)
                    slideAnimation(i)
                }
            }))
        }
     
        pre.addEventListener('click',function(){
            console.log('pre',nowIndex,liLength-1,liLength-1)
            nowIndex = nowIndex<1?liLength-1:nowIndex-1
            slideAnimation(nowIndex)
        })
        next.addEventListener('click',function(){
            console.log('next',nowIndex,liLength-1,nowIndex>liLength-1)
            nowIndex = nowIndex>liLength-2?0:nowIndex+1
            slideAnimation(nowIndex)
        })
        loadRemove()
    }
    // else if(getUrl=="fnintroduction" || 
    // getUrl=="fnacademic" || 
    // getUrl=="fnjournal" || 
    // getUrl=="fnlist" || 
    // getUrl=="fnjoin"){
    //     loadRemove()
    // }
    else{
        loadRemove()
    }
    loadRemove()
}