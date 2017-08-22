var a =1 +3; var b='abc';
var obj = new Object();
var o1 = {a:1};
var o2 = new Object(o1);
o1 ===o2//true
new Object(123) instanceof Number;

Object.print = function(o){console.log(o)};

var o = new Object();
Object.print(o);
//Object
[1,2,3].toString();//1,2,3
'123'.toString();//123
(function(){
	return 123;
}).toString()
//"function(){
//  return 123;
//}
(new Date()).toString()
//Tue May 10 2016 

//toString()应用
var o={};
o.toString();
//根据不同的返回数据类型
Object.prototype.toString.call(value)
//数值：返回[object Number]。
//字符串：返回[object String]。
//布尔值：返回[object Boolean]。
//undefined：返回[object Undefined]。
//null：返回[object Null]。
//数组：返回[object Array]。
//arguments对象：返回[object Arguments]。
//函数：返回[object Function]。
//Error对象：返回[object Error]。
//Date对象：返回[object Date]。
//RegExp对象：返回[object RegExp]。
//其他对象：返回[object Object]。
Object.prototype.toString.call(2);//"[object Number]"
Object.prototype.toString.call('')//[object String]
Object.prototype.toString.call(true)//[object Boolean]
Object.prototype.toString.call(undefined)
Object.prototype.toString.call(null)
Object.prototype.toString.call(Math)
Object.prototype.toString.call({})
Object.prototype.toString.call([])

var type = function(o){
	var s = Object.prototype.toString.call(o);
	return s.math(/\[object(.*?)\]/)[1].toLowerCase();
};
type({});//object
type([]);//array;
type(5);//number;
type(null);//null
type();//undefined
type(/abcd/);//regex
type(new Date());//date
['Null',
'Undefined',
'Object',
'Array',
'Boolean',
'Function',
'RegExp',
'NaN',
'Infinte'
].forEach(function(t){
	type['is'+t]=function(o){
		return type(o)===t.toLowerCase();
	};
});
type.isObject({});//true
type.isNumber(NaN);//true
type.isRegExp(/abc/);//true;

