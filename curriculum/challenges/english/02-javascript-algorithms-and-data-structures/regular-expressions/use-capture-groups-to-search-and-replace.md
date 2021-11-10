---
id: 587d7dbb367417b2b2512bab
title: Use Capture Groups to Search and Replace
challengeType: 1
forumTopicId: 301368
dashedName: use-capture-groups-to-search-and-replace
---

# --description--

การค้นหานั้นมีประโยชน์ แต่ถ้าคุณสามารถค้นหาและเปลี่ยน (หรือแทนที่) ข้อความที่ match ได้ก็ย่อมดีกว่า

คุณสามารถค้นหาและแทนที่ข้อความใน string โดยใช้ `.replace()` ซึ่ง parameter ตัวแรกของ `.replace()` คือ regex pattern ที่คุณต้องการค้นหา ส่วน parameter ตัวที่สองก็คือ string ที่ต้องการแทนที่คำที่ match หรืออาจเป็นฟังก์ชันที่ให้ทำอะไรต่อ

```js
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
```

การเรียก `replace` จะคืนค่าเป็น string `The sky is blue.`

คุณสามารถนำ capture groups มาใช้ในส่วนของ string ที่ต้องการแทนที่ โดยใช้ dollar signs (`$`)

```js
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
```

การเรียก `replace` จะคืนค่าเป็น string `Camp Code`

# --instructions--

จงเขียน regex `fixRegex` โดยใช้ capture groups 3 ชุด ซึ่งจะค้นหาแต่ละคำใน string `one two three` จากนั้นอัปเดตตัวแปร `replaceText` เพื่อแทนที่ `one two three` ด้วย string `three two one` แล้วกำหนด (assign) ผลลัพธ์ให้กับตัวแปร `result` อย่าลืมว่าให้นำ capture groups มาใช้ในส่วนของ string ที่ต้องการแทนที่ โดยใช้ dollar sign (`$`) syntax

# --hints--

คุณควรใช้ `.replace()` เพื่อค้นหาและแทนที่

```js
assert(code.match(/\.replace\(.*\)/));
```

regex ของคุณควรเปลี่ยน string `one two three` ให้เป็น string `three two one`

```js
assert(result === 'three two one');
```

คุณไม่ควรเปลี่ยนบรรทัดสุดท้าย

```js
assert(code.match(/result\s*=\s*str\.replace\(.*?\)/));
```

`fixRegex` ควรใช้อย่างน้อย 3 capture groups.

```js
assert(new RegExp(fixRegex.source + '|').exec('').length - 1 >= 3);
```

`replaceText` ควรนำแต่ละ submatch string(s) มาใส่วงเล็บ (เช่น submatch string ที่อยู่ในวงเล็บตัวที่ n, $n, จะตรงกันกับ capture group ลำดับที่ n)

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
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = str.replace(fixRegex, replaceText);
```

# --solutions--

```js
let str = "one two three";
let fixRegex = /(\w+) (\w+) (\w+)/g; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
```
