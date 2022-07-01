<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//自訂DB
use DB;
use App\Models\Carousel AS data_bacarousel;
use App\Models\bulletin AS data_babulletin;
use App\Models\news AS data_banews;

//自訂
use App\Customfn\Customfn;

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
        if(count($carousel) || count($bulletin) || count($news)){
            abort(404);
        }
        $this->binding['datas_carousel'] =  $carousel;
        $this->binding['bulletinInfo'] =  $bulletinInfo;
        $this->binding['datas_bulletin'] =  $bulletin;
        $this->binding['datas_news'] =  $news;
        $this->binding['newsInfo'] =  $newsInfo;
        return view('fnhome', $this->binding);
    }
}
