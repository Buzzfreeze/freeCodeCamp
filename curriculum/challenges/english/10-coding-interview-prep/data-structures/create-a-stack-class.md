---
id: 587d8250367417b2b2512c5f
title: Create a Stack Class
challengeType: 1
forumTopicId: 301633
dashedName: create-a-stack-class
---

# --description--

ในส่วนที่แล้ว เราได้พูดถึงว่า stack คืออะไร และเราจะใช้ array เพื่อเป็นตัวแทนของ stack ได้อย่างไร ในส่วนนี้ เราจะสร้างคลาส stack ของเราเอง แม้ว่าคุณสามารถใช้ array เพื่อสร้าง stack ได้ แต่บางครั้งก็เป็นการดีที่สุดที่จะจำกัดการควบคุม stack ของเรา นอกเหนือจาก method `push` และ `pop` แล้ว stack ยังมีวิธีการอื่นๆ ที่เป็นประโยชน์อีกด้วย มาเพิ่ม method `peek`, `isEmpty` และ `clear` ให้กับคลาส stack ของเรากัน

# --instructions--

เขียน method ตามเงื่อนไขนี้

- method `push` ที่เติม element ไปที่ด้านบนของ stack  
- method `pop` ที่ลบและคืนค่าเป็น element ที่ด้านบนของ stack  
- method `peek` ที่ดูค่าของ element บนสุดใน stack  
- method `isEmpty` ที่ตรวจสอบว่า stack ว่างเปล่าหรือไม่ และ 
- method `clear` ที่จะลบ element ทั้งหมดออกจาก stack  

โดยปกติ stack จะไม่มี method นี้ แต่เราได้เพิ่ม helper method ชื่อ `print` ไว้ให้เพืgr log ข้อมูลของ collection ไว้ในคอนโซล

# --hints--

class `Stack` ของคุณควรมี method `push`

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.push === 'function';
  })()
);
```

class `Stack` ของคุณควรมี method `pop`

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.pop === 'function';
  })()
);
```

class `Stack` ของคุณควรมี method `peek`

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.peek === 'function';
  })()
);
```

class `Stack` ของคุณควรมี method `isEmpty`

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.isEmpty === 'function';
  })()
);
```

class `Stack` ของคุณควรมี method `clear`

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.clear === 'function';
  })()
);
```

method `peek` ควรคืนค่าเป็น element บนสุด ของ stack

```js
assert(
  (function () {
    var test = new Stack();
    test.push('CS61');
    test.push('CS50');
    return test.peek() === 'CS50' && test.peek() === 'CS50';
  })()
);
```

method `pop` ควรลบและคืนค่า element บนสุดของ stack ออกมา

```js
assert(
  (function () {
    var test = new Stack();
    test.push('CS61');
    test.push('CS50');
    return test.pop() === 'CS50' && test.pop() === 'CS61';
  })()
);
```

method `isEmpty` ควรคืนค่าเป็น true ถ้าหาก stack ไม่มี element ใดๆข้างใน

```js
assert(
  (function () {
    var test = new Stack();
    return test.isEmpty();
  })()
);
```

method `clear` ควรลบ element ทั้งหมดจาก stack

```js
assert(
  (function () {
    var test = new Stack();
    test.push('CS61');
    test.push('CS50');
    test.clear();
    return test.isEmpty();
  })()
);
```

# --seed--

## --seed-contents--

```js
function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
  };
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
```

# --solutions--

```js
class Stack {
  constructor() {
    this.collection = [];
  }
  print() {
    console.log(this.collection);
  }
  push(val) {
    this.collection.push(val);
  }
  pop() {
    return this.collection.pop();
  }
  peek() {
    return this.collection[this.collection.length - 1];
  }
  isEmpty() {
    return this.collection.length === 0;
  }
  clear() {
    return (this.collection.length = 0);
  }
}
```
