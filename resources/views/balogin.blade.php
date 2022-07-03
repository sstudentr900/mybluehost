<!DOCTYPE html>
<html lang="zh-tw">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- <meta name="csrf-token" content="{{ csrf_token() }}"> -->
        <title>@yield('title')</title>
        <link rel="icon" href="favicon.ico">
        <link href="{{ public_path('css/baapp.css')}}" rel="stylesheet" type="text/css">
        <script src="{{ public_path('js/jquery-3.3.1.min.js')}}"></script>
        <!-- <script src="{{ public_path('js/tinymce/tinymce.min.js')}}"></script> -->
        <script src="{{ public_path('js/baapp.js')}}"></script>
    </head>
    <body>
        <div class="ba balogin">
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
            <div class="login">
                <div class="publicform">
                    <div class="title">
                        <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z"/></svg></i>
                        <h3>後台登入</h3>
                    </div>
                    <form method="post">
                        {!! csrf_field() !!}
                        <ul>
                            <li>
                                <input type="text" placeholder="請輸入帳號" name="account" value="{{ old('account')?old('account'):''}}">
                                @if ($errors->any())
                                    @foreach ($errors->get('account') as $error)
                                        <span class="puplicError">{{ $error }}</span>
                                    @endforeach
                                @endif
                            </li>
                            <li>
                                <i class="puplicPasswordEye" onclick="passowdButton(this)">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.604 2.562l-3.346 3.137c-1.27-.428-2.686-.699-4.243-.699-7.569 0-12.015 6.551-12.015 6.551s1.928 2.951 5.146 5.138l-2.911 2.909 1.414 1.414 17.37-17.035-1.415-1.415zm-6.016 5.779c-3.288-1.453-6.681 1.908-5.265 5.206l-1.726 1.707c-1.814-1.16-3.225-2.65-4.06-3.66 1.493-1.648 4.817-4.594 9.478-4.594.927 0 1.796.119 2.61.315l-1.037 1.026zm-2.883 7.431l5.09-4.993c1.017 3.111-2.003 6.067-5.09 4.993zm13.295-4.221s-4.252 7.449-11.985 7.449c-1.379 0-2.662-.291-3.851-.737l1.614-1.583c.715.193 1.458.32 2.237.32 4.791 0 8.104-3.527 9.504-5.364-.729-.822-1.956-1.99-3.587-2.952l1.489-1.46c2.982 1.9 4.579 4.327 4.579 4.327z"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 7l-3.36-2.171c-.405.625-.64 1.371-.64 2.171 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-.742 0-1.438.202-2.033.554l2.033 3.446z"></path></svg>
                                </i>
                                <input type="password" placeholder="請輸入密碼" name="password" value="{{ old('password')?old('password'):'' }}">
                                @if ($errors->any())
                                    @foreach ($errors->get('password') as $error)
                                        <span class="puplicError">{{ $error }}</span>
                                    @endforeach
                                @endif
                            </li>
                            <li>
                                <!-- <div class="publicFlex">
                                    <input type="checkbox" id="remember"> 
                                    <label for="remember">記住密碼</label>
                                </div> -->
                                <div class="gohome">
                                    <a href="./">回首頁?</a>
                                </div>
                                <button type='submit'>登入</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>
