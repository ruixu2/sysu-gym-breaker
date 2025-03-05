// 获取整个文档的HTML内容  
let htmlContent = document.body.innerHTML;  
  
function getCurrentDateFormatted(daysAgo) {  
  const today = new Date();
  today.setDate(today.getDate() - daysAgo); // 减去天数得到过去的日期
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // 月份从0开始，所以加1
  const day = String(today.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
  }  
    
day_str=getCurrentDateFormatted(0)


htmlContent = htmlContent.replace(/2024-08-06/g, day_str);
htmlContent = htmlContent.replace(/2024-08-05/g, day_str);

// htmlContent = htmlContent.replace(/福贵/g, '王磊');
// htmlContent = htmlContent.replace('22112211', '21121247');
htmlContent = htmlContent.replace(/福贵/g, '吴杰');
htmlContent = htmlContent.replace('22112211', '21125253');

function generateRandomTime() {
  // 生成8点到15点之间的小时数
  const hours = Math.floor(Math.random() * (15 - 8 + 1)) + 8;
  
  // 生成0到59之间的分钟和秒钟
  const minutes = Math.floor(Math.random() * 60);
  const seconds = Math.floor(Math.random() * 60);
  
  // 将数字格式化为两位数
  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

var randomTime = generateRandomTime();

htmlContent = htmlContent.replace(/20:22:11/g, randomTime);


function generateRandomNumberString(length) {
  let result = '';
  for (let i = 0; i < length; i++) {
      result += Math.floor(Math.random() * 10); // 生成0到9之间的随机数
  }
  return result;
}
const randomNumberString = generateRandomNumberString(9);
order_id="1723"+randomNumberString
htmlContent = htmlContent.replace(/1722860529309376/g, order_id);


const random_verified_id=generateRandomNumberString(14)
htmlContent = htmlContent.replace(/6249312990492092/g, 62+random_verified_id);


raw_str = '列表位置'
temp_str=''
order_str="./查看订单-xr.html"
for(i=0;i<7;i++){
  if(i==0){
  temp_str=  `  <dl><dt class="title"> <div class="status-text">预订成功</div>                订单 ${order_id}              </dt>              <dd><a href="${order_str}" class="blockA">                  <div class="detailContent"><span>健身房测试                    </span></div>                  <div class="detailContent">                    预订日期:${day_str}</div>                  <div class="detailContent">                    下单日期:${day_str} ${randomTime}</div>                </a></dd>              <dt class="order-item-action">                <div class="bt"><a href="https://gym.sysu.edu.cn/app/product/show.html?id=606"                    class="button button-plain">再来一单</a> </div>                <div class="mount">金额: <span class="text-danger">¥5</span>&nbsp;&nbsp;数量: 1</div>              </dt>            </dl>`
  }else{
    day_str=getCurrentDateFormatted(i)
    const randomNumberString = generateRandomNumberString(9);
    order_id="1723"+randomNumberString
    randomTime=generateRandomTime()
    temp_str+= `  <dl><dt class="title"> <div class="status-text">预订成功</div>                订单 ${order_id}            </dt>              <dd><a href="https://gym.sysu.edu.cn/app/order/myorder_view.html?id=1721653139569113" class="blockA">                  <div class="detailContent"><span>健身房测试                    </span></div>                  <div class="detailContent">                    预订日期:${day_str}</div>                  <div class="detailContent">                    下单日期:${day_str} ${randomTime}</div>                </a></dd>              <dt class="order-item-action">                <div class="bt"><a href="https://gym.sysu.edu.cn/app/product/show.html?id=606"                    class="button button-plain">再来一单</a> </div>                <div class="mount">金额: <span class="text-danger">¥5</span>&nbsp;&nbsp;数量: 1</div>              </dt>            </dl>`
  }
}

htmlContent = htmlContent.replace(raw_str, temp_str);

list_page_str="./列表_xr.html"
raw_list_href_str= 'https://gym.sysu.edu.cn/app/yyuser/personal.html'

htmlContent = htmlContent.replace(raw_list_href_str, list_page_str);
// 将替换后的HTML内容重新设置给document.body  
document.body.innerHTML = htmlContent;

// <script src="reset_time_xr.js"></script>
//<link rel="stylesheet" type="text/css" href="./style.css"></link> 
// <link rel="stylesheet" type="text/css" href="./sweetalert.css"></link> 


