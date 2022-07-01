<!-- 指定繼承 layout.master 母模板 -->
@extends('layout.ba')

<!-- 傳送資料到母模板，並指定變數為title -->
@section('title', $title)

<!-- 傳送資料到母模板，並指定變數為content -->
@section('content')
    <div>
        @include('layout.banav')
        <div class="content2">
            <form method="post" action="">
                {!! csrf_field() !!}
                <ul>
                    <li>
                        <label for="img">圖片</label>
                        <div class="input">
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
                                            echo old('cover');
                                        }else{
                                            echo URL::asset('img').'/'.old('cover');
                                        }
                                    }else if($datas){
                                        echo URL::asset('img').'/'.$datas->cover;
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
                    </li>
                    <li>
                        <label for="account">帳號</label>
                        <div class="input">
                            <input
                                type="text"
                                id="account"
                                name="account"
                                placeholder="請輸入帳號"
                                value="{{ old('account')?old('account'):(!$errors->any() && $datas?$datas->account:'') }}"
                            >
                            @if ($errors->any())
                                @foreach ($errors->get('account') as $error)
                                    <span class="puplicError">{{ $error }}</span>
                                @endforeach
                            @endif
                        </div>
                    </li>
                    @if ($inputPassword)
                    <li>
                        <label for="password">密碼</label>
                        <div class="input">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="請輸入帳號"
                                value="{{ old('password')?old('password'):(!$errors->any() && $datas?$datas->password:'') }}"
                            >
                            @if ($errors->any())
                                @foreach ($errors->get('password') as $error)
                                    <span class="puplicError">{{ $error }}</span>
                                @endforeach
                            @endif
                        </div>
                    </li>
                    @endif
                    <li>
                        <label for="name">姓名</label>
                        <div class="input">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="請輸入姓名"
                                value="{{ old('name')?old('name'):(!$errors->any() && $datas?$datas->name:'') }}"
                            >
                            @if ($errors->any())
                                @foreach ($errors->get('name') as $error)
                                    <span class="puplicError">{{ $error }}</span>
                                @endforeach
                            @endif
                        </div>
                    </li>
                    <li>
                        <label for="phone">電話</label>
                        <div class="input">
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="請輸入電話"
                                value="{{ old('phone')?old('phone'):(!$errors->any() && $datas?$datas->phone:'') }}"
                            >
                            @if ($errors->any())
                                @foreach ($errors->get('phone') as $error)
                                    <span class="puplicError">{{ $error }}</span>
                                @endforeach
                            @endif
                        </div>
                    </li>
                    <li>
                        <div class="publicFlex">
                            <label>狀態</label>
                            <div class="input">
                                <div class="publicRadio">
                                    <div class="radio">
                                        <input
                                            type="radio"
                                            id="y"
                                            name="release"
                                            value="y"
                                            @if( old('release') == 'y' || $datas && $datas->release == 'y' || $release && $release== 'y')
                                                checked
                                            @endif
                                        >
                                        <label for="y">使用</label>
                                    </div>
                                    <div class="radio">
                                        <input
                                            type="radio"
                                            id="n"
                                            name="release"
                                            value="n"
                                            @if( old('release') == 'n' || $datas && $datas->release == 'n')
                                                checked
                                            @endif
                                        >
                                        <label for="n">停用</label>
                                    </div>
                                </div>
                                @if ($errors->any())
                                    @foreach ($errors->get('release') as $error)
                                        <span class="puplicError">{{ $error }}</span>
                                    @endforeach
                                @endif
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="buttons">
                            <button class="publicBtn2" type="submit">送出</button>
                        </div>
                    </li>
                </ul>
            </form>
        </div>
    </div> 
@endsection