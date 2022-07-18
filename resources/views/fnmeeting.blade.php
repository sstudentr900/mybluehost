<!-- 指定繼承 layout.master 母模板 -->
@extends('layout.fn')

<!-- 傳送資料到母模板，並指定變數為title -->
@section('title', $title)

<!-- 傳送資料到母模板，並指定變數為content -->
@section('content')
    <div class="publicTitle">
        <h2>{{ $title }}</h2>
    </div>
    <div class="publicCustomTable">
        <ul class='publicFlex'>
            <li class='top'>
                <div class="date">日期</div>
                <div class="title">標題</div>
                <div class="link">連結</div>
            </li>
            @foreach($datas as $data)
            <li>
                <div class="date">{{ explode(' ',$data->updated_at)[0] }}</div>
                <div class="title">
                    <a href="{{ URL::asset( $active.'_item' ).'/'.$data->id }}">{{ $data->title }}</a>
                </div>
                <div class="link">
                    <a href="{{ URL::asset( $active.'_item' ).'/'.$data->id }}"><svg><use xlink:href="#iconLink"></use></svg></a>
                </div>
                <!-- <p>{{ $data->short }}</p> -->
            </li>
            @endforeach
        </ul>
    </div>
    <div class="publicPage">
        <ul>
            <!-- <li class="first"><a href="{{  URL::asset($active.'/1') }}">最先</a></li> -->
            <li class="pre"><a href="{{  URL::asset($active).'/'.($pageStare>1?$pageStare-1:1) }}">上一篇</a></li>
            <li class="next"><a href="{{ URL::asset($active).'/'.($pageStare<$pageTotle?$pageStare+1:$pageTotle) }}">下一篇</a></li>
            <!-- <li class="last"><a href="{{  URL::asset($active).'/'.$pageTotle }}">最後</a></li> -->
        </ul>
        <p>第 {{ $pageStare }} 頁，共 {{ $pageTotle }} 頁</p>
    </div>
@endsection