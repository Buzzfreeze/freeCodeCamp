---
id: 5a23c84252665b21eecc8038
title: Subleq
challengeType: 5
forumTopicId: 302328
dashedName: subleq
---

# --description--

[Subleq](https://rosettacode.org/wiki/eso:Subleq) เป็นตัวอย่างของ [One-Instruction Set Computer (OISC)](https://en.wikipedia.org/wiki/One_instruction_set_computer).

ได้รับการตั้งชื่อตามคำสั่งเดียว ซึ่งก็คือ **SU**btract และ **B** ranch if **L**ess than หรือ **EQ**ual
ไปเป็นศูนย์

งานของคุณคือสร้างล่ามที่เลียนแบบเครื่องดังกล่าว

หน่วยความจำของเครื่องประกอบด้วยarrayของจำนวนเต็มที่ลงนาม ขนาดคำที่เหมาะสมใด ๆ ก็ใช้ได้ แต่หน่วยความจำต้อง

สามารถถือจำนวนลบเป็นบวกได้

การดำเนินการเริ่มต้นด้วยตัวชี้คำสั่งที่มุ่งไปที่คำแรกซึ่งเป็นที่อยู่ 0 ดำเนินการดังนี้:

<ol>
  <li>Let A, B, and C be the value stored in the three consecutive words in memory starting at the instruction pointer.</li>
  <li>Advance the instruction pointer 3 words to point at the address after the one containing C.</li>
  <li>If A is -1, then a character is read from standard input and its code point stored in the address given by B. C
    is unused.</li>
  <li>If B is -1, then the number contained in the address given by A is interpreted as a code point and the
    corresponding character output. C is again unused.</li>
  <li>Otherwise, both A and B are treated as the addresses of memory locations. The number contained in the address
    given by A is subtracted from the number at the address given by B (and the result stored back in address B). If
    the result is zero or negative, the value C becomes the new instruction pointer.</li>
  <li>If the instruction pointer becomes negative, execution halts.</li>
</ol>

ที่อยู่เชิงลบอื่นๆ นอกเหนือจาก -1 อาจถือว่าเทียบเท่ากับ -1 หรือสร้างข้อผิดพลาดตามที่เห็นสมควร

โซลูชันของคุณควรยอมรับโปรแกรมที่จะรันบนเครื่อง แยกจากinputที่ป้อนไปยังโปรแกรมเอง

โปรแกรมนี้ควรอยู่ใน "รหัสเครื่อง" ดิบย่อย - ตัวเลขทศนิยมที่คั่นด้วยช่องว่าง โดยไม่มีชื่อสัญลักษณ์หรือ

ส่วนขยายระดับassemblyอื่น ๆ ที่จะโหลดลงในหน่วยความจำโดยเริ่มต้นที่ที่อยู่ 0 แสดงผลลัพธ์ของโซลูชันของคุณเมื่อ

เลี้ยง "สวัสดีชาวโลก!" โปรแกรม. (โปรดทราบว่าตัวอย่างถือว่า ASCII หรือ superset ของมัน เช่น Latin-N . ใดๆ

<pre>15 17 -1 17 -1 -1 16 1 -1 16 3 -1 15 15 0 0 -1 72 101 108 108 111 44 32 119 111 114 108 100 33 10 0</pre>

ซึ่งสอดคล้องกับสิ่งนี้ใน hypothetical assembler language:

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

เขียนฟังก์ชันที่ใช้arrayของจำนวนเต็มเป็นพารามิเตอร์ นี่แสดงถึงองค์ประกอบหน่วยความจำ ฟังก์ชั่น

ควรตีความลำดับและส่งคืนสตริงเอาต์พุต สำหรับงานนี้ สมมติว่าไม่มีอินพุตมาตรฐาน

# --hints--

`Subleq` ควรเป็น function.

```js
assert(typeof Subleq == 'function');
```

`Subleq([15, 17, -1, 17, -1, -1, 16, 1, -1, 16, 3, -1, 15, 15, 0, 0, -1, 72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33, 0])` ควร return string.

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

`Subleq([15, 17, -1, 17, -1, -1, 16, 1, -1, 16, 3, -1, 15, 15, 0, 0, -1, 72, 101, 108, 108, 111, 44, 32, 119, 111, 114, 108, 100, 33, 0])` ควร return `"Hello, world!"`.

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
