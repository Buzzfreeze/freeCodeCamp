---
id: 587d774d367417b2b2512a9e
title: Use Headings to Show Hierarchical Relationships of Content
challengeType: 0
videoUrl: 'https://scrimba.com/c/cqVEktm'
forumTopicId: 301026
dashedName: use-headings-to-show-hierarchical-relationships-of-content
---

# --description--

Headings (`h1` ถึง `h6` elements) เป็น workhorse tags ที่ช่วยกำหนดโครงสร้างและ labelให้กับเนื้อหาของคุณ
Screen readers สามารถถูกกำหนดให้อ่านเฉพาะ  headings ในหน้านั้น ๆ เพื่อผู้ใช้จะได้สรุปจากมัน
นี่หมายความว่า มันสำคัญสำหรับ heading tags ใน markup ของคุณที่จะมีความหมายทางภาษา (Semantic meaning) และเชื่อมโยงซึ่งกับและกัน ไม่ใช้แค่เรื่องของขนาดตัวอักษร

*Semantic meaning* หมายถึงการที่ tag ที่คุณใช้กับเนื้อหาของคุณบ่งบอกถึงประเภทของข้อมูลที่มันเก็บไว้

ถ้าคุณกำลังเขียน paper ทพร้อมกับส่วน introduction (บทนำ), body (ส่วนเนื้อหา), และ conclusion (บทสรุป), มันคงไม่ค่อย make sense เท่าไหร่ที่จะใส่บทสรุปในส่วนย่อย ๆ ของส่วนเนื้อหา มันควรจะมีส่วนของมันเอง
เช่นเดียวกันนี้  heading tags ในเว็บเพจต้องเป็นไปตามลำดับของมันและบ่งบอกลำดับขั้นของความสัมพันธ์ของเนื้อหา 

Headings ที่มีลำดับเท่ากัน (หรือสูงกว่า) จะเริ่ม section ใหม่ของมัน ส่วน headings ที่มีลำดับต่ำกว่าจะสร้าง subsections ไว้ใน heading ก่อนหน้านี้

ตามตัวอย่าง หน้าหน้าหนึ่งที่มี  `h2` element ที่มี subsection หลาย ๆ อันที่เป็น `h4` tag ตามมา จะทำให้ผุู้ใช้ screen reader สับสน
มันชวนให้ใช้ tag เดียวกับตัวเลือก 6 อัน เพราะมันดูดีกว่าบน browser แต่คุณสามารถใช้ CSS เพื่อแก้ไขขนาดข้องมันให้ต่างกันได้

อีกหนึ่งจุดสุดท้าย ในแต่ละหน้าควรมี `h1` element แค่ 1 อันเสมอ ซึ่งมันจะเป็นหัวเรื่องหลักของเนื้อหาของคุณ
heading เหล่านี้ถูกใช้ใน search engines เพื่อที่มันจะได้เข้าใจหัวข้อของหน้านั้น ๆ 
# --instructions--

Camper Cat ต้องกาให้หน้า ๆ หนึ่งบนเว็บไซต์ของเขาอุทิศให้กับวิธีการเป็นนินจา 
จงช่วยเขาแก้ heading เพื่อที่ markup ของเขาจะได้ให้ความหมายทางภาษาแก่เนื้อหา 
และจงแสดงความสัมพันธ์ระหว่าง parent child ใน sections ของเขาให้ถูกต้อง
จงเปลี่ยน `h5` tags ทั้งหมดให้มี heading level ที่เหมาะสมเพื่อบ่งบอกว่ามันเป็น subsections ของ`h2` tag จงใช้ `h3` tags เพื่อการนั้น

# --hints--

โค้ดของคุณควรมี `h3` tag 6 อัน

```js
assert($('h3').length === 6);
```

Your code should have 6 `h3` closing tags.

```js
assert((code.match(/\/h3/g) || []).length === 6);
```

Your code should not have any `h5` tags.

```js
assert($('h5').length === 0);
```

Your code should not have any `h5` closing tags.

```js
assert(/\/h5/.test(code) === false);
```

# --seed--

## --seed-contents--

```html
<h1>How to Become a Ninja</h1>
<main>
  <h2>Learn the Art of Moving Stealthily</h2>
  <h5>How to Hide in Plain Sight</h5>
  <h5>How to Climb a Wall</h5>

  <h2>Learn the Art of Battle</h2>
  <h5>How to Strengthen your Body</h5>
  <h5>How to Fight like a Ninja</h5>

  <h2>Learn the Art of Living with Honor</h2>
  <h5>How to Breathe Properly</h5>
  <h5>How to Simplify your Life</h5>
</main>
```

# --solutions--

```html
<h1>How to Become a Ninja</h1>
<main>
  <h2>Learn the Art of Moving Stealthily</h2>
  <h3>How to Hide in Plain Sight</h3>
  <h3>How to Climb a Wall</h3>

  <h2>Learn the Art of Battle</h2>
  <h3>How to Strengthen your Body</h3>
  <h3>How to Fight like a Ninja</h3>

  <h2>Learn the Art of Living with Honor</h2>
  <h3>How to Breathe Properly</h3>
  <h3>How to Simplify your Life</h3>
</main>
```
