<?PHP
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Manager extends Model {
    //資料表名稱
    protected $table = 'manager';

    //主鍵名稱
    protected $promaryKey = 'id';

    //可變動欄位
    protected $fillable = [
        'cover',
        'account',
        'password',
        'name',
        'phone',
        'release',
    ];
}
?>