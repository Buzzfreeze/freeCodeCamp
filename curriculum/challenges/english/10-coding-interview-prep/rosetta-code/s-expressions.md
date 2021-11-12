---
id: 59667989bf71cf555dd5d2ff
title: S-Expressions
challengeType: 5
forumTopicId: 302303
dashedName: s-expressions
---

# --description--

[S-Expressions](https://en.wikipedia.org/wiki/S-Expression "wp: S-Expression") เป็นวิธีที่สะดวกในการแยกวิเคราะห์และจัดเก็บข้อมูล

# --instructions--
เขียนโปรแกรมอ่าน/แยกวิเคราะห์อย่างง่ายสำหรับ S-Expressions ที่จัดการstringที่ยกมาและไม่มีเครื่องหมายคำพูด จำนวนเต็ม และทศนิยม

ฟังก์ชันควรอ่าน S-Expression เดียวแต่ซ้อนกันจากstringและส่งคืนเป็นarray (ซ้อนกัน)

การขึ้นบรรทัดใหม่และการเว้นวรรคอื่นๆ อาจถูกละเว้น เว้นแต่จะอยู่ภายในstringที่ยกมา

"`()`" ภายในstringที่ยกมาจะไม่ตีความ แต่ถือว่าเป็นส่วนหนึ่งของstring

การจัดการอัญประกาศที่ใช้ Escape ภายในstringเป็นทางเลือก ดังนั้น "`(foo"bar)`" อาจถือเป็นstring "`foo"bar`" หรือเป็นข้อผิดพลาด

สำหรับสิ่งนี้ ผู้อ่านไม่จำเป็นต้องรู้จัก `\` สำหรับescaping แต่ควรรู้จักตัวเลขด้วย นอกจากนี้ ควรจดจำตัวเลขหากภาษานั้นมีประเภทข้อมูลที่เหมาะสม

โปรดทราบว่า ยกเว้น `()"` (`\` หากรองรับescaping) และช่องว่าง จะไม่มีอักขระพิเศษ อนุญาตให้ใช้อย่างอื่นโดยไม่มีเครื่องหมายคำพูด

ผู้อ่านควรอ่านข้อมูลต่อไปนี้ได้

<pre>((data "quoted data" 123 4.5)
(data (!@# (4.5) "(more" "data)")))
</pre>

ย้อนกลับไปดู data structure. (See the [Pike](https://rosettacode.org/wiki/S-Expressions#Pike "\#Pike"), [Python](https://rosettacode.org/wiki/S-Expressions#Python "\#Python") และ [Ruby](https://rosettacode.org/wiki/S-Expressions#Ruby "\#Ruby") เช่น native data structures.)

# --hints--

`parseSexpr` ควรเป็น function.

```js
assert(typeof parseSexpr === 'function');
```

`parseSexpr('(data1 data2 data3)')` ควร return `['data1', 'data2', 'data3']`

```js
assert.deepEqual(parseSexpr(simpleSExpr), simpleSolution);
```

`parseSexpr('((data "quoted data" 123 4.5) (data (!@# (4.5) "(more" "data)")))')` ควร return `[['data', '"quoted data"', 123, 4.5], ['data', ['!@#', [4.5], '"(more"', '"data)"']]]`.

```js
assert.deepEqual(parseSexpr(basicSExpr), basicSolution);
```

# --seed--

## --after-user-code--

```js
const simpleSExpr = '(data1 data2 data3)';
const simpleSolution = ['data1', 'data2', 'data3'];

const basicSExpr = '((data "quoted data" 123 4.5) (data (!@# (4.5) "(more" "data)")))';
const basicSolution = [["data","\"quoted data\"",123,4.5],["data",["!@#",[4.5],"\"(more\"","\"data)\""]]];
```

## --seed-contents--

```js
function parseSexpr(str) {

  return true;
}
```

# --solutions--

```js
function parseSexpr(str) {
  const t = str.match(/\s*("[^"]*"|\(|\)|"|[^\s()"]+)/g);
  for (var o, c = 0, i = t.length - 1; i >= 0; i--) {
    var n,
      ti = t[i].trim();
    if (ti == '"') return;
    else if (ti == '(') t[i] = '[', c += 1;
    else if (ti == ')') t[i] = ']', c -= 1;
    else if ((n = +ti) == ti) t[i] = n;
    else t[i] = `'${ti.replace('\'', '\\\'')}'`;
    if (i > 0 && ti != ']' && t[i - 1].trim() != '(') t.splice(i, 0, ',');
    if (!c) if (!o) o = true; else return;
  }
  return c ? undefined : eval(t.join(''));
}
```
