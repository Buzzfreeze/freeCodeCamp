---
id: 587d8250367417b2b2512c5f
title: Create a Stack Class
challengeType: 1
forumTopicId: 301633
dashedName: create-a-stack-class
---

# --description--

ในส่วนที่แล้ว เราได้พูดถึงว่า stack คืออะไร และเราจะใช้ array เพื่อเป็นตัวแทนของ stack ได้อย่างไร ในส่วนนี้ เราจะสร้างคลาส stack ของเราเอง แม้ว่าคุณสามารถใช้ array เพื่อสร้าง stack ได้ แต่บางครั้งก็เป็นการดีที่สุดที่จะจำกัดจำนวนการควบคุมที่เรามีกับ stack ของเรา นอกเหนือจาก `push` และ `pop` method แล้ว stack ยังมีวิธีการอื่นๆ ที่เป็นประโยชน์อีกด้วย มาเพิ่ม `peek`, `isEmpty` และ `clear` method ให้กับคลาส stack ของเรากัน

# --instructions--

เขียน `push` method ที่ push element ไปที่ด้านบนของ stack  `pop` method ที่ลบและ return element ที่ด้านบนของ stack  `peek` method  ที่มอง element บนสุดใน stack  `isEmpty` method ที่ตรวจสอบว่า stack ว่างเปล่าหรือไม่ และ `clear` method ที่จะลบ element ทั้งหมดออกจาก stack  โดยปกติ stack จะไม่มีสิ่งนี้ แต่เราได้เพิ่ม `print` helper method ที่คอนโซลบันทึกคอลเล็กชัน

# --hints--

`Stack` class ของคุณควรมี `` method

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.push === 'function';
  })()
);
```

`Stack` class ของคุณควรมี `pop` method

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.pop === 'function';
  })()
);
```

`Stack` class ของคุณควรมี `peek` method

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.peek === 'function';
  })()
);
```

`Stack` class ของคุณควรมี `isEmpty` method

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.isEmpty === 'function';
  })()
);
```

`Stack` class ของคุณควรมี `clear` method

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.clear === 'function';
  })()
);
```

`peek` method ควร return element บนสุด ของ stack

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

`pop` method ควรลบและ return element บนสุดของ stack

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

`isEmpty` method ควร return true ถ้าหาก stack ไม่มี element ใดๆ ข้างใน

```js
assert(
  (function () {
    var test = new Stack();
    return test.isEmpty();
  })()
);
```

`clear` method ควรลบ element ทั้งหมดจาก stack

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
  // Only change code below this line

  // Only change code above this line
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
