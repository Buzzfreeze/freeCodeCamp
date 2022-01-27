---
id: 587d774c367417b2b2512a9c
title: Add a Text Alternative to Images for Visually Impaired Accessibility
challengeType: 0
videoUrl: "https://scrimba.com/c/cPp7VfD"
forumTopicId: 16628
dashedName: add-a-text-alternative-to-images-for-visually-impaired-accessibility
---

# --description--

คุณน่าจะได้เห็นการใช้ attribute `alt` ในแท็ก `img` ในแบบทดสอบที่ผ่านมาบ้างแล้ว
โดยข้อความใน `alt` จะให้อธิบายเนื้อหาของรูปภาพ
โดย `alt` จะมีประโยชน์ เวลาที่เราไม่สามารถโหลดรูปภาพขึ้นมาได้ หรือหรือผู้ใช้ดูรูปภาพไม่ได้
และ Search engine ก็จะอ่านค่าของ `alt` เพื่อที่จะรู้ว่ารูปภาพนั้นคืออะไร
ลองดูตัวอย่างการใช้งาน:

```html
<img src="importantLogo.jpeg" alt="Company logo" />
```

คนที่มีปัญหาด้านการมองเห็นจะใช้ screen reader เพื่ออ่านข้อมูลบนหน้าเว็บให้เขาฟัง
โดยเขาจะไม่มีทางรู้ได้เลยว่ารูปภาพที่เราใส่ไปสื่อถึงอะไร ถ้าเราไม่ระบุ `alt` ให้กับรูปภาพ

ในการระบุข้อความใน `alt` เราจะต้องใช้เป็นคำอธิบายของรูปภาพนั้นแบบสั้นๆ
และคุณควรใส่ attribute `alt` ลงไปในรูปภาพเสมอ
ถึงแม้ HTML5 จะไม่ได้บังคับให้เราใส่ก็ตาม

# --instructions--

นาย Camper Cat เป็นทั้งนักพัฒนาและนินจาจริง ๆ โดยเขากำลังสร้างเว็บเพื่อแบ่งปันความรู้ของเขาอยู่
ตอนนี้เขามีรูปโปรไฟล์แล้ว และเขาต้องการให้ทุกคนรู้ว่ารูปโปรไฟล์ของเขาคือรูปอะไร
ให้เพิ่ม attribute `alt` ในแท็ก `img` โดยใช้ข้อความว่า "Someone doing karate" (ตอนนี้ลิงก์ของ `src` ไม่ได้ลิงก์ไปที่ไฟล์จริงๆ เพราะฉะนั้นคุณจะเห็นข้อความของ `alt` ได้บนจอ)

# --hints--

แท็ก `img` ของคุณควรมี `alt` attribute และควรมีข้อความอยู่ในนั้นด้วย

```js
assert($("img").attr("alt"));
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
