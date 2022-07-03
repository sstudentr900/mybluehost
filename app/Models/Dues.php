<?PHP
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dues extends Model {
    //資料表名稱
    protected $table = 'dues';

    //主鍵名稱
    protected $promaryKey = 'id';

    //可變動欄位
    protected $fillable = [
        'cost',
        'name',
        'release',
    ];
}
?>