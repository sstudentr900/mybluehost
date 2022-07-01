<!-- 指定繼承 layout.master 母模板 -->
@extends('layout.fn')

<!-- 傳送資料到母模板，並指定變數為title -->
@section('title', $title)

<!-- 傳送資料到母模板，並指定變數為content -->
@section('content')
    <div class="publicTitle">
        <h2>繳費紀錄</h2>
    </div>
    <div class="publicCustomTable">
        <table>
            <tbody>
                <tr>
                    <td>訂單編號</td>
                    <td>購買時間</td>
                    <td>購買方式</td>
                    <td>購買方案</td>
                    <td>購買金額</td>
                </tr>
                @if(count($datas) > 0)
                    @foreach($datas as $data)
                        <tr>
                            <td>{{$data->merchant_no}}</td>
                            <td>{{$data->updated_at}}</td>
                            <td>{{$data->payment_type}}</td>
                            <td>{{$data->name}}</td>
                            <td>{{$data->cost}}</td>
                        </tr>
                    @endforeach
                @else
                    <tr>
                        <td colspan="5" style="padding:80px 0;">沒有紀錄</td>
                    </tr>
                @endif
             
                <!-- <tr>
                    <td>00002</td>
                    <td>2021/08/02</td>
                    <td>王大明</td>
                    <td>個人永久會員  20000</td>
                </tr> -->
            </tbody>
        </table>
    </div>
@endsection