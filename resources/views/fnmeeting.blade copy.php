<!-- 指定繼承 layout.master 母模板 -->
@extends('layout.fn')

<!-- 傳送資料到母模板，並指定變數為title -->
@section('title', $title)

<!-- 傳送資料到母模板，並指定變數為content -->
@section('content')
    <div class="publicFlex">
        <div class="left">
            <div class="publicTitle">
                <h2>{{ $title }}</h2>
            </div>
            <div class="publicCustomTable">
                <div class="moduleItemTitle"><a href="{{ URL::asset( $active.'_item' ).'/'.$datas2->id }}">{{ $datas2->title }}</a></div>
                {!! $datas2->tinymce !!}
                @if(isset($appendixs))
                    <div class="appendix">
                        <b>附件下載:</b>
                        <div class="content">
                            @foreach ($appendixs as $appendix)
                                <a href="{{ Storage::url(str_replace('public/','',$appendix->src)) }}" download="{{$appendix->name}}">{{$appendix->name}}</a>
                            @endforeach
                        </div>
                    </div>
                @endif
                <!-- <img src="./img/fnmeeting.jpg" alt="">
                <a href="http://www.finance.org.tw/wp-content/uploads/2021/11/2021-TFA-CORPORATE-FINANCE.pdf">議程</a>
                <br>
                <p>臺灣財務金融學會 (TFA) 暨國立高雄科技大學 (第一校區) 管理學院財務管理系於2021年12 月03日 (星期五) 共同舉辦「2021臺灣財務金融專題研討會－公司理財」。本次研討會主題以「公司理財」為主，會議徵稿主題包含 (但不限於下列各領域)︰公司投資決策、公司融資決策、股利政策、企業併購、社會企業責任、公司治理、經理人薪酬、經理人行為財務、公司理財模型、企業研發與創新、金融機構、財務會計、財務危機、盈餘管理及其他相關議題等。</p>
                <p>為豐富學術研究量能，大會特邀請Prof. C.S. Agnes Cheng (Chair Professor, University of Oklahoma)與Prof. Hung-Gay Fung  (Curators’ Distinguished Professor of Finance, University of Missouri-St. Louis) 進行兩場專題演講，亦誠摯邀請亞太區及國內的傑出研究學者進行投稿、論文發表與評論。有別於學會年會及一般中大型研討會，本研討會特別強調研究主題與論文內容的專精質量，因此將邀集各方學術賢達及同好對於研討論文進行深度研討交流，以期提升「公司理財」議題領域的研究互動，建立學術合作網絡，精進國內財務金融的研究品質，進而提升論文刊登於國際頂級期刊的機會。本研討會預計收錄3-5篇學術文章，並安排入選論文充分發表時間與邀請評論人深度講評，以期確實提升入選論文質量。</p>
                <p>本次研討會將開放國立高雄科技大學師生及臺灣財務金融學會會員免費參加，尚未加入會員者，可先上臺灣財務金融學會網站申請入會並繳交入會費及年費、或當日現場報名繳費，即可參加本次研討會。</p> -->
            </div>
        </div>
        <div class="right">
            <ul class="items">
                @foreach($datas as $data)
                <li>
                    <div class="publicTitle">
                        <a href="{{ URL::asset( $active.'_item' ).'/'.$data->id }}">{{ $data->title }}</a>
                    </div>
                    <p>{{ $data->short }}</p>
                </li>
                <!-- <li>
                    <div class="publicTitle">
                        <a href="/index.php/研討會/item/171-2021年會">2021年會</a>
                    </div>
                    <p>021臺灣財務金融學會年會暨國際研討會 大會網頁2021年9月24-25日 臺灣、桃園 國立中央大學財務金融學系與臺灣財務金融學會於2021年9月24日(五)及25日(六)舉辦「2021年臺灣財務金融學會年會暨國際研討會」。 本次研討會的主題為「後疫情年代財務研究的範型轉移 (Post-Pandemic Paradigm Shifts in Financial… </p>
                </li>
                <li>
                    <div class="publicTitle">
                        <a href="/index.php/研討會/item/192-2021-臺灣財務金融專題研討會—資產定價">2021 臺灣財務金融專題研討會—資產定價</a>
                    </div>
                    <p>徵求論文2021 臺灣財務金融專題研討會—資產定價 議程 靜宜大學財務金融學系暨臺灣財務金融學會將於 2021 年 3 月 26 日…</p>
                </li>
                <li>
                    <div class="publicTitle">
                        <a href="/index.php/研討會/item/184-2020年會">2020年會</a>
                    </div>
                    <p>2020臺灣財務金融學會年會暨國際研討會 大會網頁2020年9月25-26日&nbsp;臺灣、埔里 2020年臺灣財務金融學會年會暨國際研討會於2020年9月25日(五)和9月26日(六)，由國立暨南國際大學財務金融學系與臺灣財務金融學會共同舉辦。今年度的主題為「財務金融研究之新議題與趨勢」。 臺灣財務金融學會年會，長久以來在國內學術界扮演舉足輕重的角色，為財務金融學者提供發表論文及討論研究的溝通平台。此外，年會也搭起集合產官學者之智慧，深入探討重要財經議題的橋樑。2020年臺灣財務金融學會年會暨國際研討會將針對「財務金融研究之新議題與趨勢」為主題做深入的探討。本次研討會邀請到Professor Ran Duchin (University of Washington,…</p>
                </li> -->
                @endforeach
            </ul>
            <div class="publicPage">
                <ul>
                    <li class="first"><a href="{{  URL::asset($active.'/1') }}">最先</a></li>
                    <li class="pre"><a href="{{  URL::asset($active).'/'.($pageStare>1?$pageStare-1:1) }}">上一篇</a></li>
                    <!-- <li class="page active"><a href="#">1</a></li>
                    <li class="page"><a href="#">2</a></li>
                    <li class="page"><a href="#">3</a></li> -->
                    <li class="next"><a href="{{ URL::asset($active).'/'.($pageStare<$pageTotle?$pageStare+1:$pageTotle) }}">下一篇</a></li>
                    <li class="last"><a href="{{  URL::asset($active).'/'.$pageTotle }}">最後</a></li>
                </ul>
                <p>第 {{ $pageStare }} 頁，共 {{ $pageTotle }} 頁</p>
            </div>
        </div>
    </div>
@endsection