---
id: 587d7dbb367417b2b2512bab
title: Use Capture Groups to Search and Replace
challengeType: 1
forumTopicId: 301368
dashedName: use-capture-groups-to-search-and-replace
---

# --description--

แค่การค้นหาได้ก็มีประโยชน์มากแล้ว แต่ถ้าเราสามารถค้นหาแล้วก็เปลี่ยน (หรือแทนที่) ข้อความที่ match ได้ก็จะยิ่งดีขึ้นไปอีก

เราจะใช้ method `.replace()` เพื่อค้นหาและแทนที่ข้อความใน string ซึ่ง `.replace()` จะรับ parameter ตัวแรกเป็น regex pattern ที่เราต้องการค้นหา ส่วน parameter ตัวที่สองจะเป็น string ที่จะเอาไปแทนที่คำที่ match หรือจะใช้เป็นฟังก์ชันก็ได้

```js
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
```

การเรียกใช้ method `replace` จะคืนค่าเป็น string `The sky is blue.`

เราใช้ capture group เป็น string ที่นำไปแทนที่ได้ด้วย โดยเราจะใช้เป็น dollar sign (`$`) ตามตัวอย่างด้านล่าง:

```js
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
```

ในตัวอย่างนี้การเรียกใช้ method `replace` จะคืนค่าเป็น string `Camp Code`

# --instructions--

จงเขียน regex `fixRegex` ตามเงื่อนไขนี้

1. สร้าง capture group 3 ชุด ซึ่งแต่ละชุดจะใช้เพื่อหาคำใน string `one two three` 
2. เปลี่ยนค่าของตัวแปร `replaceText` เพื่อที่จะเอาไปใช้ในการเปลี่ยน string `one two three` ให้กลายเป็น `three two one` 
3. นำผลลัพธ์มากำหนดค่าให้กับตัวแปร `result` 

อย่าลืมว่าต้องใช้ capture group มาแทนที่ string โดยใช้ syntax dollar sign (`$`)

# --hints--

ต้องใช้ method `.replace()` เพื่อค้นหาและแทนที่

```js
assert(code.match(/\.replace\(.*\)/));
```

regex ที่เขียนต้องเปลี่ยน string `one two three` ให้กลายเป็น string `three two one`

```js
assert(result === 'three two one');
```

ห้ามแก้ไขโค้ดบรรทัดสุดท้าย

```js
assert(code.match(/result\s*=\s*str\.replace\(.*?\)/));
```

ต้องมีอย่างน้อย 3 capture group ในตัวแปร `fixRegex`  

```js
assert(new RegExp(fixRegex.source + '|').exec('').length - 1 >= 3);
```

ตัวแปร `replaceText` จะต้องเป็นการเอา string ที่ match จาก capture group มาใช้ (เช่น string ที่ match จาก capture group ตัวแรกจะใช้เป็น `$1`)

```js
{
  const re = /(\$\d{1,2})+(?:[\D]|\b)/g;
  assert(replaceText.match(re).length >= 3);
}
```

# --seed--

## --seed-contents--

```js
let str = "one two three";
let fixRegex = /change/; // แก้บรรทัดนี้
let replaceText = ""; // แก้บรรทัดนี้
let result = str.replace(fixRegex, replaceText);
```

# --solutions--

```js
let str = "one two three";
let fixRegex = /(\w+) (\w+) (\w+)/g; // แก้บรรทัดนี้
let replaceText = "$3 $2 $1"; // แก้บรรทัดนี้
let result = str.replace(fixRegex, replaceText);
```
