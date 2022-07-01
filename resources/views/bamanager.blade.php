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
                    <div class='updatedDiv'>
                        <p>修改時間</p>
                    </div>
                    <div class='coverDiv'>
                        <p>圖片</p>
                    </div>
                    <div class='accountDiv'>
                        <p>帳號</p>
                    </div>
                    <div class='nameDiv'>
                        <p>姓名</p>
                    </div>
                    <div class='phoneDiv'>
                        <p>電話</p>
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
                    <div class='updatedDiv'>
                        <p>{{ $data->updated_at }}</p>
                    </div>
                    <div class='coverDiv'>
                        <img src="{{ URL::asset('img').'/'.$data->cover.'?'.rand() }}">
                    </div>
                    <div class='accountDiv'>
                        <p>{{ $data->account }}</p>
                    </div>
                    <div class='nameDiv'>
                        <p>{{ $data->name }}</p>
                    </div>
                    <div class='phoneDiv'>
                        <p>{{ $data->phone }}</p>
                    </div>
                    <div class='releaseDiv'>
                        <p>{{ $data->release=='y'?'使用':'停用' }}</p>
                    </div>
                    @include('layout.bamodify')
                    <!-- <div class="modify">
                        <a href="{{ URL::asset('bamanager_update').'/'.$data->id.'/'.$pageStare }}">
                            <svg viewBox="0 0 24 24">
                                <path d="M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z"></path>
                            </svg>
                        </a>
                        <a href="javascript:tablePassowd('{{ URL::asset('bamanager_passord').'/'.$data->id.'/'.$pageStare }}')">
                            <svg viewBox="0 0 24 24">
                                <path d="M16 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm0-2c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm-5.405 16.4l-1.472 1.6h-3.123v2h-2v2h-2v-2.179l5.903-5.976c-.404-.559-.754-1.158-1.038-1.795l-6.865 6.95v5h6v-2h2v-2h2l2.451-2.663c-.655-.249-1.276-.562-1.856-.937zm7.405-11.4c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm0-1c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"></path>
                            </svg>
                        </a>
                        @if($pageStare!=1 || $pageStare==1 && count($datas)!=1)   
                        <a href="javascript:tableDelet('{{ URL::asset('bamanager_delete').'/'.$data->id.'/'.$pageStare }}')">
                            <svg viewBox="0 0 24 24">
                                <path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z"></path>
                            </svg>
                        </a>
                        @endif
                    </div> -->
                </li>
                @endforeach
            </ul>
        </div>
        @include('layout.bapage')
    </div> 
@endsection