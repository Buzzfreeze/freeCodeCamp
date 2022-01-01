---
id: 587d7b89367417b2b2512b4a
title: Use Destructuring Assignment to Assign Variables from Nested Objects
challengeType: 1
forumTopicId: 301214
dashedName: use-destructuring-assignment-to-assign-variables-from-nested-objects
---

# --description--

ในการดึงค่าออกมาจาก object ที่ซ้อนกันอยู่ จะใช้หลักการเดียวกับการ destructure
ที่เราเพิ่งเรียนมาจากสองบทเรียนที่แล้ว

รอบนี้เราจะใช้ object ที่คล้ายๆ กับตัวอย่างที่แล้ว

```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

โค้ดด้านล่างเป็นตัวอย่างการดึงค่าออกจาก property ของ object และเอามากำหนดค่าให้กับตัวแปรที่มีชื่อเดียวกับ property: 

```js
const { johnDoe: { age, email }} = user;
```

ตัวอย่างด้านบนจะทำให้เราได้ตัวแปรคงที่สองตัวคือ `age` ที่มีค่าเป็น `34` และ `email` ที่มีค่าเป็น `johnDoe@freeCodeCamp.com`
ส่วนโค้ดด้านล่างนี้เป็นการดึงค่าออกมา แล้วนำไปกำหนดให้ตัวแปรที่มีชื่อไม่เหมือนกับ property:

```js
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

# --instructions--

จงเปลี่ยนโค้ดเดิมให้เป็นการกำหนดค่าโดยใช้ destructuring assignment และให้ตัวแปร `lowToday` และ `highToday` ดึงค่ามาจาก `today.low` และ `today.high` จาก object ที่ชื่อ `LOCAL_FORECAST` 


# --hints--

ต้องลบ assignment syntax ของ ES5 ออก

```js
assert(
  !code.match(/lowToday = LOCAL_FORECAST\.today\.low/g) &&
    !code.match(/highToday = LOCAL_FORECAST\.today.high/g)
);
```

ต้องใช้การ destructuring เพื่อสร้างตัวแปร `lowToday` 


```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(low\s*:\s*lowToday[^}]*|[^,]*,\s*low\s*:\s*lowToday\s*)}\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

ต้องใช้การ destructuring เพื่อสร้างตัวแปร `highToday` 

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(high\s*:\s*highToday[^}]*|[^,]*,\s*high\s*:\s*highToday\s*)}\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

`lowToday` ต้องมีค่าเป็น `64` and `highToday` ต้องมีค่าเป็น `77`

```js
assert(lowToday === 64 && highToday === 77);
```

# --seed--

## --seed-contents--

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  
const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
```

# --solutions--

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
 
const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;
```
