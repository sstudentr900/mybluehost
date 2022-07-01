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
                    個人資料
                </h4>
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
                            @if (old('cover') || !$errors->any() && $datas)
                                <div class="img">
                                    <img src="@php
                                    if(old('cover')){
                                        if(strpos(old('cover'),'data') !== false){
                                            echo old('cover').'?'.rand();
                                        }else{
                                            echo URL::asset('img').'/'.old('cover').'?'.rand();
                                        }
                                    }else if($datas){
                                        echo URL::asset('img').'/'.$datas->cover.'?'.rand();
                                    }
                                    @endphp">
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg>
                                    </i>
                                    <input type="hidden" name='cover' value="{{ (old('cover')?old('cover'):($datas?$datas->cover:'')) }}">
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
                            <input type="text" id="name" name="name" placeholder="請輸入名稱" value="{{ old('name')?old('name'):(!$errors->any() && $datas?$datas->name:'') }}">
                            @error('name')
                                <div class="puplicError">{{ $message }}</div>
                            @enderror
                        </div>
                        <div class="accountDiv">
                            <label>帳號(請填寫您的EMAIL)<span class="red">*</span></label>
                            <input type="text" id="account" name="account" placeholder="請輸入帳號" value="{{ old('account')?old('account'):(!$errors->any() && $datas?$datas->account:'') }}">
                            <!-- <p class="puplicError">名稱錯誤</p> -->
                            <!-- @if ($errors->any())
                                @foreach ($errors->get('account') as $error)
                                    <span class="puplicError">{{ $error }}</span>
                                @endforeach
                            @endif -->
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
                                @if( old('gender') == "m" || $datas && $datas->gender == "m")
                                    selected
                                @endif
                            >男</option>
                            <option 
                                value="w" 
                                @if( old('gender') == "w" || $datas && $datas->gender == "w")
                                    selected
                                @endif
                            >女</option>
                        </select>
                        @error('gender')
                            <div class="puplicError">{{ $message }}</div>
                        @enderror
                    </div>
                </li>
                <!-- <li>
                    <div class="left">
                        <div class="publicImg">
                            <label for="cover">
                                <span>請選擇圖片</span>
                                <input class="cover" id="cover" type="file" accept=".jpg, .jpeg, .png">
                            </label>
                            @if (old('cover') || !$errors->any() && $datas)
                                <div class="img">
                                    <img src="@php
                                    if(old('cover')){
                                        if(strpos(old('cover'),'data') !== false){
                                            echo old('cover').'?'.rand();
                                        }else{
                                            echo URL::asset('img').'/'.old('cover').'?'.rand();
                                        }
                                    }else if($datas){
                                        echo URL::asset('img').'/'.$datas->cover.'?'.rand();
                                    }
                                    @endphp">
                                    <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg>
                                    </i>
                                    <input type="hidden" name='cover' value="{{ (old('cover')?old('cover'):($datas?$datas->cover:'')) }}">
                                </div>
                            @endif
                        </div>
                        @if ($errors->any())
                            @foreach ($errors->get('cover') as $error)
                                <span class="puplicError">{{ $error }}</span>
                            @endforeach
                        @endif
                    </div>
                    <div class="right">
                        <div class="gender">
                            <div class="publicRadio">
                                <div class="radio">
                                    <input
                                        type="radio"
                                        id="m"
                                        name="gender"
                                        value="m"
                                        @if( old('gender') == "m" || $datas && $datas->gender == "m")
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
                                        @if( old('gender') == "w" || $datas && $datas->gender == "w")
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
                        </div>
                        <div class="nameDiv">
                            <input type="text" id="name" name="name" placeholder="請輸入名稱" value="{{ old('name')?old('name'):(!$errors->any() && $datas?$datas->name:'') }}">
                            @if ($errors->any())
                                @foreach ($errors->get('name') as $error)
                                    <span class="puplicError">{{ $error }}</span>
                                @endforeach
                            @endif
                        </div>
                        <div class="accountDiv">
                            <input type="text" id="account" name="account" placeholder="請輸入帳號" value="{{ old('account')?old('account'):(!$errors->any() && $datas?$datas->account:'') }}">
                            @if ($errors->any())
                                @foreach ($errors->get('account') as $error)
                                    <span class="puplicError">{{ $error }}</span>
                                @endforeach
                            @endif
                        </div>
                    </div>
                </li> -->
                <li>
                    <label>網址(選填)</label>
                    <input type="text" id="url" name="url" placeholder="請輸入網址" value="{{ old('url')?old('url'):(!$errors->any() && $datas?$datas->url:'') }}">
                    @error('url')
                        <div class="puplicError">{{ $message }}</div>
                    @enderror
                </li>
                <li>
                    <label>描述(選填)</label>
                    <textarea name="describe" id="describe" placeholder="請輸入描述">{{ old('describe')?old('describe'):(!$errors->any() && $datas?$datas->describe:'') }}</textarea>
                    @error('describe')
                        <div class="puplicError">{{ $message }}</div>
                    @enderror
                </li>
                <li>
                    <button type="submit">修改</button>
                    <!-- <a href="{{ URL::asset('fnmember_password') }}">密碼修改</a>
                    <a href="{{ URL::asset('fnmember_cost') }}">會員繳費</a>
                    <a href="{{ URL::asset('fnmember_out') }}">我要登出</a> -->
                </li>
            </ul>
            <div class="account">
                <p>要修改密碼?</p><a href="{{ URL::asset('fnmember_password') }}">密碼修改</a>
            </div>
        </form>
    </div>
@endsection