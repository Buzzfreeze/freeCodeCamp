---
id: 587d7b7c367417b2b2512b1a
title: Access Property Names with Bracket Notation
challengeType: 1
forumTopicId: 301150
dashedName: access-property-names-with-bracket-notation
---

# --description--

ในบทเรียนเรื่อง object บทแรก เราได้พูดถึงการใช้ bracket notation เพื่อเข้าถึงค่าของ property ตามค่าของตัวแปรไปแล้ว 
เช่น สมมติว่า object `foods` ของเรา ถูกใช้ในโปรแกรมสำหรับเครื่องคิดเงินในซูเปอร์มาร์เก็ต โดยเรามีฟังก์ชันที่ดึงค่าของ `selectedFood` โดยการแสกนบาร์โค้ดมาให้ และเราต้องดูว่าใน object `foods` มีอาหารนั้นอยู่หรือไม่ โค้ดอาจมีหน้าตาประมาณนี้

```js
let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];
```

โค้ดนี้จะนำค่าของตัวแปร `selectedFood` มาเป็น key และคืนค่า value ของ key นั้นใน object `foods` หรือคืนค่าเป็น `undefined` ถ้าไม่เจอ key 
Bracket notation มีประโยชน์มากในกรณีนี้ เพราะบางครั้งเราอาจไม่รู้ว่ามี property อะไรบ้าง หรือเราอาจอยากเข้าถึง propery แบบอิสระมากขึ้น

# --instructions--

เราได้สร้างฟังก์ชันชื่อ `checkInventory` ซึ่งรับ `scannedItem` เป็น argument 
ให้คืนค่า value ของ key ที่ตรงกับตัวแปร `scannedItem` ที่อยู่ใน object `foods` 
ให้สมมติว่า argument `scannedItem` นั้นจะมีค่าใน `foods` เสมอ

# --hints--

`checkInventory` ต้องเป็นฟังก์ชัน

```js
assert.strictEqual(typeof checkInventory, 'function');
```

object `foods` ต้องมี key-value ตามนี้เท่านั้น: `apples: 25`, `oranges: 32`, `plums: 28`, `bananas: 13`, `grapes: 35`, `strawberries: 27`.

```js
assert.deepEqual(foods, {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
});
```

การเรียกใช้ฟังก์ชัน `checkInventory("apples")` ต้องได้ค่าเป็น `25`

```js
assert.strictEqual(checkInventory('apples'), 25);
```

การเรียกใช้ฟังก์ชัน `checkInventory("bananas")` ต้องได้ค่าเป็น `13`

```js
assert.strictEqual(checkInventory('bananas'), 13);
```

การเรียกใช้ฟังก์ชัน `checkInventory("strawberries")` ต้องได้ค่าเป็น `27`

```js
assert.strictEqual(checkInventory('strawberries'), 27);
```

# --seed--

## --seed-contents--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}

console.log(checkInventory("apples"));
```

# --solutions--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}
```
