
function include(src)
{
    var head = document.getElementsByTagName('body')[0];
    var script = document.createElement('script');
    script.src = src;
    head.appendChild(script);
}

include('./index/index1.js');
include('./index/index2.js');
include('./index/index3.js');