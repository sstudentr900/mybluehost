<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controllers;
use App\Models\ShareData;
//自訂DB
use DB;
use App\Models\Member AS data_bamember;
use App\Models\Dues AS data_badues;
use App\Models\Record AS data_barecord;
use App\Models\Manager AS data_bamanager;
use App\Models\Carousel AS data_bacarousel;
use App\Models\Bulletin AS data_babulletin;
use App\Models\Meeting AS data_bameeting;
use App\Models\Meeting_year AS data_bameeting_year;
use App\Models\News AS data_banews;
use App\Models\Introduction AS data_introduction;
use App\Models\Appendix AS data_appendix;
//驗證資料
use Validator;
//接收資料
use Illuminate\Http\Request;
//加密
use Illuminate\Support\Facades\Hash;
//自訂函數
use App\Customfn\Customfn;
//Storage
use Illuminate\Support\Facades\Storage;

class BaController extends Controller
{
    public $binding = [
        'title' => ShareData::TITLE,
        'active' => '',
        'mainTitle' => '',
        'datas'=>  '',
        'pageStare'=>  '',
        'pageTotle'=> '',
        'p'=>'',
        'sortValue'=> '',
        'startValue'=> '',
        'endValue'=> '',
        'release'=> 'y',
    ];
    public function errorFn($url,$message){
        return redirect($url)
        ->withErrors($message)
        ->withInput();
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
    public function customGet($active,$mainTitle,$id){
        $this->binding['active'] = $active;
        $this->binding['mainTitle'] = $mainTitle;
        $this->binding['datas'] = data_introduction::where('id', $id)->first();
        return view('baintroduction',  $this->binding);
    }
    public function customPost($url,$id){
        //接收資料
        $input = request()->all();

        //驗證規則
        $rules = [
            'title' => [
                'required',
                'max:100',
            ],
            'tinymce' => [
                'required',
                'max:2848000',
            ],
        ];
        //1424000=> 1M

        //驗證資料
        $validator = Validator::make($input, $rules);
        if($validator->fails())
        {
            //資料驗證錯誤
            return redirect('/'.$url)->withErrors($validator)->withInput();
        }

        $Data = data_introduction::where('id', $id)->update(['title' => $input['title'],'tinymce' => $input['tinymce']]);
        return redirect('/'.$url);
    }
    //後台管員 bamanager
    public function bamanager_search($p=1){
        $end = 8; //顯示數量
        $this->customSearch(data_bamanager::count(),$end,$p);
        $datas = data_bamanager::offset( $this->binding['startValue'] )->limit( $this->binding['endValue'] )->get();
        $this->binding['active'] = 'bamanager';
        $this->binding['mainTitle'] = '後台管員';
        $this->binding['datas'] =  $datas;
        return view('bamanager', $this->binding);
    }
    public function bamanager_add(){
        $this->binding['active'] = 'bamanager_add';
        $this->binding['mainTitle'] = '後台管員_新增';
        $this->binding['release'] = 'y';
        $this->binding['inputPassword'] = '1';
        return view('bamanager_update',$this->binding);
    }
    public function bamanager_addpost(){
        // //接收資料
        $input = request()->all();

        //驗證規則
        $rules = [
            'cover' => [
                'required',
                // 'image',
                // 'max:1024', //1 MB
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
            'phone' => [
                'required',
                // 'digits:11',
                // 'digits_between:min,max',
                'digits_between:6,20',
                // 'numeric',
            ],
            'release' => [
                'required',
                'in:y,n'
            ],
        ];

        //驗證資料
        $validator = Validator::make($input, $rules);
        if($validator->fails())
        {
            //資料驗證錯誤
            return redirect('bamanager_add')->withErrors($validator)->withInput();
        }

        $data = new data_bamanager;
        $data->cover =  Customfn::imgAdd($input['cover'],'bamanager');
        $data->account = $input['account'];
        $data->password = Hash::make($input['password']);
        $data->name = $input['name'];
        $data->phone = $input['phone'];
        $data->release = $input['release'];
        $data->save();
        return redirect('bamanager');
    }
    public function bamanager_update($id){
        $this->binding['active'] = 'bamanager_update';
        $this->binding['mainTitle'] = '後台管員_修改';
        $this->binding['release'] = 'y';
        $this->binding['inputPassword'] = '0';
        $this->binding['datas'] = data_bamanager::find($id);
        return view('bamanager_update', $this->binding);
    }
    public function bamanager_updatepost($id,$pageId){
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
            'phone' => [
                'required',
                'digits_between:6,20',
            ],
            'release' => [
                'required',
                'in:y,n'
            ],
        ];

        //驗證資料
        $validator = Validator::make($input, $rules);
        if($validator->fails())
        {
            //資料驗證錯誤
            return redirect('bamanager_update/'.$id.'/'.$pageId)->withErrors($validator)->withInput();
        }

        $data = data_bamanager::find($id);
        $imgUpdata = Customfn::imgUpdata($input['cover'],$data,'bamanager');
        if($imgUpdata){
            $data->cover = $imgUpdata;
        }
        $data->account = $input['account'];
        $data->name = $input['name'];
        $data->phone = $input['phone'];
        $data->release = $input['release'];
        $data->save();
        //回到更新頁
        return redirect('bamanager/'.$pageId);
    }
    public function bamanager_password($id,$pageId,$value){
        $input = request()->all();
        $data = data_bamanager::find($id);
        $data->password = Hash::make($value);
        $data->save();
        return redirect('bamanager/'. $pageId);
    }
    public function bamanager_delete($id,$pageId){
        $data = data_bamanager::find($id);
        Customfn::imgDelet($data);
        $data->delete();
        return redirect('bamanager/'. $pageId);
    }
    //會員個資 bamember
    public function bamember_search($p=1){
        $end = 7; //顯示數量
        $this->customSearch(data_bamember::count(),$end,$p);
        $datas = data_bamember::offset( $this->binding['startValue'] )->limit( $this->binding['endValue'] )->orderBy('id','desc')->get();
        $this->binding['active'] = 'bamember';
        $this->binding['mainTitle'] = '會員個資';
        $this->binding['datas'] =  $datas;
        return view('bamember', $this->binding);
    }
    public function bamember_add(){
        $this->binding['active'] = 'bamember_add';
        $this->binding['mainTitle'] = '會員專區_新增';
        $this->binding['release'] = 'y';
        $this->binding['gender'] = 'm';
        $this->binding['inputPassword'] = '1';
        return view('bamember_update',$this->binding);
    }
    public function bamember_addpost(){
        // //接收資料
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
                'required',
            ],
            'release' => [
                'required',
                'in:y,n'
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
            return redirect('bamember_add')->withErrors($validator)->withInput();
        }

        $data = new data_bamember;
        $data->cover =  Customfn::imgAdd($input['cover'],'bamember');
        $data->account = $input['account'];
        $data->password = Hash::make($input['password']);
        $data->name = $input['name'];
        $data->url = $input['url'];
        $data->release = $input['release'];
        $data->gender = $input['gender'];
        $data->describe = $input['describe'];
        $data->save();
        return redirect('bamember');
    }
    public function bamember_update($id){
        $this->binding['active'] = 'bamember_update';
        $this->binding['mainTitle'] = '會員專區_修改';
        $this->binding['release'] = 'y';
        $this->binding['gender'] = 'm';
        $this->binding['inputPassword'] = '0';
        $this->binding['datas'] = data_bamember::find($id);
        return view('bamember_update', $this->binding);
    }
    public function bamember_updatepost($id,$pageId){
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
            'release' => [
                'required',
                'in:y,n'
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
            return redirect('bamember_update/'.$id.'/'.$pageId)->withErrors($validator)->withInput();
        }

        $data = data_bamember::find($id);
        $imgUpdata = Customfn::imgUpdata($input['cover'],$data,'bamember');
        if($imgUpdata){
            $data->cover = $imgUpdata;
        }
        $data->account = $input['account'];
        $data->name = $input['name'];
        $data->url = $input['url'];
        $data->release = $input['release'];
        $data->gender = $input['gender'];
        $data->describe = $input['describe'];
        $data->save();
        //回到更新頁
        return redirect('bamember/'. $pageId);
    }
    public function bamember_password($id,$pageId,$value){
        $input = request()->all();
        $data = data_bamember::find($id);
        $data->password = Hash::make($value);
        $data->save();
        return redirect('bamember/'.$pageId);
    }
    public function bamember_delete($id,$pageId){
        $data = data_bamember::find($id);
        Customfn::imgDelet($data);
        $data->delete();
        return redirect('bamember/'. $pageId);
    }
    //前台輪播 bacarousel
    public function bacarousel_search($p=1){
        $end = 5; //顯示數量
        $this->customSearch(data_bacarousel::count(),$end,$p);
        $datas = data_bacarousel::offset( $this->binding['startValue'] )->limit( $this->binding['endValue'] )->orderBy('sort','desc')->get();
        $this->binding['active'] = 'bacarousel';
        $this->binding['mainTitle'] = '前台輪播';
        $this->binding['datas'] =  $datas;
        return view('bacarousel', $this->binding);
    }
    public function bacarousel_add(){
        $this->binding['active'] = 'bacarousel_add';
        $this->binding['mainTitle'] = '前台輪播_新增';
        $this->binding['sortValue'] = data_bacarousel::max('id')+1;
        return view('bacarousel_update', $this->binding);
    }
    public function bacarousel_addpost(){
       // //接收資料
       $input = request()->all();

       //驗證規則
       $rules = [
           'title' => [
               'required',
               'max:100',
           ],
           'sort' => [
               'required',
           ],
           'release' => [
               'required',
               'in:y,n'
           ],
           'cover' => [
                'required',
            ],
       ];

       //驗證資料
       $validator = Validator::make($input, $rules);
       if($validator->fails())
       {
           //資料驗證錯誤
           return redirect( 'bacarousel_add')->withErrors($validator)->withInput();
       }

       $data = new data_bacarousel;
       $data->title = $input['title'];
       $data->sort = $input['sort'];
       $data->cover =  Customfn::imgAdd($input['cover'],'bacarousel');
       $data->release = $input['release'];
       $data->save();
       return redirect('bacarousel');
    }
    public function bacarousel_update($id){
        $this->binding['active'] = 'bacarousel_update';
        $this->binding['mainTitle'] = '前台輪播_修改';
        $this->binding['datas'] = data_bacarousel::where('id', $id)->first();
        return view('bacarousel_update', $this->binding);
    }
    public function bacarousel_updatepost($id,$pageId){
         //接收資料
         $input = request()->all();

         //驗證規則
         $rules = [
            'title' => [
                'required',
                'max:100',
            ],
            'sort' => [
                'required',
            ],
            'release' => [
                'required',
                'in:y,n'
            ],
            'cover' => [
                 'required',
             ],
        ];
 
         //驗證資料
         $validator = Validator::make($input, $rules);
         if($validator->fails())
         {
             //資料驗證錯誤
             return redirect('bacarousel_update/'.$id.'/'.$pageId)->withErrors($validator)->withInput();
         }
 
         $data = data_bacarousel::find($id);
         $imgUpdata = Customfn::imgUpdata($input['cover'],$data,'bacarousel');
         if($imgUpdata){
             $data->cover = $imgUpdata;
         }
         $data->title = $input['title'];
         $data->sort = $input['sort'];
         $data->release = $input['release'];
         $data->save();
         //回到更新頁
         return redirect('bacarousel/'.$pageId);
    }
    public function bacarousel_delete($id,$pageId){
        data_bacarousel::find($id)->delete();
        return redirect('bacarousel/'.$pageId);
    }
    //最新消息 banews
    public function banews_search($p=1){
        $end = 10; //顯示數量
        $pageTotle = ceil(data_banews::count() / $end);
        $pageP = $p;
        if($p>$pageTotle){
            $pageP = $pageTotle;
        }else if($p<1){
            $pageP = 1;
        }
        $start = ($pageP - 1) * $end;
        $datas = data_banews::offset($start)->limit($end)->orderBy('sort','desc')->get();
        $this->binding['active'] = 'banews';
        $this->binding['mainTitle'] = '最新消息';
        $this->binding['datas'] =  $datas;
        $this->binding['pageStare'] = $pageP;
        $this->binding['pageTotle'] = $pageTotle;
        session()->put('nowPageStare', $pageP);
        return view('banews', $this->binding);
    }
    public function banews_add(){
        $this->binding['active'] = 'banews_add';
        $this->binding['mainTitle'] = '最新消息_新增';
        $this->binding['sortValue'] = data_banews::max('id')+1;
        return view('banews_update', $this->binding);
    }
    public function banews_addpost(){
       // //接收資料
       $input = request()->all();

       //驗證規則
       $rules = [
           'title' => [
               'required',
               'max:100',
           ],
           'sort' => [
               'required',
           ],
           'short' => [
                'required',
                'max:100',
            ],
           'release' => [
               'required',
               'in:y,n'
           ],
           'tinymce' => [
                'required',
                'max:2848000',
            ],
       ];

       //驗證資料
       $validator = Validator::make($input, $rules);
       if($validator->fails())
       {
           //資料驗證錯誤
           return redirect( 'banews_add')->withErrors($validator)->withInput();
       }

       $data = new data_banews;
       $data->title = $input['title'];
       $data->sort = $input['sort'];
       $data->short = $input['short'];
       $data->tinymce = $input['tinymce'];
       $data->release = $input['release'];
       $data->save();
       return redirect('banews');
    }
    public function banews_update($id){
        $this->binding['active'] = 'banews_update';
        $this->binding['mainTitle'] = '最新消息_修改';
        $this->binding['datas'] = data_banews::where('id', $id)->first();
        return view('banews_update', $this->binding);
    }
    public function banews_updatepost($id,$pageId){
         //接收資料
         $input = request()->all();

         //驗證規則
         $rules = [
            'title' => [
                'required',
                'max:100',
            ],
            'sort' => [
                'required',
            ],
            'short' => [
                 'required',
                 'max:100',
             ],
            'release' => [
                'required',
                'in:y,n'
            ],
            'tinymce' => [
                 'required',
                 'max:2848000',
             ],
        ];
 
 
         //驗證資料
         $validator = Validator::make($input, $rules);
         if($validator->fails())
         {
             //資料驗證錯誤
             return redirect('banews_update/'.$id.'/'.$pageId)->withErrors($validator)->withInput();
         }
 
         $data = data_banews::find($id);
         $data->title = $input['title'];
         $data->sort = $input['sort'];
         $data->short = $input['short'];
         $data->tinymce = $input['tinymce'];
         $data->release = $input['release'];
         $data->save();
         //回到更新頁
         return redirect('banews/'.$pageId);
    }
    public function banews_delete($id,$pageId){
        data_banews::find($id)->delete();
        return redirect('banews/'.$pageId);
    }
    //活動公告 bulletin
    public function babulletin_search($p=1){
        $end = 10; //顯示數量
        $pageTotle = ceil(data_babulletin::count() / $end);
        $pageP = $p;
        if($p>$pageTotle){
            $pageP = $pageTotle;
        }else if($p<1){
            $pageP = 1;
        }
        $start = ($pageP - 1) * $end;
        $datas = data_babulletin::offset($start)->limit($end)->orderBy('sort','desc')->get();
        $this->binding['active'] = 'babulletin';
        $this->binding['mainTitle'] = '活動公告';
        $this->binding['datas'] =  $datas;
        $this->binding['pageStare'] = $pageP;
        $this->binding['pageTotle'] = $pageTotle;
        session()->put('nowPageStare', $pageP);
        return view('babulletin', $this->binding);
    }
    public function babulletin_add(){
        $this->binding['active'] = 'babulletin_add';
        $this->binding['mainTitle'] = '活動公告_新增';
        $this->binding['sortValue'] = data_babulletin::max('id')+1;
        return view('babulletin_update', $this->binding);
    }
    public function babulletin_addpost(){
       // //接收資料
       $input = request()->all();

       //驗證規則
       $rules = [
           'title' => [
               'required',
               'max:100',
           ],
           'sort' => [
               'required',
           ],
           'short' => [
                'required',
                'max:100',
            ],
           'release' => [
               'required',
               'in:y,n'
           ],
           'tinymce' => [
                'required',
                'max:2848000',
            ],
       ];

       //驗證資料
       $validator = Validator::make($input, $rules);
       if($validator->fails())
       {
           //資料驗證錯誤
           return redirect( 'babulletin_add')->withErrors($validator)->withInput();
       }

       $data = new data_babulletin;
       $data->title = $input['title'];
       $data->sort = $input['sort'];
       $data->short = $input['short'];
       $data->tinymce = $input['tinymce'];
       $data->release = $input['release'];
       $data->save();
       return redirect('babulletin');
    }
    public function babulletin_update($id){
        $this->binding['active'] = 'babulletin_update';
        $this->binding['mainTitle'] = '活動公告_修改';
        $this->binding['datas'] = data_babulletin::where('id', $id)->first();
        return view('babulletin_update', $this->binding);
    }
    public function babulletin_updatepost($id,$pageId){
         //接收資料
         $input = request()->all();

         //驗證規則
         $rules = [
            'title' => [
                'required',
                'max:100',
            ],
            'sort' => [
                'required',
            ],
            'short' => [
                 'required',
                 'max:100',
             ],
            'release' => [
                'required',
                'in:y,n'
            ],
            'tinymce' => [
                 'required',
                 'max:2848000',
             ],
        ];
 
 
         //驗證資料
         $validator = Validator::make($input, $rules);
         if($validator->fails())
         {
             //資料驗證錯誤
             return redirect('babulletin_update/'.$id.'/'.$pageId)->withErrors($validator)->withInput();
         }
 
         $data = data_babulletin::find($id);
         $data->title = $input['title'];
         $data->sort = $input['sort'];
         $data->short = $input['short'];
         $data->tinymce = $input['tinymce'];
         $data->release = $input['release'];
         $data->save();
         //回到更新頁
         return redirect('babulletin/'.$pageId);
    }
    public function babulletin_delete($id,$pageId){
        data_babulletin::find($id)->delete();
        return redirect('babulletin/'.$pageId);
    }
    //研討會附件 appendix
    public function appendix_add($files,$id){
        foreach($files as $key => $value){
            $uploadedFile = $files[$key];
            // $uploadedFile->getMimeType();//取得檔案
            $path = $uploadedFile->store('public');//storage/app/public/自訂亂碼名稱
            $filename =  $uploadedFile->getClientOriginalName();
            $data = new data_appendix;
            $data->meeting_id = $id;
            $data->src = $path;
            $data->name = $filename;
            $data->save();
        }
    }
    public function appendix_delet($id){
        $appendix =  data_appendix::where('id', $id)->first();
        // print_r($appendix['src']);
        unlink(storage_path('app/'.$appendix['src'])); //delet store/app/fileName
        data_appendix::find($id)->delete();  //delet data
    }
    //專題研討會 bameeting
    public function bameeting_search($p=1){
        $end = 9; //顯示數量
        $pageTotle = ceil(data_bameeting::count() / $end);
        $pageP = $p;
        if($p>$pageTotle){
            $pageP = $pageTotle;
        }else if($p<1){
            $pageP = 1;
        }
        $start = ($pageP - 1) * $end;
        $datas = data_bameeting::offset($start)->limit($end)->orderBy('id','desc')->get();
        $this->binding['active'] = 'bameeting';
        $this->binding['mainTitle'] = '專題研討會';
        $this->binding['datas'] =  $datas;
        $this->binding['pageStare'] = $pageP;
        $this->binding['pageTotle'] = $pageTotle;
        session()->put('nowPageStare', $pageP);
        return view('bameeting', $this->binding);
    }
    public function bameeting_add(){
        $this->binding['active'] = 'bameeting_add';
        $this->binding['mainTitle'] = '研討會_新增';
        // $this->binding['sortValue'] = data_bameeting::max('id')+1;
        return view('bameeting_update', $this->binding);
    }
    public function bameeting_addpost(){
        //接收資料
        $input = request()->all();
 
        //驗證規則
        $rules = [
            'title' => [
                'required',
                'max:100',
            ],
            'short' => [
                 'required',
                 'max:100',
             ],
            'release' => [
                'required',
                'in:y,n'
            ],
            'tinymce' => [
                 'required',
                 'max:2848000',
             ],
        ];
 
        //驗證資料
        $validator = Validator::make($input, $rules);
        if($validator->fails())
        {
            //資料驗證錯誤
            return redirect( 'bameeting_add')->withErrors($validator)->withInput();
        }
 
        //存bameeting
        $data = new data_bameeting;
        $data->title = $input['title'];
        $data->short = $input['short'];
        $data->tinymce = $input['tinymce'];
        $data->release = $input['release'];
        $data->save();
        $bameetingID = $data->id;

        //存附件
        if(isset($input['file'])){
            $this->appendix_add($input['file'],$bameetingID);
            // foreach($input['file'] as $key => $value){
            //     $uploadedFile = $input['file'][$key];
            //     $path = $uploadedFile->store('public');//storage/app/public/自訂亂碼名稱
            //     $filename =  $uploadedFile->getClientOriginalName();
            //     $data = new data_appendix;
            //     $data->meeting_id = $bameetingID;
            //     $data->src = $path;
            //     $data->name = $filename;
            //     $data->save();
            // }
        }
     
        return redirect('bameeting');
     }
    public function bameeting_update($id){
        $this->binding['active'] = 'bameeting_update';
        $this->binding['mainTitle'] = '研討會_修改';
        $this->binding['datas'] = data_bameeting::where('id', $id)->first();
        //get appendix
        if(data_appendix::where('meeting_id', $id)->count()){
            $this->binding['appendixs'] = data_appendix::select('id','name')->where('meeting_id', $id)->orderBy('id','desc')->get();
        }
        return view('bameeting_update', $this->binding);
    }
    public function bameeting_updatepost($id,$pageId){
         //接收資料
         $input = request()->all();

         //驗證規則
         $rules = [
            'title' => [
                'required',
                'max:100',
            ],
            // 'sort' => [
            //     'required',
            // ],
            'short' => [
                 'required',
                 'max:100',
             ],
            'release' => [
                'required',
                'in:y,n'
            ],
            'tinymce' => [
                 'required',
                 'max:2848000',
             ],
        ];
 
 
         //驗證資料
         $validator = Validator::make($input, $rules);
         if($validator->fails())
         {
             //資料驗證錯誤
             return redirect('bameeting_update/'.$id.'/'.$pageId)->withErrors($validator)->withInput();
         }
 
         $data = data_bameeting::find($id);
         $data->title = $input['title'];
         $data->short = $input['short'];
         $data->tinymce = $input['tinymce'];
         $data->release = $input['release'];
         $data->save();

          //存附件
        if(isset($input['file'])){
            $this->appendix_add($input['file'],$id);
        }

        //回到更新頁
        return redirect('bameeting/'.$pageId);
    }
    public function bameeting_delete($id,$pageId){
        data_bameeting::find($id)->delete();
        $this->appendix_delet($id);
        return redirect('bameeting/'.$pageId);
    }
    //年會研討會 bameeting_year
    public function bameeting_year_search($p=1){
        $end = 9; //顯示數量
        $pageTotle = ceil(data_bameeting_year::count() / $end);
        $pageP = $p;
        if($p>$pageTotle){
            $pageP = $pageTotle;
        }else if($p<1){
            $pageP = 1;
        }
        $start = ($pageP - 1) * $end;
        $datas = data_bameeting_year::offset($start)->limit($end)->orderBy('id','desc')->get();
        $this->binding['active'] = 'bameeting_year';
        $this->binding['mainTitle'] = '年會研討會';
        $this->binding['datas'] =  $datas;
        $this->binding['pageStare'] = $pageP;
        $this->binding['pageTotle'] = $pageTotle;
        session()->put('nowPageStare', $pageP);
        return view('bameeting', $this->binding);
    }
    public function bameeting_year_add(){
        $this->binding['active'] = 'bameeting_year_add';
        $this->binding['mainTitle'] = '研討會_新增';
        // $this->binding['sortValue'] = data_bameeting::max('id')+1;
        return view('bameeting_update', $this->binding);
    }
    public function bameeting_year_addpost(){
       //接收資料
       $input = request()->all();

       //驗證規則
       $rules = [
           'title' => [
               'required',
               'max:100',
           ],
           'short' => [
                'required',
                'max:100',
            ],
           'release' => [
               'required',
               'in:y,n'
           ],
           'tinymce' => [
                'required',
                'max:2848000',
            ],
       ];

       //驗證資料
       $validator = Validator::make($input, $rules);
       if($validator->fails())
       {
           //資料驗證錯誤
           return redirect( 'bameeting_year_add')->withErrors($validator)->withInput();
       }

       $data = new data_bameeting_year;
       $data->title = $input['title'];
       $data->short = $input['short'];
       $data->tinymce = $input['tinymce'];
       $data->release = $input['release'];
       $data->save();

       //存附件
       if(isset($input['file'])){
            $this->appendix_add($input['file'],$bameetingID);
        }
       return redirect('bameeting_year');
    }
    public function bameeting_year_update($id){
        $this->binding['active'] = 'bameeting_year_update';
        $this->binding['mainTitle'] = '研討會_修改';
        $this->binding['datas'] = data_bameeting_year::where('id', $id)->first();
        //get appendix
        if(data_appendix::where('meeting_id', $id)->count()){
            $this->binding['appendixs'] = data_appendix::select('id','name')->where('meeting_id', $id)->orderBy('id','desc')->get();
        }
        return view('bameeting_update', $this->binding);
    }
    public function bameeting_year_updatepost($id,$pageId){
         //接收資料
         $input = request()->all();

         //驗證規則
         $rules = [
            'title' => [
                'required',
                'max:100',
            ],
            // 'sort' => [
            //     'required',
            // ],
            'short' => [
                 'required',
                 'max:100',
             ],
            'release' => [
                'required',
                'in:y,n'
            ],
            'tinymce' => [
                 'required',
                 'max:2848000',
             ],
        ];
 
 
         //驗證資料
         $validator = Validator::make($input, $rules);
         if($validator->fails())
         {
             //資料驗證錯誤
             return redirect('bameeting_year_update/'.$id.'/'.$pageId)->withErrors($validator)->withInput();
         }
 
         $data = data_bameeting_year::find($id);
         $data->title = $input['title'];
        //  $data->sort = $input['sort'];
         $data->short = $input['short'];
         $data->tinymce = $input['tinymce'];
         $data->release = $input['release'];
         $data->save();

        //存附件
        if(isset($input['file'])){
            $this->appendix_add($input['file'],$id);
        }

         //回到更新頁
         return redirect('bameeting_year/'.$pageId);
    }
    public function bameeting_year_delete($id,$pageId){
        data_bameeting_year::find($id)->delete();
        $this->appendix_delet($id);
        return redirect('bameeting_year/'.$pageId);
    }
    //本會簡介 baintroduction
    public function baintroduction_get(){
        return $this->customGet('baintroduction','本會簡介',1);
    }
    public function baintroduction_post(){
        return $this->customPost('baintroduction',1);
    }
    //財務金融學刊 baacademic
    public function baacademic_get(){
        return $this->customGet('baacademic','財務金融學刊',2);
    }
    public function baacademic_post(){
        return $this->customPost('baacademic',2);
    }
    //金融研究雜誌 bajournal
    public function bajournal_get(){
        // return $this->customGet('bajournal','Journal of Financial Studies Style Instructions',3);
        return $this->customGet('bajournal','金融研究雜誌',3);
    }
    public function bajournal_post(){
        return $this->customPost('bajournal',3);
    }
    //理監事名單 balist
    public function balist_get(){
        return $this->customGet('balist','理監事名單',4);
    }
    public function balist_post(){
        return $this->customPost('balist',4);
    }
    //會員辦法 bajoin
    public function bajoin_get(){
        return $this->customGet('bajoin','會員辦法',5);
    }
    public function bajoin_post(){
        return $this->customPost('bajoin',5);
    }
    //balogin
    public function balogin_get(){
        return view('balogin', $this->binding);
    }
    public function balogin_post(){
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
            return $this->errorFn('balogin',$validator);
        }

        //驗證帳號
        $User = data_bamanager::where('account', $input['account'])->first();
        if(!$User || $User && !Hash::check($input['password'], $User->password))
        {
            return $this->errorFn('balogin',[
                'account' => [
                    '帳號或密碼錯誤',
                ],
                'password' => [
                    '帳號或密碼錯誤',
                ],
            ]);
        }

        //session紀錄會員編號
        session()->put('bauser_id', $User->id);
        return redirect('/bamanager');
    }
    //basignout (上頁有問題)
    public function basignout(){
        //清除Session
        session()->forget('user_id');
        // Cache::flush();
        //重新導向回首頁
        return redirect('/balogin');
    }
    //繳費編輯 badues
    public function badues_search($p=1){
        $end = 10; //顯示數量
        $this->customSearch(data_badues::count(),$end,$p);
        $datas = data_badues::where('delet','n')->offset( $this->binding['startValue'] )->limit( $this->binding['endValue'] )->orderBy('id','desc')->get();
        $this->binding['active'] = 'badues';
        $this->binding['mainTitle'] = '繳費編輯';
        $this->binding['datas'] =  $datas;
        return view('badues', $this->binding);
    }
    public function badues_add(){
        $this->binding['active'] = 'badues_add';
        $this->binding['mainTitle'] = '繳費編輯_新增';
        $this->binding['release'] = 'y';
        return view('badues_update',$this->binding);
    }
    public function badues_addpost(){
        // //接收資料
        $input = request()->all();

        //驗證規則
        $rules = [
            'cost' => [
                'required',
            ],
            'name' => [
                'required',
                'max:50',
            ],
            'release' => [
                'required',
                'in:y,n'
            ],
        ];

        //驗證資料
        $validator = Validator::make($input, $rules);
        if($validator->fails())
        {
            //資料驗證錯誤
            return redirect('badues_add')->withErrors($validator)->withInput();
        }

        $data = new data_badues;
        $data->cost = $input['cost'];
        $data->name = $input['name'];
        $data->release = $input['release'];
        $data->save();
        return redirect('badues');
    }
    public function badues_update($id){
        $this->binding['active'] = 'badues_update';
        $this->binding['mainTitle'] = '繳費編輯_修改';
        $this->binding['release'] = 'y';
        $this->binding['datas'] = data_badues::find($id);
        return view('badues_update', $this->binding);
    }
    public function badues_updatepost($id,$pageId){
        //接收資料
        $input = request()->all();
     

        //驗證規則
        $rules = [
            'cost' => [
                'required',
            ],
            'name' => [
                'required',
                'max:50',
            ],
            'release' => [
                'required',
                'in:y,n'
            ],
        ];

        //驗證資料
        $validator = Validator::make($input, $rules);
        if($validator->fails())
        {
            //資料驗證錯誤
            return redirect('badues_update/'.$id.'/'.$pageId)->withErrors($validator)->withInput();
        }

        $data = data_badues::find($id);
        $data->cost = $input['cost'];
        $data->name = $input['name'];
        $data->release = $input['release'];
        $data->save();
        //回到更新頁
        return redirect('badues/'. $pageId);
    }
    public function badues_delete($id,$pageId){
        $data = data_badues::find($id);
        $data->delet = 'y';
        $data->save();
        return redirect('badues/'. $pageId);
    }
    //繳費紀錄 barecord
    public function barecord_search($p=1,$selectValue=0,$serchValue=0){
        //查詢
        $whereName = 'record.id';
        $whereInfo = '=';
        if($selectValue==0){
            $whereInfo = '>';
        }
        if($selectValue==1){
            $whereName = 'record.merchant_no';
        }
        if($selectValue==2){
            $whereName = 'record.trade_no';
        }
        if($selectValue==3){
            $whereName = 'dues.id';
        }
        if($selectValue==4){
            $whereName = 'member.name';
        }

        $end = 10; //顯示數量
        $datasCount = DB::table('record')
                ->join('member', 'record.memberid', '=', 'member.id')
                ->join('dues', 'record.duesid', '=', 'dues.id')
                ->select('record.id','record.merchant_no','record.trade_no','record.payment_type','record.updated_at','member.name','dues.name as itemName','dues.cost as price')
                ->where( $whereName, $whereInfo, $serchValue)
                ->count();
        $this->customSearch($datasCount,$end,$p);
        $datas = DB::table('record')
                ->join('member', 'record.memberid', '=', 'member.id')
                ->join('dues', 'record.duesid', '=', 'dues.id')
                ->select('record.id','record.merchant_no','record.trade_no','record.payment_type','record.updated_at','member.name','dues.name as itemName','dues.cost as price')
                ->where( $whereName, $whereInfo, $serchValue)
                ->offset( $this->binding['startValue'] )
                ->limit( $this->binding['endValue'] )
                ->orderBy('record.id','desc')
                ->get();


        $this->binding['active'] = 'barecord';
        $this->binding['mainTitle'] = '繳費紀錄';
        $this->binding['datas'] =  $datas;
        $this->binding['selectValue'] =  $selectValue;
        $this->binding['serchValue'] =  $serchValue?$serchValue:'';
        return view('barecord', $this->binding);
    }
    //取得購買項目
    public function barecord_get_dues(){
        $data = data_badues::select('id','name')->where('release', 'y')->where('delet', 'n')->get();
        return response()->json(['data'=>$data]);
    }
}
?>

