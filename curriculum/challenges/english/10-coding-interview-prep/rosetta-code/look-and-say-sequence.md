---
id: 5e6dd14797f5ce267c2f19d0
title: Look-and-say sequence
challengeType: 5
forumTopicId: 385277
dashedName: look-and-say-sequence
---

# --description--

[Look and say sequence](<https://en.wikipedia.org/wiki/Look and say sequence>) เป็นลำดับของตัวเลขที่เป็น recursive

โดยมีคำจำกัดความว่า

<ul><li>รับค่าเป็นเลขฐานสิบ</li>
<li>จัดกลุ่มเลขที่เป็นเลขเดียวกันที่อยู่ติดกัน</li>
<li>อ่านค่าจากซ้ายไปขวา โดยอ่านเป็นกลุ่ม โดยอ่านค่าจำนวนของตัวเลขที่อยู่ในกลุ่ม จากนั้นจึงอ่านค่าของตัวเลขนั้น</li></ul><span>ค่าที่อ่านได้นี้จะเป็นเลขตัวต่อไปในชุด</span>

เช่น

<ul><li>ถ้ามีเลข 1 คุณจะมีเลข 1 หนึ่งตัวทำให้ได้ผลลัพธ์เป็น 11</li>
<li>ถ้ามีเลข 11 คุณจะมีเลข 1 สองตัวทำให้ได้ผลลัพธ์เป็น 21</li>
<li>ถ้ามีเลข 21 คุณจะมีเลข 2 หนึ่งตัว และเลข 1 หนึ่งตัว (12)(11) ทำให้ได้ผลลัพธ์เป็น 1211</li>
<li>ถ้ามีเลข 1211 คุณจะมีเลข 1 หนึ่งตัว เลข 2 หนึ่งตัวและเลข 1 สองตัว (11)(12)(21) ทำให้ได้ผลลัพธ์เป็น 111221</li></ul>

# --instructions--

ให้เขียนฟังก์ชันที่รับสตริง และคืนค่าออกไปตามเงื่อนไขด้านบน

# --hints--

`lookAndSay` ต้องเป็นฟังก์ชัน

```js
assert(typeof lookAndSay == 'function');
```

`lookAndSay("1")` ต้องคืนค่าเป็นสตริง

```js
assert(typeof lookAndSay('1') == 'string');
```

`lookAndSay("1")` ต้องคืนค่าเป็น `"11"`

```js
assert.equal(lookAndSay('1'), '11');
```

`lookAndSay("11")` ต้องคืนค่าเป็น `"21"`

```js
assert.equal(lookAndSay('11'), '21');
```

`lookAndSay("21")` ต้องคืนค่าเป็น `"1211"`

```js
assert.equal(lookAndSay('21'), '1211');
```

`lookAndSay("1211")` ต้องคืนค่าเป็น `"111221"`

```js
assert.equal(lookAndSay('1211'), '111221');
```

`lookAndSay("3542")` ต้องคืนค่าเป็น `"13151412"`

```js
assert.equal(lookAndSay('3542'), '13151412');
```

# --seed--

## --seed-contents--

```js
function lookAndSay(str) {

}
```

# --solutions--

```js
function lookAndSay(str) {
    return str.replace(/(.)\1*/g, function(seq, p1) {
      return seq.length.toString() + p1;
    });
}
```
