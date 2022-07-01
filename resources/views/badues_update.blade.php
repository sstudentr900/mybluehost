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
                        <label for="name">標題</label>
                        <div class="input">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="請輸入標題"
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
                        <label for="cost">價錢</label>
                        <div class="input">
                            <input
                                type="text"
                                id="cost"
                                name="cost"
                                placeholder="請輸入價錢"
                                value="{{ old('cost')?old('cost'):(!$errors->any() && $datas?$datas->cost:'') }}"
                            >
                            @if ($errors->any())
                                @foreach ($errors->get('cost') as $error)
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