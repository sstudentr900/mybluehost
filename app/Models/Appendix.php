<?PHP
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Appendix extends Model {
    //資料表名稱
    protected $table = 'appendix';

    //主鍵名稱
    protected $promaryKey = 'id';

    //可變動欄位
    protected $fillable = [
        // 'sort',
        'meeting_id',
        'src',
        'name',
    ];
}
?>