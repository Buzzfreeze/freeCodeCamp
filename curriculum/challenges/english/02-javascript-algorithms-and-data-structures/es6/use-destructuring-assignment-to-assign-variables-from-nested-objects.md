---
id: 587d7b89367417b2b2512b4a
title: Use Destructuring Assignment to Assign Variables from Nested Objects
challengeType: 1
forumTopicId: 301214
dashedName: use-destructuring-assignment-to-assign-variables-from-nested-objects
---

# --description--

คุณสามารถใช้หลักการเดียวกันจากสองบทเรียนก่อนหน้านี้เพื่อ destructure ค่าจาก object ที่ซ้อนกัน

ใช้ object ที่คล้ายกับตัวอย่างก่อนหน้า

```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

นี่เป็นวิธีการแยก (extract) value ออกจาก object properties และกำหนดค่าให้กับตัวแปรที่มีชื่อเดียวกัน: 

```js
const { johnDoe: { age, email }} = user;
```

และนี่เป็นวิธีที่คุณสามารถกำหนด values ของ object properties ให้กับตัวแปรที่มีชื่อต่างกัน

```js
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

# --instructions--

จงแทนที่การกำหนดค่าด้วย destructuring assignment โดยยังคงกำหนดให้ตัวแปร `lowToday` และ `highToday` มีค่าเท่ากับ `today.low` และ `today.high` จาก object `LOCAL_FORECAST` 


# --hints--

คุณควรลบการกำหนดค่าแบบ ES5

```js
assert(
  !code.match(/lowToday = LOCAL_FORECAST\.today\.low/g) &&
    !code.match(/highToday = LOCAL_FORECAST\.today.high/g)
);
```

คุณควรใช้ destructuring เพื่อสร้างตัวแปร `lowToday` 


```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(low\s*:\s*lowToday[^}]*|[^,]*,\s*low\s*:\s*lowToday\s*)}\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

คุณควรใช้ destructuring เพื่อสร้างตัวแปร `highToday` 

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(high\s*:\s*highToday[^}]*|[^,]*,\s*high\s*:\s*highToday\s*)}\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

`lowToday` ควรเท่ากับ `64` and `highToday` ควรเท่ากับ `77`

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

// Only change code below this line
  
const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// Only change code above this line
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
