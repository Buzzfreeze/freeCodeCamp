---
id: 594810f028c0303b75339ad1
title: Happy numbers
challengeType: 5
forumTopicId: 302280
dashedName: happy-numbers
---

# --description--

[happy number](https://en.wikipedia.org/wiki/Happy_number) จะมาจากกระบวนการต่อไปนี้:

เริ่มต้นด้วยจำนวนเต็มบวก และแทนที่ตัวเลขนั้นด้วยผลรวมของกำลังสองของตัวเลขในแต่ละหลัก จากนั้นทำซ้ำจนกว่าตัวเลขจะเท่ากับ `1` หรือวนซ้ำไม่รู้จบในวงจรที่ไม่มี `1`

เลขที่ทำให้จบที่เลข `1` จะถือเป็น happy number ในขณะที่ตัวเลขที่ไม่ได้จบด้วย `1` จะเป็นตัวเลขที่ไม่ใช่ happy number

# --instructions--

ให้เขียนฟังก์ชันที่ดูว่าตัวเลขเป็น happy number หรือไม่ และให้คืนค่าเป็น true หรือ false

# --hints--

`happy` ต้องเป็นฟังก์ชัน

```js
assert(typeof happy === 'function');
```

`happy(1)` ต้องคืนค่าเป็น boolean

```js
assert(typeof happy(1) === 'boolean');
```

`happy(1)` ต้องคืนค่าเป็น `true`

```js
assert(happy(1));
```

`happy(2)` ต้องคืนค่าเป็น `false`

```js
assert(!happy(2));
```

`happy(7)` ต้องคืนค่าเป็น `true`

```js
assert(happy(7));
```

`happy(10)` ต้องคืนค่าเป็น `true`

```js
assert(happy(10));
```

`happy(13)` ต้องคืนค่าเป็น `true`

```js
assert(happy(13));
```

`happy(19)` ต้องคืนค่าเป็น `true`

```js
assert(happy(19));
```

`happy(23)` ต้องคืนค่าเป็น `true`

```js
assert(happy(23));
```

`happy(28)` ต้องคืนค่าเป็น `true`

```js
assert(happy(28));
```

`happy(31)` ต้องคืนค่าเป็น `true`

```js
assert(happy(31));
```

`happy(32)` ต้องคืนค่าเป็น `true`

```js
assert(happy(32));
```

`happy(33)` ต้องคืนค่าเป็น `false`

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
