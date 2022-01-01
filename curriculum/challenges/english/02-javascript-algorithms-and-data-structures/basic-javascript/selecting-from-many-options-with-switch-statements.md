---
id: 56533eb9ac21ba0edf2244dd
title: Selecting from Many Options with Switch Statements
challengeType: 1
videoUrl: 'https://scrimba.com/c/c4mv4fm'
forumTopicId: 18277
dashedName: selecting-from-many-options-with-switch-statements
---

# --description--


ถ้าโค้ดของคุณมีการใช้คำสั่งที่แยกออกเป็นหลายทาง เราขอแนะนำให้รู้จักคำสั่ง <dfn>switch</dfn> 
โดยคำสั่ง `switch` นั้นจะสามารถอ่านค่าและแบ่งการทำงานออกเป็น <dfn>case</dfn> ได้ `switch` นั้นจะเริ่มทำงานจาก `case` แรกที่มีค่าตรงกับค่าที่เราใส่เข้าไป และจะทำงานไปจนเจอคำสั่ง `break` ก็จะหยุด

ถ้ายังไม่เข้าใจ ลองดูตัวอย่างคำสั่ง `switch` ด้านล่าง

```js
switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
```

`switch` จะตรวจสอบค่าใน `case` ด้วยเครื่องหมาย (`===`) และคำสั่ง `break` ใน JavaScript จะหยุดการทำงานของคำสั่ง แต่ถ้าไม่เราไม่ระบุคำสั่ง `break` คำสั่ง `case` ต่อไปจะทำงาน

ในตัวอย่างด้านบน คำสั่งจะรับ `lowercaseLetter` เขามาถ้าตรวจสอบ แล้วถ้าเจอว่า `lowercaseLetter === "a"` เป็น `true` ก็จะทำการ `console.log("A")` ต่อมาเมื่อเจอคำสั่ง `break` คำสั่ง `switch` ก็จะจบการทำงาน

แต่ถ้าตรวจสอบแล้วพบว่า `lowercaseLetter === "a"` เป็น `false` ก็จะทำการตรวจสอบ `case` ต่อไป ซึ่งก็คือ `lowercaseLetter === "b"`

# --instructions--

จงเขียนคำสั่ง switch เพื่อกำหนดเงื่อนไขของ `val` และกำหนดค่าให้กับ `answer` ตามเงื่อนไขด้านล่าง

`1` - `alpha`  
`2` - `beta`  
`3` - `gamma`  
`4` - `delta`

# --hints--

การเรียกใช้ฟังก์ชัน `caseInSwitch(1)` ต้องคืนค่าออกมาเป็น string `alpha`

```js
assert(caseInSwitch(1) === 'alpha');
```

การเรียกใช้ฟังก์ชัน `caseInSwitch(2)` ต้องคืนค่าออกมาเป็น string `beta`

```js
assert(caseInSwitch(2) === 'beta');
```

การเรียกใช้ฟังก์ชัน `caseInSwitch(3)` ต้องคืนค่าออกมาเป็น string `gamma`

```js
assert(caseInSwitch(3) === 'gamma');
```

การเรียกใช้ฟังก์ชัน `caseInSwitch(4)` ต้องคืนค่าออกมาเป็น string `delta`

```js
assert(caseInSwitch(4) === 'delta');
```

ห้ามใช้คำสั่ง `if` และ `else`

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

ต้องใช้คำสั่ง `break` อย่างน้อยสามครั้งในโค้ด


```js
assert(code.match(/break/g).length > 2);
```

# --seed--

## --seed-contents--

```js
function caseInSwitch(val) {
  var answer = "";
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น



  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
  return answer;
}

caseInSwitch(1);
```

# --solutions--

```js
function caseInSwitch(val) {
  var answer = "";

  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
  }
  return answer;
}
```
