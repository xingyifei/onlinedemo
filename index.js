function Main() {
  
  // 轮播时间
  Main.prototype.time = 3500
  
  // 当前图片
  Main.prototype.count = 0
  
  // 初始函数
  Main.prototype.init = function() {
    setInterval(this.slider.bind(this), this.time)
  }
  
  // 轮播函数
  Main.prototype.slider = function() {
    this.count === ($('.slider').find('img').length - 1) && (this.count = -1)
    this.count ++ 
    $('.slider').find('img').eq(this.count).siblings().hide()
    $('.slider').find('img').eq(this.count).fadeIn(1000)
  }
  
}