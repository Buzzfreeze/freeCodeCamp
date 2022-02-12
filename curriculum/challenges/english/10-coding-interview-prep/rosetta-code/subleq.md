---
id: 5a23c84252665b21eecc8038
title: Subleq
challengeType: 5
forumTopicId: 302328
dashedName: subleq
---

# --description--

[Subleq](https://rosettacode.org/wiki/eso:Subleq) เป็นตัวอย่างของ [One-Instruction Set Computer (OISC)](https://en.wikipedia.org/wiki/One_instruction_set_computer).

Subleq ย่อมาจาก **SU**btract and **B** ranch if **L**ess than or **EQ**ual to zero

ให้สร้าง interpreter ที่ทำงานเหมือนเครื่อง Subleq นี้

หน่วยความจำของเครื่องจะเป็น array ของ signed integer 
แต่หน่วยความจำนี้จะต้องเก็บได้ทั้งจำนวนเต็มบวก และจำนวนเต็มลบ

การดำเนินการจะให้ pointer ชี้ไปยังตำแหน่ง 0 โดยดำเนินการดังนี้:

<ol>
  <li>ถ้าให้ A, B, และ C เป็นค่าที่เก็บอยู่ในหน่วยความจำสามส่วน โดยเริ่มที่ pointer</li>
  <li>ให้ขยับ pointer ไปอยู่หลัง C</li>
  <li>ถ้า A เป็น -1 แล้วจะอ่านค่าตัวอักษรตามปกติตามตำแหน่งที่ระบุใน B โดยจะยังไม่ได้ใช้ C</li>
  <li>ถ้า B เป็น -1 แล้วตัวเลขจะเก็บในตำแหน่งตามที่ระบุใน A จะเป็นตำแหน่ง code โดยจะยังไม่ได้ใช้ C</li>
  <li>ถ้าไม่ตรงกับเงื่อนไขด้านบน จะมองทั้ง A และ B เป็นตำแหน่งของหน่วยความจำ และจะนำตัวเลขจากตำแหน่งที่ระบุโดย A ไปลบด้วยตัวเลขจากตำแหน่งที่ระบุโดย B (และนำผลลัพธ์กลับไปเก็บใน B) ถ้าผลลัพธ์เป็นศูนย์หรือติดลบ ตำแหน่ง C จะกลายเป็น pointer ตัวใหม่</li>
  <li>ถ้า pointer ติดลบ ให้หยุดการทำงาน</li>
</ol>

ตำแหน่งอื่นๆนอกเหนือจาก -1 ให้ถือว่าเป็น -1 หรือจะมองเป็น error ก็ได้ แล้วแต่ต้องการ

โซลูชันของคุณควรยอมรับโปรแกรมที่จะรันบนเครื่อง แยกจาก input ที่ป้อนไปยังโปรแกรมเอง

โปรแกรมนี้ต้องเป็น raw subleq "machine code" - ตัวเลขทศนิยมที่คั่นด้วยช่องว่าง โดยไม่มีชื่อสัญลักษณ์หรือ ส่วนขยายระดับ assembly อื่น ๆ ที่จะโหลดลงในหน่วยความจำโดยเริ่มต้นที่ตำแหน่ง 0  
แสดงผลลัพธ์ของโซลูชันของคุณเมื่อ ส่งค่าโปรแกรม "Hello, Wold!" เข้าไป

<pre>15 17 -1 17 -1 -1 16 1 -1 16 3 -1 15 15 0 0 -1 72 101 108 108 111 44 32 119 111 114 108 100 33 10 0</pre>

ซึ่งสอดคล้องกับ hypothetical assembler language:

<pre>start:
    zero, message, -1
    message, -1, -1
    neg1, start+1, -1
    neg1, start+3, -1
    zero, zero, start
zero: 0
neg1: -1
message: "Hello, world!\n\0"
</pre>

# --instructions--

ให้เขียนฟังก์ชันที่รับค่าเป็น array ของจำนวนเต็ม ซึ่งแสดงถึงหน่วยความจำ
ฟังก์ชันนี้ต้อง intepret sequence และคืนค่าเป็นสตริง

# --hints--

`Subleq` ต้องเป็นฟังก์ชัน

```js
assert(typeof Subleq == 'function');
```

`Subleq([15, 17, -1, 17, -1, -1, 16, 1, -1, 16, 3, -1, 15, 15, 0, 0, -1, 72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33, 0])` ต้องคืนค่าเป็นสตริง

```js
assert(
  typeof Subleq([
    15,
    17,
    -1,
    17,
    -1,
    -1,
    16,
    1,
    -1,
    16,
    3,
    -1,
    15,
    15,
    0,
    0,
    -1,
    72,
    101,
    108,
    108,
    111,
    44,
    32,
    119,
    111,
    114,
    108,
    100,
    33,
    0
  ]) == 'string'
);
```

`Subleq([15, 17, -1, 17, -1, -1, 16, 1, -1, 16, 3, -1, 15, 15, 0, 0, -1, 72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33, 0])` ต้องคืนค่าเป็น `"Hello, world!"`

```js
assert.equal(
  Subleq([
    15,
    17,
    -1,
    17,
    -1,
    -1,
    16,
    1,
    -1,
    16,
    3,
    -1,
    15,
    15,
    0,
    0,
    -1,
    72,
    101,
    108,
    108,
    111,
    44,
    32,
    119,
    111,
    114,
    108,
    100,
    33,
    0
  ]),
  'Hello, world!'
);
```

# --seed--

## --seed-contents--

```js
function Subleq(mem) {

}
```

# --solutions--

```js
function Subleq(mem) {
  var out = '';
  var instructionPointer = 0;
  do {
    var a = mem[instructionPointer];
    var b = mem[instructionPointer + 1];
    if (a === -1) {
    } else if (b === -1) {
      out += String.fromCharCode(mem[a]);
    } else {
      mem[b] -= mem[a];
      if (mem[b] < 1) {
        instructionPointer = mem[instructionPointer + 2];
        continue;
      }
    }
    instructionPointer += 3;
  } while (instructionPointer >= 0);

  return out;
}
```
