---
id: 587d7b84367417b2b2512b37
title: Catch Mixed Usage of Single and Double Quotes
challengeType: 1
forumTopicId: 301188
dashedName: catch-mixed-usage-of-single-and-double-quotes
---

# --description--

การประกาศ string ใน JavaScript เราสามารถใช้ได้ทั้ง single quote (`'`) และ double quote (`"`) การติดสินใจว่าจะใช้แบบไหนนั้นขึ้นกับความชอบส่วนบุคคลและข้อจำกัดบางอย่าง

การมีทางเลือก 2 ทางมีประโยชน์มากเมื่อ string มีการย่อคำ (เช่นการใช้ It's แทน It is) หรืออยู่ใน quotes แต่ให้ระวังว่า คุณต้องไม่ใส่ quote ปิด string ผิดที่ ซึ่งทำให้เกิด syntax error ได้

ตัวอย่างต่อไปนี้เป็นการใช้ quote ปนกัน

```js
const grouchoContraction = "I've had a perfectly wonderful evening, but this wasn't it.";
const quoteInString = "Groucho Marx once said 'Quote me as saying I was mis-quoted.'";
const uhOhGroucho = 'I've had a perfectly wonderful evening, but this wasn't it.';
```

2 บรรทัดแรกถูกต้อง แต่บรรทัดที่ 3 ไม่ถูกต้อง

แน่นอนว่า การใช้เพียง quote แบบเดียวก็ย่อมทำได้ คุณสามารถมี quote ภายใน string ได้โดยการเพิ่ม backslash (`\`) เข้าไปหน้า quote

```js
const allSameQuotes = 'I\'ve had a perfectly wonderful evening, but this wasn\'t it.';
```

# --instructions--

จงปรับแก้ string ของค่า `href` โดยทำเป็น quote 2 แบบ หรือเพิ่ม backslash (`\`) เข้าไปหน้า quote ก็ได้ และให้ใส่ double quote ครอบ string ทั้งข้อความ

# --hints--

คุณควรแก้ไข quote ที่อยู่ `href` ตรงค่า `#Home` โดยทำเป็น quote 2 แบบ หรือเพิ่ม backslash (`\`) เข้าไปหน้า quote ก็ได้

```js
assert(code.match(/<a href=\s*?('|\\")#Home\1\s*?>/g));
```

โค้ดของคุณยังคงมี double quote ครอบ string ทั้งข้อความ

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
