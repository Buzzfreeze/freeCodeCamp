---
id: 594faaab4e2a8626833e9c3d
title: Tokenize a string with escaping
challengeType: 5
forumTopicId: 302338
dashedName: tokenize-a-string-with-escaping
---

# --description--

ให้เขียนฟังก์ชันหรือโปรแกรมที่สามารถแยกสตริงที่ตำแหน่งตัวอักษรที่ระบุได้

ฟังก์ชันนี้ต้องรับพารามิเตอร์สามตัว คือ

<ul>
  <li><strong>สตริง</strong></li>
  <li><strong>ตัวอักษรที่ใช้แยกสตริง</strong></li>
  <li><strong>escape character ของตัวอักษรที่ใช้แยกสตริง</strong></li>
</ul>

ซึ่งต้องคืนค่าเป็น array ของสตริงที่แยกแล้ว

กฎสำหรับการแยก:

<ul>
  <li>สตริงที่ถูกแยกจะกลายเป็น element ของผลลัพธ์</li>
  <li>ถ้าแยกแล้วได้สตริงว่าง ก็ต้องคืนค่าสตริงว่างนั้นออกมาด้วย ถึงแม้จะอยู่ที่ส่วนต้นหรือท้ายสตริงก็ตาม</li>
</ul>

กฎสำหรับการ escape:

<ul>
  <li>ตัวอักษรที่ถูก Escape จะต้องถูกนำหน้าด้วย escape character</li>
  <li>ถ้า escape character นำหน้าตัวอักษรที่ไม่ได้มีความพิเศษ ก็ให้ถือว่าเป็นการ escape เหมือนกันแต่ไม่ต้องทำอะไรพิเศษ</li>
  <li>การใช้ escape character ต้องไม่ทำให้ escape character ปรากฏในผลลัพธ์</li>
</ul>

ถ้ามีสตริงเป็น

<pre>one^|uno||three^^^^|four^^^|^cuatro|</pre>

และใช้ `|` เป็นตัวแยก และ `^` เป็น escape character ฟังก์ชันของคุณต้องคืนค่าเป็น array นี้:

<pre>  ['one|uno', '', 'three^^', 'four^|cuatro', '']
</pre>

# --hints--

`tokenize` ต้องเป็นฟังก์ชัน

```js
assert(typeof tokenize === 'function');
```

`tokenize` ต้องคืนค่าเป็น array

```js
assert(typeof tokenize('a', 'b', 'c') === 'object');
```

`tokenize('one^|uno||three^^^^|four^^^|^cuatro|', '|', '^')` ต้องคืนค่าเป็น `['one|uno', '', 'three^^', 'four^|cuatro', '']`

```js
assert.deepEqual(tokenize(testStr1, '|', '^'), res1);
```

`tokenize('a@&bcd&ef&&@@hi', '&', '@')` ต้องคืนค่าเป็น `['a&bcd', 'ef', '', '@hi']`

```js
assert.deepEqual(tokenize(testStr2, '&', '@'), res2);
```

# --seed--

## --after-user-code--

```js
const testStr1 = 'one^|uno||three^^^^|four^^^|^cuatro|';
const res1 = ['one|uno', '', 'three^^', 'four^|cuatro', ''];

// TODO add more tests
const testStr2 = 'a@&bcd&ef&&@@hi';
const res2 = ['a&bcd', 'ef', '', '@hi'];
```

## --seed-contents--

```js
function tokenize(str, sep, esc) {
  return true;
}
```

# --solutions--

```js
// tokenize :: String -> Character -> Character -> [String]
function tokenize(str, charDelim, charEsc) {
  const dctParse = str.split('')
    .reduce((a, x) => {
      const blnEsc = a.esc;
      const blnBreak = !blnEsc && x === charDelim;
      const blnEscChar = !blnEsc && x === charEsc;

      return {
        esc: blnEscChar,
        token: blnBreak ? '' : (
          a.token + (blnEscChar ? '' : x)
        ),
        list: a.list.concat(blnBreak ? a.token : [])
      };
    }, {
      esc: false,
      token: '',
      list: []
    });

  return dctParse.list.concat(
    dctParse.token
  );
}
```
