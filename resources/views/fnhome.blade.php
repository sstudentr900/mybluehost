<!-- 指定繼承 layout.master 母模板 -->
@extends('layout.fn')

<!-- 傳送資料到母模板，並指定變數為title -->
@section('title', $title)

<!-- 傳送資料到母模板，並指定變數為content -->
@section('content')
    <div>
        <div class="slide">
            <div class="content">
                <ul>
                    @foreach($datas_carousel as $data)
                    <li class="{{ $loop->index==0?'active':'' }}">
                        <img src="{{ URL::asset('img').'/'.$data->cover }}" alt="">
                        <p>{{ $data->title }}</p>
                    </li>
                    @endforeach
                    <!-- <li class="active">
                        <img src="./img/fnslide01.jpg" alt="">
                        <p>2018臺灣財務金融學會年會(國立政治大學)</p>
                    </li>
                    <li>
                        <img src="./img/fnslide01.jpg" alt="">
                        <p>2018臺灣財務金融學會年會(國立政治大學) - Keynote Speaker Prof. Louren H. Cohen</p>
                    </li>
                    <li>
                        <img src="./img/fnslide01.jpg" alt="">
                        <p>2018臺灣財務金融學會年會(國立政治大學)</p>
                    </li> -->
                
                </ul>
                <div class="pre"></div>
                <div class="next"></div>
            </div>
            <ul class="dot">
                <!-- <li class="active"></li>
                <li></li>
                <li></li> -->
            </ul>
        </div>
        <div class="publicFlex">
            <div class="new">
                <div class="title">
                    <h3>最新消息</h3>
                    <!-- <div class="control">
                        <button class="{{ $newsInfo['pageStare']>1 ? 'active' : '' }}">上一頁</button>
                        <button class="{{ $newsInfo['pageStare']<$newsInfo['pageTotle'] ? 'active' : '' }}">下一頁</button>
                    </div> -->
                </div>
                <ul>
                    @foreach($datas_news as $data)
                    <li>
                        <!-- <a href="{{ url::asset('fnnews').'/'.$data->id}}">{{ $data->title }}</a> -->
                        <a href="{{ route('fnnews', ['id' => $data->id]) }}">{{ $data->title }}</a>
                        <p><span>{{ str_replace('-','/',explode(' ',$data->updated_at)[0]) }}</span></p>
                    </li>
                    @endforeach
                    <!-- <li>
                        <a href="fnnew.html">2021臺灣財務金融專題研討會－公司理財</a>
                        <p><span>2021/12/03</span></p>
                    </li>
                    <li>
                        <a href="fnnew.html">2021 KSA-TFA Joint Conference</a>
                        <p><span>2021/12/03</span></p>
                    </li>
                    <li>
                        <a href="fnnew.html">[徵稿]Interdisciplinary Corporate Finance Studies</a>
                        <p><span>2021/12/03</span></p>
                    </li>
                    <li>
                        <a href="fnnew.html">[徵稿]Behavioral Finance</a>
                        <p><span>2021/12/03</span></p>
                    </li>
                    <li>
                        <a href="fnnew.html">[徵稿]Asset Pricing and Factor Investing</a>
                        <p><span>2021/12/03</span></p>
                    </li> -->
                </ul>
            </div>
            <div class="bulletin">
                <div class="title">
                    <h3>活動公告 </h3>
                    <!-- <div class="control">
                        <button class="{{ $bulletinInfo['pageStare']>1 ? 'active' : '' }}">上一頁</button>
                        <button class="{{ $bulletinInfo['pageStare']<$bulletinInfo['pageTotle'] ? 'active' : '' }}">下一頁</button>
                    </div> -->
                </div>
                <ul>
                    @foreach($datas_bulletin as $data)
                    <li>
                        <!-- <a href="{{ url::asset('fnbulletin').'/'.$data->id}}">{{ $data->title }}</a> -->
                        <a href="{{ route('fnbulletin', ['id' => $data->id]) }}">{{ $data->title }}</a>
                        <p><span>{{ str_replace('-','/',explode(' ',$data->updated_at)[0]) }}</span></p>
                    </li>
                    @endforeach
                    <!-- <li>
                        <a href="fnbulletin.html">2021臺灣財務金融專題研討會－公司理財</a>
                        <p><span>2021/12/03</span></p>
                    </li>
                    <li>
                        <a href="fnbulletin.html">2021 KSA-TFA Joint Conference</a>
                        <p><span>2021/12/03</span></p>
                    </li>
                    <li>
                        <a href="fnbulletin.html">[徵稿]Interdisciplinary Corporate Finance Studies</a>
                        <p><span>2021/12/03</span></p>
                    </li>
                    <li>
                        <a href="fnbulletin.html">[徵稿]Behavioral Finance</a>
                        <p><span>2021/12/03</span></p>
                    </li>
                    <li>
                        <a href="fnbulletin.html">[徵稿]Asset Pricing and Factor Investing</a>
                        <p><span>2021/12/03</span></p>
                    </li> -->
                </ul>
            </div>
            <div class="fbbulletin">
              <img src="{{ URL::asset('img').'/baslideView1669961800.jpg' }}" alt="">
            </div>
        </div>
        <div class="advertise">
            <ul>
                <li><a href="https://european-finance.org/r/home" target="_black"><img src="./img/fnadvertise01.jpg" alt=""></a></li>
                <li><a href="https://www.efmaefm.org/index.php" target="_black"><img src="./img/fnadvertise02.jpg" alt=""></a></li>
                <li><a href="http://www.tabf.org.tw/" target="_black"><img src="./img/fnadvertise03.jpg" alt=""></a></li>
                <li><a href="https://www.fma.org/" target="_black"><img src="./img/fnadvertise04.jpg" alt=""></a></li>
                <li><a href="https://www.ssrn.com/index.cfm/en/" target="_black"><img src="./img/fnadvertise05.jpg" alt=""></a></li>
                <li><a href="https://www.taifex.com.tw/cht/index" target="_black"><img src="./img/fnadvertise06.jpg" alt=""></a></li>
                <li><a href="https://www.tdcc.com.tw/portal/zh/" target="_black"><img src="./img/fnadvertise07.jpg" alt=""></a></li>
                <li><a href="https://www.tpex.org.tw/web/?l=zh-tw" target="_black"><img src="./img/fnadvertise08.jpg" alt=""></a></li>
                <li><a href="https://www.twse.com.tw/zh/" target="_black"><img src="./img/fnadvertise09.jpg" alt=""></a></li>
                <li><a href="http://www.afajof.org/view/index.html" target="_black"><img src="./img/fnadvertise10.jpg" alt=""></a></li>
            </ul>
        </div>
    </div>
@endsection