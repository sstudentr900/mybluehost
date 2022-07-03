<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\{
    FnController,
    BaController
};


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//後台登入5
Route::get('balogin', [BaController::class,'balogin_get']);
Route::post('balogin', [BaController::class,'balogin_post']);
//後台中間層
Route::group(['middleware'=>['auth.baadmin']], function(){
    //後台管員
    Route::get('bamanager/{id?}', [BaController::class,'bamanager_search']);
    Route::get('bamanager_add', [BaController::class,'bamanager_add']);
    Route::post('bamanager_add', [BaController::class,'bamanager_addpost']);
    Route::get('bamanager_update/{id?}/{pageId?}', [BaController::class,'bamanager_update']);
    Route::post('bamanager_update/{id?}/{pageId?}', [BaController::class,'bamanager_updatepost']);
    Route::get('bamanager_passord/{id?}/{pageId?}/{value?}', [BaController::class,'bamanager_password']);
    Route::get('bamanager_delete/{id?}/{pageId?}', [BaController::class,'bamanager_delete']);
    //會員專區
    Route::get('bamember/{id?}', [BaController::class,'bamember_search']);
    Route::get('bamember_add', [BaController::class,'bamember_add']);
    Route::post('bamember_add', [BaController::class,'bamember_addpost']);
    Route::get('bamember_update/{id?}/{pageId?}', [BaController::class,'bamember_update']);
    Route::post('bamember_update/{id?}/{pageId?}', [BaController::class,'bamember_updatepost']);
    Route::get('bamember_passord/{id?}/{pageId?}/{value?}', [BaController::class,'bamember_password']);
    Route::get('bamember_delete/{id?}/{pageId?}', [BaController::class,'bamember_delete']);
    //附件
    Route::get('appendix_delet/{id?}', [BaController::class,'appendix_delet']);
    //研討會
    Route::get('bameeting/{id?}', [BaController::class,'bameeting_search']);
    Route::get('bameeting_add', [BaController::class,'bameeting_add']);
    Route::post('bameeting_add', [BaController::class,'bameeting_addpost']);
    // Route::post('bameeting_appendix', [BaController::class,'bameeting_appendix']);//附件
    // Route::post('bameeting_appendix_delet', [BaController::class,'bameeting_appendix_delet']);//附件
    Route::get('bameeting_update/{id?}/{pageId?}', [BaController::class,'bameeting_update']);
    Route::post('bameeting_update/{id?}/{pageId?}', [BaController::class,'bameeting_updatepost']);
    Route::get('bameeting_delete/{id?}/{pageId?}', [BaController::class,'bameeting_delete']);
    //年會
    Route::get('bameeting_year/{id?}', [BaController::class,'bameeting_year_search']);
    Route::get('bameeting_year_add', [BaController::class,'bameeting_year_add']);
    Route::post('bameeting_year_add', [BaController::class,'bameeting_year_addpost']);
    // Route::post('bameeting_year_appendix', [BaController::class,'bameeting_year_appendix']);//附件
    Route::get('bameeting_year_update/{id?}/{pageId?}', [BaController::class,'bameeting_year_update']);
    Route::post('bameeting_year_update/{id?}/{pageId?}', [BaController::class,'bameeting_year_updatepost']);
    Route::get('bameeting_year_delete/{id?}/{pageId?}', [BaController::class,'bameeting_year_delete']);
    //前台輪播
    Route::get('bacarousel/{id?}', [BaController::class,'bacarousel_search']);
    Route::get('bacarousel_add',[BaController::class,'bacarousel_add']);
    Route::post('bacarousel_add',[BaController::class,'bacarousel_addpost']);
    Route::get('bacarousel_update/{id?}/{pageId?}',[BaController::class,'bacarousel_update']);
    Route::post('bacarousel_update/{id?}/{pageId?}',[BaController::class,'bacarousel_updatepost']);
    Route::get('bacarousel_delete/{id?}/{pageId?}', [BaController::class,'bacarousel_delete']);
    //最新消息
    Route::get('banews/{id?}', [BaController::class,'banews_search']);
    Route::get('banews_add',[BaController::class,'banews_add']);
    Route::post('banews_add',[BaController::class,'banews_addpost']);
    Route::get('banews_update/{id?}/{pageId?}',[BaController::class,'banews_update']);
    Route::post('banews_update/{id?}/{pageId?}',[BaController::class,'banews_updatepost']);
    Route::get('banews_delete/{id?}/{pageId?}', [BaController::class,'banews_delete']);
    //活動公告
    Route::get('babulletin/{id?}', [BaController::class,'babulletin_search']);
    Route::get('babulletin_add',[BaController::class,'babulletin_add']);
    Route::post('babulletin_add',[BaController::class,'babulletin_addpost']);
    Route::get('babulletin_update/{id?}/{pageId?}',[BaController::class,'babulletin_update']);
    Route::post('babulletin_update/{id?}/{pageId?}',[BaController::class,'babulletin_updatepost']);
    Route::get('babulletin_delete/{id?}/{pageId?}', [BaController::class,'babulletin_delete']);
    //本會簡介
    Route::get('baintroduction', [BaController::class,'baintroduction_get']);
    Route::post('baintroduction',[BaController::class,'baintroduction_post']);
    //財務金融學刊
    Route::get('baacademic', [BaController::class,'baacademic_get']);
    Route::post('baacademic',[BaController::class,'baacademic_post']);
 
    //Journal
    Route::get('bajournal', [BaController::class,'bajournal_get']);
    Route::post('bajournal',[BaController::class,'bajournal_post']);
    //理監事名單
    Route::get('balist', [BaController::class,'balist_get']);
    Route::post('balist',[BaController::class,'balist_post']);
    //會員辦法
    Route::get('bajoin', [BaController::class,'bajoin_get']);
    Route::post('bajoin',[BaController::class,'bajoin_post']);
    //繳費編輯
    Route::get('badues/{id?}', [BaController::class,'badues_search']);
    Route::get('badues_add',[BaController::class,'badues_add']);
    Route::post('badues_add',[BaController::class,'badues_addpost']);
    Route::get('badues_update/{id?}/{pageId?}',[BaController::class,'badues_update']);
    Route::post('badues_update/{id?}/{pageId?}',[BaController::class,'badues_updatepost']);
    Route::get('badues_delete/{id?}/{pageId?}', [BaController::class,'badues_delete']);
    //繳費紀錄
    Route::get('barecord/{id?}/{selectValue?}/{serchValue?}', [BaController::class,'barecord_search']);
    // Route::post('barecord', [BaController::class,'barecord_find']);
    // Route::post('barecord/{search?}',[BaController::class,'barecord_find']);
    //取得購買資訊
    Route::get('barecord_get_dues',[BaController::class,'barecord_get_dues']);
    // Route::post('barecord_add',[BaController::class,'barecord_addpost']);
    // Route::get('barecord_update/{id?}/{pageId?}',[BaController::class,'barecord_update']);
    // Route::post('barecord_update/{id?}/{pageId?}',[BaController::class,'barecord_updatepost']);
    // Route::get('barecord_delete/{id?}/{pageId?}', [BaController::class,'barecord_delete']);
    
    //後台登出
    Route::get('basignout', [BaController::class,'basignout']);
});


Route::get('/', function() {
    return redirect('fnhome');
});
//回首頁
Route::get('fnhome', [FnController::class,'fnhome'])->name('fnhome');
// Route::get('fnhome', action('FnController@fnhome'))->name('fnhome');
//首頁最新消息換頁
Route::post('fnhome/new/{id}', [FnController::class,'fnhomeNew']);
//首頁活動公告換頁
Route::post('fnhome/bulletin/{id}', [FnController::class,'fnhomeBulletin']);
//本會簡介
Route::get('fnintroduction', [FnController::class,'fnintroduction'])->name('fnintroduction');
//財務金融學刊
Route::get('fnacademic', [FnController::class,'fnacademic'])->name('fnacademic');
//最新消息
Route::get('fnnews/{id}', [FnController::class,'fnnews'])->name('fnnews');
//最新公告
Route::get('fnbulletin/{id}', [FnController::class,'fnbulletin'])->name('fnbulletin');
//研討會
Route::get('fnmeeting/{id?}', [FnController::class,'fnmeeting'])->name('fnmeeting');
Route::get('fnmeeting_year/{id?}', [FnController::class,'fnmeeting_year'])->name('fnmeeting_year');
//研討會單頁
Route::get('fnmeeting_item/{id}', [FnController::class,'fnmeeting_item'])->name('fnmeeting_item');
// Route::post('fnmeeting_item/{id}', [FnController::class,'fnmeeting_item_post']);
Route::get('fnmeeting_year_item/{id}', [FnController::class,'fnmeeting_year_item'])->name('fnmeeting_year_item');
//Journal of Financial Studies
Route::get('fnjournal', [FnController::class,'fnjournal'])->name('fnjournal');
//理監事名單
Route::get('fnlist', [FnController::class,'fnlist'])->name('fnlist');
//會員辦法
Route::get('fnjoin', [FnController::class,'fnjoin'])->name('fnjoin');
//會員專區
Route::get('fnmember', [FnController::class,'fnmember'])->name('fnmember');
Route::post('fnmember', [FnController::class,'fnmember_post']);
//我要註冊
Route::get('fnregister', [FnController::class,'fnregister'])->name('fnregister');
Route::post('fnregister', [FnController::class,'fnregister_post']);
//註冊通知
Route::get('fnregister_notice/{token}', [FnController::class,'fnregister_notice'])->name('fnregister_notice');
//忘記密碼
Route::get('fnpassword', [FnController::class,'fnpassword'])->name('fnpassword');
Route::post('fnpassword', [FnController::class,'fnpassword_post']);
//更改密碼
Route::get('fnpassword_change/{token}', [FnController::class,'fnpassword_change'])->name('fnpassword_change');
Route::post('fnpassword_change/{token}', [FnController::class,'fnpassword_change_post']);
//前台中間層
Route::group(['middleware'=>['auth.fnadmin']], function(){
    //資料修改
    Route::get('fnmember_information', [FnController::class,'fnmember_information'])->name('fnmember_information');
    Route::post('fnmember_information', [FnController::class,'fnmember_information_post']);
    //密碼修改
    Route::get('fnmember_password', [FnController::class,'fnmember_password'])->name('fnmember_password');
    Route::post('fnmember_password', [FnController::class,'fnmember_password_post']);
    //付款
    Route::get('fnmember_payment', [FnController::class,'fnmember_payment'])->name('fnmember_payment');
    Route::post('fnmember_payment', [FnController::class,'fnmember_payment_post']);
    //繳費紀錄
    Route::get('fnmember_record', [FnController::class,'fnmember_record'])->name('fnmember_record');
    //會員登出
    Route::get('fnmember_out', [FnController::class,'fnmember_out'])->name('fnmember_out');
});
//付款完成
Route::post('fnmember_payment_result/{id}', [FnController::class,'fnmember_payment_result']);
//付款結果
Route::post('fnmember_payment_ok/{id}', [FnController::class,'fnmember_payment_ok']);


//error
Route::fallback(function () {
    return redirect('fnhome');
});