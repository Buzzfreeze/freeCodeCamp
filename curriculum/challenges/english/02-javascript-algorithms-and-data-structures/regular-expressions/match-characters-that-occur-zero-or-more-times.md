---
id: 587d7db6367417b2b2512b9a
title: Match Characters that Occur Zero or More Times
challengeType: 1
forumTopicId: 301351
dashedName: match-characters-that-occur-zero-or-more-times
---

# --description--

ในบทที่แล้วเราได้ใช้ `+` เพื่อค้นหาตัวอักษรที่มีอย่างน้อย 1 ตัว ถ้าเราต้องการหาโดยที่ไม่รู้ว่าจะมีตัวอักษรนั้นหรือเปล่าล่ะ 

เราจะหากรณีนี้ได้ถ้าใช้ asterisk หรือ star: `*`

```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);
```

การเรียก `match` ทั้ง 3 ครั้ง จะได้ค่าเป็น `["goooooooo"]`, `["g"]` และ `null` ตามลำดับ
จะเห็นว่า regex จะ match ทั้งข้อความที่ไม่เจอ `o` (`"g"`) และข้อความที่เจอ `o` (`"goooooooo"`)

# --instructions--

คราวนี้เรากำหนดให้ตัวแปร `chewieQuote` มีค่าเริ่มต้นเป็น string `Aaaaaaaaaaaaaaaarrrgh!` (คุณจะไม่เห็นโค้ดนี้) 
ให้สร้าง regex `chewieRegex` ที่ใช้ `*` เพื่อ match ข้อความที่มี `A` ที่ตามด้วย `a` จำนวนกี่ตัวก็ได้ (0 ตัวก็ได้) จาก `chewieQuote` 
regex นี้ไม่ต้องใช้ flag หรือ character class และต้องไม่ match กับ string อื่นๆ ด้วย

# --hints--

regex `chewieRegex` ต้อง `*` เพื่อ match ตัวอักษร `a` จำนวนกี่ตัวก็ได้ (0 ตัวก็ได้)

```js
assert(/\*/.test(chewieRegex.source));
```

regex ต้อง match กับ string `A` ใน `chewieQuote`

```js
assert(result[0][0] === 'A');
```

regex ต้อง match กับ string `Aaaaaaaaaaaaaaaa` ใน `chewieQuote`

```js
assert(result[0] === 'Aaaaaaaaaaaaaaaa');
```

regex `chewieRegex` ต้อง match กับตัวอักษร 16 ตัว ใน `chewieQuote`

```js
assert(result[0].length === 16);
```

regex ต้องไม่ match กับ string `He made a fair move. Screaming about it can't help you.`

```js
assert(
  !"He made a fair move. Screaming about it can't help you.".match(chewieRegex)
);
```

regex ต้องไม่ match กับ string `Let him have it. It's not wise to upset a Wookiee.`

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
// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
let chewieRegex = /change/; // แก้ไขบรรทัดนี้
// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น

let result = chewieQuote.match(chewieRegex);
```

# --solutions--

```js
  let chewieRegex = /Aa*/;
  let result = chewieQuote.match(chewieRegex);
```
