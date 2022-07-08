<!DOCTYPE html>
<html lang="zh-tw">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>@yield('title')</title>
        <link rel="icon" href="favicon.ico">
        <link href="{{ asset('css/baapp.css')}}" rel="stylesheet" type="text/css">
        <script src="{{ asset('js/jquery-3.3.1.min.js')}}"></script>
        <script src="{{ asset('js/tinymce/tinymce.min.js')}}"></script>
        <script>
            var bulletinMessage = '';
            @if (session('status'))
                bulletinMessage = '{{ session("status") }}'
            @endif
        </script>
        <script src="{{ asset('js/baapp.js')}}"></script>
    </head>
    <body>
        <div class="ba {{$active}}">
            <div class="publicLoad active">
                <div class="load">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div class="publicSection">
                <div class="publicMenu">
                    <div class="logo">
                        <img src="{{ URL::asset('img/balogo.png')}}" alt="">
                    </div>
                    <div class="menu">
                        <ul>
                            <li
                            @if($active == "bamanager" || $active == "bamanager_add" || $active == "bamanager_update")
                                class="active"
                            @endif
                            >
                                <a href="{{ URL::asset('bamanager')}}">後台管員</a>
                            </li>
                            <li
                            @if($active == "bacarousel" || $active == "bacarousel_add" || $active == "bacarousel_update")
                                class="active"
                            @endif
                            >
                                <a href="{{ URL::asset('bacarousel')}}">前台輪播</a>
                            </li>
                            <li
                            @if($active == "banews" || $active == "banews_add" || $active == "banews_update")
                                class="active"
                            @endif
                            >
                                <a href="{{ URL::asset('banews')}}">最新消息</a>
                            </li>
                            <li
                            @if($active == "babulletin" || $active == "babulletin_add" || $active == "babulletin_update")
                                class="active"
                            @endif
                            >
                                <a href="{{ URL::asset('babulletin')}}">活動公告</a>
                            </li>
                            <li
                            @if($active == "baintroduction")
                                class="active"
                            @endif
                            >
                                <a href="{{ URL::asset('baintroduction')}}">本會簡介</a>
                            </li>
                            <li
                            @if($active == "baacademic")
                                class="active"
                            @endif
                            >
                                <a href="{{ URL::asset('baacademic')}}">財務金融學刊</a>
                            </li>
                            <li>
                                <a href="https://www.ipress.tw/J0206" target="_blank">財務金融學刊投稿</a>
                            </li>
                            <!-- <li
                                @if($active == "bameeting" || $active == "bameeting_add" || $active == "bameeting_update" || $active == "bameeting_year" || $active == "bameeting_year_add" || $active == "bameeting_year_update")
                                    class="active"
                                @endif
                            >
                                <b>研討會</b>
                                <ul>
                                    <li
                                    @if($active == "bameeting" || $active == "bameeting_add" || $active == "bameeting_update")
                                        class="active"
                                    @endif
                                    >
                                        <a href="{{ URL::asset('bameeting')}}">專題研討會</a>
                                    </li>
                                    <li
                                    @if($active == "bameeting_year" || $active == "bameeting_year_add" || $active == "bameeting_year_update")
                                        class="active"
                                    @endif
                                    >
                                        <a href="{{ URL::asset('bameeting_year')}}">年會</a>
                                    </li>
                                </ul>
                            </li> -->
                            <li
                            @if($active == "bameeting" || $active == "bameeting_add" || $active == "bameeting_update")
                                class="active"
                            @endif
                            >
                                <a href="{{ URL::asset('bameeting')}}">專題研討會</a>
                            </li>
                            <li
                            @if($active == "bameeting_year" || $active == "bameeting_year_add" || $active == "bameeting_year_update")
                                class="active"
                            @endif
                            >
                                <a href="{{ URL::asset('bameeting_year')}}">年會研討會</a>
                            </li>
                            <li
                            @if($active == "bajournal")
                                class="active"
                            @endif
                            >
                                <a href="{{ URL::asset('bajournal')}}">金融研究雜誌</a>
                            </li>
                            <li
                            @if($active == "balist")
                                class="active"
                            @endif
                            >
                                <a href="{{ URL::asset('balist')}}">理監事名單</a>
                            </li>
                            <li
                            @if($active == "bajoin")
                                class="active"
                            @endif
                            >
                                <a href="{{ URL::asset('bajoin')}}">會員辦法</a>
                            </li>
                            <li
                            @if($active == "bamember" || $active == "bamember_add" || $active == "bamember_update")
                                class="active"
                            @endif
                            >
                                <a href="{{ URL::asset('bamember')}}">會員個資</a>
                            </li>
                            <li
                            @if($active == "badues" || $active == "badues_add" || $active == "badues_update")
                                class="active"
                            @endif
                            >
                                <a href="{{ URL::asset('badues')}}">繳費編輯</a>
                            </li>
                            <li
                            @if($active == "barecord" || $active == "barecord_add" || $active == "barecord_update")
                                class="active"
                            @endif
                            >
                                <a href="{{ URL::asset('barecord/1')}}">繳費紀錄</a>
                            </li>
                            <li>
                                <a href="{{ URL::asset('basignout')}}">後台登出</a>
                            </li>
                            <li>
                                <a href="{{ URL::asset('fnhome')}}">回到前台</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="publicMain">
                    @yield('content')
                </div>
            </div>
        </div>
    </body>
</html>
