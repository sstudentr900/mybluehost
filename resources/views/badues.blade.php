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
                    <div class='nameDiv'>
                        <p>標題</p>
                    </div>
                    <div class='costDiv'>
                        <p>價錢</p>
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
                    <div class='nameDiv'>
                        <p>{{ $data->name }}</p>
                    </div>
                    <div class='costDiv'>
                        <p>{{ $data->cost }}</p>
                    </div>
                    <div class='releaseDiv'>
                        <p>{{ $data->release=='y'?'使用':'停用' }}</p>
                    </div>
                    <div class="modify">
                        <a href="{{ URL::asset($active.'_update').'/'.$data->id.'/'.$pageStare }}">
                            <svg viewBox="0 0 24 24">
                                <path d="M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z"></path>
                            </svg>
                        </a>
                        @if($pageStare!=1 || $pageStare==1 && count($datas)!=1)   
                        <a href="javascript:tableDelet('{{ URL::asset('badues_delete').'/'.$data->id.'/'.$pageStare }}')">
                            <svg viewBox="0 0 24 24">
                                <path d="M19 24h-14c-1.104 0-2-.896-2-2v-17h-1v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2h-1v17c0 1.104-.896 2-2 2zm0-19h-14v16.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-16.5zm-9 4c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm6 0c0-.552-.448-1-1-1s-1 .448-1 1v9c0 .552.448 1 1 1s1-.448 1-1v-9zm-2-7h-4v1h4v-1z"></path>
                            </svg>
                        </a>
                        @endif
                    </div>
                </li>
                @endforeach
            </ul>
        </div>
        @include('layout.bapage')
    </div> 
@endsection