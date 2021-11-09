---
id: 587d7daa367417b2b2512b6c
title: Combine an Array into a String Using the join Method
challengeType: 1
forumTopicId: 18221
dashedName: combine-an-array-into-a-string-using-the-join-method
---

# --description--

`join` method นำ elements ของ array มาต่อกันเพื่อสร้าง string โดยมี argument เป็น delimiter ที่ใช้เป็นคั่น elements ของ array ใน string

ดังตัวอย่างต่อไปนี้

```js
var arr = ["Hello", "World"];
var str = arr.join(" ");
```

`str` ควรมีค่าเป็น string `Hello World`.

# --instructions--

จงใช้ `join` method ภายในฟังก์ชัน `sentensify` เพื่อสร้างประโยคจากคำที่อยู่ใน string `str` โดยฟังก์ชันนี้ควรคืนค่าเป็น string ตัวอย่างเช่น `I-like-Star-Wars` ควรเปลี่ยนค่าเป็น `I like Star Wars` สำหรับแบบทดสอบนี้ ห้ามใช้ `replace` method

# --hints--

โค้ดของคุณควรใช้ `join` method

```js
assert(code.match(/\.join/g));
```

โค้ดของคุณไม่ควรใช้ `replace` method

```js
assert(!code.match(/\.?[\s\S]*?replace/g));
```

`sentensify("May-the-force-be-with-you")` ควรคืนค่าเป็น string

```js
assert(typeof sentensify('May-the-force-be-with-you') === 'string');
```

`sentensify("May-the-force-be-with-you")` ควรคืนค่าเป็น string `May the force be with you`

```js
assert(sentensify('May-the-force-be-with-you') === 'May the force be with you');
```

`sentensify("The.force.is.strong.with.this.one")` ควรคืนค่าเป็น string `The force is strong with this one`

```js
assert(
  sentensify('The.force.is.strong.with.this.one') ===
    'The force is strong with this one'
);
```

`sentensify("There,has,been,an,awakening")` ควรคืนค่าเป็น string `There has been an awakening`

```js
assert(
  sentensify('There,has,been,an,awakening') === 'There has been an awakening'
);
```

# --seed--

## --seed-contents--

```js
function sentensify(str) {
  // Only change code below this line


  // Only change code above this line
}
sentensify("May-the-force-be-with-you");
```

# --solutions--

```js
function sentensify(str) {
  // Only change code below this line
  return str.split(/\W/).join(' ');
  // Only change code above this line
}
```
