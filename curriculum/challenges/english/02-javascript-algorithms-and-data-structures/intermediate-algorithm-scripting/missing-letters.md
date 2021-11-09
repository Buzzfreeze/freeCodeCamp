---
id: af7588ade1100bde429baf20
title: Missing letters
challengeType: 5
forumTopicId: 16023
dashedName: missing-letters
---

# --description--

จงหาตัวอักษรที่หายไปในช่วงตัวอักษร (letter range) ที่ส่งเข้าไปในฟังก์ชัน แล้วคืนค่าเป็นตัวอักษรที่หายไปนั้นออกมา
หากไม่มีตัวอักษรใดหายไปเลย ให้คืนค่าเป็น `undefined`

# --hints--

`fearNotLetter("abce")` ควรคืนค่าเป็น string `d`.

```js
assert.deepEqual(fearNotLetter('abce'), 'd');
```

`fearNotLetter("abcdefghjklmno")` ควรคืนค่าเป็น string `i`.

```js
assert.deepEqual(fearNotLetter('abcdefghjklmno'), 'i');
```

`fearNotLetter("stvwx")` ควรคืนค่าเป็น string `u`.

```js
assert.deepEqual(fearNotLetter('stvwx'), 'u');
```

`fearNotLetter("bcdf")` ควรคืนค่าเป็น string `e`.

```js
assert.deepEqual(fearNotLetter('bcdf'), 'e');
```

`fearNotLetter("abcdefghijklmnopqrstuvwxyz")` ควรคืนค่าเป็น `undefined`.

```js
assert.isUndefined(fearNotLetter('abcdefghijklmnopqrstuvwxyz'));
```

# --seed--

## --seed-contents--

```js
function fearNotLetter(str) {
  return str;
}

fearNotLetter("abce");
```

# --solutions--

```js
function fearNotLetter (str) {
  for (var i = str.charCodeAt(0); i <= str.charCodeAt(str.length - 1); i++) {
    var letter = String.fromCharCode(i);
    if (str.indexOf(letter) === -1) {
      return letter;
    }
  }

  return undefined;
}
```
