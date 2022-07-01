<!-- 指定繼承 layout.master 母模板 -->
@extends('layout.fn')

<!-- 傳送資料到母模板，並指定變數為title -->
@section('title', $title)

<!-- 傳送資料到母模板，並指定變數為content -->
@section('content')
    <div class="publicCustomContent">
        <form method="post" class="publicform fnforget">
            {!! csrf_field() !!}
            <div class="title">
                <i><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 24h-24v-2h24v2zm-1-3h-22v-1h22v1zm-17-1.999h-4v-7.001c-.552 0-1-.448-1-1s.448-1 1-1h4c.552 0 1 .448 1 1s-.448 1-1 1v7.001zm8 0h-4v-7.001c-.552 0-1-.448-1-1s.448-1 1-1h4c.552 0 1 .448 1 1s-.448 1-1 1v7.001zm8 0h-4v-7.001c-.552 0-1-.448-1-1s.448-1 1-1h4c.552 0 1 .448 1 1s-.448 1-1 1v7.001zm-10-19.001l-12 9h24.001l-12.001-9zm0 3c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2z"/></svg></i>
                <h3>會員繳費</h3>
                <p>目前有以下可以加入,請選擇你的費用!!</p>
            </div>
            <ul class="content">
                <li>
                    <select name="id">
                        @foreach($datas as $data)
                        <option value="{{ $data->id }}">{{ $data->name }}</option>
                        <!-- <option value="2">個人永久會員  20000</option>
                        <option value="3">初始個人常年會員 3000</option>
                        <option value="4">個人常年會員  2000</option>
                        <option value="5">非會員投稿費 5000</option>
                        <option value="6">會員投稿費 3000</option> -->
                        @endforeach
                    </select>
                </li>
                <li>
                    <button>送出</button>
                </li>
            </ul>
            <div class="account">
                <p>查詢繳費紀錄?</p><a href="{{ URL::asset('fnmember_record') }}">繳費紀錄</a>
            </div>
        </form>
    </div>
@endsection