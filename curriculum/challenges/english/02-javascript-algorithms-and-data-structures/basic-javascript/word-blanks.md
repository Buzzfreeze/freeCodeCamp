---
id: 56533eb9ac21ba0edf2244bb
title: Word Blanks
challengeType: 1
videoUrl: 'https://scrimba.com/c/caqn8zuP'
forumTopicId: 18377
dashedName: word-blanks
---

# --description--

ตอนนี้เราจะใช้ความรู้เกี่ยวกับ string เพื่อสร้างเกมคำศัพท์สไตล์ "[Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs)" ที่เราเรียกว่า "Word Blanks" คุณจะสร้างประโยคสไตล์ "เติมคำในช่องว่าง" 

ในเกมส์ "Mad Libs" คุณจะได้รับประโยคที่มีคำที่หายไป เช่น คำนาม กริยา คำคุณศัพท์ และคำวิเศษณ์ จากนั้นคุณเติมส่วนที่ขาดหายไปด้วยคำที่คุณเลือก ให้เป็นประโยคสมบูรณ์

พิจารณาประโยคนี้ - It was really **\_\_\_\_**, and we **\_\_\_\_** ourselves **\_\_\_\_** ประโยคนี้มีสามส่วนที่ขาดหายไป - คำคุณศัพท์ กริยา และคำวิเศษณ์ และเราสามารถเพิ่มคำที่เราเลือกเพื่อทำให้สมบูรณ์ได้ จากนั้นเราสามารถนำประโยคที่สมบูรณ์มากำหนดค่าให้กับตัวแปรได้ดังนี้:

```js
var sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
```

# --instructions--

ในแบบทดสอบนี้ เราจัดเตรียมคำนาม กริยา คำคุณศัพท์ และคำวิเศษณ์ ให้กับคุณ คุณต้องเลือกคำตามคำศัพท์ที่เราให้ไว้ เพื่อสร้างประโยคที่สมบูรณ์ 

คุณจะต้องใช้ string concatenation operator `+` เพื่อสร้าง string ใหม่ โดยใช้ตัวแปรที่มีให้: `myNoun`, `myAdjective`, `myVerb` และ `myAdverb` จากนั้นคุณจะนำ string ที่เป็นผลลัพธ์ ไปกำหนดค่าให้กับตัวแปร `wordBlanks` โดยคุณไม่ควรแก้ไขคำที่กำหนดให้กับตัวแปร

คุณต้องคำนึงถึงการเว้นวรรคใน string ด้วย เพื่อว่าประโยคสุดท้ายจะได้มีช่องว่างระหว่างคำทั้งหมด ผลลัพธ์จึงเป็นประโยคที่สมบูรณ์

# --hints--

`wordBlanks` ควรเป็น string

```js
assert(typeof wordBlanks === 'string');
```

คุณไม่ควรแก้ไขค่าที่กำหนดให้กับ `myNoun`, `myVerb`, `myAdjective` หรือ `myAdverb`

```js
assert(
  myNoun === 'dog' &&
    myVerb === 'ran' &&
    myAdjective === 'big' &&
    myAdverb === 'quickly'
);
```

คุณไม่ควรนำค่า `dog`, `ran`, `big`, หรือ `quickly` มากำหนดให้กับ `wordBlanks` โดยตรง

```js
const newCode = removeAssignments(code);
assert(
  !/dog/.test(newCode) &&
    !/ran/.test(newCode) &&
    !/big/.test(newCode) &&
    !/quickly/.test(newCode)
);
```

`wordBlanks` ควรประกอบด้วยคำทั้งหมดที่กำหนดให้กับตัวแปร `myNoun`, `myVerb`, `myAdjective` และ `myAdverb` คั่นด้วย non-word characters(และคำเพิ่มเติมใน madlib ของคุณ)



```js
assert(
  /\bdog\b/.test(wordBlanks) &&
    /\bbig\b/.test(wordBlanks) &&
    /\bran\b/.test(wordBlanks) &&
    /\bquickly\b/.test(wordBlanks)
);
```

# --seed--

## --after-user-code--

```js
const removeAssignments = str => str
  .replace(/myNoun\s*=\s*["']dog["']/g, '')
  .replace(/myAdjective\s*=\s*["']big["']/g, '')
  .replace(/myVerb\s*=\s*["']ran["']/g, '')
  .replace(/myAdverb\s*=\s*["']quickly["']/g, '');
```

## --seed-contents--

```js
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

// Only change code below this line
var wordBlanks = ""; // Change this line
// Only change code above this line
```

# --solutions--

```js
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = "Once there was a " + myNoun + " which was very " + myAdjective + ". ";
wordBlanks += "It " + myVerb + " " + myAdverb + " around the yard.";
```
