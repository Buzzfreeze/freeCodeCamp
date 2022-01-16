---
id: aa7697ea2477d1316795783b
title: Pig Latin
challengeType: 5
forumTopicId: 16039
dashedName: pig-latin
---

# --description--

Pig Latin คือวิธีแปลงคำภาษาอังกฤษ กฎการแปลงคำมีดังนี้:

\- ถ้าคำขึ้นต้นด้วยพยัญชนะ ให้นำพยัญชนะตัวแรก หรือพยัญชนะชุดแรกที่อยู่ติดกัน โยกมาไว้ท้ายคำ แล้วนำคำว่า `ay` ไปต่อท้าย

\- ถ้าคำขึ้นต้นด้วยสระ ให้นำคำว่า `way` ไปต่อท้าย

# --instructions--

ให้แปลง string เป็น Pig Latin โดย string ที่ให้มานั้นเป็นภาษาอังกฤษที่เป็นตัวอักษรพิมพ์เล็กทั้งหมด

# --hints--

`translatePigLatin("california")` ต้องคืนค่าเป็น string `aliforniacay`

```js
assert.deepEqual(translatePigLatin('california'), 'aliforniacay');
```

`translatePigLatin("paragraphs")` ต้องคืนค่าเป็น string `aragraphspay`

```js
assert.deepEqual(translatePigLatin('paragraphs'), 'aragraphspay');
```

`translatePigLatin("glove")` ต้องคืนค่าเป็น string `oveglay`

```js
assert.deepEqual(translatePigLatin('glove'), 'oveglay');
```

`translatePigLatin("algorithm")` ต้องคืนค่าเป็น string `algorithmway`

```js
assert.deepEqual(translatePigLatin('algorithm'), 'algorithmway');
```

`translatePigLatin("eight")` ต้องคืนค่าเป็น string `eightway`

```js
assert.deepEqual(translatePigLatin('eight'), 'eightway');
```

ต้องจัดการกับคำที่มีสระอยู่กลางคำได้ โดย `translatePigLatin("schwartz")` ต้องคืนค่าเป็น string `artzschway`

```js
assert.deepEqual(translatePigLatin('schwartz'), 'artzschway');
```

ต้องจัดการกับคำที่ไม่มีสระได้ โดย `translatePigLatin("rhythm")` ต้องคืนค่าเป็น string `rhythmay`

```js
assert.deepEqual(translatePigLatin('rhythm'), 'rhythmay');
```

# --seed--

## --seed-contents--

```js
function translatePigLatin(str) {
  return str;
}

translatePigLatin("consonant");
```

# --solutions--

```js
function translatePigLatin(str) {
  if (isVowel(str.charAt(0))) return str + "way";
  var front = [];
  str = str.split('');
  while (str.length && !isVowel(str[0])) {
    front.push(str.shift());
  }
  return [].concat(str, front).join('') + 'ay';
}

function isVowel(c) {
  return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
}
```
