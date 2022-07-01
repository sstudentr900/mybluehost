<!-- 指定繼承 layout.master 母模板 -->
@extends('layout.fn')

<!-- 傳送資料到母模板，並指定變數為title -->
@section('title', $title)

<!-- 傳送資料到母模板，並指定變數為content -->
@section('content')
    <script>
        // window.history.forward(2);
        // window.location.replace({url:'http://localhost:3000/fnmember'});
        // history.replaceState({}, "page 2", "http://localhost:3000/fnmember");
        // window.addEventListener("popstate", function (event) {
        //     console.log(event.state);
        // });
        // history.pushState({ name: "max" }, null); // 不指定URL，所以網址不會變
        // history.pushState({ name: "tom" }, null); // 不指定URL，所以網址不會變
        // window.history.deleteAll();
        window.location= '/fnmember';
    </script>
@endsection