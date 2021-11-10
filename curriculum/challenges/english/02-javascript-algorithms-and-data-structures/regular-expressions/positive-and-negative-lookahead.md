---
id: 587d7dba367417b2b2512ba9
title: Positive and Negative Lookahead
challengeType: 1
forumTopicId: 301360
dashedName: positive-and-negative-lookahead
---

# --description--

<dfn>Lookaheads</dfn> คือ pattern ที่บอก JavaScript ให้มองไปข้างหน้าใน string เพื่อตรวจสอบ ซึ่งมีประโยชน์เวลาที่คุณต้องการค้นหาหลาย pattern ที่อยู่ภายใน string เดียว

มี lookaheads 2 ประเภทคือ <dfn>positive lookahead</dfn> และ <dfn>negative lookahead</dfn>

positive lookahead จะค้นหา element ตาม search pattern อย่างไรก็ตาม element นั้นไม่ได้ match กับ search pattern จริงๆ โดย positive lookahead เขียนได้ดังนี้ `(?=...)` ซึ่ง `...` เป็นส่วนที่ต้องระบุ แต่ไม่ได้นำมา match

ในทางกลับกัน negative lookahead จะค้นหา element ที่ไม่ตรงกับ search pattern โดย negative lookahead เขียนได้ดังนี้ `(?!...)` ซึ่ง `...` คือ pattern ที่ระบุส่วนที่คุณไม่ต้องการให้มี ส่วนที่เหลือของ pattern จะถูกคืนค่า หากไม่เจอส่วนของ negative lookahead

เรื่อง Lookaheads ค่อนข้างน่าสับสน แต่ตัวอย่างอาจจะช่วยให้เข้าใจมากขึ้น

```js
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
```

การเรียก `match` ทั้งสองครั้งจะคืนค่า `["q"]`

การใช้งาน lookaheads ในทางปฎิบัติคือ ใช้กับการตรวจสอบตั้งแต่ 2 pattern ขึ้นไปใน string เดียว ในที่นี้คือ การตรวจสอบ password ที่ต้องมีความยาว 3 ถึง 6 ตัวอักษรและมีตัวเลขอย่างน้อย 1 ตัว

```js
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
```

# --instructions--

จงใช้ lookaheads ใน `pwRegex` เพื่อ match passwords ที่มีความยาวมากกว่า 5 ตัวอักษร และมีเลข 2 ตัวเรียงกัน

# --hints--

regex ของคุณควรมี 2 positive `lookaheads`

```js
assert(pwRegex.source.match(/\(\?=.*?\)\(\?=.*?\)/) !== null);
```

regex ของคุณไม่ควร match กับ string `astronaut`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('astronaut'));
```

regex ของคุณไม่ควร match กับ string `banan1`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('banan1'));
```

regex ของคุณควร match กับ string `bana12`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('bana12'));
```

regex ของคุณควร match กับ string `abc123`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('abc123'));
```

regex ของคุณไม่ควร match กับ string `12345`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('12345'));
```

regex ของคุณควร match กับ string `8pass99`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('8pass99'));
```

regex ของคุณไม่ควร match กับ string `1a2bcde`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('1a2bcde'));
```

regex ของคุณควร match กับ string `astr1on11aut`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('astr1on11aut'));
```

# --seed--

## --seed-contents--

```js
let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);
```

# --solutions--

```js
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
```
