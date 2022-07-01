<!-- 指定繼承 layout.master 母模板 -->
@extends('layout.fn')

<!-- 傳送資料到母模板，並指定變數為title -->
@section('title', $title)

<!-- 傳送資料到母模板，並指定變數為content -->
@section('content')
    <div class="publicCustomContent">
        <form method="post" class="publicform">
            {!! csrf_field() !!}
            <div class="title2">
                <h4>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 330 330">
                        <path d="M75,180v60c0,8.284,6.716,15,15,15h60c3.978,0,7.793-1.581,10.606-4.394l164.999-165   c5.858-5.858,5.858-15.355,0-21.213l-60-60C262.794,1.581,258.978,0,255,0s-7.794,1.581-10.606,4.394l-165,165   C76.58,172.206,75,176.022,75,180z M105,186.213L255,36.213L293.787,75l-150,150H105V186.213z"/>
                        <path d="M315,150.001c-8.284,0-15,6.716-15,15V300H30V30H165c8.284,0,15-6.716,15-15s-6.716-15-15-15H15   C6.716,0,0,6.716,0,15v300c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15V165.001C330,156.716,323.284,150.001,315,150.001z"/>
                    </svg>
                    會員註冊
                </h4>
                <!-- <h3>會員修改</h3> -->
            </div>
            <ul class="content">
                <li>
                    <div class="publicImgDiv">
                        <label>圖片<span class="red">*</span></label>
                        <div class="publicImg">
                            <label for="cover">
                                <span>請選擇圖片</span>
                                <input class="cover" id="cover" type="file" accept=".jpg, .jpeg, .png">
                            </label>
                            @if (old('cover'))
                            <div class="img">
                                <img src="@php
                                    if(strpos(old('cover'),'data') !== false){
                                        echo old('cover');
                                    }else{
                                        echo URL::asset('img').'/'.old('cover');
                                    }
                                @endphp">
                                <i>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg>
                                </i>
                                <input type="hidden" name='cover' value="{{ old('cover')?old('cover'):'' }}">
                            </div>
                            @endif
                        </div>
                        @error('cover')
                            <div class="puplicError">{{ $message }}</div>
                        @enderror
                    </div>
                    <div class="nameAndgenderDiv">
                        <div class="nameDiv">
                            <label>名稱(請填寫真實姓名，方便對帳)<span class="red">*</span></label>
                            <input type="text" id="name" name="name" placeholder="請輸入名稱" value="{{ old('name')?old('name'):'' }}">
                            @error('name')
                                <div class="puplicError">{{ $message }}</div>
                            @enderror
                        </div>
                        <div class="accountDiv">
                            <label>帳號(請填寫您的EMAIL)<span class="red">*</span></label>
                            <input type="text" id="account" name="account" placeholder="請輸入帳號" value="{{ old('account')?old('account'):'' }}">
                            <!-- <p class="puplicError">名稱錯誤</p> -->
                            @error('account')
                                <div class="puplicError">{{ $message }}</div>
                            @enderror
                        </div>
                    </div>
                </li>
                <li>
                    <div class="genderDiv">
                        <label>性別<span class="red">*</span></label>
                        <select name="gender">
                            <option 
                                value="m"
                                @if( old('gender') == "m")
                                    selected
                                @endif
                            >男</option>
                            <option 
                                value="w" 
                                @if( old('gender') == "w")
                                    selected
                                @endif
                            >女</option>
                        </select>
                        @error('gender')
                            <div class="puplicError">{{ $message }}</div>
                        @enderror
                    </div>
                    <!-- <div class="gender">
                        <div class="publicRadio">
                            <div class="radio">
                                <input
                                    type="radio"
                                    id="m"
                                    name="gender"
                                    value="m"
                                    @if( old('gender') == "m" || $gender && $gender== "m")
                                        checked
                                    @endif
                                >
                                <label for="m">男</label>
                            </div>
                            <div class="radio">
                                <input
                                    type="radio"
                                    id="w"
                                    name="gender"
                                    value="w"
                                    @if( old('gender') == "w")
                                        checked
                                    @endif
                                >
                                <label for="w">女</label>
                            </div>
                        </div>
                        @if ($errors->any())
                            @foreach ($errors->get('gender') as $error)
                                <span class="puplicError">{{ $error }}</span>
                            @endforeach
                        @endif
                    </div> -->
                    <div class="passwordDiv">
                        <i class="puplicPasswordEye">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.604 2.562l-3.346 3.137c-1.27-.428-2.686-.699-4.243-.699-7.569 0-12.015 6.551-12.015 6.551s1.928 2.951 5.146 5.138l-2.911 2.909 1.414 1.414 17.37-17.035-1.415-1.415zm-6.016 5.779c-3.288-1.453-6.681 1.908-5.265 5.206l-1.726 1.707c-1.814-1.16-3.225-2.65-4.06-3.66 1.493-1.648 4.817-4.594 9.478-4.594.927 0 1.796.119 2.61.315l-1.037 1.026zm-2.883 7.431l5.09-4.993c1.017 3.111-2.003 6.067-5.09 4.993zm13.295-4.221s-4.252 7.449-11.985 7.449c-1.379 0-2.662-.291-3.851-.737l1.614-1.583c.715.193 1.458.32 2.237.32 4.791 0 8.104-3.527 9.504-5.364-.729-.822-1.956-1.99-3.587-2.952l1.489-1.46c2.982 1.9 4.579 4.327 4.579 4.327z"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.015 7c4.751 0 8.063 3.012 9.504 4.636-1.401 1.837-4.713 5.364-9.504 5.364-4.42 0-7.93-3.536-9.478-5.407 1.493-1.647 4.817-4.593 9.478-4.593zm0-2c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 7l-3.36-2.171c-.405.625-.64 1.371-.64 2.171 0 2.209 1.791 4 4 4s4-1.791 4-4-1.791-4-4-4c-.742 0-1.438.202-2.033.554l2.033 3.446z"></path></svg>
                        </i>
                        <label>密碼<span class="red">*</span></label>
                        <input type="password" id="password" name="password" placeholder="請輸入密碼" value="{{ old('password')?old('password'):'' }}">
                        @error('password')
                            <div class="puplicError">{{ $message }}</div>
                        @enderror
                    </div>
                </li>
                <li>
                    <label>網址(選填)</label>
                    <input type="text" id="url" name="url" placeholder="請輸入網址" value="{{ old('url')?old('url'):'' }}">
                    @error('url')
                        <div class="puplicError">{{ $message }}</div>
                    @enderror
                </li>
                <li>
                    <label>描述(選填)</label>
                    <textarea name="describe" id="describe" placeholder="請輸入描述">{{ old('describe')?old('describe'):'' }}</textarea>
                    @error('describe')
                        <div class="puplicError">{{ $message }}</div>
                    @enderror
                </li>
                <li>
                    <!-- <button>註冊</button> -->
                    <button onclick="showLoad()">註冊</button>
                </li>
            </ul>
            <div class="account">
                <p>已經有帳號?</p><a href="{{ URL::asset('fnmember') }}">我要登入</a>
            </div>
        </form>
    </div>
@endsection