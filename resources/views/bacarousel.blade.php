<!-- 指定繼承 layout.master 母模板 -->
@extends('layout.ba')

<!-- 傳送資料到母模板，並指定變數為title -->
@section('title', $title)

<!-- 傳送資料到母模板，並指定變數為content -->
@section('content')
    <div>
        @include('layout.banav_add')
        <div class="content">
            <ul>
                <li>
                    <div class='idDiv'>
                        <p>#</p>
                    </div>
                    <div class='sortDiv'>
                        <p>排序</p>
                    </div>
                    <div class='updatedDiv'>
                        <p>修改時間</p>
                    </div>
                    <div class='coverDiv'>
                        <p>圖片</p>
                    </div>
                    <div class='titleDiv'>
                        <p>標題</p>
                    </div>
                    <div class='releaseDiv'>
                        <p>狀態</p>
                    </div>
                    <div class='modify'>
                        <p>動作</p>
                    </div>
                </li>
            </ul>
            <ul>
                @foreach($datas as $data)
                <li>
                    <div class='idDiv'>
                        <p>{{ $data->id }}</p>
                    </div>
                    <div class='sortDiv'>
                        <p>{{ $data->sort }}</p>
                    </div>
                    <div class='updatedDiv'>
                        <p>{{ $data->updated_at }}</p>
                    </div>
                    <div class='coverDiv'>
                        <img src="{{ URL::asset('img').'/'.$data->cover.'?'.rand() }}">
                    </div>
                    <div class='titleDiv'>
                        <p>{{ $data->title }}</p>
                    </div>
                    <div class='releaseDiv'>
                        <p>{{ $data->release=='y'?'使用':'停用' }}</p>
                    </div>
                    @include('layout.bamodify')
                </li>
                @endforeach
            </ul>
        </div>
        @include('layout.bapage')
    </div> 
@endsection