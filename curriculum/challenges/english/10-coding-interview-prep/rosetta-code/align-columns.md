---
id: 594810f028c0303b75339ad0
title: Align columns
challengeType: 5
forumTopicId: 302224
dashedName: align-columns
---

# --description--

กำหนด array ของหลายบรรทัด โดยที่แต่ละฟิลด์จะนำหนด้วยตัวอักษร `$`

ให้เขียนโปรแกรมที่จัดตำแหน่งแต่ละคอลัมน์ของฟิลด์ โดยตรวจสอบให้แน่ใจว่าคำในแต่ละคอลัมน์ถูกคั่นด้วยช่องว่างอย่างน้อยหนึ่งช่อง นอกจากนี้ อนุญาตให้แต่ละคำในคอลัมน์จัดชิดซ้าย ชิดขวา หรือจัดกึ่งกลางภายในคอลัมน์

# --instructions--

ใช้ข้อความต่อไปนี้เพื่อทดสอบโปรแกรมของคุณ:

```js
const testText = [
  'Given$a$text$file$of$many$lines',
  'where$fields$within$a$line$',
  'are$delineated$by$a$single$"dollar"$character',
  'write$a$program',
  'that$aligns$each$column$of$fields',
  'by$ensuring$that$words$in$each$',
  'column$are$separated$by$at$least$one$space.',
  'Further,$allow$for$each$word$in$a$column$to$be$either$left$',
  'justified,$right$justified',
  'or$center$justified$within$its$column.'
];
```

**ให้ดูด้วยว่า:**

- ตัวอย่างบรรทัดข้อความที่ป้อนอาจมีหรือไม่มี `$` ต่อท้ายก็ได้
- ทุกคอลัมน์ควรมีการจัดตำแหน่งแบบเดียวกัน
- อักขระช่องว่างต่อเนื่องที่สร้างไว้ติดกับส่วนท้ายของบรรทัดนั้นไม่มีนัยสำคัญสำหรับวัตถุประสงค์ของงาน
- ข้อความที่คืนค่าออกมาจะเอาไดดูในโปนแกรมแบบ mono-spaced font เพราะฉะนั้นต้องเชื่อมแต่ละบรรทัดด้วย `\n`
- ช่องว่างขั้นต่ำระหว่างคอลัมน์ควรคำนวณจากข้อความและไม่ฮาร์ดโค้ด
- ไม่จำเป็นต้องเพิ่มอักขระแยกระหว่างหรือรอบคอลัมน์

ลองดูตัวอย่างผลลัพธ์จาก `testText` บรรทัดที่ 7 ซึ่งจะมีการจัดเรียงแบบให้ชิดขวา ชิดซ้าย และกึ่งกลางตามลำดับ:

```js
'    column        are separated     by     at    least       one space.\n'
'column     are        separated by     at     least    one       space.\n'
'  column      are     separated   by     at    least      one    space.\n'
```

# --hints--

`formatText` ต้องเป็นฟังก์ชัน

```js
assert(typeof formatText === 'function');
```

`formatText(testText, 'right')` ควรสร้างข้อความที่คอลัมน์ชิดขวา

```js
assert.strictEqual(formatText(_testText, 'right'), rightAligned);
```

`formatText(testText, 'left')` ควรสร้างข้อความที่คอลัมน์ชิดซ้าย

```js
assert.strictEqual(formatText(_testText, 'left'), leftAligned);
```

`formatText(testText, 'center')` ควรสร้างข้อความที่คอลัมน์ถูกจัดกึ่งกลาง

```js
assert.strictEqual(formatText(_testText, 'center'), centerAligned);
```

# --seed--

## --after-user-code--

```js
const _testText = [
  'Given$a$text$file$of$many$lines',
  'where$fields$within$a$line$',
  'are$delineated$by$a$single$"dollar"$character',
  'write$a$program',
  'that$aligns$each$column$of$fields$',
  'by$ensuring$that$words$in$each$',
  'column$are$separated$by$at$least$one$space.',
  'Further,$allow$for$each$word$in$a$column$to$be$either$left$',
  'justified,$right$justified',
  'or$center$justified$within$its$column.'
];

const rightAligned = '     Given          a      text   file     of     many     lines\n' +
'     where     fields    within      a   line \n' +
'       are delineated        by      a single "dollar" character\n' +
'     write          a   program\n' +
'      that     aligns      each column     of   fields \n' +
'        by   ensuring      that  words     in     each \n' +
'    column        are separated     by     at    least       one space.\n' +
'  Further,      allow       for   each   word       in         a column to be either left \n' +
'justified,      right justified\n' +
'        or     center justified within    its  column.';

const leftAligned = 'Given      a          text      file   of     many     lines    \n' +
'where      fields     within    a      line   \n' +
'are        delineated by        a      single "dollar" character\n' +
'write      a          program  \n' +
'that       aligns     each      column of     fields   \n' +
'by         ensuring   that      words  in     each     \n' +
'column     are        separated by     at     least    one       space.\n' +
'Further,   allow      for       each   word   in       a         column to be either left \n' +
'justified, right      justified\n' +
'or         center     justified within its    column. ';

const centerAligned = '  Given        a        text     file    of     many     lines  \n' +
'  where      fields    within     a     line  \n' +
'   are     delineated    by       a    single \"dollar\" character\n' +
'  write        a       program \n' +
'   that      aligns     each    column   of    fields  \n' +
'    by      ensuring    that    words    in     each   \n' +
'  column      are     separated   by     at    least      one    space.\n' +
' Further,    allow       for     each   word     in        a     column to be either left \n' +
'justified,   right    justified\n' +
'    or       center   justified within  its   column. ';
```

## --seed-contents--

```js
function formatText(input, justification) {

}

const testText = [
  'Given$a$text$file$of$many$lines',
  'where$fields$within$a$line$',
  'are$delineated$by$a$single$"dollar"$character',
  'write$a$program',
  'that$aligns$each$column$of$fields$',
  'by$ensuring$that$words$in$each$',
  'column$are$separated$by$at$least$one$space.',
  'Further,$allow$for$each$word$in$a$column$to$be$either$left$',
  'justified,$right$justified',
  'or$center$justified$within$its$column.'
];
```

# --solutions--

```js
String.prototype.repeat = function (n) { return new Array(1 + parseInt(n)).join(this); };

function formatText(input, justification) {
  let x, y, max, cols = 0, diff, left, right;
  for (x = 0; x < input.length; x++) {
    input[x] = input[x].split('$');
    if (input[x].length > cols) {
      cols = input[x].length;
    }
  }
  for (x = 0; x < cols; x++) {
    max = 0;
    for (y = 0; y < input.length; y++) {
      if (input[y][x] && max < input[y][x].length) {
        max = input[y][x].length;
      }
    }
    for (y = 0; y < input.length; y++) {
      if (input[y][x]) {
        diff = (max - input[y][x].length) / 2;
        left = ' '.repeat(Math.floor(diff));
        right = ' '.repeat(Math.ceil(diff));
        if (justification === 'left') {
          right += left; left = '';
        }
        if (justification === 'right') {
          left += right; right = '';
        }
        input[y][x] = left + input[y][x] + right;
      }
    }
  }
  for (x = 0; x < input.length; x++) {
    input[x] = input[x].join(' ');
  }
  input = input.join('\n');
  return input;
}
```
