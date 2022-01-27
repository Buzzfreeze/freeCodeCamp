---
id: 587d78af367417b2b2512b03
title: Build a Survey Form
challengeType: 3
forumTopicId: 301145
dashedName: build-a-survey-form
---

# --description--

**Objective:** ลองทำแอปโดยใช้ [CodePen.io](https://codepen.io) ให้มีฟังก์ชันเหมือนกับ: <https://codepen.io/freeCodeCamp/full/VPaoNP>

ลองดู [User Story](https://en.wikipedia.org/wiki/User_story) ข้างล่าง แล้วเขียนโค้ดตาม User Story นี้ โดยจะแต่งหน้าตาของแอปในส่วนที่ไม่ได้ระบุได้ตามที่ชอบเลย

คุณจะใช้ HTML, JavaScript, หรือ CSS เพื่อทำโปรเจคนี้ก็ได้
แต่เราแนะนำให้ใช้ CSS แบบปกติในการทำ เพราะว่าเนื้อหาในส่วนที่เราได้สอนไป เป็นเนื้อหาในส่วนของ CSS แบบปกติ
คุณจะใช้ Bootstrap หรือ SASS ก็ได้ถ้าคุณอยากใช้
เรายังไม่แนะนำให้ใช้เทคโนโลยีอื่น ๆ (เช่น jQuery, React, Angular, หรือ Vue) ในโปรเจกต์นี้
โปรเจคอื่นๆ หลังจากนี้จะเปิดโอกาสให้คุณได้ลองใช้เทคโนโลยีอื่นๆ เช่น React อย่างแน่นอน

ถ้าเจอปัญหาของโปรเจกต์นี้ก็แจ้งมาได้ เราพร้อมแก้ไขปัญหาที่ใช้เทคโนโลยีที่เราบอกอยู่แล้ว
โค้ดให้สนุกนะ!

**User Story #1:** ต้องมีหัวข้อที่มี `id="title"` และตัวอักษรมีขนาด H1

**User Story #2:** ต้องมีข้อความที่มี `id="description"` และตัวอักษรมีขนาด P

**User Story #3:** ต้องมี `form` ที่มี `id="survey-form"`

**User Story #4:** ใน form element จะมีช่องให้ใส่ชื่อ โดยมี `id="name"`

**User Story #5:** ใน form element จะมีช่องให้ใส่อีเมล โดยมี `id="email"`

**User Story #6:** ถ้ากรอกอีเมลที่รูปแบบไม่ถูกต้อง จะแสดงข้อผิดพลาดของ HTML5 ขึ้นมา

**User Story #7:** ใน form element จะมีช่องให้ใส่ตัวเลข โดยมี `id="number"`

**User Story #8:** ถ้ากรอกค่าที่ไม่ใช่ตัวเลขในช่องใส่ตัวเลข จะแสดงข้อผิดพลาดของ HTML5 ขึ้นมา

**User Story #9:** ถ้าฉันกรอกตัวเลขที่น้อยกว่าหรือมากกว่าค่าที่ระบุใน attribute `min` และ `max` ของช่องตัวเลข จะแสดงข้อผิดพลาดของ HTML5 ขึ้นมา

**User Story #10:** ช่องที่เอาไว้ใส่ชื่อ, อีเมล และตัวเลขข้างในฟอร์ม จะมี label ที่มี id ตามนี้ `id="name-label"`, `id="email-label"`, และ `id="number-label"`.

**User Story #11:** ช่องที่เอาไว้ใส่ชื่อ, อีเมล และตัวเลขข้างในฟอร์ม จะมี placeholder text ที่อธิบายค่าที่ต้องกรอกแต่ละช่อง

**User Story #12:** ใน form element ต้องมี dropdown ที่มี `id="dropdown"`

**User Story #13:** ใน form element จะมีกลุ่มของ radio button อย่างน้อย 1 กลุ่ม โดยแต่ละกลุ่มจะจับกลุ่มโดยการใช้ attribute `name`

**User Story #14:** ใน form element จะมี checkbox ที่ให้เลือกคำตอบหลายๆตัวได้ โดยแต่คำตอบจะต้องมี attribute `value`

**User Story #15:** ใน form element ต้องมี `textarea` อยู่ด้านล่าง สำหรับระบุข้อคิดเห็นเพิ่มเติม

**User Story #16:** ใน form element มีปุ่มที่มี `id="submit"` ที่จะใช้ส่ง input ทั้งหมด

คุณสามารถสร้างโปรเจคของคุณโดย <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>ใช้ CodePen template นี้</a> แล้วคลิก `Save` เพื่อสร้าง pen ของคุณเอง หรือคุณสามารถใช้ CDN นี้ เพื่อรันการทดสอบใน environment ที่คุณต้องการ: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

ให้ submit ส่ง URL ของโปรเจคที่ทำสำเร็จและได้รันการทดสอบผ่านหมดแล้ว เมื่อเสร็จงาน

# --solutions--

```html
// solution required
```
