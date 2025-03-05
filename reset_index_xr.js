// 获取整个文档的HTML内容  
let htmlContent = document.body.innerHTML;  

htmlContent = htmlContent.replace(/福贵/g, '王磊');

// 将替换后的HTML内容重新设置给document.body  
document.body.innerHTML = htmlContent;

// <script src="reset_time_xr.js"></script>
//<link rel="stylesheet" type="text/css" href="./style.css"></link> 
// <link rel="stylesheet" type="text/css" href="./sweetalert.css"></link> 