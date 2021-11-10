---
id: 587d7db6367417b2b2512b9a
title: Match Characters that Occur Zero or More Times
challengeType: 1
forumTopicId: 301351
dashedName: match-characters-that-occur-zero-or-more-times
---

# --description--

แบบทดสอบที่แล้วใช้ `+` เพื่อค้นหาตัวอักษรที่พบตั้งแต่ 1 ครั้งขึ้นไป อย่างไรก็ตาม ยังมีอีกทางเลือกนึงที่ค้นหาตัวอักษรที่พบตั้งแต่ 0 ครั้งขึ้นไป

ตัวอักษรที่ทำเช่นนี้ได้ก็คือ asterisk หรือ star: `*`

```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
```

การเรียก `match` ทั้ง 3 ครั้ง จะคืนค่า `["goooooooo"]`, `["g"]` และ `null` ตามลำดับ

# --instructions--

สำหรับแบบทดสอบนี้ `chewieQuote` กำหนดค่าเริ่มต้นเป็น string `Aaaaaaaaaaaaaaaarrrgh!` ในเบื้องหลัง จงสร้าง regex `chewieRegex` ที่ใช้ `*` เพื่อ match ตัวพิมพ์ใหญ่ `A` ตามด้วยตัวพิมพ์เล็ก `a` จำนวน 0 หรือมากกว่า ที่อยู่ใน `chewieQuote` ซึ่ง regex นี้ไม่ต้องใช้ flags หรือ character classes ใดๆ และไม่ควร match กับ quote อื่นๆ ด้วย

# --hints--

regex `chewieRegex` ควรใช้ `*` เพื่อ match ตัวอักษร `a` จำนวน 0 หรือมากกว่า

```js
assert(/\*/.test(chewieRegex.source));
```

regex ควร match string `A` ใน `chewieQuote`

```js
assert(result[0][0] === 'A');
```

regex ควร match string `Aaaaaaaaaaaaaaaa` ใน `chewieQuote`

```js
assert(result[0] === 'Aaaaaaaaaaaaaaaa');
```

regex `chewieRegex` ควร match 16 ตัวอักษร ใน `chewieQuote`

```js
assert(result[0].length === 16);
```

regex ไม่ควร match ตัวอักษรใดๆ ใน string `He made a fair move. Screaming about it can't help you.`

```js
assert(
  !"He made a fair move. Screaming about it can't help you.".match(chewieRegex)
);
```

regex ไม่ควร match ตัวอักษรใดๆ ใน string `Let him have it. It's not wise to upset a Wookiee.`

```js
assert(
  !"Let him have it. It's not wise to upset a Wookiee.".match(chewieRegex)
);
```

# --seed--

## --before-user-code--

```js
const chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
```

## --seed-contents--

```js
// Only change code below this line
let chewieRegex = /change/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);
```

# --solutions--

```js
  let chewieRegex = /Aa*/;
  let result = chewieQuote.match(chewieRegex);
```
