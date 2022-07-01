window.passowdButton = function(o) {
    var input = o.nextElementSibling;
    var type = input.getAttribute('type')
    if(type =='password'){
        o.classList.add('active')
        input.setAttribute('type','text')
    }else{
        o.classList.remove('active')
        input.setAttribute('type','password')
    }
}
window.navButton=function(){
    var navButton = document.querySelector('.navButton');
    var publicSection = document.querySelector('.publicSection');
    var body = document.querySelector('body');
    navButton.addEventListener('click',function(){
        if(publicSection.classList.contains('active')){
            publicSection.classList.remove('active')
            body.style.overflow=''
        }else{
            publicSection.classList.add('active')
            body.style.overflow='hidden'
        }
    })
    menu()
}
window.slideFn=function(){
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
        // console.log('pre',nowIndex,liLength-1,liLength-1)
        nowIndex = nowIndex<1?liLength-1:nowIndex-1
        slideAnimation(nowIndex)
    })
    next.addEventListener('click',function(){
        // console.log('next',nowIndex,liLength-1,nowIndex>liLength-1)
        nowIndex = nowIndex>liLength-2?0:nowIndex+1
        slideAnimation(nowIndex)
    })

}
window.fnhomeFn = function(){
    function changePage(name){
        let objDiv = document.querySelector('.'+name);
        let element_preButton = objDiv.querySelectorAll('.control button')[0];
        let element_nextButton = objDiv.querySelectorAll('.control button')[1];
        let pageNow = 1;
        let pageTotle = 2;
        let fetchFn = function(number){
            if(number>0){
                pageNow = pageNow<pageTotle?pageNow*1+number:pageTotle
            }else{
                pageNow = pageNow>1?pageNow*1-1:1
            }
            fetch("fnhome/"+name+"/"+pageNow,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content
                },
            })
            .then(function(res) {
                return res.json();
            })
            .then(function(result) {
                result.data.forEach((el,index)=>{
                    let element_li = objDiv.querySelectorAll('li');
                    let element_a = element_li[index].querySelector('a');
                    let element_span = element_li[index].querySelector('span');
                    element_a.setAttribute('href',element_a.getAttribute('href').split('fnnews')[0]+'/fnnews/'+el['id']);
                    element_a.textContent = el['title'];
                    element_span.textContent = el['updated_at'].split('T')[0].replace('-','/');
                })
                pageNow = result.pageNow;
                pageTotle = result.pageTotle;
                if(pageNow>1){
                    element_preButton.classList.add('active')
                }else{
                    element_preButton.classList.remove('active')
                }
                if(pageNow<pageTotle){
                    element_nextButton.classList.add('active')
                }else{
                    element_nextButton.classList.remove('active')
                }
            })
        }
        element_preButton.addEventListener('click',function(){
            fetchFn(-1)
        })
        element_nextButton.addEventListener('click',function(){
            fetchFn(1)
        })
    }
    changePage('new')
    changePage('bulletin')
    slideFn();
}
window.onload = function(){
    var getUrl = document.querySelector('.fn').className.split(' ')[1];
    if(getUrl=="fnhome"){
        fnhomeFn()
    }else if(getUrl=="fnregister" || getUrl=="fnmember_information"){
        imgFn(300,300)
    }
    navButton()
    loadRemove()
}