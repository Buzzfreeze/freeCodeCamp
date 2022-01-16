---
id: a0b5010f579e69b815e7c5d6
title: Search and Replace
challengeType: 5
forumTopicId: 16045
dashedName: search-and-replace
---

# --description--

ให้ทำการค้นหาและแทนที่ค่าในประโยค โดยใช้ argument ที่กำหนด แล้วคืนค่าเป็นประโยคใหม่

argument แรกคือ ประโยคตั้งต้นที่ต้องการค้นหาและแทนที่ค่า

argument ที่สองคือ คำที่คุณต้องการค้นหา

argument ที่สามคือ คำที่คุณจะนำไปแทนที่

**หมายเหตุ:** เมื่อมีการแทนที่คำ ให้ยังคงตัวพิมพ์ใหญ่หรือตัวพิมพ์เล็กของคำเดิมไว้ เช่น ถ้าการแทนคำว่า `Book` ด้วยคำว่า `dog` ผลลัพธ์ต้องได้เป็น `Dog`

# --hints--

`myReplace("Let us go to the store", "store", "mall")` ต้องคืนค่าเป็น string `Let us go to the mall`.

```js
assert.deepEqual(
  myReplace('Let us go to the store', 'store', 'mall'),
  'Let us go to the mall'
);
```

`myReplace("He is Sleeping on the couch", "Sleeping", "sitting")` ต้องคืนค่าเป็น string `He is Sitting on the couch`.

```js
assert.deepEqual(
  myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'),
  'He is Sitting on the couch'
);
```

`myReplace("I think we should look up there", "up", "Down")` ต้องคืนค่าเป็น string `I think we should look down there`.

```js
assert.deepEqual(
  myReplace('I think we should look up there', 'up', 'Down'),
  'I think we should look down there'
);
```

`myReplace("This has a spellngi error", "spellngi", "spelling")` ต้องคืนค่าเป็น string `This has a spelling error`.

```js
assert.deepEqual(
  myReplace('This has a spellngi error', 'spellngi', 'spelling'),
  'This has a spelling error'
);
```

`myReplace("His name is Tom", "Tom", "john")` ต้องคืนค่าเป็น string `His name is John`.

```js
assert.deepEqual(
  myReplace('His name is Tom', 'Tom', 'john'),
  'His name is John'
);
```

`myReplace("Let us get back to more Coding", "Coding", "algorithms")` ต้องคืนค่าเป็น string `Let us get back to more Algorithms`.

```js
assert.deepEqual(
  myReplace('Let us get back to more Coding', 'Coding', 'algorithms'),
  'Let us get back to more Algorithms'
);
```

# --seed--

## --seed-contents--

```js
function myReplace(str, before, after) {
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
```

# --solutions--

```js
function myReplace(str, before, after) {
  if (before.charAt(0) === before.charAt(0).toUpperCase()) {
    after = after.charAt(0).toUpperCase() + after.substring(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.substring(1);
  }
  return str.replace(before, after);
}
```
