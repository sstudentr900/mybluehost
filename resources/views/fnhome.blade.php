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
                <div class="fb-page fb_iframe_widget" data-href="https://www.facebook.com/finance.org.tw/" data-tabs="timeline,events,messages" data-width="370" data-height="450" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" fb-xfbml-state="rendered" fb-iframe-plugin-query="adapt_container_width=true&amp;app_id=1059462880837642&amp;container_width=340&amp;height=450&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Ffinance.org.tw%2F&amp;locale=zh_TW&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline%2Cevents%2Cmessages&amp;width=370"><span style="vertical-align: bottom; width: 370px; height: 450px;"><iframe name="f8666def61a328" width="370px" height="450px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v12.0/plugins/page.php?adapt_container_width=true&amp;app_id=1059462880837642&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df7f56b4e94d48c%26domain%3D10.1.6.249%26is_canvas%3Dfalse%26origin%3Dfile%253A%252F%252F%252Ff3823c8dff47094%26relation%3Dparent.parent&amp;container_width=340&amp;height=450&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Ffinance.org.tw%2F&amp;locale=zh_TW&amp;sdk=joey&amp;show_facepile=true&amp;small_header=false&amp;tabs=timeline%2Cevents%2Cmessages&amp;width=370" style="border: none; visibility: visible; width: 370px; height: 450px;" class=""></iframe></span></div>
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