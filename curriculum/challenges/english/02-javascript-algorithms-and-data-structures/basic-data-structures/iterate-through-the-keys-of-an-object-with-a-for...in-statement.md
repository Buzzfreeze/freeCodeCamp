---
id: 587d7b7d367417b2b2512b1d
title: Iterate Through the Keys of an Object with a for...in Statement
challengeType: 1
forumTopicId: 301162
dashedName: iterate-through-the-keys-of-an-object-with-a-for---in-statement
---

# --description--

บางครั้ง คุณอาจต้องการวนอ่านทุกคีย์ภายใน object ซึ่งต้องใช้ syntax เฉพาะใน JavaScript ที่เรียกว่าคำสั่ง <dfn>for...in</dfn> อย่างไรก็ตาม สำหรับ object `users` ของเรา อาจมีลักษณะดังนี้:

```js
for (let user in users) {
  console.log(user);
}
```

โค้ดด้านบนควรแสดง log เป็น `Alan`, `Jeff`, `Sarah`, และ `Ryan` - ค่าในแต่ละบรรทัด

ในคำสั่งนี้ เราประกาศตัวแปร `user` และอย่างที่คุณเห็น ตัวแปรนี้ถูกรีเซ็ตในแต่ละรอบเพื่อรับค่า key ของ object เมื่อมีการวนอ่าน object ทีละรอบ ส่งผลให้ชื่อผู้ใช้แต่ละรายถูกพิมพ์ไปยังหน้า console

**หมายเหตุ:** object ไม่รักษาลำดับของ key ที่เก็บไว้เหมือนกับที่ array ทำ ดังนั้นตำแหน่งของ key บน object หรือลำดับที่แสดง จึงไม่เกี่ยวข้องเมื่ออ้างอิงหรือเข้าถึง key นั้น

# --instructions--

เราได้ประกาศฟังก์ชัน `countOnline` ซึ่งรับหนึ่ง argument (object users) จงใช้คำสั่ง <dfn>for...in</dfn> ภายในฟังก์ชันนี้เพื่อวนอ่าน object users ที่ส่งผ่านเข้าไปยังฟังก์ชัน และคืนค่าเป็นจำนวนผู้ใช้ที่มี property `online` เป็น `true` ตัวอย่างของ object users ที่สามารถส่งผ่านไปยัง `countOnline` ได้แสดงดังโค้ดด้านล่าง โดยผู้ใช้แต่ละคนจะมี property `online` ที่มีค่า `true` หรือ `false`

```js
{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}
```

# --hints--

function `countOnline` ควรใช้คำสั่ง `for in` เพื่อวนเข้าไปยัง object key ของ object ที่ส่งผ่านเข้าไป 

```js
assert(
  code.match(
    /for\s*\(\s*(var|let|const)\s+[a-zA-Z_$]\w*\s+in\s+[a-zA-Z_$]\w*\s*\)/
  )
);
```

function `countOnline` ควรคืนค่า `1` เมื่อ object `{ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }`  ถูกส่งผ่านเข้าไป

```js
assert(countOnline(usersObj1) === 1);
```

function `countOnline` ควรคืนค่า `2` เมื่อ object `{ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }`  ถูกส่งผ่านเข้าไป

```js
assert(countOnline(usersObj2) === 2);
```

function `countOnline` ควรคืนค่า `0` เมื่อ object `{ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }` ถูกส่งผ่านเข้าไป


```js
assert(countOnline(usersObj3) === 0);
```

# --seed--

## --after-user-code--

```js
const usersObj1 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

const usersObj2 = {
  Alan: {
    online: true
  },
  Jeff: {
    online: false
  },
  Sarah: {
    online: true
  }
}


const usersObj3 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: false
  },
  Sarah: {
    online: false
  }
}
```

## --seed-contents--

```js
function countOnline(usersObj) {
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function countOnline(usersObj) {
  let online = 0;
  for(let user in usersObj){
    if(usersObj[user].online) {
      online++;
    }
  }
  return online;
}
```
