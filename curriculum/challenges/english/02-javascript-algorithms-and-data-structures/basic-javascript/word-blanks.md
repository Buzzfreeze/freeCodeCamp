---
id: 56533eb9ac21ba0edf2244bb
title: Word Blanks
challengeType: 1
videoUrl: 'https://scrimba.com/c/caqn8zuP'
forumTopicId: 18377
dashedName: word-blanks
---

# --description--

คราวนี้เราจะใช้ความรู้เกี่ยวกับ string เพื่อสร้างเกมคำศัพท์แนวเดียวกับ "[Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs)" เราจะเรียกเกมนี้ว่า "Word Blanks" 
เราจะให้คุณจะสร้างประโยคแบบ "เติมคำในช่องว่าง" 

ในเกมส์ "Mad Libs" คุณจะเห็นประโยคที่เว้นช่องว่างไว้ให้เติมคำ และคุณต้องเติมคำ เช่น คำนาม คำกริยา คำคุณศัพท์ และคำวิเศษณ์ ลงในประโยคเพื่อให้ได้ประโยคที่สมบูรณ์

ลองดูประโยคนี้ - It was really **\_\_\_\_**, and we **\_\_\_\_** ourselves **\_\_\_\_** ประโยคนี้มีสามส่วนที่ขาดหายไป - คำคุณศัพท์ คำกริยา และคำวิเศษณ์ และเราสามารถเติมคำอะไรก็ได้เพื่อทำให้ประโยคให้สมบูรณ์ แล้วเราก็จะนำประโยคที่สมบูรณ์มากำหนดค่าให้กับตัวแปรได้ ดังนี้:

```js
var sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
```

# --instructions--

ในแบบทดสอบนี้ เราเตรียมคำนาม กริยา คำคุณศัพท์ และคำวิเศษณ์ ไว้ให้แล้ว คุณแค่ต้องสร้างประโยคสำหรับเติมคำในช่องว่าง และเลือกคำที่เราให้ไว้ไปเติมในช่องว่างนั้น เพื่อทำให้ประโยคสมบูรณ์ 

คุณต้องกำหนดค่าให้กับตัวแปร `wordBlanks` โดยใช้ตัวแปรที่มีให้คือ `myNoun`, `myAdjective`, `myVerb` และ `myAdverb` และใช้เครื่องหมาย `+` เพื่อเชื่อมตัวแปรเหล่านี้เข้าด้วยกัน โดยห้ามแก้ไขตัวแปรที่เรามีให้

อย่าลืมว่าในการเชื่อม string คุณจะต้องทำการเว้นวรรคเอง และประโยคที่สมบูรณ์และถูกต้องจะต้องมีการเว้นวรรคระหว่างคำด้วย

# --hints--

ตัวแปร `wordBlanks` ต้องมีข้อมูลที่เป็น string

```js
assert(typeof wordBlanks === 'string');
```

คุณไม่ควรแก้ไขค่าของตัวแปร `myNoun`, `myVerb`, `myAdjective` และ `myAdverb`

```js
assert(
  myNoun === 'dog' &&
    myVerb === 'ran' &&
    myAdjective === 'big' &&
    myAdverb === 'quickly'
);
```

คุณไม่ควรนำค่าของตัวแปร `dog`, `ran`, `big`, หรือ `quickly` มากำหนดให้กับตัวแปร `wordBlanks` โดยตรง

```js
const newCode = removeAssignments(code);
assert(
  !/dog/.test(newCode) &&
    !/ran/.test(newCode) &&
    !/big/.test(newCode) &&
    !/quickly/.test(newCode)
);
```

ตัวแปร `wordBlanks` ควรมีค่าของตัวแปร `myNoun`, `myVerb`, `myAdjective` และ `myAdverb` อยู่ภายใน และคั่นด้วยการเว้นวรรค (และคำเพิ่มเติมสำหรับประโยคเติมคำในช่องว่างของคุณ)



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

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
var wordBlanks = ""; // แก้ไขโค้ดบรรทัดนี้
// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
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
