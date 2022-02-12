---
id: 587d825b367417b2b2512c8d
title: Create an ES6 JavaScript Map
challengeType: 1
forumTopicId: 301635
dashedName: create-an-es6-javascript-map
---

# --description--

JavaScript เวอร์ชันใหม่มี Map object ให้เราแล้วโดยที่ไม่ต้องเขียนเอง โดยจะมีฟังก์ชันที่เราเขียนกันมาในแบบทดสอบที่แล้วทั้งหมด 
ถึงแม้ Map object จะคล้ายกับ JavaScript object ปกติ แต่ก็มีฟังก์ชันที่มีประโยชน์บางอย่างที่ object ปกติขาดไป ตัวอย่างเช่น ES6 Map จะเก็บลำดับของข้อมูลที่เพิ่มเข้าไปด้วย 
ลองมาดูภาพรวมของ method กัน: 
`.has(key)` จะคืนค่าเป็น true หรือ false ตามการมีอยู่ของคีย์
`.get(key)` จะคืนค่าเป็นค่าของคีย์นั้น
`.set(key, value)` จะตั้งค่า key value pair ใหม่
`.delete(key)` จะลบ key value pair นั้น
`.clear()` จะลบ key value pair ทั้งหมด
`.entries()` จะคืนค่าเป็น array ของคีย์ทั้งหมดตามลำดับที่เพิ่มเข้าไป
`.values()` จะคืนค่าเป็น array ของค่าทั้งหมดตามลำดับที่เพิ่มเข้าไป

# --instructions--

ให้ประกาศ JavaScript Map object และเก็บตัวแปรชื่อ myMap 
จากนั้นเพิ่มคีย์ `CareerVio` ที่มีค่าเป็น `Awesome!` ลงไป

# --hints--

ต้องมี object ชื่อ myMap

```js
assert(typeof myMap === 'object');
```

myMap ต้องมี `CareerVio` ที่มีค่าเป็น `Awesome!` อยู่ข้างใน

```js
assert(myMap.get('CareerVio') === 'Awesome!');
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
const myMap = new Map();

myMap.set("CareerVio", "Awesome!");
```
