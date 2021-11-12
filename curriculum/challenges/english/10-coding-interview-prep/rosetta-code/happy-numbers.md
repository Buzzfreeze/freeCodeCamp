---
id: 594810f028c0303b75339ad1
title: Happy numbers
challengeType: 5
forumTopicId: 302280
dashedName: happy-numbers
---

# --description--

[happy number](https://en.wikipedia.org/wiki/Happy_number) ถูกกำหนดโดยกระบวนการต่อไปนี้:

เริ่มต้นด้วยจำนวนเต็มบวกใดๆ แทนที่ตัวเลขด้วยผลรวมของกำลังสองของหลัก จากนั้นทำซ้ำขั้นตอนจนกว่าตัวเลขจะเท่ากับ `1` (ตำแหน่งที่จะอยู่) หรือวนซ้ำไม่รู้จบในวงจรที่ไม่มี `1`. ตัวเลขที่กระบวนการนี้ลงท้ายด้วย `1` เป็นตัวเลขhappy-numbers ในขณะที่ตัวเลขที่ไม่ลงท้ายด้วย `1` จะเป็นตัวเลขที่ไม่ใช่ happy number

# --instructions--

เขียน function returns true ถ้าเป็น happy number หรือ false ถ้าไม่ใช่.

# --hints--

`happy` ควรเป็น function.

```js
assert(typeof happy === 'function');
```

`happy(1)` ควร return boolean.

```js
assert(typeof happy(1) === 'boolean');
```

`happy(1)` ควร return `true`.

```js
assert(happy(1));
```

`happy(2)` ควร return `false`.

```js
assert(!happy(2));
```

`happy(7)` ควร return `true`.

```js
assert(happy(7));
```

`happy(10)` ควร return `true`.

```js
assert(happy(10));
```

`happy(13)` ควร return `true`.

```js
assert(happy(13));
```

`happy(19)` ควร return `true`.

```js
assert(happy(19));
```

`happy(23)` ควร return `true`.

```js
assert(happy(23));
```

`happy(28)` ควร return `true`.

```js
assert(happy(28));
```

`happy(31)` ควร return `true`.

```js
assert(happy(31));
```

`happy(32)` ควร return `true`.

```js
assert(happy(32));
```

`happy(33)` ควร return `false`.

```js
assert(!happy(33));
```

# --seed--

## --seed-contents--

```js
function happy(number) {

}
```

# --solutions--

```js
function happy (number) {
  let m;
  let digit;
  const cycle = [];

  while (number !== 1 && cycle[number] !== true) {
    cycle[number] = true;
    m = 0;
    while (number > 0) {
      digit = number % 10;
      m += Math.pow(digit, 2);
      number = (number - digit) / 10;
    }
    number = m;
  }
  return (number === 1);
}
```
