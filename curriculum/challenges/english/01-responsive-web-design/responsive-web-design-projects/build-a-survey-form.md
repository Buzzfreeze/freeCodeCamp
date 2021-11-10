---
id: 587d78af367417b2b2512b03
title: Build a Survey Form
challengeType: 3
forumTopicId: 301145
dashedName: build-a-survey-form
---

# --description--

**Objective:** จงสร้างแอปพลิเคชั่น [CodePen.io](https://codepen.io) ที่มีการทำงานคล้ายแอปพลิเคชั่นนี้: <https://codepen.io/freeCodeCamp/full/VPaoNP>.

จงทำตามการหลัก [user stories](https://en.wikipedia.org/wiki/User_story) และทดสอบให้ผ่านทุกเทส
จงทำตามสไตล์ของคุณเอง

คุณสามารถใช้ HTML, JavaScript, และ CSS เพื่อทำโปรเจคนี้
Plain CSS นั้นเป็นที่แนะนำเพราะมันคือสิ่งที่บทเรียนของเราได้กล่าวถึงมันไปหมดแล้วและคุณควรจะฝึกทักษะการใช้ plain CSS
คุณสามารถใช้ Bootstrap หรือ SASS ได้ถ้าคุณอยากใช้
เทคโนโลยีอื่น ๆ (อย่างเช่น jQuery, React, Angular, หรือ Vue) นั้นยังไม่แนะนำสำหรับโปรเจคนี้ โดยหากคุณจะใช้มันก็เป็นความเสี่ยงของคุณเอง
โปรเจคอื่น ๆ หลังจากนี้จะเปิดโอกาสให้คุณได้ลองใช้เทคโนโลยีอื่น ๆ เช่น React อย่างแน่นอน
เราพร้อมจะยอมรับและปรับปรุงปัญหาต่าง ๆ ที่เกิดขึ้นจากการใช้เทคโนโลยีที่ถูกแนะนำในโปรเจคนี้ Happy coding!

**User Story #1:** ฉันสามารถมองเห็นหัวข้อที่มี `id="title"` และมีขนาดตัวอักษรเป็นไซส์ของ H1

**User Story #2:** ฉันสามารถมองเห็นคำอฑิบายสั้น ๆ ทีมี `id="description"` และมีขนาดตัวอักษรเป็นไซส์ของ P

**User Story #3:** ฉันสามารถมองเห็น  `form` ที่มี `id="survey-form"`

**User Story #4:** ภายในของ form element, ฉันต้องการที่จะใส่ชื่อของฉันในช่องที่มี `id="name"`

**User Story #5:** ภายในของ form element, ฉันต้องการที่จะใส่อีเมลของฉันในช่องที่มี `id="email"`

**User Story #6:** ถ้าฉันกรอกอีเมลที่มี formatไม่ถูกต้อง, ฉันจะเห็น HTML5 validation error.

**User Story #7:** ภายในของ form, ฉันสามารถกรอกตัวเลขในช่องที่มี`id="number"`

**User Story #8:** ถ้าฉันกรอกค่าที่ไม่ใช่ตัวเลขใน number input, ฉันจะเห็น HTML5 validation error

**User Story #9:** ถ้าฉันกรอกตัวเลขที่มีเกิน range ของ number input ซึ่งจะถูกกำหนดโดย `min` และ `max` attributes, ฉันจะเห็น HTML5 validation error

**User Story #10:** สำหรับช่องที่เอาไว้ใส่ input ที่เป็นชื่อ, อีเมล, ตัวเลขข้างในฟอร์ม ฉันสามารถมองเห็น labels ที่เหมาะสมที่อธิบายจุดประสงค์ของแต่ละช่องที่มี ids ต่อไปนี้: `id="name-label"`, `id="email-label"`, and `id="number-label"`.

**User Story #11:** สำหรับช่องที่เอาไว้ใส่ input ที่เป็นชื่อ, อีเมล, ตัวเลข, ฉันสามารถมองเห็น placeholder text ที่ให้คำอธิบายหรือคำสั่งของแต่ละช่อง

**User Story #12:** ภายในของ form element, ฉันสามารถเลือกตัวเลือกจาก dropdown ที่มี id="dropdown"`.

**User Story #13:** ภายในของ form element, ฉันสามารถเลือกคำตอบจากกลุ่มของ radio buttons ที่อาจจะมีมากกว่า 1 อัน โดยแต่ละกลุ่มควรถูกจับกลุ่มโดยการใช้ `name` attribute.

**User Story #14:** ภายในของ form element, ฉันสามารถเลือกคำตอบหลาย ๆ ข้อได้ด้วยเซ็ตของcheckboxes, โดยแต่ละอันต้องมี `value` attribute.

**User Story #15:** ภายในของ form element, ฉันเห็น `textarea` ที่ด้านล่างของ comments เพิ่มเติม

**User Story #16:** ภายในของ form element, ฉันเห็นปุ่มหนึ่งที่มี `id="submit"` เพื่อส่ง inputs ทั้งหมดของฉัน

คุณสามารถสร้างโปรเจคของคุณได้โดย <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>using this CodePen template</a> และกดคลิก `Save` เพื่อสร้าง pen ของคุณเอง หรือว่าคุณจะใช้ CDN link อันนี้เพื่อ run test ใน environment ที่คุณชอบก็ได้เช่นกัน: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

เมื่อคุณทำทุกอย่างเสร็จแล้ว จงส่ง URL ที่พาไปยังโปรเจคของคุณพร้อมกับ test ที่ผ่านทั้งหมด 
# --solutions--

```html
// solution required
```
