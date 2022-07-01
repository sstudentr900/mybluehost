<!-- 指定繼承 layout.master 母模板 -->
@extends('layout.fn')

<!-- 傳送資料到母模板，並指定變數為title -->
@section('title', $title)

<!-- 傳送資料到母模板，並指定變數為content -->
@section('content')
    <div class="publicTitle">
        <h2>{{ $datas->title }}</h2>
    </div>
    <div class="publicCustomTable">
        <!-- <p>財務金融學刊為「臺灣財務金融學會」所出版的財金專業學術期刊，目前每年出版四期，分別在三月、六月、九月及十二月出刊。</p>
        <p>財務金融學刊 於1993年創刊，為「臺灣財務金融學會」所出版的財金專業學術期刊，原名《中國財務學刊》，本學刊自2001年12月第9卷第3期起，改名為《財務金融學刊》，自2006年4月第14卷第1期起由1年3期改為季刊。同時，本期刊自2001年起列入「臺灣社會科學引文索引資料庫」(TSSCI)，並於2012年獲准收錄於EconLit資料庫。</p>
        <p>財務金融學刊之宗旨在於鼓勵財務金融方面之學術性研究，以提升財務金融學術研究之水準，同時基於學術研究無國界之理念，鼓勵國外學者來投稿，促進該學刊的國際化。</p>
        <p>該學刊刊之編輯委員會除設有總編輯與三位副總編輯外，另有編輯顧問及編輯委員共三十八位，委員由臺灣財務金融學會理監事會通過後聘任。目前的成員中有二十二位國外學者，以及來自國內九所大學之十四位學者，在財金領域中具代表性。</p>
        <br>
        <br>
        <strong>《財務金融學刊》<a href="http://www.jfs.org.tw/index.php/jfs/information/authors" target="_blank" rel="noopener noreferrer">線上投審稿系統</a></strong>
        <hr>
        <p>於2011年2月1日正式推出<a href="http://www.jfs.org.tw/" target="_blank" rel="noopener noreferrer">財務金融學刊網站暨線上投審稿系統</a></p>
        <p>上網投稿，加強與國際財金學術界的交流。</p>
        <p>網站全年無休，隨時快速處理您的稿件。</p>
        <table>
            <tbody>
            <tr>
            <td>入會費</td>
            <td>常年會費</td>
            <td>永久會費</td>
            <td>合計</td>
            <td>&nbsp;</td>
            </tr>
            <tr>
            <td>學生會員(得免費參加學會活動，無學刊、無投票權)</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            <td>—</td>
            </tr>
            <tr>
            <td>個人會員</td>
            <td>1,000</td>
            <td>2,000</td>
            <td>—</td>
            <td>3,000</td>
            </tr>
            <tr>
            <td>個人永久會員</td>
            <td>1,000</td>
            <td>—</td>
            <td>20,000</td>
            <td>21,000</td>
            </tr>
            <tr>
            <td>團體會員</td>
            <td>5,000</td>
            <td>20,000</td>
            <td>—</td>
            <td>25,000</td>
            </tr>
            <tr>
            <td>團體永久會員</td>
            <td>5,000</td>
            <td>—</td>
            <td>200,000</td>
            <td>205,000</td>
            </tr>
            </tbody>
        </table>
        <strong>《財務金融學刊》<a href="http://www.jfs.org.tw/index.php/jfs/information/authors" target="_blank" rel="noopener noreferrer">線上投審稿系統</a></strong>
        <hr>
        <p>於2011年2月1日正式推出<a href="http://www.jfs.org.tw/" target="_blank" rel="noopener noreferrer">財務金融學刊網站暨線上投審稿系統</a></p>
        <p>上網投稿，加強與國際財金學術界的交流。</p>
        <p>網站全年無休，隨時快速處理您的稿件。</p>
        <strong>秘書處</strong>
        <table>
            <tbody>
                <tr>
                <td>
                <div>職位</div>
                </td>
                <td>
                <div>姓名</div>
                </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                <td>秘書長</td>
                <td>何耕宇</td>
                </tr>
                <tr>
                <td>副秘書長</td>
                <td>陳嬿如</td>
                </tr>
                <tr>
                <td>副秘書長</td>
                <td>柯冠成</td>
                </tr>
            </tbody>
        </table> -->
        {!! $datas->tinymce !!}
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
    </div>
@endsection