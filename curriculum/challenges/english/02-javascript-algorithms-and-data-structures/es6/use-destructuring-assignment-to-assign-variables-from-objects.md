---
id: 587d7b89367417b2b2512b49
title: Use Destructuring Assignment to Assign Variables from Objects
challengeType: 1
forumTopicId: 301215
dashedName: use-destructuring-assignment-to-assign-variables-from-objects
---

# --description--

ในการใช้ destructuring เมื่อดึงข้อมูลออกมาจาก object เราสามารถเปลี่ยนชื่อตัวแปรที่เราจะดึงข้อมูลออกมาได้ วิธีการคือต้องใส่ชื่อตัวแปรใหม่หลัง colon (`:`) เมื่อต้องการตั้งชื่ออื่นให้กับตัวแปรใหม่

ด้านล่างคือ object เดิมจากตัวอย่างก่อนหน้า

```js
const user = { name: 'John Doe', age: 34 };
```


ส่วนด้านล่างนี้เป็นวิธีตั้งชื่ออื่นให้กับตัวแปร

```js
const { name: userName, age: userAge } = user;
```

ถ้าลองอ่านโค้ดนี้เป็นคำพูดจะอ่านว่า "นำค่าของ `user.name` ไปกำหนดให้กับตัวแปรใหม่ชื่อ `userName`" จากโค้ดด้านบนนี้ค่าของ `userName` จะเป็น string `John Doe` และค่าของ `userAge` จะเป็นเลข `34`

# --instructions--

เปลี่ยนการกำหนดค่าแบบเก่าเป็นการใช้ destructuring assignment ซึ่งตัวแปร `highToday` และ `highTomorrow` จะต้องได้ค่ามาจาก parameter `today` และ `tomorrow` ของ Object ที่ชื่อ `HIGH_TEMPERATURES`

# --hints--

ต้องลบ assignment syntax ของ ES5 ออก

```js
assert(
  !code.match(/highToday = HIGH_TEMPERATURES\.today/g) &&
    !code.match(/highTomorrow = HIGH_TEMPERATURES\.tomorrow/g)
);
```

ต้องใช้การ destructuring เพื่อสร้างตัวแปร `highToday`

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(today\s*:\s*highToday[^}]*|[^,]*,\s*today\s*:\s*highToday\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

ต้องใช้การ destructuring เพื่อสร้างตัวแปร `highTomorrow`

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*(tomorrow\s*:\s*highTomorrow[^}]*|[^,]*,\s*tomorrow\s*:\s*highTomorrow\s*)}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g
  )
);
```

`highToday` ต้องมีค่าเป็น `77` และ `highTomorrow` ต้องมีค่าเป็น `80`

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

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  
const highToday = HIGH_TEMPERATURES.today;
const highTomorrow = HIGH_TEMPERATURES.tomorrow; 

// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
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
