---
id: 59667989bf71cf555dd5d2ff
title: S-Expressions
challengeType: 5
forumTopicId: 302303
dashedName: s-expressions
---

# --description--

[S-Expressions](https://en.wikipedia.org/wiki/S-Expression "wp: S-Expression") เป็นวิธีใช้ในการ parse และจัดเก็บข้อมูล

# --instructions--
ให้เขียนฟังก์ชันที่ทำการ parse S-Expressions

โดยต้องอ่าน S-Expression และคืนค่าเป็น nested array

การขึ้นบรรทัดใหม่และการเว้นวรรคอื่นๆ อาจถูกละเว้น เว้นแต่จะอยู่ภายในสตริงที่ยกมา

ไม่ต้องประมวลผล "`()`" ภายในสตริง แต่ถือว่าเป็นส่วนหนึ่งของสตริง

จะ handle escape quote หรือมไม่ก็ได้ ดังนั้น "`(foo"bar)`" อาจถือเป็นสตริง "`foo"bar`" หรือเป็นข้อผิดพลาดก็ได้

สำหรับสิ่งนี้ reader ไม่จำเป็นต้องอ่าน `\` เพื่อ escaping แต่ควรอ่านตัวเลขได้ นอกจากนี้ ควรอ่านตัวเลขได้ ถ้าภาษานั้นมีประเภทข้อมูลที่เหมาะสม

โปรดทราบว่า ยกเว้น `()"` (`\` ถ้ารองรับการ escape) และช่องว่าง จะไม่มีอักขระพิเศษ อนุญาตให้ใช้อย่างอื่นโดยไม่มีเครื่องหมายคำพูด

reader จะต้องอ่านข้อมูลต่อไปนี้ได้

<pre>((data "quoted data" 123 4.5)
(data (!@# (4.5) "(more" "data)")))
</pre>

ลองกลับไปดูเรื่อง data structure ([Pike](https://rosettacode.org/wiki/S-Expressions#Pike "\#Pike"), [Python](https://rosettacode.org/wiki/S-Expressions#Python "\#Python") และ [Ruby](https://rosettacode.org/wiki/S-Expressions#Ruby "\#Ruby") เช่น native data structures)

# --hints--

`parseSexpr` ต้องเป็นฟังก์ชัน

```js
assert(typeof parseSexpr === 'function');
```

`parseSexpr('(data1 data2 data3)')` ต้องคืนค่าเป็น `['data1', 'data2', 'data3']`

```js
assert.deepEqual(parseSexpr(simpleSExpr), simpleSolution);
```

`parseSexpr('((data "quoted data" 123 4.5) (data (!@# (4.5) "(more" "data)")))')` ต้องคืนค่าเป็น `[['data', '"quoted data"', 123, 4.5], ['data', ['!@#', [4.5], '"(more"', '"data)"']]]`

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
