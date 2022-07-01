@if($pageTotle!=1)
<div class="page">
    <ul>
        <li>
            <a class="pre" href="{{  URL::asset($active).'/'.($pageStare>1?$pageStare-1:1) }}"></a>
        </li>
        <li>
            <a>{{ $pageStare }} / {{ $pageTotle }}</a>
        </li>
        <li>
            <a class="next" href="{{ URL::asset($active).'/'.($pageStare<$pageTotle?$pageStare+1:$pageTotle) }}"></a>
        </li>
    </ul>
</div>
@endif