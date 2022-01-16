---
id: 587d7b84367417b2b2512b37
title: Catch Mixed Usage of Single and Double Quotes
challengeType: 1
forumTopicId: 301188
dashedName: catch-mixed-usage-of-single-and-double-quotes
---

# --description--

การประกาศ string ใน JavaScript เราสามารถใช้ได้ทั้ง single quote (`'`) และ double quote (`"`) การจะใช้ตัวไหนนั้นขึ้นอยู่กับความชอบเลย แต่ก็จะมีข้อจำกัดบางอย่างที่จะทำให้บางครั้งเราต้องเลือกใช้ตัวใดตัวหนึ่ง

การที่เราสามารถเลือกใช้สองตัวนี้ได้ 2 จะมีประโยชน์มากถ้า string มีการใช้เครื่องหมายตัวใดตัวหนึ่งในนั้น แต่ต้องระวังเรื่องการปิด string ผิดที่ ซึ่งทำให้เกิด syntax error ได้

ลองดูตัวอย่างการใช้เครื่องหมาย quote ใน string:

```js
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
```

2 บรรทัดแรกถูกต้อง แต่บรรทัดที่ 3 ผิด

ถ้าคุณอยากใช้ quote แบบเดียวก็ทำได้ เราจะใส่ quote ใน string ที่เปิด-ปิดด้วย quote แบบเดียวกันได้โดยการใส่ backslash (`\`) เข้าไปหน้า quote

จากตัวอย่างที่ผิดด้านบน เราสามารถแก้ให้ถูกได้ด้วยวิธีนี้:

```js
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
```

# --instructions--

ให้แก้ string ของ `href` โดยจะใช้ quote 2 แบบ หรือจะเพิ่ม backslash (`\`) เข้าไปหน้าเครื่องหมาย quote ก็ได้ และให้ใช้ double quote ครอบ string เหมือนเดิม

# --hints--

คุณควรแก้ไข quote ที่อยู่ `href` ตรงค่า `#Home` โดยจะใช้ quote 2 แบบ หรือจะเพิ่ม backslash (`\`) เข้าไปหน้าเครื่องหมาย quote ก็ได้

```js
assert(code.match(/<a href=\s*?('|\\")#Home\1\s*?>/g));
```

ต้องใช้ double quote ครอบ string เหมือนเดิม

```js
assert(code.match(/"<p>.*?<\/p>";/g));
```

# --seed--

## --seed-contents--

```js
let innerHtml = "<p>Click here to <a href="#Home">return home</a></p>";
console.log(innerHtml);
```

# --solutions--

```js
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
console.log(innerHtml);
```
