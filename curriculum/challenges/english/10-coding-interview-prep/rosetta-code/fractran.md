---
id: 5a7dad05be01840e1778a0d1
title: Fractran
challengeType: 5
forumTopicId: 302270
dashedName: fractran
---

# --description--

[FRACTRAN](https://en.wikipedia.org/wiki/FRACTRAN "wp: FRACTRAN") เป็นภาษาในการเขยนโปรแกรมที่เป็น Turing-complete ทีถูกสร้างขึ้นโดยนักคณิตศาสตร์ชื่อ [John Horton Conway](<https://en.wikipedia.org/wiki/John Horton Conway> "wp: John Horton Conway").

FRACTRAN เป็นรายการของเศษส่วนบวกที่มีการเรียงลำดับ $P = (f_1, f_2, \\ldots, f_m)$ โดยรับค่าเป็นจำนวนเต็มบวก $n$

โปรแกรมจะทำงานโดยการอัปเดทค่า $n$ ตามด้านล่าง:

<ul>
  <li>สำหรับเศษส่วนตัวแรก ($f_i$) ในรายการที่ $nf_i$ เป็นจำนวนเต็ม ให้แทนที่ $n$ ด้วย $nf_i$ ;</li>
  <li>ให้ทำซ้ำจนกว่าไม่มีตัวเลขไหนในรายการที่คูณ $n$ แล้วเป็นจำนวนเต็ม แล้วจึงหยุดการทำงาน</li>
</ul>

Conway ได้เขียนโปรแกรมสำหรับหาจำนวนเฉพาะใน FRACTRAN ดังนี้:

$\\dfrac{17}{91}$, $\\dfrac{78}{85}$, $\\dfrac{19}{51}$, $\\dfrac{23}{38}$, $\\dfrac{29}{33}$, $\\dfrac{77}{29}$, $\\dfrac{95}{23}$, $\\dfrac{77}{19}$, $\\dfrac{1}{17}$, $\\dfrac{11}{13}$, $\\dfrac{13}{11}$, $\\dfrac{15}{14}$, $\\dfrac{15}{2}$, $\\dfrac{55}{1}$

เริ่มที่ $n=2$ โปรแกรม FRACTRAN จะเปลี่ยน $n$ เป็น $15=2\\times (\\frac{15}{2})$ แล้ว $825=15\\times (\\frac{55}{1})$ ซึ่งจะสร้างลำดับของจำนวนเต็มต่อไปนี้:

$2$, $15$, $825$, $725$, $1925$, $2275$, $425$, $390$, $330$, $290$, $770$, $\\ldots$

หลังจาก 2 ลำดับนี้มีจะเป็นเลขยกกำลังของ 2:

$2^2=4$, $2^3=8$, $2^5=32$, $2^7=128$, $2^{11}=2048$, $2^{13}=8192$, $2^{17}=131072$, $2^{19}=524288$, $\\ldots$

ที่เป็นค่าของ 2 ยกกำลังจำนวนเฉพาะ

# --instructions--

ให้เขียนฟังก์ชันที่รับสตริงของ fractran เป็นพารามิเตอร์ และคืนค่าเป็นตัวเลข 10 ตัวแรกของโปรแกรมเป็น array ถ้าผลลัพธ์ไม่มีตัวเลข 10 ตัว ให้ส่งคืนตัวเลขเท่าที่มี

# --hints--

`fractran` ต้องเป็นฟังก์ชัน

```js
assert(typeof fractran == 'function');
```

`fractran("3/2, 1/3")` ต้องคืนค่าเป็น array

```js
assert(Array.isArray(fractran('3/2, 1/3')));
```

`fractran("3/2, 1/3")` ต้องคืนค่าเป็น `[ 2, 3, 1 ]`

```js
assert.deepEqual(fractran('3/2, 1/3'), [2, 3, 1]);
```

`fractran("3/2, 5/3, 1/5")` ต้องคืนค่าเป็น `[ 2, 3, 5, 1 ]`

```js
assert.deepEqual(fractran('3/2, 5/3, 1/5'), [2, 3, 5, 1]);
```

`fractran("3/2, 6/3")` ต้องคืนค่าเป็น `[ 2, 3, 6, 9, 18, 27, 54, 81, 162, 243 ]`

```js
assert.deepEqual(fractran('3/2, 6/3'), [2, 3, 6, 9, 18, 27, 54, 81, 162, 243]);
```

`fractran("2/7, 7/2")` ต้องคืนค่าเป็น `[ 2, 7, 2, 7, 2, 7, 2, 7, 2, 7 ]`

```js
assert.deepEqual(fractran('2/7, 7/2'), [2, 7, 2, 7, 2, 7, 2, 7, 2, 7]);
```

`fractran("17/91, 78/85, 19/51, 23/38, 29/33, 77/29, 95/23, 77/19, 1/17, 11/13, 13/11, 15/14, 15/2, 55/1")` ต้องคืนค่าเป็น `[ 2, 15, 825, 725, 1925, 2275, 425, 390, 330, 290 ]`

```js
assert.deepEqual(
  fractran(
    '17/91, 78/85, 19/51, 23/38, 29/33, 77/29, 95/23, 77/19, 1/17, 11/13, 13/11, 15/14, 15/2, 55/1'
  ),
  [2, 15, 825, 725, 1925, 2275, 425, 390, 330, 290]
);
```

# --seed--

## --seed-contents--

```js
function fractran(progStr) {

}
```

# --solutions--

```js
function fractran(progStr){
  var num = new Array();
  var den = new Array();
  var val ;
  var out="";
  function compile(prog){
    var regex = /\s*(\d*)\s*\/\s*(\d*)\s*(.*)/m;
    while(regex.test(prog)){
      num.push(regex.exec(prog)[1]);
      den.push(regex.exec(prog)[2]);
      prog = regex.exec(prog)[3];
    }
  }

  function step(val){
    var i=0;
    while(i<den.length && val%den[i] != 0) i++;
    return num[i]*val/den[i];
  }

  var seq=[]

  function exec(val){
    var i = 0;
    while(val && i<limit){
      seq.push(val)
      val = step(val);
      i ++;
    }
  }

  // Main
  compile(progStr);
  var limit = 10;
  exec(2);
  return seq;
}
```
