---
id: af2170cad53daa0770fabdea
title: Mutations
challengeType: 5
forumTopicId: 16025
dashedName: mutations
---

# --description--

ให้เขียนฟังก์ชันที่ได้ผลลัพธ์เป็น `true` หาก string ใน element แรกของ array มีตัวอักษรของ string ใน element ที่สองของ array ครบทุกตัว

ตัวอย่างเช่น `["hello", "Hello"]` ควรได้ผลลัพธ์ `true` เนื่องจากตัวอักษรใน string ที่สองมีอยู่ใน string แรก (ไม่สนใจตัวเล็กตัวใหญ่)

`["hello", "hey"]` ควรได้ผลลัพธ์ `false` เพราะ `hello` ไม่มีตัวอักษร `y`

`["Alien", "line"]` ควรได้ผลลัพธ์ `true` เพราะตัวอักษรทุกตัวใน `line` มีใน `Alien`

# --hints--

`mutation(["hello", "hey"])` ควรได้ผลลัพธ์คือ `false`.

```js
assert(mutation(['hello', 'hey']) === false);
```

`mutation(["hello", "Hello"])` ควรได้ผลลัพธ์คือ `true`.

```js
assert(mutation(['hello', 'Hello']) === true);
```

`mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])` ควรได้ผลลัพธ์คือ `true`.

```js
assert(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']) === true);
```

`mutation(["Mary", "Army"])` ควรได้ผลลัพธ์คือ `true`.

```js
assert(mutation(['Mary', 'Army']) === true);
```

`mutation(["Mary", "Aarmy"])` ควรได้ผลลัพธ์คือ `true`.

```js
assert(mutation(['Mary', 'Aarmy']) === true);
```

`mutation(["Alien", "line"])` ควรได้ผลลัพธ์คือ `true`.

```js
assert(mutation(['Alien', 'line']) === true);
```

`mutation(["floor", "for"])` ควรได้ผลลัพธ์คือ `true`.

```js
assert(mutation(['floor', 'for']) === true);
```

`mutation(["hello", "neo"])` ควรได้ผลลัพธ์คือ `false`.

```js
assert(mutation(['hello', 'neo']) === false);
```

`mutation(["voodoo", "no"])` ควรได้ผลลัพธ์คือ `false`.

```js
assert(mutation(['voodoo', 'no']) === false);
```

`mutation(["ate", "date"])` ควรได้ผลลัพธ์คือ `false`.

```js
assert(mutation(['ate', 'date']) === false);
```

`mutation(["Tiger", "Zebra"])` ควรได้ผลลัพธ์คือ `false`.

```js
assert(mutation(['Tiger', 'Zebra']) === false);
```

`mutation(["Noel", "Ole"])` ควรได้ผลลัพธ์คือ `true`.

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
