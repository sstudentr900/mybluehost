<!-- 指定繼承 layout.master 母模板 -->
@extends('layout.ba')

<!-- 傳送資料到母模板，並指定變數為title -->
@section('title', $title)

<!-- 傳送資料到母模板，並指定變數為content -->
@section('content')
    <div>
        <div class="nav">
            <div class="title">
                <h4>{{ $mainTitle }}</h4>
            </div>
            <div class="serch">
            <!-- <form method="get" action="" class="serch"> -->
                <!-- {!! csrf_field() !!} -->
                <!-- <input type="hidden" name="pageId" value="{{request()->route('pageId')?request()->route('pageId'):'1'}}"> -->
                <div class="publicFlex" data-target="selectDiv">
                    <div class="select">
                        <select name='selectValue'>
                            <option value="0" @if($selectValue==0) selected @endif>顯示全部</option>
                            <option value="1" @if($selectValue==1) selected @endif>訂單編號</option>
                            <option value="2" @if($selectValue==2) selected @endif>綠界編號</option>
                            <option value="3" @if($selectValue==3) selected @endif>購買項目</option>
                            <option value="4" @if($selectValue==4) selected @endif>會員姓名</option>
                        </select>
                    </div>
                    <div class="inputDiv">

                    </div>
                    <div class="button">
                        <a class="publicBtn2">搜尋</a>
                    </div>
                </div>
            <!-- </form> -->
            </div>
        </div>
        <div class="content">
            <ul>
                <li>
                    <div class='idDiv'>
                        <p>#</p>
                    </div>
                    <div class='updatedDiv'>
                        <p>繳費日期</p>
                    </div>
                    <div class='paymentidDiv'>
                        <p>訂單編號</p>
                    </div>
                    <div class='tradeNoDiv'>
                        <p>綠界編號</p>
                    </div>
                    <div class='paymentTypeDiv'>
                        <p>購買方式</p>
                    </div>
                    <!-- <div class='accountDiv'>
                        <p>會員帳號</p>
                    </div> -->
                    <div class='itemNameDiv'>
                        <p>購買項目</p>
                    </div>
                    <div class='priceDiv'>
                        <p>購買金額</p>
                    </div>
                    <div class='nameDiv'>
                        <p>會員姓名</p>
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
                    <div class='paymentidDiv'>
                        <p>{{ $data->merchant_no}}</p>
                    </div>
                    <div class='tradeNoDiv'>
                        <p>{{ $data->trade_no}}</p>
                    </div>
                    <div class='paymentTypeDiv'>
                        <p>{{ $data->payment_type}}</p>
                    </div>
                    <div class='itemNameDiv'>
                        <p>{{ $data->itemName }}</p>
                    </div>
                    <div class='priceDiv'>
                        <p>{{ $data->price }}</p>
                    </div>
                    <div class='nameDiv'>
                        <p>{{ $data->name }}</p>
                    </div>
                    <!-- <div class="modify">
                        <a href="{{ URL::asset('barecord_update').'/'.$data->id.'/'.$pageStare }}">
                            <svg viewBox="0 0 24 24">
                                <path d="M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z"></path>
                            </svg>
                        </a>
                        @if($pageStare!=1 || $pageStare==1 && count($datas)!=1)   
                        <a href="javascript:tableDelet('{{ URL::asset('barecord_delete').'/'.$data->id.'/'.$pageStare }}')">
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
        @if($pageTotle>1)
        <div class="page">
            <ul>
                <li>
                    <a class="pre" href="{{  URL::asset($active).'/'.($pageStare>1?$pageStare-1:1).'/'.$selectValue.'/'.$serchValue }}"></a>
                </li>
                <li>
                    <a>{{ $pageStare }} / {{ $pageTotle }}</a>
                </li>
                <li>
                    <a class="next" href="{{ URL::asset($active).'/'.($pageStare<$pageTotle?$pageStare+1:$pageTotle).'/'.$selectValue.'/'.$serchValue }}"></a>
                </li>
            </ul>
        </div>
        @endif
    </div> 
@endsection