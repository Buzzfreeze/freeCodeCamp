---
id: 587d825b367417b2b2512c8d
title: Create an ES6 JavaScript Map
challengeType: 1
forumTopicId: 301635
dashedName: create-an-es6-javascript-map
---

# --description--

JavaScript เวอร์ชันใหม่มี Map object ในตัวซึ่งมีฟังก์ชันการทำงานส่วนใหญ่ที่เราได้เขียนมาแล้วในแบบทดสอบที่ผ่านมา Map object นี้แม้ว่าจะคล้ายกับ JavaScript object ปกติ แต่ก็มีฟังก์ชันที่มีประโยชน์บางอย่างที่ object ปกติขาดไป ตัวอย่างเช่น ES6 Map ที่ติดตามลำดับการแทรกของรายการที่เพิ่มเข้าไป ลองมาดูภาพรวมที่เข้าใจได้ยิ่งขึ้นของ method: `.has(key)` return ค่า true หรือ false ตามการมีอยู่ของคีย์, `.get(key)` return ค่าที่เกี่ยวข้องกับคีย์, `.set(key, value)` ตั้งค่า key value pair ใหม่, `.delete(key)` ลบ key value pair, `.clear()` ลบ key value pair ทั้งหมด, `.entries()` return ค่า array ของคีย์ทั้งหมดตามลำดับการแทรก, `.values()` return array ของค่าทั้งหมดในลำดับการแทรก

# --instructions--

กำหนด JavaScript Map object และกำหนดตัวแปรชื่อ myMap ให้กับ object นั้น เพิ่มคีย์และ value pair `freeCodeCamp` `Awesome!` ลงไป

# --hints--

ควรมี myMap object

```js
assert(typeof myMap === 'object');
```

myMap ควรมี key value pair `freeCodeCamp` และ `Awesome!` ข้างใน

```js
assert(myMap.get('freeCodeCamp') === 'Awesome!');
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
const myMap = new Map();

myMap.set("freeCodeCamp", "Awesome!");
```
