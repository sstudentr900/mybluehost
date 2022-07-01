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
                                    <!-- <img src="{{ URL::asset('img').'/'.(old('cover')?old('cover'):($datas?$datas->cover:'')) }}"> -->
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
                        <label for="title">標題</label>
                        <div class="input">
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="請輸入標題"
                                value="{{ old('title')?old('title'):(!$errors->any() && $datas?$datas->title:'') }}"
                            >
                            @if ($errors->any())
                                @foreach ($errors->get('title') as $error)
                                    <span class="puplicError">{{ $error }}</span>
                                @endforeach
                            @endif
                        </div>
                    </li>
                    <li>
                        <div class="publicFlex">
                            <div class="publicFlex">
                                <label>排序</label>
                                <div class="input">
                                    <input
                                        type="number"
                                        id="sort"
                                        name="sort"
                                        placeholder="請輸入排序號"
                                        value="{{ old('sort')?old('sort'):(!$errors->any() && $datas?$datas->sort:($sortValue?$sortValue:'')) }}"
                                    >
                                    @if ($errors->any())
                                        @foreach ($errors->get('sort') as $error)
                                            <span class="puplicError">{{ $error }}</span>
                                        @endforeach
                                    @endif
                                </div>
                            </div>
                            <div class="publicFlex">
                                <label></label>
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
                                            <label for="y">發布</label>
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
                                </div>
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