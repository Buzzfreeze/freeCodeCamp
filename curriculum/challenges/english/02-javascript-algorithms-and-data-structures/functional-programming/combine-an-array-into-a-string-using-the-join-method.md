---
id: 587d7daa367417b2b2512b6c
title: Combine an Array into a String Using the join Method
challengeType: 1
forumTopicId: 18221
dashedName: combine-an-array-into-a-string-using-the-join-method
---

# --description--

method `join` จะนำ element ของ array มาต่อกันเพื่อสร้าง string โดยมี argument เป็น delimiter ที่ใช้คั่นแต่ละ element ที่เอามาประกอบกันเป็น string

ลองดูอย่าง:

```js
var arr = ["Hello", "World"];
var str = arr.join(" ");
```

`str` ต้องมีค่าเป็น string `Hello World`

# --instructions--

จงใช้ method `join` ในฟังก์ชัน `sentensify` เพื่อสร้างประโยคจากคำที่อยู่ใน string `str` โดยฟังก์ชันนี้ต้องคืนค่าเป็น string ตัวอย่างเช่น `I-like-Star-Wars` ควรเปลี่ยนค่าเป็น `I like Star Wars` 
และห้ามใช้ method `replace` ในแบบทดสอบนี้

# --hints--

ต้องใช้ method `join` ในโค้ด

```js
assert(code.match(/\.join/g));
```

ห้ามใช้ method `replace` ในโค้ด

```js
assert(!code.match(/\.?[\s\S]*?replace/g));
```

การเรียกใช้ฟังก์ชัน `sentensify("May-the-force-be-with-you")` ต้องได้ค่าเป็น string

```js
assert(typeof sentensify('May-the-force-be-with-you') === 'string');
```

การเรียกใช้ฟังก์ชัน `sentensify("May-the-force-be-with-you")` ต้องได้ค่าเป็น string `May the force be with you`

```js
assert(sentensify('May-the-force-be-with-you') === 'May the force be with you');
```

การเรียกใช้ฟังก์ชัน `sentensify("The.force.is.strong.with.this.one")` ต้องได้ค่าเป็น string `The force is strong with this one`

```js
assert(
  sentensify('The.force.is.strong.with.this.one') ===
    'The force is strong with this one'
);
```

การเรียกใช้ฟังก์ชัน `sentensify("There,has,been,an,awakening")` ต้องได้ค่าเป็น string `There has been an awakening`

```js
assert(
  sentensify('There,has,been,an,awakening') === 'There has been an awakening'
);
```

# --seed--

## --seed-contents--

```js
function sentensify(str) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น


  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
sentensify("May-the-force-be-with-you");
```

# --solutions--

```js
function sentensify(str) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  return str.split(/\W/).join(' ');
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
```
