---
id: 587d7b8a367417b2b2512b4e
title: Create Strings using Template Literals
challengeType: 1
forumTopicId: 301200
dashedName: create-strings-using-template-literals
---

# --description--

ฟีเจอร์ใหม่ของ ES6 คือ <dfn>template literal</dfn> นี่เป็น string ประเภทพิเศษที่ทำให้การสร้าง string ที่ซับซ้อนทำให้ง่ายขึ้น

<dfn>template literal</dfn>ช่วยให้คุณสร้าง string แบบหลายบรรทัด และฟีเจอร์ string interpolation เพื่อสร้าง string 

ลองดูโค้ดดังนี้

```js
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
```

console จะแสดง string `Hello, my name is Zodiac Hasbro!` และ `I am 56 years old.`

จากโค้ดด้านบนมีหลายสิ่งเกิดขึ้น ประการแรก มีการใช้ backticks (`` ` ``) ไม่ใช่เครื่องหมายคำพูด (`'` หรือ `"`) เพื่อคลุม string ประการที่สอง สังเกตว่า string เป็นแบบหลายบรรทัด ทั้งในโค้ดและเอาต์พุต วิธีนี้ช่วยประหยัดการแทรก `\n` ภายใน string ซึ่งการเขียน `${variable}` ที่ใช้ด้านบนทำให้คุณ โดยไม่ต้องใช้การต่อด้วยเครื่องหมาย `+` อีกต่อไป แต่แค่วางตัวแปรลงใน string template แล้วคลุมด้วย `${` และ `}` ในทำนองเดียวกัน คุณสามารถรวม expression อื่นๆ ลงใน string literal ของคุณได้ เช่น `${a + b}` วิธีใหม่นี้ช่วยให้ คุณมีความยืดหยุ่นมากขึ้นในการสร้าง string


# --instructions--

จงใช้ template literal syntax และใช้ backticks เพื่อสร้าง array ของ list element (`li`) strings โดยข้อความของแต่ละ list element ควรเป็น array element จาก property `failure` ที่อยู่ใน `result` object และมี `class` attribute ที่มีค่า `text-warning` อย่างไรก็ตาม ฟังก์ชัน `makeList`  ควรคืนค่าเป็น array ของ list item strings

จงใช้ loop (loop ประเภทไหนก็ได้) เพื่อให้ได้ผลลัพธ์ที่ต้องการ (ตามด้านล่าง)

```js
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
```

# --hints--

`failuresList` ควรเป็น array ที่มีข้อความ `result failure` 

```js
assert(
  typeof makeList(result.failure) === 'object' && failuresList.length === 3
);
```

`failuresList` ควรเท่ากับผลลัพย์ที่กำหนด

```js
assert(
  makeList(result.failure).every(
    (v, i) =>
      v === `<li class="text-warning">${result.failure[i]}</li>` ||
      v === `<li class='text-warning'>${result.failure[i]}</li>`
  )
);
```

ควรใช้ Template string และ expression interpolation

```js
(getUserInput) => assert(getUserInput('index').match(/(`.*\${.*}.*`)/));
```

ควรใช้การวนซ้ำ

```js
(getUserInput) =>
  assert(getUserInput('index').match(/for|map|reduce|forEach|while/));
```

# --seed--

## --seed-contents--

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
```

# --solutions--

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  return arr.map(val => `<li class="text-warning">${val}</li>`);
}

const failuresList = makeList(result.failure);
```
