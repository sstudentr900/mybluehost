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
                        <label for="short">簡述</label>
                        <div class="input">
                            <input
                                type="text"
                                id="short"
                                name="short"
                                placeholder="請輸入簡述"
                                value="{{ old('short')?old('short'):(!$errors->any() && $datas?$datas->short:'') }}"
                            >
                            @if ($errors->any())
                                @foreach ($errors->get('short') as $error)
                                    <span class="puplicError">{{ $error }}</span>
                                @endforeach
                            @endif
                        </div>
                    </li>
                    <li>
                        <label for="tinymce">內文</label>
                        <div class="input">
                            <textarea
                                rows="5"
                                id="tinymce"
                                class="tinymce"
                                name="tinymce"
                                placeholder="請輸入內文"
                            >{{ old('tinymce')?old('tinymce'):(!$errors->any() && $datas?$datas->tinymce:'') }}</textarea>
                            @if ($errors->any())
                                @foreach ($errors->get('tinymce') as $error)
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