
var num=0;
function add(){
this.num++;
console.log(this.num);
document.getElementById('result').value=this.num;
document.body.style.backgroundColor='#'+Math.random().toString(16).substr(-6);
}
function subtract(){
    this.num--;
    console.log(this.num);
    document.getElementById('result').value=this.num;
    document.body.style.backgroundColor='#'+Math.random().toString(16).substr(-6);
}
function reset(){
    this.num=0;
    console.log(this.num);
    document.getElementById('result').value=this.num;
    document.getElementById('reset').style.backgroundColor="red";
}
