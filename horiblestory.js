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


var stories = ["","雪怪(Wendigo)。虽然它叫雪怪，但是它可以选择要用“人类”的面孔或是怪物的姿态出现，但是不管用什么型态出现，它们都有一秒变身为怪物的能力。雪怪最常在大西洋沿海海岸或五大湖地区出没，传说如果被雪怪附身，你将会吐出大量冰块、并且嗜吃人肉。","阿及利(Acheri)根据美国原住民传说，阿吉利是一个来自山上、形体为小女孩的幽灵，有关她的长相描述，都指出阿吉利拥有不寻常的眼睛，她的出现会为老弱妇孺带来疾病，严重者甚至会死亡。","ChurelChurel是北印度、孟加拉、巴基斯坦等南亚民间流传的女鬼，传说它死于难产，怨念极深的它因此回到人间寻仇、吸食人血。Churel被形容拥有十分恐怖的外型，但是却会以年轻貌美的姿态勾引年轻男性，等到他们上当之后，再把他们的血吸光，让他们瞬间老化。有人说它们会在妇女生产的时候出现、也有人说它们会在葬乱、和阴气很重的地方徘徊。更有人深信死于难产的人会成为Churel回来向家人寻仇，一泄自己没有受到妥善照顾的怨恨。","附鬼(Dybbuk)电影《聚魔柜》曾经演过关于Dybbuk的故事，而“聚魔柜”更是要关住Dybbuk的盒子!犹太人相信Dybbuk是一种会附身在罪人身上的恶灵，最后会将宿主原本的灵魂慢慢吞噬…直到他被收服为止。","起尸鬼( Vetāla)古时候的印度有一种名为“毗陀螺”的起尸鬼，据说如果你熟悉“毗陀螺法”，还可以让尸体复活、捉弄人类、把人类搞疯、虐杀小孩并且让怀孕的人流产。"];
function randomStory(){
  var x = document.getElementById("input1").value;
  alert(stories[x]);
}
