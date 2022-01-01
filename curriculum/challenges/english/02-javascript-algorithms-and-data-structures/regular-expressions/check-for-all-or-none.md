---
id: 587d7dba367417b2b2512ba8
title: Check for All or None
challengeType: 1
forumTopicId: 301338
dashedName: check-for-all-or-none
---

# --description--

ในการเขียน regex บางครั้งเรก็าอยากค้นหาโดยที่ยอมให้ไม่มีบางส่วนของ pattern ได้

เราจะใช้เครื่องหมายคำถาม `?` เพื่อบอก regex ว่าเรายอมให้ส่วนของ string ที่ไม่มี element ที่อยู่ข้างหน้าตัว `?` นี้ match ได้นะ ถ้ายังไม่เข้าใจให้ลองดูตัวอย่างด้านล่าง

เช่น คำว่า colour ที่แปลว่าสี สามารถเขียนได้สองแบบคือ colour (แบบอเมริกา) และ color (แบบอังกฤษ) เราสามารถใช้เครื่องหมายคำถาม เพื่อให้ regex match การเขียนทั้งสองแบบได้

```js
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
```

การเรียก method `test` จะได้ค่าเป็น `true` ทั้งสองครั้ง

# --instructions--

ให้เปลี่ยน regex `favRegex` เพื่อ match กับทั้งคำที่เขียนแบบอเมริกา (`favorite`) และแบบอังกฤษ (`favourite`)

# --hints--

regex ที่คุณเขียนต้องใช้ optional symbol (`?`)

```js
favRegex.lastIndex = 0;
assert(favRegex.source.match(/\?/).length > 0);
```

regex ที่เขียนต้อง match กับ string `favorite`

```js
favRegex.lastIndex = 0;
assert(favRegex.test('favorite'));
```

regex ที่เขียนต้อง match กับ string `favourite`

```js
favRegex.lastIndex = 0;
assert(favRegex.test('favourite'));
```

regex ที่เขียนต้องไม่ match กับ string `fav`

```js
favRegex.lastIndex = 0;
assert(!favRegex.test('fav'));
```

# --seed--

## --seed-contents--

```js
let favWord = "favorite";
let favRegex = /change/; // แก้บรรทัดนี้
let result = favRegex.test(favWord);
```

# --solutions--

```js
let favWord = "favorite";
let favRegex = /favou?r/;
let result = favRegex.test(favWord);
```
