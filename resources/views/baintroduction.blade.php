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
                                value="{{ old('title')!=null?old('title'):$datas->title }}"
                            >
                            <!-- @if (session('status'))
                                {{ session('status') }}
                            @endif -->
                            <!-- old使用者輸入 -->
                            <!-- $datas資料抓取 -->
                            @if ($errors->any())
                                <!-- $errors->all() 取出所有欄位的錯誤訊息-->
                                <!-- $errors->get('名稱') 取出特定欄位的錯誤訊息-->
                                @foreach ($errors->get('title') as $error)
                                    <span class="puplicError">{{ $error }}</span>
                                @endforeach
                            @endif
                        </div>
                    </li>
                    <!-- <li>
                        <label for="text">簡述</label>
                        <div class="input">
                            <textarea
                                rows="5"
                                id="text"
                                name="text"
                                placeholder="請輸入簡述"
                            ></textarea>
                        </div>
                    </li> -->
                    <li>
                        <label for="tinymce">內文</label>
                        <div class="input">
                            <textarea
                                rows="5"
                                id="tinymce"
                                class="tinymce"
                                name="tinymce"
                                placeholder="請輸入內文"
                            >{{ old('tinymce')!=null?old('tinymce'):$datas->tinymce }}</textarea>
                            @if ($errors->any())
                                @foreach ($errors->get('tinymce') as $error)
                                    <span class="puplicError">{{ $error }}</span>
                                @endforeach
                            @endif
                        </div>
                    </li>
                    <li>
                        <div class="buttons">
                            <button class="publicBtn2" type="submit">儲存</button>
                        </div>
                    </li>
                </ul>
            </form>
        </div>
    </div> 
@endsection