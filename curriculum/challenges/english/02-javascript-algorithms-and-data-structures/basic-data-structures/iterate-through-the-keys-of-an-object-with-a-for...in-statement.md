---
id: 587d7b7d367417b2b2512b1d
title: Iterate Through the Keys of an Object with a for...in Statement
challengeType: 1
forumTopicId: 301162
dashedName: iterate-through-the-keys-of-an-object-with-a-for---in-statement
---

# --description--

บางครั้ง คุณอาจต้องการวนอ่านทุกคีย์ภายใน object ซึ่งต้องใช้ syntax เฉพาะใน JavaScript ที่เรียกว่าคำสั่ง <dfn>for...in</dfn> ] 
ลองดูตัวอย่างการใช้กับ object `users` ของเรา:

```js
for (let user in users) {
  console.log(user);
}
```

โค้ดด้านบนจะ log ข้อมูลออกมาเป็น `Alan`, `Jeff`, `Sarah`, และ `Ryan` อย่างละบรรทัด

ในคำสั่งนี้ เราประกาศตัวแปร `user` และตัวแปรนี้จะถูกรีเซ็ตในการวนแต่ละรอบเพื่อรับค่า key ของ object ทำให้ได้รับชื่อของคนแต่ละคนและไปแสดงบน console

**หมายเหตุ:** object จะไม่เรียงลำดับ key เหมือน array ดังนั้นตำแหน่งหรือลำดับของ key บน object จึงเปลี่ยนแปลงได้

# --instructions--

เราได้ประกาศฟังก์ชัน `countOnline` ซึ่งรับ argument 1 ตัว (object `users`) ให้แล้ว
ให้ใช้คำสั่ง <dfn>for...in</dfn> ภายในฟังก์ชันนี้เพื่อวนอ่าน object `users` ที่ส่งผ่านเข้าไปยังฟังก์ชัน และคืนค่าเป็นจำนวนผู้ใช้ที่มี property `online` เป็น `true` 
โค้ดด้านล่างเป็นตัวอย่างของ object `users` ที่จะถูกส่งเข้าไปในฟังก์ชัน `countOnline` โดยผู้ใช้แต่ละคนจะมี property `online` ที่มีค่า `true` หรือ `false`

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

ต้องใช้คำสั่ง `for in` ในฟังก์ชัน `countOnline` เพื่อวนเข้าไปอ่าน key ของ object ที่ส่งเข้าไป 

```js
assert(
  code.match(
    /for\s*\(\s*(var|let|const)\s+[a-zA-Z_$]\w*\s+in\s+[a-zA-Z_$]\w*\s*\)/
  )
);
```

ฟังก์ชัน `countOnline` ต้องคืนค่าเป็น `1` เมื่อเราส่ง object `{ Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } }` เข้าไป

```js
assert(countOnline(usersObj1) === 1);
```

ฟังก์ชัน `countOnline` ต้องคืนค่าเป็น `2` เมื่อเราส่ง object `{ Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }` เข้าไป

```js
assert(countOnline(usersObj2) === 2);
```

ฟังก์ชัน `countOnline` ต้องคืนค่าเป็น `0` เมื่อเราส่ง object `{ Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } }`เข้าไป


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
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
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
