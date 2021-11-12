---
id: 587d7b7c367417b2b2512b19
title: Modify an Object Nested Within an Object
challengeType: 1
forumTopicId: 301164
dashedName: modify-an-object-nested-within-an-object
---

# --description--

ทีนี้มาดู object ที่ซับซ้อนขึ้นอีกสักเล็กน้อยกัน Object properties สามารถซ้อนได้ในระดับความลึกตามที่ต้องการ และ value ของ property สามารถเป็นข้อมูลประเภทใดก็ได้ที่ JavaScript รองรับ รวมถึง array และ object อื่นๆ พิจารณาสิ่งต่อไปนี้:

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

`nestedObject` มีสาม property : `id` (ค่าคือ number), `date` (ค่าคือ string) และ `data` (ค่าคือ object ที่มีโครงสร้างที่ซ้อนกัน) แม้ว่าโครงสร้างจะมีความซับซ้อน แต่เรายังคงใช้สัญลักษณ์เดียวกันนี้ เพื่อเข้าถึงข้อมูลที่เราต้องการได้ ในการกำหนดค่า `10` ให้กับ `busy` property ของ object `onlineStatus` เราใช้ dot notation เพื่ออ้างอิง property:

```js
nestedObject.data.onlineStatus.busy = 10;
```

# --instructions--

ในที่นี้เราได้ประกาศ object `userActivity` ซึ่งมี object อื่นซ้อนอยู่ภายใน ให้ set ค่า key `online` เป็น `45`

# --hints--

`userActivity` ควรมี `id`, `date` และ `data` properties

```js
assert(
  'id' in userActivity && 'date' in userActivity && 'data' in userActivity
);
```

`userActivity` ควรมี `data` key set ไปยัง object ด้วย keys `totalUsers` และ `online`

```js
assert('totalUsers' in userActivity.data && 'online' in userActivity.data);
```

property `online` ซ้อนใน `data` key ของ `userActivity` ซึ่งควรถูก set เป็น `45`

```js
assert(userActivity.data.online === 45);
```

`online` property ควรถูกกำหนดค่า โดยใช้เครื่องหมายจุดหรือ brackets

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

// Only change code below this line

// Only change code above this line

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
