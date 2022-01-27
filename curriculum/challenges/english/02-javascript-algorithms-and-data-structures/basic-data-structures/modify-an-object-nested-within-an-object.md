---
id: 587d7b7c367417b2b2512b19
title: Modify an Object Nested Within an Object
challengeType: 1
forumTopicId: 301164
dashedName: modify-an-object-nested-within-an-object
---

# --description--

ทีนี้มาดู object ที่ซับซ้อนขึ้นอีกหน่อยกัน 
property ของ object สามารถซ้อนกี่ชั้นกันได้ตามที่เราต้องการ และ value ของ property ก็สามารถเป็นข้อมูลประเภทใดก็ได้ที่ JavaScript รองรับ ซึ่งรวมถึง array และ object ด้วย ลองดูตัวอย่าง:

```js
let nestedObject = {
  id: 28802695164,
  date: 'December 31, 2016',
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8
    }
  }
};
```

`nestedObject` มีสาม property คือ `id` (เป็น number), `date` (เป็น string) และ `data` (เป็น object) แม้ว่าโครงสร้างจะซับซ้อน แต่เราก็จะเข้าถึงข้อมูลได้ด้วยวิธีเดิม 

ในการกำหนดค่า `10` ให้กับ property `busy` ของ object `onlineStatus` เราใช้จะ dot notation เพื่อเข้าถึง property นั้น:

```js
nestedObject.data.onlineStatus.busy = 10;
```

# --instructions--

เราได้ประกาศ object `userActivity` ให้แเล้ว โดยจะมีมี object ซ้อนอยู่ข้างในด้วย 
ให้เปลี่ยนค่าของ key `online` ให้เป็น `45`

# --hints--

`userActivity` ต้องมี property `id`, `date` และ `data`

```js
assert(
  'id' in userActivity && 'date' in userActivity && 'data' in userActivity
);
```

`userActivity` ต้องมี key ชื่อ `data` ที่มี value เป็น object ที่มี key เป็น `totalUsers` และ `online`

```js
assert('totalUsers' in userActivity.data && 'online' in userActivity.data);
```

property `online` ที่อยู่ใน key `data` ของ `userActivity` ต้องมีค่าเป็น `45`

```js
assert(userActivity.data.online === 45);
```

ต้องเปลี่ยนค่าของ property `online` โดยใช้เครื่อง dot หรือ bracket notation

```js
assert.strictEqual(code.search(/online: 45/), -1);
```

# --seed--

## --seed-contents--

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น

console.log(userActivity);
```

# --solutions--

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

userActivity.data.online = 45;
```
