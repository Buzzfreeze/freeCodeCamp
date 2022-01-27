---
id: 587d78b0367417b2b2512b05
title: Build a Technical Documentation Page
challengeType: 3
forumTopicId: 301146
dashedName: build-a-technical-documentation-page
---

# --description--

**Objective:** ลองทำแอปโดยใช้ [CodePen.io](https://codepen.io) ให้มีฟังก์ชันเหมือนกับ: <https://codepen.io/freeCodeCamp/full/NdrKKL>

ลองดู [User Story](https://en.wikipedia.org/wiki/User_story) ข้างล่าง แล้วเขียนโค้ดตาม User Story นี้ โดยจะแต่งหน้าตาของแอปในส่วนที่ไม่ได้ระบุได้ตามที่ชอบเลย

คุณจะใช้ HTML, JavaScript, หรือ CSS เพื่อทำโปรเจคนี้ก็ได้
แต่เราแนะนำให้ใช้ CSS แบบปกติในการทำ เพราะว่าเนื้อหาในส่วนที่เราได้สอนไป เป็นเนื้อหาในส่วนของ CSS แบบปกติ
คุณจะใช้ Bootstrap หรือ SASS ก็ได้ถ้าคุณอยากใช้
เรายังไม่แนะนำให้ใช้เทคโนโลยีอื่น ๆ (เช่น jQuery, React, Angular, หรือ Vue) ในโปรเจกต์นี้
โปรเจคอื่นๆ หลังจากนี้จะเปิดโอกาสให้คุณได้ลองใช้เทคโนโลยีอื่นๆ เช่น React อย่างแน่นอน

ถ้าเจอปัญหาของโปรเจกต์นี้ก็แจ้งมาได้ เราพร้อมแก้ไขปัญหาที่ใช้เทคโนโลยีที่เราบอกอยู่แล้ว
โค้ดให้สนุกนะ!

**User Story #1:** ต้องมี `main` element ที่มี `id="main-doc"` ซึ่งเก็บข้อมูลหลักของหน้านี้ไว้ด้านใน (Technical Documentation)

**User Story #2:** ใน element `#main-doc` ต้องมี element `section` หลายตัว โดยทุกตัวต้องมีคลาสเป็น `main-section` (ต้องมี element ที่มีคลาสเป็น `section` อย่างน้อย 5 ตัว)

**User Story #3:** element แรกใน `.main-section` แต่ละตัว ต้องเป็น `header` element ซึ่งเก็บข้อความหัวข้อของส่วนนั้นๆ เป็นภาษาอังกฤษ

**User Story #4:** element `section` ที่มีคลาสเป็น `main-section` ต้องมี id เหมือนข้อความใน `header` ถ้ามีการเว้นวรรคให้ใช้ underscore แทน `_` (เช่น ถ้า `section` นั้นมี header เป็น "JavaScript and Java" แล้ว `section` นั้นจะต้องมี `id="JavaScript_and_Java"`).

**User Story #5:** `.main-section` ต้องมี `p` element อยู่ด้านใน อย่างน้อย 10 ตัว

**User Story #6:** `.main-section` ต้องมี `code` element อยู่ด้านใน อย่างน้อย 5 ตัว

**User Story #7:** `.main-section` ต้องมี `li` element อยู่ด้านใน อย่างน้อย 5 ตัว

**User Story #8:** ต้องมี `nav` element ที่มี `id="navbar"`

**User Story #9:** navbar element ต้องมี `header` element 1 อัน ที่เป็นข้อความอธิบายหัวข้อของเอกสารนั้นๆ

**User Story #10:** ใน navbar ต้องมีลิงก์ (`a`) element ที่มีคลาสเป็น `nav-link` และต้องมีจำนวนของ element ที่มีคลาสเป็น `nav-link` เท่ากับ element ที่มีคลาสเป็น `main-section`

**User Story #11:** `header` ใน navbar ต้องมาก่อนลิงก์ (`a`) ทุกอันใน navbar

**User Story #12:** ทุก element ที่มีคลาสเป็น `nav-link` ต้องมีข้อความที่เหมือนกับ `header` ในแต่ละ `section` (เช่น ถ้ามี header ที่มีข้อความว่า "Hello world" แล้ว navbar ก็จะต้องมี element ที่มีข้อความข้างในเป็น "Hello world")

**User Story #13:** เมื่อคลิกที่ navbar element เบราว์เซอร์จะต้องลิงก์ไปส่วนที่เกี่ยวข้องที่อยู๋ใน `main-doc` element (เช่น ถ้าคลิกที่ `nav-link` ที่มีข้อความ "Hello world" เบราว์เซอร์จะต้องลิงก์ไปที่ `section` ที่มี id เป็น "hello_world" และมี `header` ที่มีข้อความ "Hello world")

**User Story #14:** element ที่มี `id="navbar"` ต้องอยู่ที่ด้านซ้ายของหน้าจอ และผู้ใช้ต้องเห็นได้ตลอดเวลา บนอุปกรณ์ขนาดปกติ (เช่น โน๊ตบุ๊ค)

**User Story #15:** หน้า Technical Documentation ต้องใช้ media query อย่างน้อย 1 อัน

คุณสามารถสร้างโปรเจคของคุณโดย <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>ใช้ CodePen template นี้</a> แล้วคลิก `Save` เพื่อสร้าง pen ของคุณเอง หรือคุณสามารถใช้ CDN นี้ เพื่อรันการทดสอบใน environment ที่คุณต้องการ: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

ให้ submit ส่ง URL ของโปรเจคที่ทำสำเร็จและได้รันการทดสอบผ่านหมดแล้ว เมื่อเสร็จงาน

# --solutions--

```html
// solution required
```
