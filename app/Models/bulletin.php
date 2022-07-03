<?PHP
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class Bulletin extends Model {
    use HasFactory;
    //資料表名稱
    protected $table="bulletin";
    //主鍵名稱
    protected $promaryKey = 'id';
    //可變動欄位
    protected $fillable = [
        'sort',
        'title',
        'short',
        'tinymce',
        'release',
    ];
}
?>