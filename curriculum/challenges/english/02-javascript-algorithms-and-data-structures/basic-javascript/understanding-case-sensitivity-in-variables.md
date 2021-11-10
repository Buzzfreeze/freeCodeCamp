---
id: 56533eb9ac21ba0edf2244ab
title: Understanding Case Sensitivity in Variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/cd6GDcD'
forumTopicId: 18334
dashedName: understanding-case-sensitivity-in-variables
---

# --description--

ในภาษา JavaScript ชื่อตัวแปรและชื่อฟังก์ชันเป็น case sensitive หมายความว่า ตัวอักษรตัวเล็กกับตัวใหญ่ไม่เหมือนกัน

`MYVAR` ไม่เหมือนกับ `MyVar` และไม่เหมือนกับ `myvar` ดังนั้นจึงเป็นไปได้ที่จะมีตัวแปรคนละตัว ชื่อเหมือนกันแต่ระบุตัวเล็กตัวใหญ่ต่างกัน 
แนะนำว่า เพื่อความชัดเจน จง *อย่า* ใช้ฟีเจอร์ของภาษาอันนี้

**Best Practice**

เขียนชื่อตัวแปรในภาษา JavaScript ในรูปแบบ <dfn>camelCase</dfn> โดย <dfn>camelCase</dfn> เป็นชื่อตัวแปรที่มีหลายคำและมีคำแรกเป็นพิมพ์เล็ก ส่วนตัวอักษรแรกของคำถัดๆ ไปเป็นตัวพิมพ์ใหญ่

**Examples:**

```js
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;
```

# --instructions--

จงปรับแก้การประกาศและกำหนดค่าตัวแปร เพื่อให้ชื่อตัวแปรเป็น <dfn>camelCase</dfn>

ห้ามสร้างตัวแปรตัวใหม่

# --hints--

`studlyCapVar` ควรประกาศและมีค่าเป็น `10`

```js
assert(typeof studlyCapVar !== 'undefined' && studlyCapVar === 10);
```

`properCamelCase` ควรประกาศและมีค่าเป็น string `A String`

```js
assert(
  typeof properCamelCase !== 'undefined' && properCamelCase === 'A String'
);
```

`titleCaseOver` ควรประกาศและมีค่าเป็น `9000`

```js
assert(typeof titleCaseOver !== 'undefined' && titleCaseOver === 9000);
```

`studlyCapVar` ควรใช้ camelCase ทั้งในส่วนประกาศตัวแปรและกำหนดค่า

```js
assert(code.match(/studlyCapVar/g).length === 2);
```

`properCamelCase` ควรใช้ camelCase ทั้งในส่วนประกาศตัวแปรและกำหนดค่า

```js
assert(code.match(/properCamelCase/g).length === 2);
```

`titleCaseOver` ควรใช้ camelCase ทั้งในส่วนประกาศตัวแปรและกำหนดค่า

```js
assert(code.match(/titleCaseOver/g).length === 2);
```

# --seed--

## --seed-contents--

```js
// Variable declarations
var StUdLyCapVaR;
var properCamelCase;
var TitleCaseOver;

// Variable assignments
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
