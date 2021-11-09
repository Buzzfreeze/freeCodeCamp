---
id: 587d7b84367417b2b2512b35
title: Catch Misspelled Variable and Function Names
challengeType: 1
forumTopicId: 301186
dashedName: catch-misspelled-variable-and-function-names
---

# --description--

`console.log()` และ `typeof` methods เป็นวิธีการหลักในการตรวจสอบค่าและชนิดของผลลัพธ์ ตอนนี้เรามารู้จักกับรูปแบบที่มักทำให้เกิดข้อผิดพลาดกัน รูปแบบนึงที่มักเจอก็คือ การพิมพ์เร็วๆ แล้วพิมพ์ผิด

ชื่อตัวแปรหรือชื่อฟังก์ชันที่มีการพิมพ์สลับตัวอักษร, พิมพ์ตัวอักษรไม่ครง หรือ พิมพ์ผิด case (เช่น พิมพ์ตัวอักษรพิมพ์เล็กแทนที่จะเป็นพิมพ์ใหญ่) จะทำให้ browser ค้นหาตัวแปรหรือฟังก์ชันนั้นไม่เจอ และขึ้น reference error 
หมายเหตุ ตัวแปรและฟังก์ชันในภาษา JavaScript เป็น case-sensitive 

# --instructions--

ให้แก้ไข error 2 ตัวที่เกิดจากการสะกดผิด เพื่อให้การคำนวณ `netWorkingCapital` ทำงานได้ตามปกติ

# --hints--

ตรวจสอบการสะกดชื่อตัวแปร 2 ตัวที่ใช้ในการคำนวณ netWorkingCapital ดังนั้น console ควรแสดงเป็น "Net working capital is: 2"

```js
assert(netWorkingCapital === 2);
```

ไม่ควรมีตัวแปรที่สะกดผิดในโค้ดแล้ว

```js
assert(!code.match(/recievables/g));
```

ตัวแปร `receivables` ควรถูกประกาศและใช้งานอย่างเหมาะสมในโค้ด

```js
assert(code.match(/receivables/g).length == 2);
```

ไม่ควรมีตัวแปรที่สะกดผิดในโค้ดแล้ว

```js
assert(!code.match(/payable;/g));
```

ตัวแปร `payables` ควรถูกประกาศและใช้งานอย่างเหมาะสมในโค้ด

```js
assert(code.match(/payables/g).length == 2);
```

# --seed--

## --seed-contents--

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = recievables - payable;
console.log(`Net working capital is: ${netWorkingCapital}`);
```

# --solutions--

```js
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);
```
