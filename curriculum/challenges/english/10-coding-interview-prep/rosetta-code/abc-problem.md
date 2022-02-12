---
id: 594810f028c0303b75339acc
title: ABC Problem
challengeType: 5
forumTopicId: 302220
dashedName: abc-problem
---

# --description--

สมมติว่ามีกล่องสี่เหลี่ยมทั้งหมด 20 กล่อง โดยที่แต่ละกล่องจะมีตัวอักษรอยู่บนสองหน้าของกล่องนั้น 

ลองดูชุดบล็อคตัวอย่าง:

<pre>(B O)
(X K)
(D Q)
(C P)
(N A)
(G T)
(R E)
(T G)
(Q D)
(F S)
(J W)
(H U)
(V I)
(A N)
(O B)
(E R)
(F S)
(L Y)
(P C)
(Z M)
</pre>

จากตัวอย่างด้านบน จะทำให้มีกล่องแรก ที่มี B อยู่บนหน้าหนึ่ง O อยู่อีกหน้าหนึ่ง กล่องที่สองมี X อยู่บนหน้าหนึ่ง และมี K อยู่บนอีกหน้าหนึ่ง

# --instructions--

ให้สร้างฟังก์ชันที่รับค่าเป็น string และตรวจสอบว่าเราสามารถนำกล่องที่มีมาต่อให้เป็นคำนั้นได้หรือไม่

กฏที่ต้องรู้คือ

<ul>
  <li>เมื่อใช้ตัวอักษรในบล็อคนั้นแล้ว จะใช้อีกไม่ได้</li>
  <li>ฟังก์ชันต้องเป็น case-insensitive</li>
</ul>

# --hints--

`canMakeWord` ต้องเป็นฟังก์ชัน

```js
assert(typeof canMakeWord === 'function');
```

`canMakeWord` ต้องคืนค่าเป็น boolean

```js
assert(typeof canMakeWord('hi') === 'boolean');
```

`canMakeWord("bark")` ต้องคืนค่าเป็น true

```js
assert(canMakeWord(words[0]));
```

`canMakeWord("BooK")` ต้องคืนค่าเป็น false

```js
assert(!canMakeWord(words[1]));
```

`canMakeWord("TReAT")` ต้องคืนค่าเป็น true

```js
assert(canMakeWord(words[2]));
```

`canMakeWord("COMMON")` ต้องคืนค่าเป็น false

```js
assert(!canMakeWord(words[3]));
```

`canMakeWord("squAD")` ต้องคืนค่าเป็น true

```js
assert(canMakeWord(words[4]));
```

`canMakeWord("conFUSE")` ต้องคืนค่าเป็น true

```js
assert(canMakeWord(words[5]));
```

# --seed--

## --after-user-code--

```js
const words = ['bark', 'BooK', 'TReAT', 'COMMON', 'squAD', 'conFUSE'];
```

## --seed-contents--

```js
function canMakeWord(word) {

}
```

# --solutions--

```js
function canMakeWord(word) {
  const characters = 'BO XK DQ CP NA GT RE TG QD FS JW HU VI AN OB ER FS LY PC ZM';
  const blocks = characters.split(' ').map(pair => pair.split(''));

  const letters = [...word.toUpperCase()];
  let length = letters.length;
  const copy = new Set(blocks);

  letters.forEach(letter => {
    for (let block of copy) {
      const index = block.indexOf(letter);

      if (index !== -1) {
        length--;
        copy.delete(block);
        break;
      }
    }
  });
  return !length;
}
```
