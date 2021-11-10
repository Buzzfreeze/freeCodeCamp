---
id: 587d7dba367417b2b2512ba8
title: Check for All or None
challengeType: 1
forumTopicId: 301338
dashedName: check-for-all-or-none
---

# --description--

บางครั้ง pattern ที่คุณต้องการค้นหา มีบางส่วนที่อาจมีหรืออาจไม่มี อย่างไรก็ตาม การตรวจสอบสิ่งเหล่านี้อาจเป็นสิ่งสำคัญ

คุณสามารถกำหนดการมีอยู่หรือไม่มีอยู่ของ element ด้วย question mark, `?` ซึ่งเช็คตัวอักษรที่อยู่หน้า `?` ว่าต้องมีจำนวน 0 หรือ 1 คุณสามารถมองว่า สัญลักษณ์นี้เป็นการบอกว่า element ที่อยู่ข้างหน้าจะมีหรือไม่มีก็ได้ (optional)

ตัวอย่างเช่น มีความแตกต่างเล็กน้อยระหว่างภาษาอังกฤษแบบ American และภาษาอังกฤษแบบ British และคุณสามารถใช้ question mark เพื่อ match การสะกดทั้งสองแบบ

```js
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);
```

การเรียก `test` method ทั้ง 2 ครั้ง จะคืนค่า `true`

# --instructions--

จงปรับแก้ regex `favRegex` เพื่อ match กับคำทั้งภาษาอังกฤษแบบ American (`favorite`) และภาษาอังกฤษแบบ British (`favourite`)

# --hints--

regex ของคุณควรใช้ optional symbol, `?`

```js
favRegex.lastIndex = 0;
assert(favRegex.source.match(/\?/).length > 0);
```

regex ของคุณควร match กับ string `favorite`

```js
favRegex.lastIndex = 0;
assert(favRegex.test('favorite'));
```

regex ของคุณควร match กับ string `favourite`

```js
favRegex.lastIndex = 0;
assert(favRegex.test('favourite'));
```

regex ของคุณไม่ควร match กับ string `fav`

```js
favRegex.lastIndex = 0;
assert(!favRegex.test('fav'));
```

# --seed--

## --seed-contents--

```js
let favWord = "favorite";
let favRegex = /change/; // Change this line
let result = favRegex.test(favWord);
```

# --solutions--

```js
let favWord = "favorite";
let favRegex = /favou?r/;
let result = favRegex.test(favWord);
```
