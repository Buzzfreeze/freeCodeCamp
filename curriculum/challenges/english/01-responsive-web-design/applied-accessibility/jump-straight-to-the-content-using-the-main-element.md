---
id: 587d774e367417b2b2512a9f
title: Jump Straight to the Content Using the main Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7zuE'
forumTopicId: 301018
dashedName: jump-straight-to-the-content-using-the-main-element
---

# --description--

HTML5 ได้เพิ่ม elements หลาย ๆ แบบขึ้นมาใหม่ เพื่อช่วยให้นักพัฒนามีตัวเลือกมากขึ้นเวลาต้องจัดการกับ feature ต่าง ๆ ที่จะช่วยในเรื่องของความสามารถในการเข้าถึง
tag เหล่านั้นคือ `main`, `header`, `footer`, `nav`, `article`, และ `section`, รวมถึงตัวอื่น ๆ อีก

โดยค่าเริ่มต้น browser แสดงผลของ elements เหล่านี้คล้ายคลึงกับ `div` อย่างไรก็ตาม 
การใช้พวกมันอย่างเหมาะสมช่วยทำให้ markup ของคุณมีความหมายมากยิ่งขึ้น
เพียงแค่ tag name ก็สามารถบอกประเภทของข้อมูลที่มันเก็บไว้ได้ โดยการเพิ่มความหมายในเชิงของภาษาให้กับเนื้อหาส่วนนั้น
Assistive technologies สามารถเข้าถึงข้อมูลนี้เพื่อช่วยทำให้มี page summary หรือ navigation options ที่ดีขึ้นสำหรับผู้ใช้ของพวกเขา

`main` element ถูกใช้เพื่อเก็บเนื้อหาหลัก, และมันก็ควรมีแค่ 1 อันใน 1 หน้า
มันควรจะเก็บข้อมูลที่เกี่ยวข้องกับหัวข้อหลักในหน้านั้นของคุณ มันไม่ควรจะเก็บ items ที่ถูกใช้ซ้ำ ๆ กับหน้าอื่น ๆ ยกตัวอย่างเช่น navigation links หรือ banners

`main` tag ก็สามารถเก็บ embedded landmark feature ที่ assistive technology สามารถนำมาใใช้เป็นนำทางมันไปยังเนื้อหาหลังได้อย่างรวดเร็ว
ถ้าคุณเคยเห็น "Jump to Main Content" link ที่ด้านบนขอหน้าหนึ่ง ๆ นั่นคือการใช้ `main` tag เพื่อให้ assistive devices ทำงานได้อย่างอัตโนมัติ 

# --instructions--

Camper Cat มีไอเดียสุดบรรเจิดสำหรับหน้า "อาวุธนินจา" ของเขา
จงช่วยเขาทำ markup โดยการเพิ่ม `main` tags เปิดและปิดระหว่าง `header` และ `footer` (รวมถึงในแบบฝึกหัดอื่น ๆ)
จงปล่อย `main` tags ให้ว่างอย่างนี้ไปก่อน

# --hints--

โค้ดของคุณควรมี `main` tag 1 อัน

```js
assert($('main').length == 1);
```

`main` tags ควรจะอยู่ระหว่างแท็กปิดของ `header` และแท็กเปิดของ `footer` 

```js
assert(code.match(/<\/header>\s*?<main>\s*?<\/main>/gi));
```

# --seed--

## --seed-contents--

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>



<footer></footer>
```

# --solutions--

```html
<header>
  <h1>Weapons of the Ninja</h1>
</header>
<main>

</main>
<footer></footer>
```
