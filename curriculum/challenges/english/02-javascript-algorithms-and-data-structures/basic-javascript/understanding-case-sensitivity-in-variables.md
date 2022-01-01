---
id: 56533eb9ac21ba0edf2244ab
title: Understanding Case Sensitivity in Variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd6GDcD'
forumTopicId: 18334
dashedName: understanding-case-sensitivity-in-variables
---

# --description--

ในภาษา JavaScript ชื่อตัวแปรและชื่อฟังก์ชันเป็น case sensitive หมายความว่าชื่อตัวแปรที่เป็นตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่ก็สำคัญ

`MYVAR` เป็นคนละตัวแปรกับ `MyVar` และก็เป็นคนละตัวแปรกับ `myvar` ดังนั้นจึงเป็นไปได้ที่จะมีตัวแปรคนละตัว ชื่อเหมือนกันแต่ระบุตัวเล็กตัวใหญ่ต่างกัน 
แนะนำว่า เพื่อความชัดเจน จง *อย่า* ตั้งชื่อตัวแปรในรูปแบบนี้

**Best Practice**

เขียนชื่อตัวแปรในภาษา JavaScript ในรูปแบบ <dfn>camelCase</dfn> โดย <dfn>camelCase</dfn> เป็นการระบุชื่อตัวแปรที่มีหลายคำ โดยจะให้คำแรกเป็นตัวพิมพ์เล็ก และตัวอักษรแรกของคำถัดๆ ไปเป็นตัวพิมพ์ใหญ่

**ตัวอย่าง:**

```js
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
```

# --instructions--

จงปรับแก้การประกาศและกำหนดค่าตัวแปร เพื่อให้ชื่อตัวแปรเป็น <dfn>camelCase</dfn>

โดยห้ามสร้างตัวแปรตัวใหม่

# --hints--

ประกาศตัวแปร `studlyCapVar` และกำหนดค่าเป็น `10`

```js
assert(typeof studlyCapVar !== 'undefined' && studlyCapVar === 10);
```

ประกาศตัวแปร `properCamelCase` และกำหนดค่าเป็น `A String` ซึ่งเป็นข้อมูลประเภท string

```js
assert(
  typeof properCamelCase !== 'undefined' && properCamelCase === 'A String'
);
```

ประกาศตัวแปร `titleCaseOver` ควรประกาศและกำหนดค่าเป็น `9000`

```js
assert(typeof titleCaseOver !== 'undefined' && titleCaseOver === 9000);
```

`studlyCapVar` ควรใช้ camelCase ทั้งในส่วนของการประกาศตัวแปรและการกำหนดค่า

```js
assert(code.match(/studlyCapVar/g).length === 2);
```

`properCamelCase` ควรใช้ camelCase ทั้งในส่วนของการประกาศตัวแปรและการกำหนดค่า

```js
assert(code.match(/properCamelCase/g).length === 2);
```

`titleCaseOver` ควรใช้ camelCase ทั้งในส่วนของการประกาศตัวแปรและการกำหนดค่า

```js
assert(code.match(/titleCaseOver/g).length === 2);
```

# --seed--

## --seed-contents--

```js
// ประกาศตัวแปร
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// กำหนดค่าตัวแปร
STUDLYCAPVAR = 10;
PRoperCAmelCAse = "A String";
tITLEcASEoVER = 9000;
```

# --solutions--

```js
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;
```
