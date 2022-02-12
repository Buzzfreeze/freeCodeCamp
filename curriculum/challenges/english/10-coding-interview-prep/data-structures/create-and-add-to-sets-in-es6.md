---
id: 587d8254367417b2b2512c70
title: Create and Add to Sets in ES6
challengeType: 1
forumTopicId: 301636
dashedName: create-and-add-to-sets-in-es6
---

# --description--

ตอนนี้พอคุณได้ใช้ ES5 ไปแล้ว การทำงานแบบเดิมโดยใช้ ES6 จะง่ายกว่ามาก ES6 มีโครงสร้างข้อมูล `Set` อยู่แล้ว ดังนั้นการดำเนินการที่คุณเขียนด้วยตัวเองใน ES5 จึงถูกสร้างไว้ให้แล้วใน ES6 ลองดูตัวอย่าง:

สร้าง set ว่าง:

```js
var set = new Set();
```

คุณสามารถสร้าง set โดยระบุค่าได้:

```js
var set = new Set(1);
```

คุณสามารถสร้าง set โดยระบุ array ได้:

```js
var set = new Set([1, 2, 3]);
```

เมื่อคุณสร้าง set เรียบร้อยแล้ว คุณสามารถเพิ่มค่าใดๆ ก็ได้ที่ต้องการโดยการใช้ method`add`:

```js
var set = new Set([1, 2, 3]);
set.add([4, 5, 6]);
```

อย่าลืมว่า set คือโครงสร้างข้อมูลที่จะไม่เก็บค่าที่ซ้ำกัน:

```js
var set = new Set([1, 2, 3, 1, 2, 3]);
// set จะเก็บค่าแค่ [1, 2, 3] เท่านั้น
```

# --instructions--

ในแบบฝึกหัดนี้ ให้คืนค่าเป็น set ที่มีค่าตามนี้ `1, 2, 3, 'Taco', 'Cat', 'Awesome'`

# --hints--

`Set` ต้องมีค่าเป็น `1, 2, 3, Taco, Cat, Awesome`

```js
assert(
  (function () {
    var test = checkSet();
    return (
      test.size == 6 &&
      test.has(1) &&
      test.has(2) &&
      test.has(3) &&
      test.has('Taco') &&
      test.has('Cat') &&
      test.has('Awesome')
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
function checkSet() {
  var set = new Set([1, 2, 3, 3, 2, 1, 2, 3, 1]);
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
  console.log(Array.from(set));
  return set;
}

checkSet();
```

# --solutions--

```js
function checkSet(){var set = new Set([1,2,3,'Taco','Cat','Awesome']);
return set;}
```
