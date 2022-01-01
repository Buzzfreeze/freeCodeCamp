---
id: 587d774c367417b2b2512a9c
title: Add a Text Alternative to Images for Visually Impaired Accessibility
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp7VfD'
forumTopicId: 16628
dashedName: add-a-text-alternative-to-images-for-visually-impaired-accessibility
---

# --description--

คุณมักจะเห็น `alt` attribute บน `img` tag ใน challenges อื่นๆ
ข้อความ `alt`จะอธิบายเนื้อหาของรูปภาพและเพิ่ม text-alternative ให้กับภาพ
`alt` attribute มีประโยชน์ในกรณีที่เราไม่สามารถโหลดรูปภาพขึ้นมาได้หรือรูปภาพไม่ถูกเห็นโดยผู้ใช้
Search engines ก็ใช้มันเพื่อที่จะเข้าใจว่าในรูปภาพนั้นหมายถึงอะไร
นี่คือตัวอย่าง :

```html
<img src="importantLogo.jpeg" alt="Company logo" />
```

คนที่มีปัญหาด้านการมองเห็นจะพึ่งพา screen readers เพื่อเปลี่ยนเนื้อหาบนเว็บไซต์ให้เป็นเสียง
พวกเขาไม่สามารถรับข้อมูลได้ถ้ามันถูกแสดงในรูปแบบที่เป็นภาพอย่างเดียว
สำหรับรูปภาพ, screen readers สามารถเข้าถึง `alt` attribute และอ่านเนื้อหาข้างในเพื่อสื่อสารใจความสำคัญออกไป

ข้อความ `alt` ที่ดีต้องให้คำอธิบายสั้น ๆ ของรูปภาพแก่ผู้อ่าน
คุณควรใส่ `alt` attribute เข้าไปในรูปภาพของรูปเสมอ
สำหรับ HTML5 นั้มันไม่่ได้บังคับให้เราใส่ alt ให้ทุกภาพแต่มันคือพื้นฐานที่ควรทำ

# --instructions--

ตัวอย่างเช่น Camper Cat เป็นทั้งนินจาโค้ดดิ้งและนินจาจริง ๆ เขาคือคนที่สร้างเว็บไซต์เป็นแบ่งปันความรู้ของเขา
เขาต้องการให้รูปโปรไฟล์ของเขานั้นแสดงถึงความสามารถของเขา และผู้เข้าชมทุกคนควรจะเข้าถึงได้
จงเพิ่ม `alt` attribute ใน `img` tag ซึ่งมันจะต้องอธิบายว่า Camper Cat กำลังฝึกคาราเต้ (`src` ของรูปไม่ต้องลิงค์ไปที่ไฟล์จริง ๆ ซึ่งทำให้คุณสามารถเห็นข้อความ `alt` ได้บนจอ)

# --hints--

`img` tag ของคุณควรมี `alt` attribute และมันไม่ควรว่างเปล่า

```js
assert($('img').attr('alt'));
```

# --seed--

## --seed-contents--

```html
<img src="doingKarateWow.jpeg" />
```

# --solutions--

```html
<img src="doingKarateWow.jpeg" alt="Someone doing karate" />
```
