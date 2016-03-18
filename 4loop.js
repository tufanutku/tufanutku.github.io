var elemID = "#disp";
$().ready(function() {
    var top;
    var left;
for (var i=0; 1<10; i++) {
    left = Math.floor(Math.random() * 1000 + 1);
    top = Math.floor(Math.random() * 800 + 1);
$(elemID).append(
        "<div id=' "+ i +"' class='b' style='top:" + top +"px; left:" + left +"px'>"+ i +"</div>");
}
});