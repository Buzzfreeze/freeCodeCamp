---
id: 587d7b89367417b2b2512b49
title: Use Destructuring Assignment to Assign Variables from Objects
challengeType: 1
forumTopicId: 301215
dashedName: use-destructuring-assignment-to-assign-variables-from-objects
---

# --description--

Destructuring ทำให้คุณสามารถกำหนดค่าให้กับตัวแปรใหม่ เมื่อ extract (แยก) ค่าออกมา คุณสามารถทำได้โดยใส่ชื่อตัวแปรใหม่หลัง colon (:) เมื่อต้องการกำหนดค่าให้กับตัวแปรใหม่

ด้านล่างคือ object เดิมจากตัวอย่างก่อนหน้า

```js
const user = { name: 'John Doe', age: 34 };
```


นี่เป็นวิธีที่คุณสามารถกำหนดค่าให้กับตัวแปรใหม่

```js
const { name: userName, age: userAge } = user;
```

คุณอาจอ่านว่า "นำค่า `user.name` ไปกำหนดค่าให้กับตัวแปรใหม่ชื่อ `userName`" ดังนั้น ค่าของ `userName` จะเป็น string `John Doe` และค่าของ `userAge` เป็นตัวเลข

# --instructions--

จงแทนที่การกำหนดค่าเดิม โดยใช้ destructuring assignment ซึ่งตัวแปร `highToday` และ `highTomorrow` ควรยังมีค่า `today` และ `tomorrow` จาก Object `HIGH_TEMPERATURES`

# --hints--

คุณควรลบการกำหนดค่าแบบ ES5

```js
assert(
  !code.match(/highToday = HIGH_TEMPERATURES\.today/g) &&
    !code.match(/highTomorrow = HIGH_TEMPERATURES\.tomorrow/g)
);
```

คุณควรใช้ destructuring เพื่อสร้างตัวแปร `highToday`

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(today\s*:\s*highToday[^}]*|[^,]*,\s*today\s*:\s*highToday\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

คุณควรใช้ destructuring เพื่อสร้างตัวแปร `highTomorrow`

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(tomorrow\s*:\s*highTomorrow[^}]*|[^,]*,\s*tomorrow\s*:\s*highTomorrow\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

`highToday` ควรเท่ากับ `77` และ `highTomorrow` ควรเท่ากับ `80`

```js
assert(highToday === 77 && highTomorrow === 80);
```

# --seed--

## --seed-contents--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// Only change code above this line
```

# --solutions--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
```
