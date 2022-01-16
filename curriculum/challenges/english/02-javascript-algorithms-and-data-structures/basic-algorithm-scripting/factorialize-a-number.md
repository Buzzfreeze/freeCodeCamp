---
id: a302f7aae1aa3152a5b413bc
title: Factorialize a Number
challengeType: 5
forumTopicId: 16013
dashedName: factorialize-a-number
---

# --description--

แบบทดสอบนี้ให้คำนวณค่าแฟกทอเรียลของเลขจำนวนเต็ม

ถ้าให้ `n` เป็นจำนวนเต็มบวก ค่าแฟกทอเรียลคือผลคูณของเลขตั้งแต่ 1 จนถึง `n`

เครื่องหมายของแฟกทอเรียลคือ `!`

ตัวอย่างเช่น `5! = 1 * 2 * 3 * 4 * 5 = 120`

แฟกทอเรียลจะใช้กับเลขจำนวนเต็มที่มากกว่าหรือเท่ากับศูนย์เท่านั้น


# --hints--

การเรียกใช้ฟังก์ชัน `factorialize(5)` ต้องได้ค่าเป็นตัวเลข

```js
assert(typeof factorialize(5) === 'number');
```

การเรียกใช้ฟังก์ชัน `factorialize(5)` ต้องได้ค่าเป็น `120`

```js
assert(factorialize(5) === 120);
```

การเรียกใช้ฟังก์ชัน `factorialize(10)` ต้องได้ค่าเป็น `3628800`

```js
assert(factorialize(10) === 3628800);
```

การเรียกใช้ฟังก์ชัน `factorialize(20)` ต้องได้ค่าเป็น `2432902008176640000`

```js
assert(factorialize(20) === 2432902008176640000);
```

การเรียกใช้ฟังก์ชัน `factorialize(0)` ต้องได้ค่าเป็น `1`

```js
assert(factorialize(0) === 1);
```

# --seed--

## --seed-contents--

```js
function factorialize(num) {
  return num;
}

factorialize(5);
```

# --solutions--

```js
function factorialize(num) {
  return num < 1 ? 1 : num * factorialize(num - 1);
}

factorialize(5);
```
