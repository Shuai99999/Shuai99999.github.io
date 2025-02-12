// 显示当前日期时间的函数
function showCurrentDateTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // 月份从0开始，所以+1
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  const formattedDate = `${year}-${month}-${day}`;
  document.getElementById("currentDateTime").textContent = formattedDateTime;
  document.querySelectorAll("input")[0].setAttribute("value", formattedDate);
}

function showCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // 月份从0开始，所以+1
  const day = String(now.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  document.querySelectorAll("input")[0].setAttribute("value", formattedDate);
}

// 页面加载完成后立即显示当前日期时间
window.onload = showCurrentDateTime;

window.onload = showCurrentDate;

// 每秒更新一次日期时间显示
setInterval(showCurrentDateTime, 1000);
