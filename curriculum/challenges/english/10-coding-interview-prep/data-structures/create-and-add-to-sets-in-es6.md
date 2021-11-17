---
id: 587d8254367417b2b2512c70
title: Create and Add to Sets in ES6
challengeType: 1
forumTopicId: 301636
dashedName: create-and-add-to-sets-in-es6
---

# --description--

ในเมื่อคุณได้เคยทำงานผ่าน ES5 แล้ว การทำงานที่คล้ายกันใน ES6 นี้จะง่ายกว่ามาก ES6 มีโครงสร้างข้อมูล `Set` ในตัว ดังนั้นการดำเนินการหลายอย่างที่คุณเขียนด้วยตัวเองใน ES5 จึงรวมมาให้แล้วใน ES6 สำหรับคุณ ลองดู:

ในการสร้าง set ว่าง:

```js
var set = new Set();
```

คุณสามารถสร้าง set ที่เป็น value:

```js
var set = new Set(1);
```

คุณสามารถสร้าง set ที่เป็น array:

```js
var set = new Set([1, 2, 3]);
```

เมื่อคุณสร้าง set เรียบร้อยแล้ว คุณสามารถเพิ่ม value ใดๆ ก็ได้ที่ต้องการโดยการใช้ `add` method:

```js
var set = new Set([1, 2, 3]);
set.add([4, 5, 6]);
```

อย่าลืมว่า set คือโครงสร้างข้อมูลที่ไม่สามารถบรรจุ value ที่ซ้ำกันได้:

```js
var set = new Set([1, 2, 3, 1, 2, 3]);
// set contains [1, 2, 3] only
```

# --instructions--

ในแบบฝึกหัดนี้ return set ที่มี value ดังต่อไปนี้ `1, 2, 3, 'Taco', 'Cat', 'Awesome'`

# --hints--

`Set` ของคุณควรมีแค่ value `1, 2, 3, Taco, Cat, Awesome` อยู่

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
  // Only change code below this line

  // Only change code above this line
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
