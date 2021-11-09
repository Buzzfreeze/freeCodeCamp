---
id: acda2fb1324d9b0fa741e6b5
title: Confirm the Ending
challengeType: 5
forumTopicId: 16006
dashedName: confirm-the-ending
---

# --description--
ให้ตรวจสอบว่า string ที่เป็น argument ที่สอง (`target`) เป็นคำลงท้ายของ string ที่เป็น argument แรก (`str`) หรือไม่

แบบทดสอบนี้สามารถใช้ method `.endsWith()` ซึ่งมีใน ES2015 แต่อย่างไรก็ตาม เพื่อให้ตรงกับวัตถุประสงค์ของแบบทดสอบนี้ เราต้องการให้คุณใช้ Javascript substring method แทน

# --hints--

`confirmEnding("Bastian", "n")` ควรได้ผลลัพธ์เป็น `true`.

```js
assert(confirmEnding('Bastian', 'n') === true);
```

`confirmEnding("Congratulation", "on")` ควรได้ผลลัพธ์เป็น `true`.

```js
assert(confirmEnding('Congratulation', 'on') === true);
```

`confirmEnding("Connor", "n")` ควรได้ผลลัพธ์เป็น `false`.

```js
assert(confirmEnding('Connor', 'n') === false);
```

`confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")` ควรได้ผลลัพธ์เป็น `false`.

```js
assert(
  confirmEnding(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
  ) === false
);
```

`confirmEnding("He has to give me a new name", "name")` ควรได้ผลลัพธ์เป็น `true`.

```js
assert(confirmEnding('He has to give me a new name', 'name') === true);
```

`confirmEnding("Open sesame", "same")` ควรได้ผลลัพธ์เป็น `true`.

```js
assert(confirmEnding('Open sesame', 'same') === true);
```

`confirmEnding("Open sesame", "sage")` ควรได้ผลลัพธ์เป็น `false`.

```js
assert(confirmEnding('Open sesame', 'sage') === false);
```

`confirmEnding("Open sesame", "game")` ควรได้ผลลัพธ์เป็น `false`.

```js
assert(confirmEnding('Open sesame', 'game') === false);
```

`confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")` ควรได้ผลลัพธ์เป็น `false`.

```js
assert(
  confirmEnding(
    'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
    'mountain'
  ) === false
);
```

`confirmEnding("Abstraction", "action")` ควรได้ผลลัพธ์เป็น `true`.

```js
assert(confirmEnding('Abstraction', 'action') === true);
```

Your code should not use the built-in method `.endsWith()` to solve the challenge.

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
