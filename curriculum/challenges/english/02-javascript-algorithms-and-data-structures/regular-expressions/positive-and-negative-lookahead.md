---
id: 587d7dba367417b2b2512ba9
title: Positive and Negative Lookahead
challengeType: 1
forumTopicId: 301360
dashedName: positive-and-negative-lookahead
---

# --description--

<dfn>Lookahead</dfn> คือ pattern ที่บอก JavaScript ให้อ่านค่าของ string ล่วงหน้า ซึ่งมีประโยชน์เวลาที่เราอยากหาหลาย pattern ที่อยู่ภายใน string เดียว

lookahead มี 2 แบบคือ <dfn>positive lookahead</dfn> และ <dfn>negative lookahead</dfn>

positive lookahead จะอ่าน string ชุดถัดไปว่ามีข้อมูลที่ตรงกับ search pattern ที่เราระบุไปไหม ถ้ามีค่อยกลับมาอ่าน pattern ที่อยู่ข้างหน้าแล้วดูว่า match หรือไม่  
เราจะเขียน positive lookahead แบบนี้ `(?=...)` ซึ่ง `...` คือ search pattern ที่เราจะอ่านล่วงหน้า

negative lookahead จะทำตรงข้ามกัน โดยจะอ่าน string ชุดถัดไปว่าต้องไม่ตรงกับ search pattern ที่เราระบุไปถึงจะกลับมาอ่าน pattern ที่อยู่ข้างหน้าแล้วดูว่า match หรือไม่  
เราจะเขียน negative lookahead แบบนี้ `(?!...)` ซึ่ง `...` คือ search pattern ที่เราจะอ่านล่วงหน้า

lookahead จะทำแค่การตรวจสอบเงื่อนไขเท่านั้น แต่จะไม่ match ข้อมูลใน search pattern ให้

อาจจะมีบางคนอ่านแล้วยังงงอยู่ มาลองดูตัวอย่างแล้วจะเข้าใจมากขึ้น

```js
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
```

การเรียกใช้ method `match` ทั้งสองครั้งจะคืนค่าเป็น `["q"]`  
เรามาดูการทำงานของ positive lookahead (`quRegex`) กัน:  
ก่อนที่ `quRegex` จะ match ตัว `q` regex จะทำการ lookahead เพื่อไปดูว่าข้อมูลถัดไปตรงกับ search pattern ที่ให้มาหรือเปล่า พอ regex เห็นว่าเป็น `u` ตรงกับ search pattern ที่ให้มา แล้วค่อยกลับมาทำการ match ตัวอักษร `q` ให้

negative lookahead ก็จะทำงานคล้ายๆกัน แต่ว่าจะทำการ lookahead เพื่อไปดูว่าข้อมูลตัวถัดไปต้อง *ไม่ตรง* กับ search pattern แล้วค่อยทำการ match ให้

ในการใช้งานจริง lookahead จะใช้ในการตรวจสอบตั้งแต่ 2 pattern ขึ้นไปใน string เดียว  
ตัวอย่างด้านล่างเป็นตัวอย่างง่ายๆ เพื่อตรวจสอบว่า password ต้องมีความยาว 3 ถึง 6 ตัวอักษรและมีตัวเลขอย่างน้อย 1 ตัว

```js
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
```

# --instructions--

ให้ใช้ lookahead ใน `pwRegex` เพื่อ match password ที่มีความยาวมากกว่า 5 ตัวอักษร และมีเลข 2 ตัวที่อยู่ติดกัน

# --hints--

regex ที่เขียนต้องมี positive `lookahead` 2 ครั้ง

```js
assert(pwRegex.source.match(/\(\?=.*?\)\(\?=.*?\)/) !== null);
```

regex ที่เขียนต้องไม่ match กับ string `astronaut`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('astronaut'));
```

regex ที่เขียนต้องไม่ match กับ string `banan1`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('banan1'));
```

regex ที่เขียนต้อง match กับ string `bana12`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('bana12'));
```

regex ที่เขียนต้อง match กับ string `abc123`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('abc123'));
```

regex ที่เขียนต้องไม่ match กับ string `12345`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('12345'));
```

regex ที่เขียนต้อง match กับ string `8pass99`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('8pass99'));
```

regex ที่เขียนต้องไม่ match กับ string `1a2bcde`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('1a2bcde'));
```

regex ที่เขียนต้อง match กับ string `astr1on11aut`

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
