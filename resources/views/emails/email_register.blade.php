<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <p>{{ $details['name'] }} 您好，</p>
        <br>
        <div style="background-color:#f2f2f2;vertical-align:top;padding:20px 25px">
            <p>請點選「我要註冊」按鈕來完成註冊。</p>
            <div style="padding:10px 25px;text-align:center">
                <a href="{{ $details['href'] }}" style="display:inline-block;background:#ec6f11;color:#ffffff;text-decoration:none;text-transform:none;padding:10px 60px;border-radius:3px" target="_blank">我要註冊</a>
            </div>
        </div>
        <p>若無法點選按鈕請連此網址：</p>
        <a href="{{ $details['href'] }}" style="color:#ec6f11" target="_blank">{{ $details['href'] }}</a>
        <br>
        <br>
        <small>
            謝謝您<br>台灣財務金融學會敬上
        </small>
    </body>
</html>