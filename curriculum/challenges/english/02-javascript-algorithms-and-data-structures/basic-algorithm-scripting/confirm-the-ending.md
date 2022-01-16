---
id: acda2fb1324d9b0fa741e6b5
title: Confirm the Ending
challengeType: 5
forumTopicId: 16006
dashedName: confirm-the-ending
---

# --description--
ให้ตรวจสอบว่า string ที่เป็น argument แรก (`str`) ลงท้ายด้วย string ที่เป็น argument ที่สอง (`target`) หรือไม่

เราไม่อนุญาตให้ใช้ method `.endsWith()` ซึ่งเป็นของ ES2015 เพราะว่าเราอยากให้คุณฝึกใช้ method `substring` ของ Javascript

# --hints--

การเรียกใช้ฟังก์ชัน `confirmEnding("Bastian", "n")` ควรได้ผลลัพธ์เป็น `true`

```js
assert(confirmEnding('Bastian', 'n') === true);
```

การเรียกใช้ฟังก์ชัน `confirmEnding("Congratulation", "on")` ควรได้ผลลัพธ์เป็น `true`

```js
assert(confirmEnding('Congratulation', 'on') === true);
```

การเรียกใช้ฟังก์ชัน `confirmEnding("Connor", "n")` ควรได้ผลลัพธ์เป็น `false`

```js
assert(confirmEnding('Connor', 'n') === false);
```

การเรียกใช้ฟังก์ชัน `confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")` ควรได้ผลลัพธ์เป็น `false`

```js
assert(
  confirmEnding(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
  ) === false
);
```

การเรียกใช้ฟังก์ชัน `confirmEnding("He has to give me a new name", "name")` ควรได้ผลลัพธ์เป็น `true`

```js
assert(confirmEnding('He has to give me a new name', 'name') === true);
```

การเรียกใช้ฟังก์ชัน `confirmEnding("Open sesame", "same")` ควรได้ผลลัพธ์เป็น `true`

```js
assert(confirmEnding('Open sesame', 'same') === true);
```

การเรียกใช้ฟังก์ชัน `confirmEnding("Open sesame", "sage")` ควรได้ผลลัพธ์เป็น `false`

```js
assert(confirmEnding('Open sesame', 'sage') === false);
```

การเรียกใช้ฟังก์ชัน `confirmEnding("Open sesame", "game")` ควรได้ผลลัพธ์เป็น `false`

```js
assert(confirmEnding('Open sesame', 'game') === false);
```

การเรียกใช้ฟังก์ชัน `confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")` ควรได้ผลลัพธ์เป็น `false`

```js
assert(
  confirmEnding(
    'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
    'mountain'
  ) === false
);
```

การเรียกใช้ฟังก์ชัน `confirmEnding("Abstraction", "action")` ควรได้ผลลัพธ์เป็น `true`

```js
assert(confirmEnding('Abstraction', 'action') === true);
```

ห้ามใช้ method `.endsWith()` ในโค้ด

```js
assert(!/\.endsWith\(.*?\)\s*?;?/.test(code) && !/\['endsWith'\]/.test(code));
```

# --seed--

## --seed-contents--

```js
function confirmEnding(str, target) {
  return str;
}

confirmEnding("Bastian", "n");
```

# --solutions--

```js
function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
```
