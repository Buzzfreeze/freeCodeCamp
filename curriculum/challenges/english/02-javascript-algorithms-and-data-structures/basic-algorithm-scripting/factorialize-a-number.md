---
id: a302f7aae1aa3152a5b413bc
title: Factorialize a Number
challengeType: 5
forumTopicId: 16013
dashedName: factorialize-a-number
---

# --description--

แบบทดสอบนี้ให้คำนวณค่าแฟกทอเรียลของเลขจำนวนเต็ม

ถ้าเลขจำนวนเต็มแทนด้วย `n` ค่าแฟกทอเรียลก็คือผลคูณของเลขจำนวนเต็มบวกทั้งหมดที่น้อยกว่าหรือเท่ากับ `n`

แฟกทอเรียลมักเขียนแทนด้วย `n!`

ตัวอย่างเช่น `5! = 1 * 2 * 3 * 4 * 5 = 120`

เลขจำนวนเต็มที่มากกว่าหรือเท่ากับศูนย์เท่านั้นที่จะใช้กับแฟกทอเรียลได้


# --hints--

`factorialize(5)` ควรได้ผลลัพธ์เป็นตัวเลข

```js
assert(typeof factorialize(5) === 'number');
```

`factorialize(5)` ควรได้ผลลัพธ์เป็น `120`.

```js
assert(factorialize(5) === 120);
```

`factorialize(10)` ควรได้ผลลัพธ์เป็น `3628800`.

```js
assert(factorialize(10) === 3628800);
```

`factorialize(20)` ควรได้ผลลัพธ์เป็น `2432902008176640000`.

```js
assert(factorialize(20) === 2432902008176640000);
```

`factorialize(0)` ควรได้ผลลัพธ์เป็น `1`.

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
