<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controllers;
//自訂DB
use DB;
use App\Models\Carousel AS data_bacarousel;
use App\Models\bulletin AS data_babulletin;
use App\Models\News AS data_banews;
use App\Models\Member AS data_bamember;
use App\Models\Record AS data_barecord;
use App\Models\Dues AS data_badues;
use App\Models\Manager AS data_bamanager;
use App\Models\Meeting AS data_bameeting;
use App\Models\Meeting_year AS data_bameeting_year;
use App\Models\Introduction AS data_introduction;
use App\Models\Appendix AS data_appendix;
//驗證資料
use Validator;
//接收資料
use Illuminate\Http\Request;
//加密
use Illuminate\Support\Facades\Hash;
//自訂
use App\Customfn\Customfn;
//寄信
use Mail; 
//URL
use Illuminate\Support\Facades\URL;
//綠界
use Ecpay\Sdk\Factories\Factory;
use Ecpay\Sdk\Services\UrlService;
use Ecpay\Sdk\Exceptions\RtnException;
use Ecpay\Sdk\Response\VerifiedArrayResponse;
//test
// use App\Http\Requests\Test1;
use App\Test1;
use App\Test2;
class FnController extends Controller
{
    public $binding = [
        'title' => '',
    ];
    function __construct(){
        $this->pathFn();
    }
    public function customSearch($count,$end,$p){
        $pageTotle = ceil($count / $end);
        $pageP = $p;
        if($p>$pageTotle){
            $pageP = $pageTotle;
        }else if($p<1){
            $pageP = 1;
        }
        $start = ($pageP - 1) * $end;
        $this->binding['pageStare'] = $pageP;
        $this->binding['pageTotle'] = $pageTotle;
        $this->binding['startValue'] = $start;
        $this->binding['endValue'] = $end;
    }
    public function errorFn($url,$message){
        return redirect($url)
        ->withErrors($message)
        ->withInput();
    }
    public function pathFn(){
        $this->binding['active'] = explode("/",Request()->path())[0];
    }
    //fnhome
    public function fnhome(){
        $end = 5; //顯示數量
        $carousel = data_bacarousel::where('release','y')->orderBy('sort','desc')->get();
        $bulletinInfo = Customfn::customSearch(data_babulletin::where('release','y')->count(),$end,1);
        $bulletin = data_babulletin::where('release','y')->orderBy('sort','desc')->limit($end)->get();
        $newsInfo = Customfn::customSearch(data_banews::where('release','y')->count(),$end,1);
        $news = data_banews::where('release','y')->orderBy('sort','desc')->limit($end)->get();
        if(!count($carousel) || !count($bulletin) || !count($news)){
            abort(404);
        }
        $this->binding['datas_carousel'] =  $carousel;
        $this->binding['bulletinInfo'] =  $bulletinInfo;
        $this->binding['datas_bulletin'] =  $bulletin;
        $this->binding['datas_news'] =  $news;
        $this->binding['newsInfo'] =  $newsInfo;
        return view('fnhome', $this->binding);
    }
    //最新消息
    public function fnhomeNew($p=1){
        $end = 5; //顯示數量
        $resources = Customfn::customSearch(data_banews::where('release','y')->count(),$end,$p);
        $datas = data_banews::select('id','title','updated_at')->where('release','y')->orderBy('sort','desc')->offset( $resources['startValue'] )->limit( $resources['endValue'] )->get();
        return response()->json(['data'=>$datas,'pageNow'=>$resources['pageStare'],'pageTotle'=>$resources['pageTotle']]);
    }
    //活動公告
    public function fnhomeBulletin($p=1){
        $end = 5; //顯示數量
        $resources = Customfn::customSearch(data_babulletin::where('release','y')->count(),$end,$p);
        $datas = data_babulletin::select('id','title','updated_at')->where('release','y')->orderBy('sort','desc')->offset( $resources['startValue'] )->limit( $resources['endValue'] )->get();
        return response()->json(['data'=>$datas,'pageNow'=>$resources['pageStare'],'pageTotle'=>$resources['pageTotle']]);
    }
    //fnnews
    public function fnnews($p){
        $datas = data_banews::find($p);
        if(!$datas){
            abort(404);
        }
        $this->binding['datas'] =  $datas;
        return view('fnintroduction', $this->binding);
    }
    //fnbulletin
    public function fnbulletin($p){
        $datas = data_babulletin::find($p);
        if(!$datas){
            abort(404);
        }
        $this->binding['datas'] =  $datas;
        return view('fnintroduction', $this->binding);
    }
    //fnmeeting
    public function fnmeeting($p=1){
        $end = 3; //顯示數量
        $datas2 = data_bameeting::orderBy('created_at', 'desc')->first();
        $datas2ID = $datas2->id;
        $this->customSearch(data_bameeting::where('id','!=',$datas2ID)->count(),$end,$p);
        $datas = data_bameeting::where('id','!=',$datas2ID)->offset( $this->binding['startValue'] )->limit( $this->binding['endValue'] )->orderBy('created_at','desc')->get();
        if(!$datas2 || !$datas){
            abort(404);
        }
         //get appendix
         if(data_appendix::where('meeting_id', $datas2ID)->count()){
            $this->binding['appendixs'] = data_appendix::select('id','src','name')->where('meeting_id', $datas2ID)->orderBy('id','desc')->get();
        }
        $this->binding['title'] = '近期專題研討會';
        $this->binding['datas'] =  $datas;
        $this->binding['datas2'] =  $datas2;
        return view('fnmeeting', $this->binding);
    }
    //fnmeeting_item
    public function fnmeeting_item($p){
        $datas = data_bameeting::find($p);
        if(!$datas){
            abort(404);
        }
        //get appendix
        if(data_appendix::where('meeting_id', $p)->count()){
            $this->binding['appendixs'] = data_appendix::select('id','src','name')->where('meeting_id', $p)->orderBy('id','desc')->get();
        }
      
        $this->binding['datas'] =  $datas;
        return view('fnintroduction', $this->binding);
    }
    //fnmeeting_year
    public function fnmeeting_year($p=1){
        $end = 3; //顯示數量
        $datas2 = data_bameeting_year::orderBy('created_at', 'desc')->first();
        $datas2ID = $datas2->id;
        $this->customSearch(data_bameeting_year::where('id','!=',$datas2ID)->count(),$end,$p);
        $datas = data_bameeting_year::where('id','!=',$datas2ID)->offset( $this->binding['startValue'] )->limit( $this->binding['endValue'] )->orderBy('created_at','desc')->get();
        if(! $datas2 || !$datas){
            abort(404);
        }
        //get appendix
        if(data_appendix::where('meeting_id', $datas2ID)->count()){
            $this->binding['appendixs'] = data_appendix::select('id','src','name')->where('meeting_id', $datas2ID)->orderBy('id','desc')->get();
        }
        $this->binding['title'] = '近期年會';
        $this->binding['datas'] =  $datas;
        $this->binding['datas2'] =  $datas2;
        return view('fnmeeting', $this->binding);
    }
    //fnmeeting_year_item
    public function fnmeeting_year_item($p){
        $datas = data_bameeting_year::find($p);
        if(!$datas){
            abort(404);
        }
        //get appendix
        if(data_appendix::where('meeting_id', $p)->count()){
            $this->binding['appendixs'] = data_appendix::select('id','src','name')->where('meeting_id', $p)->orderBy('id','desc')->get();
        }
        $this->binding['datas'] =  $datas;
        return view('fnintroduction', $this->binding);
    }
    //fnintroduction
    public function fnintroduction(){
        $datas = data_introduction::find(1);
        if(!$datas){
            abort(404);
        }
        $this->binding['datas'] = $datas;
        return view('fnintroduction', $this->binding);
    }
    //fnacademic
    public function fnacademic(){
        $datas = data_introduction::find(2);
        if(!$datas){
            abort(404);
        }
        $this->binding['datas'] = $datas;
        return view('fnintroduction', $this->binding);
    }
    //fnjournal 字問題
    public function fnjournal(){
        $datas = data_introduction::find(3);
        if(!$datas){
            abort(404);
        }
        $this->binding['datas'] = $datas;
        return view('fnintroduction', $this->binding);
    }
    //fnlist
    public function fnlist(){
        $datas = data_introduction::find(4);
        if(!$datas){
            abort(404);
        }
        $this->binding['datas'] = $datas;
        return view('fnintroduction', $this->binding);
    }
    //fnjoin
    public function fnjoin(){
        $datas = data_introduction::find(5);
        if(!$datas){
            abort(404);
        }
        $this->binding['datas'] = $datas;
        return view('fnintroduction', $this->binding);
    }
   
    //會員登入
    public function fnmember(Request $request){
        //清除Session
        session()->forget('fnuser_id');
       if(session('fnuser_id')){
            return redirect('fnmember_information');
       }else{
            return view('fnmember', $this->binding);
       }
      
    }
    public function fnmember_post(){
        //清除Session
        session()->forget('fnuser_id');

        //接收資料
        $input = request()->all();

        //驗證規則
        $rules = [
            'account' => [
                'required'
            ],
            'password' => [
                'required'
            ],
        ];

        //驗證資料
        $validator = Validator::make($input, $rules);
        if($validator->fails())
        {
            //資料驗證錯誤
            return $this->errorFn('fnmember',$validator);
        }


        //驗證帳號
        $user = data_bamember::where('account', $input['account'])->first();
        if(!$user || $user && !Hash::check($input['password'], $user->password))
        {
            return $this->errorFn('fnmember',[
                'account' => [
                    '帳號或密碼錯誤',
                ],
                'password' => [
                    '帳號或密碼錯誤',
                ],
            ]);
        }
        if($user['release']!='y'){
            return redirect('fnmember')->with('status', '帳號不能使用請聯絡客服，謝謝!!');
        }

         //save
         $data = data_bamember::find($user['id']);
         $data->token = '';
         $data->save();

        //session紀錄會員編號
        session(['fnuser_id' => $user->id]);
        return redirect('fnmember_information');
    }
    //會員註冊 fnregister
    public function fnregister(){
        //清除Session
        session()->forget('fnuser_id');
        $this->binding['gender'] = 'm';
        return view('fnregister', $this->binding);
    }
    public function fnregister_post(Request $request){
        //清除Session
        session()->forget('fnuser_id');

        //接收資料
        $input = request()->all();
    

        //驗證規則
        $rules = [
            'cover' => [
                'required',
            ],
            'account' => [
                'required',
                'email',
                'max:50',
            ],
            'password' => [
                'required',
                'max:20',
            ],
            'name' => [
                'required',
                'max:20',
            ],
            'url' => [
                // 'required',
                'max:255',
            ],
            'gender' => [
                'required',
                'in:m,w'
            ],
            'describe' => [
                // 'required',
                'max:255',
            ],
        ];

        //驗證資料
        $validator = Validator::make($input, $rules);
        if($validator->fails())
        {
            //資料驗證錯誤
            return redirect('fnregister')->withErrors($validator)->withInput();
        }

        //驗證帳號
        $user = data_bamember::where('account', $input['account'])->first();
        if($user)
        {
            return $this->errorFn('fnregister',[
                'account' => [
                    '帳號重複',
                ]
            ]);
        }
        //href
        $token = base64_encode($input['account']);
        $href = URL::asset('fnregister_notice').'/'.$token;


        //  寄信
        Mail::send('email_register', ['name' => $input['name'],'href' => $href ], function($mail) use ($input){
            $mail->to($input['account']);
            // $mail->to('sstudentr700@gmail.com');
            $mail->subject('台灣財務金融學會【註冊通知】!!');
        });

       
        // data save
        $data = new data_bamember;
        $data->cover =  Customfn::imgAdd($input['cover'],'bamember');
        $data->account = $input['account'];
        $data->password = Hash::make($input['password']);
        $data->name = $input['name'];
        $data->url = $input['url'];
        $data->release = 'n';
        $data->gender = $input['gender'];
        $data->describe = $input['describe'];
        $data->token = $token;
        $data->save();

        return redirect('fnmember')->with('status', '註冊碼通知已寄出請收信!!');
    }
    //會員註冊通知
    public function fnregister_notice($token){
        //清除Session
        session()->forget('fnuser_id');

        //查找
        $user = data_bamember::where('token', $token)->first();
        if(!$user)
        {
            return redirect('fnmember')->with('status', '錯誤，請從新操作或聯絡客服!!');
        }

        //save
        $user->release = 'y';
        $user->token = '';
        $user->save();

        return redirect('fnmember')->with('status', '註冊成功請重新登入!!');
    }
    //忘記密碼(寄信)
    public function fnpassword(){
        return view('fnpassword', $this->binding);
    }
    public function fnpassword_post(){
        //接收資料
        $input = request()->all();
    
        //驗證規則
        $rules = [
            'account' => [
                'required',
                'email',
                'max:50',
            ],
        ];

        //驗證資料
        $validator = Validator::make($input, $rules);
        if($validator->fails())
        {
            return redirect('fnpassword')->withErrors($validator)->withInput();
        }

        //驗證帳號
        $user = data_bamember::where('account', $input['account'])->first();
        if(!$user)
        {
            return $this->errorFn('fnpassword',[
                'account' => [
                    '帳號錯誤',
                ],
            ]);
        }

        //href
        $token = base64_encode($user['account'].'_'.$user['id']);
        $href = URL::asset('fnpassword_change').'/'.$token;
        
        //data save
        $data = data_bamember::find($user['id']);
        $data->token = $token;
        $data->save();

        //寄信
        Mail::send('email_password', ['name' => $user['name'],'href' => $href ], function($mail) use ($user){
            $mail->to($user['account']);
            $mail->subject('台灣財務金融學會【修改密碼通知】!!');
        });
       

        return redirect('fnmember')->with('status', '修改密碼通知已寄出請收信!!');
    }
    //忘記密碼(更改密碼)
    public function fnpassword_change($token){
        //查找
        $user = data_bamember::where('token', $token)->first();
        if(!$user)
        {
            return redirect('fnmember')->with('status', '錯誤，請從新操作或聯絡客服!!');
        }
        $this->binding['token'] = $token;
        return view('fnpassword_change', $this->binding);
    }
    public function fnpassword_change_post(Request $request){
        $input = request()->all();
        //驗證規則
        $rules = [
            'password' => [
                'required',
                'max:20',
            ],
        ];
        //驗證資料
        $validator = Validator::make($input, $rules);
        if($validator->fails())
        {
            //資料驗證錯誤
            return redirect('fnpassword_change/'.$input['token'])->withErrors($validator)->withInput();
        }
        //save
        $data = data_bamember::where('token', $input['token'])->first();
        $data->password = Hash::make($input['password']);
        $data->token = '';
        $data->save();
  
        return redirect('fnmember')->with('status', '修改密碼成功請重新登入!!');
    }
    //會員登出
    public function fnmember_out(){
        //清除Session
        session()->forget('fnuser_id');
        // Session::flush();
        // Auth::logout();
        // Cache::flush();
        //重新導向回首頁
        // return redirect('fnmember')->with(Auth::logout());
        return redirect()->to('fnmember');
        // $this->binding['active'] = 'fnmember_out';
        // return view('fnmember_out', $this->binding);
    }
    //會員資料修改
    public function fnmember_information(Request $request){
        $id = $request->session()->get('fnuser_id');
        $this->binding['datas'] = data_bamember::find($id);
        return view('fnmember_information', $this->binding);
    }
    public function fnmember_information_post(Request $request){
        //接收資料
        $input = request()->all();
    
        //驗證規則
        $rules = [
            'cover' => [
                'required',
            ],
            'account' => [
                'required',
                'email',
                'max:50',
            ],
            'name' => [
                'required',
                'max:20',
            ],
            'url' => [
                'required',
            ],
            'gender' => [
                'required',
                'in:m,w'
            ],
            'describe' => [
                'required',
                'max:255',
            ],
        ];

        //驗證資料
        $validator = Validator::make($input, $rules);
        if($validator->fails())
        {
            //資料驗證錯誤
            return redirect('fnmember_information')->withErrors($validator)->withInput();
        }
        $id = $request->session()->get('fnuser_id');
        $data = data_bamember::find($id);
        $imgUpdata = Customfn::imgUpdata($input['cover'],$data,'bamember');
        if($imgUpdata){
            $data->cover = $imgUpdata;
        }
        $data->account = $input['account'];
        $data->name = $input['name'];
        $data->url = $input['url'];
        $data->gender = $input['gender'];
        $data->describe = $input['describe'];
        $data->save();
        //回到更新頁
        return redirect('fnmember_information');
    }
    //會員密碼修改
    public function fnmember_password(){
        // $this->binding['active'] = 'fnmember_password';
        // $this->binding['login'] = $this->getUserId();
        return view('fnmember_password', $this->binding);
    }
    public function fnmember_password_post(Request $request){
        $input = request()->all();
        //驗證規則
        $rules = [
            'password' => [
                'required',
                'max:20',
            ],
        ];
        //驗證資料
        $validator = Validator::make($input, $rules);
        if($validator->fails())
        {
            //資料驗證錯誤
            return redirect('fnmember_password')->withErrors($validator)->withInput();
        }
        $id = session()->get('fnuser_id');
        $data = data_bamember::find($id);
        $data->password = Hash::make($input['password']);
        $data->save();
        return redirect('fnmember')->with('status', '修改密碼成功請重新登入!!');
        // return redirect('fnmember_information');
    }
    //付款紀錄
    public function fnmember_record(){
        $datas = DB::table('record')
                ->where('record.memberid','=',session('fnuser_id'))
                ->where('record.state','=','1')
                ->join('member', 'record.memberid', '=', 'member.id')
                ->join('dues', 'record.duesid', '=', 'dues.id')
                ->select('record.merchant_no','record.payment_type','record.updated_at','dues.name','dues.cost')
                ->orderBy('record.created_at','desc')
                ->get();
        $this->binding['datas'] =  $datas;
        // $this->binding['active'] = 'fnmember_record';
        // $this->binding['login'] = $this->getUserId();
        return view('fnmember_record', $this->binding);
    }
    //付款
    public function fnmember_payment(){
        $datas = data_badues::where('release','=',"y")->where('delet','=',"n")->orderBy('created_at','desc')->get();
        if(!$datas){
            abort(404);
        }
        $this->binding['datas'] =  $datas;
        // $this->binding['active'] = 'fnmember_payment';
        // $this->binding['login'] = $this->getUserId();
        // print_r($datas);
        return view('fnmember_payment1', $this->binding);
    }
    public function fnmember_payment_post(Request $request){
        // print_r(config('ecpay.MerchantId'));
        // print_r(env('ECPAY_ACTIVE'));
        // exit;

        //接收資料
        $input = request()->all();
    
        //驗證規則
        $rules = [
            'id' => [
                'required',
            ],
        ];

        //驗證資料
        $validator = Validator::make($input, $rules);
        if($validator->fails())
        {
            //資料驗證錯誤
            return redirect('fnmember_payment')->withErrors($validator)->withInput();
        }

        //取得個資
        $user = data_bamember::where('id',session('fnuser_id'))->first();
        if(!$user)
        {
            session()->forget('fnuser_id');
            return redirect('fnmember')->with('status', '錯誤!!請重新操作或是聯絡客服!!');
        }
        // print_r($user['cover']);

         //取得購買項目
         $buyInfo = data_badues::where('id',$input['id'])->first();
         if(!$buyInfo)
         {
            session()->forget('fnuser_id');
            return redirect('fnmember')->with('status', '錯誤!!請重新操作或是聯絡客服!!');
         }

        //訂單編號
        $merchant_no = str_random(3).substr(time(), 6,8).str_random(3);

        //存取訂單
        $data = new data_barecord;
        $data->merchant_no = $merchant_no;//訂單編號
        // $data->trade_no = ;//綠界交易編號
        // $data->payment_type = ;//付款方式
        $data->memberid = $user['id'];//會員ID
        $data->duesid = $buyInfo['id'];//購買方案ID
        $data->state = 0;//當前狀態
        $data->save();
        $recordID = $data->id;
      
        //金流
        $action = config('ecpay.Active'); //測試
        // $action = 'https://payment.ecpay.com.tw/Cashier/AioCheckOut/V5'; //正式
        $factory = new Factory([
            'hashKey' => config('ecpay.HashKey'), //測試用Hashkey，請自行帶入ECPay提供的HashKey
            'hashIv' => config('ecpay.HashIV'), //測試用HashIV，請自行帶入ECPay提供的HashIV
        ]);
        $autoSubmitFormService = $factory->create('AutoSubmitFormWithCmvService');
        $input = [
            'MerchantID' => config('ecpay.MerchantId'), //測試用MerchantID，請自行帶入ECPay提供的MerchantID
            'MerchantTradeNo' =>  $merchant_no, //訂單編號
            'MerchantTradeDate' => date('Y/m/d H:i:s'), //交易時間
            'PaymentType' => 'aio', //
            'TotalAmount' => $buyInfo['cost'], //交易金額
            'TradeDesc' => UrlService::ecpayUrlEncode($buyInfo['name']), //交易描述
            'ItemName' => $buyInfo['name'],
            'ChoosePayment' => 'ALL', //付款方式:全功能
            'EncryptType' => 1, //CheckMacValue加密類型，請固定填入1，使用SHA256加密
            'ReturnURL' => config('ecpay.Returnurl').'/'.$recordID, //付款完成回傳網址(背後執行需要正式網址或ngrok)
            'OrderResultURL' => config('ecpay.Orderresulturl').'/'.$recordID,//付款結果回傳網址
            // 'ReturnURL' => 'http://localhost:3000/'.'fnmember_payment_result/'.$recordID, //付款完成回傳網址(背後執行需要正式網址或ngrok)
            // 'OrderResultURL' => 'http://localhost:3000/'.'fnmember_payment_ok/'.$recordID,//付款結果回傳網址
            //如果付款結果網址[OrderResultURL]參數沒有值時，會導向綠界的付款結果頁。綠界的付款結果頁可以顯示「返回商店」按鈕，條件是訂單資料的返回特店網址[ClientBackURL]要有填值。
        ];

        echo $autoSubmitFormService->generate($input, $action);
     
    }
    function ecpayCheckMacValue(array $params){
        $encType = 1;
        $hashKey = config('ecpay.HashKey'); //測試用Hashkey，請自行帶入ECPay提供的HashKey
        $hashIV = config('ecpay.HashIV'); //測試用HashIV，請自行帶入ECPay提供的HashIV

        // 0) 如果資料中有 null，必需轉成空字串
        $params = array_map('strval', $params);
        
        // 1) 如果資料中有 CheckMacValue 必需先移除
        unset($params['CheckMacValue']);

        // 2) 將鍵值由 A-Z 排序
        uksort($params, 'strcasecmp');

        // 3) 將陣列轉為 query 字串
        $paramsString = urldecode(http_build_query($params));

        // 4) 最前方加入 HashKey，最後方加入 HashIV
        $paramsString = "HashKey={$hashKey}&{$paramsString}&HashIV={$hashIV}";

        // 5) 做 URLEncode
        $paramsString = urlencode($paramsString);

        // 6) 轉為全小寫
        $paramsString = strtolower($paramsString);

        // 7) 轉換特定字元
        $paramsString = str_replace('%2d', '-', $paramsString);
        $paramsString = str_replace('%5f', '_', $paramsString);
        $paramsString = str_replace('%2e', '.', $paramsString);
        $paramsString = str_replace('%21', '!', $paramsString);
        $paramsString = str_replace('%2a', '*', $paramsString);
        $paramsString = str_replace('%28', '(', $paramsString);
        $paramsString = str_replace('%29', ')', $paramsString);

        // 8) 進行編碼
        $paramsString = $encType ? hash('sha256', $paramsString) : md5($paramsString);

        // 9) 轉為全大寫後回傳
        return strtoupper($paramsString);
    }
    public function fnmember_payment_result($id){
        $input = request()->all();
        // print_r($input['MerchantID']);//特店編號
        // print_r($input['MerchantTradeNo']);//訂單編號
        // print_r($input['PaymentDate']);//交易時間
        // print_r($input['PaymentType']);//付款方式
        // print_r($input['SimulatePaid']);//0為模擬付款1不是
        // print_r($input['TradeAmt']);//交易金額
        // print_r($input['TradeNo']);//綠界交易編號
        // print_r($input['CheckMacValue']);//檢查碼
        // print_r($input['RtnMsg']);//交易訊息Succeeded 
        // print_r($input['RtnCode']);//交易狀態成功為1
        // print_r($input['PaymentTypeChargeFee']);//通路費
        // echo '<br><br>';

        //1.綠界檢查方式(不會返回是否)
        // $factory = new Factory([
        //     'hashKey' => '5294y06JbISpM5x9',
        //     'hashIv' => 'v77hoKGq4kWxNNIS',
        // ]);
        // $checkoutResponse = $factory->create(VerifiedArrayResponse::class);
        // var_dump($checkoutResponse->get($input));
        // $input = $checkoutResponse->get($input);

        //2.綠界檢查方式
        // $hashKey = env('ECPAY_HASH_KEY'); //測試用Hashkey，請自行帶入ECPay提供的HashKey
        // $hashIv = env('ECPAY_HASH_IV'); //測試用HashIV，請自行帶入ECPay提供的HashIV
        $CheckMacValue = $this->ecpayCheckMacValue($input);//檢查CheckMacValue
        $PaymentType = $input['PaymentType'];
        switch($PaymentType){
            case 'ATM_TAISHIN':
                $payType = '台新銀行 ATM';
                break;
            case 'ATM_ESUN':
                $payType = '玉山銀行';
                break;
            case 'ATM_BOT':
                $payType = '台灣銀行 ATM';
                break;
            case 'ATM_FUBON':
                $payType = '台北富邦 ATM';
                break;
            case 'ATM_CHINATRUST':
                $payType = '中國信託 ATM';
                break;
            case 'ATM_FIRST':
                $payType = '第一銀行';
                break;
            case 'ATM_LAND':
                $payType = '土地銀行 ATM';
                break;
            case 'ATM_CATHAY':
                $payType = '國泰世華銀行 ATM';
                break;
            case 'ATM_TACHONG':
                $payType = '大眾銀行 ATM';
                break;
            case 'CVS_CVS':
                $payType = '超商代碼繳款';
                break;
            case 'CVS_OK':
                $payType = 'OK 超商代碼繳款';
                break;
            case 'CVS_FAMILY':
                $payType = '全家超商代碼繳款';
                break;
            case 'CVS_HILIFE':
                $payType = '萊爾富超商代碼繳款';
                break;
            case 'CVS_IBON':
                $payType = '7-11 ibon 代碼繳款';
                break;
            case 'Credit_CreditCard':
                $payType = '信用卡';
                break;
        }
        $data = data_barecord::find($id);
        if($data && $input['RtnCode']=='1' && $input['CheckMacValue']==$CheckMacValue){
            //更新
            $data->trade_no = $input['TradeNo'];//綠界交易編號
            $data->payment_type =  $payType;//付款方式
            $data->state = 1;//當前狀態
            $data->save();

            return '1|OK';
        }
      
    }
    public function fnmember_payment_ok($id){
        $input = request()->all();
        $CheckMacValue = $this->ecpayCheckMacValue($input);//檢查CheckMacValue
        $recordInfo = data_barecord::find($id);
        if($recordInfo && $input['RtnCode']=='1' && $input['CheckMacValue']==$CheckMacValue){
            session(['fnuser_id' => $recordInfo['memberid']]);//session紀錄會員編號
            return redirect('fnmember_record')->with('status', '付款成功!!');//到繳費紀錄
        }else{
            return redirect('fnmember')->with('status', '付款失敗，請聯絡客服!!');  //到登入頁
        }
        
    }
}
?>

