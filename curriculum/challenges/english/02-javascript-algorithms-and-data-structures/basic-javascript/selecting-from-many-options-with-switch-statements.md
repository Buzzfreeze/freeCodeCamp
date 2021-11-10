---
id: 56533eb9ac21ba0edf2244dd
title: Selecting from Many Options with Switch Statements
challengeType: 1
videoUrl: 'https://scrimba.com/c/c4mv4fm'
forumTopicId: 18277
dashedName: selecting-from-many-options-with-switch-statements
---

# --description--

ถ้าคุณมีหลายตัวเลือก แนะนำให้ใช้ <dfn>switch</dfn> statement โดย `switch` statement ทดสอบค่าและสามารถมีได้หลาย <dfn>case</dfn> statements ซึ่งกำหนดค่าที่เป็นไปได้ได้หลายแบบ Statements จะทำงานจาก `case` แรกที่ match (ตรงกัน) จนถึงคำสั่ง `break` ก็จะหยุด

นี่เป็นตัวอย่าง`switch` statement

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

ค่า `case` จะถูกทดสอบด้วยเครื่องหมาย (`===`) คำสั่ง `break` ใน Javascript จะหยุดการรัน statements แต่ถ้าไม่ระบุคำสั่ง `break` statements ต่อไปจะทำงาน


# --instructions--

จงเขียนคำสั่ง switch เพื่อกำหนดเงื่อนไขของ `val` และกำหนดค่าให้กับ `answer` ตามเงื่อนไขด้านล่าง

`1` - `alpha`  
`2` - `beta`  
`3` - `gamma`  
`4` - `delta`

# --hints--

`caseInSwitch(1)` ควรคืนค่า string `alpha`

```js
assert(caseInSwitch(1) === 'alpha');
```

`caseInSwitch(2)` ควรคืนค่า string `beta`

```js
assert(caseInSwitch(2) === 'beta');
```

`caseInSwitch(3)` ควรคืนค่า string `gamma`

```js
assert(caseInSwitch(3) === 'gamma');
```

`caseInSwitch(4)` ควรคืนค่า string `delta`

```js
assert(caseInSwitch(4) === 'delta');
```

คุณไม่ควรใช้คำสั่ง `if` หรือ `else`

```js
assert(!/else/g.test(code) || !/if/g.test(code));
```

คุณควรมีคำสั่ง `break` อย่างน้อยสามคำสั่ง


```js
assert(code.match(/break/g).length > 2);
```

# --seed--

## --seed-contents--

```js
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line



  // Only change code above this line
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
