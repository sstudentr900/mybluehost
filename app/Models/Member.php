<?PHP
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Member extends Model {
    //資料表名稱
    protected $table = 'member';

    //主鍵名稱
    protected $promaryKey = 'id';

    //可變動欄位
    protected $fillable = [
        'cover',
        'account',
        'password',
        'name',
        'url',
        'release',
        'gender',
        'describe',
        'token',
    ];
}
?>