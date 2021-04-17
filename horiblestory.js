function sayHello(){
  var response = prompt("你的名字是？");
  alert("你好"+response+",欢迎来到细思极恐小故事游戏，开始游戏前请打开音频以获得更好的体验。");
  alert("这是一个文字小游戏，你需要阅读一则小故事，通过脑洞和逻辑来发现故事中细思恐极的地方，并输入有问题的段落序号来完成答题，"+response+"，你准备好了吗？");
};

function Replyone(){
  var replyone = prompt("请输入您觉得有问题的段落序号（阿拉伯数字）")
  if (replyone === "3"){
  alert("回答正确。我是怎么一下分辨出是否是人肉的呢？除非……");
  }
 else{
  alert("回答错误，请重新回答");
  }
};

function Replytwo(){
  var replytwo = prompt("请输入您觉得有问题的段落序号（阿拉伯数字）")
  if (replytwo === "6"){
  alert("回答正确。犯人就是那天来询问的警察，如果我当初回答看到了的话……");
  }
 else{
  alert("回答错误，请重新回答");
  }
};
