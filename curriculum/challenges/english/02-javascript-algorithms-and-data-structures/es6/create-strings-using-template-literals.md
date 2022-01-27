---
id: 587d7b8a367417b2b2512b4e
title: Create Strings using Template Literals
challengeType: 1
forumTopicId: 301200
dashedName: create-strings-using-template-literals
---

# --description--

ฟีเจอร์ใหม่อีกตัวของ ES6 คือ <dfn>template literal</dfn> ซึ่งเป็น string แบบพิเศษที่ทำให้การสร้าง string ที่ซับซ้อนง่ายขึ้น

<dfn>template literal</dfn> จะทำให้เราเขียน string ที่มีหลายบรรทัดได้ และเราก็จะใช้ฟีเจอร์ string interpolation เพื่อสร้าง string ได้ด้วย

ลองดูโค้ดตัวอย่าง:

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

โค้ดด้านบนจะมีรายละเอียดค่อนข้างเยอะ เราจะมาดูทีละรายละเอียดกัน  
อย่างแรก เราจะมีการใช้ backtick (`` ` ``) ในการครอบ string แทนเครื่องหมาย quote (`'` กับ `"`)  
อย่างที่สอง เราจะเห็นว่า string นี้มีสองบรรทัดทั้งในโค้ดและเอาต์พุต การใช้วิธีนี้จะทำให้เราไม่ต้องใช้ `\n` ใน string  
อย่างที่สาม การเขียน `${variable}` จะทำให้เราไม่ต้องต่อ string ด้วยเครื่องหมาย `+` อีกต่อไป เราแค่วางตัวแปรลงใน string template แล้วครอบด้วย `${` และ `}` ก็จะเป็นการแสดงค่าของตัวแปรนั้นใน string แล้ว แล้วเราก็ยังสามารถใส่ expression อื่นๆ ลงใน string literal ของได้ เช่น `${a + b}`  
วิธีใหม่นี้จะทำให้เราสร้าง string ได้ยืดหยุ่นมากขึ้น


# --instructions--

จงใช้ template literal syntax และใช้ backtick เพื่อสร้าง array ของ string ที่เป็น list element (`li`) โดยข้อความใน list element ต้องมาจาก array ของ property ที่ชื่อ `failure` ที่อยู่ใน object ที่ชื่อ `result`  และมี `class` เป็น `text-warning`  
ฟังก์ชัน `makeList` ควรคืนค่าเป็น array ของ list element ที่เป็น string

จงใช้ loop (loop ประเภทไหนก็ได้) เพื่อให้ได้ผลลัพธ์ตามข้อมูลด้านล่าง

```js
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
```

# --hints--

`failuresList` ต้องเป็น array ที่มี string จาก `result.failure` 

```js
assert(
  typeof makeList(result.failure) === 'object' && failuresList.length === 3
);
```

`failuresList` ต้องมีค่าเท่ากับผลลัพธ์ที่กำหนดให้

```js
assert(
  makeList(result.failure).every(
    (v, i) =>
      v === `<li class="text-warning">${result.failure[i]}</li>` ||
      v === `<li class='text-warning'>${result.failure[i]}</li>`
  )
);
```

ควรใช้ Template string (การใช้ backtick) และ expression interpolation (การใช้ `${}`)

```js
(getUserInput) => assert(getUserInput('index').match(/(`.*\${.*}.*`)/));
```

ต้องใช้ loop

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
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  const failureItems = [];
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น

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
