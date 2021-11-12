---
id: 587d7b7c367417b2b2512b1a
title: Access Property Names with Bracket Notation
challengeType: 1
forumTopicId: 301150
dashedName: access-property-names-with-bracket-notation
---

# --description--

ในแบบทดสอบเรื่อง object บทแรก เรากล่าวถึงการใช้ bracket notation ซึ่งเป็นวิธีการเข้าถึงค่า property โดยดูจากตัวแปร ตัวอย่างเช่น ลองนึกภาพว่า object `foods` ของเรา กำลังถูกใช้ในโปรแกรมสำหรับเครื่องคิดเงินในซูเปอร์มาร์เก็ต เรามีบางฟังก์ชันที่ set `selectedFood` และเราต้องการตรวจสอบ object `foods` ว่ามีอาหารนั้นอยู่หรือไม่ ซึ่งอาจมีหน้าตาดังนี้

```js
let selectedFood = getCurrentFood(scannedItem);
let inventory = foods[selectedFood];
```

โค้ดนี้จะตรวจสอบค่าที่เก็บไว้ในตัวแปร `selectedFood` และคืนค่า value ของ key นั้นใน object `foods` หรือคืนค่า `undefined` หากพบ ซึ่ง Bracket notation มีประโยชน์มาก เพราะบางครั้งอาจไม่รู้ object property ก่อน runtime หรือเราต้องการเข้าถึงในลักษณะไดนามิกมากขึ้น

# --instructions--

เราได้กำหนดฟังก์ชันชื่อ `checkInventory` ซึ่งรับ scanned item เป็น argument จงคืนค่า current value ของ `scannedItem` key ที่อยู่ใน `foods` object คุณสามารถสันนิษฐานได้ว่า มีเพียง valid keys เท่านั้นที่จะเป็น argument ให้กับ `checkInventory` ได้

# --hints--

`checkInventory` ควรเป็น function

```js
assert.strictEqual(typeof checkInventory, 'function');
```

`foods` object ควรมี key-value pairs ดังนี้เท่านั้น: `apples: 25`, `oranges: 32`, `plums: 28`, `bananas: 13`, `grapes: 35`, `strawberries: 27`.

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

`checkInventory("apples")` ควรคืนค่า `25`

```js
assert.strictEqual(checkInventory('apples'), 25);
```

`checkInventory("bananas")` ควรคืนค่า `13`

```js
assert.strictEqual(checkInventory('bananas'), 13);
```

`checkInventory("strawberries")` ควรคืนค่า `27`

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
  // Only change code below this line

  // Only change code above this line
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
