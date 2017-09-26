
function write(text){
    alert(text)
}

function test(name,age,money){
    this.name=name;
    this.age=age;
    this.money=money;
    this.say=function(){
            document.write('我的名字叫：'+this.name+'，我今年'+this.age+'岁，月薪为：'+this.money+'元；')
    }
};

module.exports={
    write:write,
    test:test
}

