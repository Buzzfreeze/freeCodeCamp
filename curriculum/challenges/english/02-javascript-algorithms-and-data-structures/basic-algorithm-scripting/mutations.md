---
id: af2170cad53daa0770fabdea
title: Mutations
challengeType: 5
forumTopicId: 16025
dashedName: mutations
---

# --description--

ให้เขียนฟังก์ชันที่รับค่าเป็น array และตรวจสอบว่าใน element แรกของ array มีตัวอักษรของ element ที่สองของ array ครบทุกตัวหรือไม่ ถ้ามีครบให้คืนค่าเป็น `true`  ถ้ามีไม่ครบให้คืนค่าเป็น `false`

เช่น ถ้าเรียกใช้ฟังก์ชันโดยใช้ array เป็น `["hello", "Hello"]` ต้องได้ค่าเป็น `true` เนื่องจากตัวอักษรใน string ที่สองมีอยู่ใน string แรกตรบทุกตัว (ไม่สนใจตัวเล็กตัวใหญ่)

`["hello", "hey"]` ต้องได้ค่าเป็น `false` เพราะ `hello` ไม่มีตัวอักษร `y`

`["Alien", "line"]` ต้องได้ค่าเป็น `true` เพราะตัวอักษรทุกตัวใน `line` มีใน `Alien`

# --hints--

การเรียกใช้ฟังก์ชัน `mutation(["hello", "hey"])` ต้องได้ค่าเป็น `false`

```js
assert(mutation(['hello', 'hey']) === false);
```

การเรียกใช้ฟังก์ชัน `mutation(["hello", "Hello"])` ต้องได้ค่าเป็น `true`

```js
assert(mutation(['hello', 'Hello']) === true);
```

การเรียกใช้ฟังก์ชัน `mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])` ต้องได้ค่าเป็น `true`

```js
assert(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']) === true);
```

การเรียกใช้ฟังก์ชัน `mutation(["Mary", "Army"])` ต้องได้ค่าเป็น `true`

```js
assert(mutation(['Mary', 'Army']) === true);
```

การเรียกใช้ฟังก์ชัน `mutation(["Mary", "Aarmy"])` ต้องได้ค่าเป็น `true`

```js
assert(mutation(['Mary', 'Aarmy']) === true);
```

การเรียกใช้ฟังก์ชัน `mutation(["Alien", "line"])` ต้องได้ค่าเป็น `true`

```js
assert(mutation(['Alien', 'line']) === true);
```

การเรียกใช้ฟังก์ชัน `mutation(["floor", "for"])` ต้องได้ค่าเป็น `true`

```js
assert(mutation(['floor', 'for']) === true);
```

การเรียกใช้ฟังก์ชัน `mutation(["hello", "neo"])` ต้องได้ค่าเป็น `false`

```js
assert(mutation(['hello', 'neo']) === false);
```

การเรียกใช้ฟังก์ชัน `mutation(["voodoo", "no"])` ต้องได้ค่าเป็น `false`

```js
assert(mutation(['voodoo', 'no']) === false);
```

การเรียกใช้ฟังก์ชัน `mutation(["ate", "date"])` ต้องได้ค่าเป็น `false`

```js
assert(mutation(['ate', 'date']) === false);
```

การเรียกใช้ฟังก์ชัน `mutation(["Tiger", "Zebra"])` ต้องได้ค่าเป็น `false`

```js
assert(mutation(['Tiger', 'Zebra']) === false);
```

การเรียกใช้ฟังก์ชัน `mutation(["Noel", "Ole"])` ต้องได้ค่าเป็น `true`

```js
assert(mutation(['Noel', 'Ole']) === true);
```

# --seed--

## --seed-contents--

```js
function mutation(arr) {
  return arr;
}

mutation(["hello", "hey"]);
```

# --solutions--

```js
function mutation(arr) {
  let hash = Object.create(null);

  arr[0].toLowerCase().split('').forEach(c => hash[c] = true);

  return !arr[1].toLowerCase().split('').filter(c => !hash[c]).length;
}

mutation(["hello", "hey"]);
```
