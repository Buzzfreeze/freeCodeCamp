---
id: 587d7b84367417b2b2512b35
title: Catch Misspelled Variable and Function Names
challengeType: 1
forumTopicId: 301186
dashedName: catch-misspelled-variable-and-function-names
---

# --description--

method `console.log()` และ `typeof` เป็นวิธีหลักที่ใช้ตรวจสอบค่าและชนิดของตัวแปรและผลลัพธ์ 
ข้อผิดพลาดที่เจอกันบ่อยที่สุดแบบนึงจะเกิดจากการพิมพ์ผิด

การที่เราพิมพ์ชื่อตัวแปรหรือชื่อฟังก์ชันผิด ทั้งการการพิมพ์ตัวอักษรสลับกัน และการพิมพ์ตัวเล็กตัวใหญ่สลับกัน จะทำให้ browser หาตัวแปรหรือฟังก์ชันนั้นไม่เจอ และเกิด reference error 
หมายเหตุ ตัวแปรและฟังก์ชันในภาษา JavaScript เป็น case-sensitive (ตัวเล้กตัวใหญ่ต้องตรงกัน)

# --instructions--

ให้แก้ไข error 2 ตัวที่เกิดจากการสะกดผิด เพื่อให้การคำนวณ `netWorkingCapital` ทำงานได้ตามปกติ

# --hints--

ให้ตรวจสอบการสะกดชื่อตัวแปร 2 ตัวที่ใช้ในการคำนวณ netWorkingCapital ถ้าแก้ถูกแล้ว console ต้องแสดงคำว่า "Net working capital is: 2"

```js
assert(netWorkingCapital === 2);
```

ต้องแก้ตัวแปรที่สะกดผิดให้หมด

```js
assert(!code.match(/recievables/g));
```

ต้องประกาศและใช้ตัวแปร `receivables` ให้ถูกต้อง

```js
assert(code.match(/receivables/g).length == 2);
```

ต้องแก้ตัวแปรที่สะกดผิดให้หมด

```js
assert(!code.match(/payable;/g));
```

ต้องประกาศและใช้ตัวแปร `payables` ให้ถูกต้อง

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
