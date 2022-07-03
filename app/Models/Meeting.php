<?PHP
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Meeting extends Model {
    //資料表名稱
    protected $table = 'meeting';

    //主鍵名稱
    protected $promaryKey = 'id';

    //可變動欄位
    protected $fillable = [
        // 'sort',
        'title',
        'short',
        'tinymce',
        'release',
    ];
}
?>