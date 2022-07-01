<!DOCTYPE html>
<html lang="zh-tw">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>@yield('title')</title>
        <link rel="icon" href="favicon.ico">
        <link href="{{ URL::asset('css/fnapp.css')}}" rel="stylesheet" type="text/css">
        <script src="{{ URL::asset('js/jquery-3.3.1.min.js')}}"></script>
        <script>
            var bulletinMessage = '';
            @if (session('status'))
                bulletinMessage = '{{ session("status") }}'
            @endif
        </script>
        <script src="{{ URL::asset('js/fnapp.js')}}"></script>
    </head>
    <body>
        <div class="fn {{ $active }}">
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
                    <div class="menu">
                        <ul>
                            <li class="{{$active == 'fnhome'?'active':''}}">
                                <!-- <a href="{{ URL::asset('fnhome')}}"> -->
                                <a href="{{ route('fnhome') }}">
                                    <!-- @php
                                        echo Route::currentRouteName();
                                        echo Route::currentRouteName();
                                    @endphp -->
                                    <P>回首頁</P>
                                </a>
                            </li>
                            <li class="{{$active == 'fnintroduction'?'active':''}}">
                                <!-- <a href="{{ URL::asset('fnintroduction')}}"> -->
                                <a href="{{ route('fnintroduction')}}">
                                    <p>本會簡介</p>
                                </a>
                            </li>
                            <li class="{{$active == 'fnacademic'?'active':''}}">
                                <!-- <a href="{{ URL::asset('fnacademic')}}"> -->
                                <a href="{{ route('fnacademic')}}">
                                    <p>財務金融學刊</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.ipress.tw/J0206" target="_blank">
                                    <p>財務金融學刊投稿</p>
                                </a>
                            </li>
                            <li class="{{ $active == 'fnmeeting' || $active == 'fnmeeting_item' || $active == 'fnmeeting_year' || $active == 'fnmeeting_year_item' ?'active':'' }}">
                                <b>
                                    <p>研討會</p>
                                </b>
                                <ul>
                                    <li class="{{ $active == 'fnmeeting_year' || $active == 'fnmeeting_year_item' ?'active':'' }}">
                                        <a href="{{ route('fnmeeting_year')}}">年會研討會</a>
                                        <!-- <a href="{{ URL::asset('fnmeeting_year')}}">年會研討會</a> -->
                                    </li>
                                    <li class="{{ $active == 'fnmeeting' || $active == 'fnmeeting_item' ?'active':'' }}">
                                        <a href="{{ route('fnmeeting')}}">專題研討會</a>
                                        <!-- <a href="{{ URL::asset('fnmeeting')}}">專題研討會</a> -->
                                    </li>
                                </ul>
                            </li>
                            <li class="{{$active == 'fnjournal'?'active':''}}">
                                <!-- <a href="{{ URL::asset('fnjournal')}}">Journal of Financial Studies</a> -->
                                <!-- <a href="{{ URL::asset('fnjournal')}}"> -->
                                <a href="{{ route('fnjournal')}}">
                                    <p>金融研究雜誌</p>
                                </a>
                            </li>
                            <li class="{{$active == 'fnlist'?'active':''}}">
                                <!-- <a href="{{ URL::asset('fnlist')}}"> -->
                                <a href="{{ route('fnlist')}}">
                                    <p>理監事名單</p>
                                </a>
                            </li>
                            <li class="{{$active == 'fnjoin'?'active':''}}">
                                <!-- <a href="{{ URL::asset('fnjoin')}}"> -->
                                <a href="{{ route('fnjoin')}}">
                                    <p>會員辦法</p>
                                </a>
                            </li>
                            <li
                                @if($active == "fnmember" || $active == "fnmember_post" || $active == "fnregister" || $active == "fnpassword" || $active == "fnpassword_post"  || $active == "fnmember_information" || $active == "fnmember_password" || $active == "fnpassword_change" || $active == "fnmember_payment" || $active == "fnmember_record")
                                    class="active"
                                @endif
                            >
                                <b>
                                    <P>會員專區</P>
                                </b>
                                <ul>
                                    @if(!session()->get('fnuser_id'))
                                        <li class="{{$active == 'fnmember'?'active':''}}">
                                            <!-- <a href="{{ URL::asset('fnmember')}}">會員登入</a> -->
                                            <a href="{{ route('fnmember')}}">會員登入</a>
                                        </li>
                                        <li class="{{$active == 'fnregister'?'active':''}}">
                                            <!-- <a href="{{ URL::asset('fnregister')}}">會員註冊</a> -->
                                            <a href="{{ route('fnregister')}}">會員註冊</a>
                                        </li>
                                        <li class="{{$active == 'fnpassword'?'active':''}}">
                                            <!-- <a href="{{ URL::asset('fnpassword')}}">忘記密碼</a> -->
                                            <a href="{{ route('fnpassword')}}">忘記密碼</a>
                                        </li>
                                    @else
                                        <li class="{{$active == 'fnmember_information'?'active':''}}">
                                            <!-- <a href="{{ URL::asset('fnmember_information')}}">個人資料</a> -->
                                            <a href="{{ route('fnmember_information')}}">個人資料</a>
                                        </li>
                                        <li class="{{$active == 'fnmember_password'?'active':''}}">
                                            <!-- <a href="{{ URL::asset('fnmember_password')}}">密碼修改</a> -->
                                            <a href="{{ route('fnmember_password')}}">密碼修改</a>
                                        </li>
                                        <li class="{{$active == 'fnmember_payment'?'active':''}}">
                                            <!-- <a href="{{ URL::asset('fnmember_payment')}}">會員繳費</a> -->
                                            <a href="{{ route('fnmember_payment')}}">會員繳費</a>
                                        </li>
                                        <li class="{{$active == 'fnmember_record'?'active':''}}">
                                            <!-- <a href="{{ URL::asset('fnmember_record')}}">繳費紀錄</a> -->
                                            <a href="{{ route('fnmember_record')}}">繳費紀錄</a>
                                        </li>
                                        <li>
                                            <!-- <a href="{{ URL::asset('fnmember_out')}}">會員登出</a> -->
                                            <a href="{{ route('fnmember_out')}}">會員登出</a>
                                        </li>
                                    @endif
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="contact">
                        <h3>Contact Us</h3>
                        <p class="text">
                            ADDR: No.1, Sec. 4, Roosevelt Rd., Da'an Dist., Taipei City 106, Taiwan (R.O.C.)<br>
                            EMAIL: <a href="mailto:tfinancea@gmail.com">tfinancea@gmail.com</a><br> 
                            PHONE: <a href="tel:886-2-3366-7210">886-2-3366-7210</a><br> 
                            PHONE: <a href="tel:886-2-3366-1094">886-2-3366-1094</a><br>
                            FAX: 886-2-3366-7210<br>
                            Copyright (c) 2019 The Taiwan Finance Association. ALL RIGHTS RESERVED.
                        </p>
                    </div>
                </div>
                <div class="publicMain">
                    <div class="nav">
                        <div class="navButton">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="logo">
                            <img src="{{ URL::asset('img/fnlogo.png')}}" alt="">
                        </div>
                    </div>
                    @yield('content')
                </div>
            </div>
        </div>
    </body>
</html>
