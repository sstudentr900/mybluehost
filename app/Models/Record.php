<?PHP
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Record extends Model {
    //資料表名稱
    protected $table = 'record';

    //主鍵名稱
    protected $promaryKey = 'id';

    //可變動欄位
    protected $fillable = [
        'paymentid',
        'memberid',
        'duesid',
        'updated_at',
    ];
}
?>