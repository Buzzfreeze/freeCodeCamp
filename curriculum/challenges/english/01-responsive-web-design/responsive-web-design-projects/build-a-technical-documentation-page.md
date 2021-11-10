---
id: 587d78b0367417b2b2512b05
title: Build a Technical Documentation Page
challengeType: 3
forumTopicId: 301146
dashedName: build-a-technical-documentation-page
---

# --description--

**Objective:** จงสร้างแอปพลิเคชั่น [CodePen.io](https://codepen.io) ที่มีการทำงานคล้ายแอปพลิเคชั่นนี้: <https://codepen.io/freeCodeCamp/full/NdrKKL>.

จงทำตามการหลัก [user stories](https://en.wikipedia.org/wiki/User_story) และทดสอบให้ผ่านทุกเทส
จงทำตามสไตล์ของคุณเอง

คุณสามารถใช้ HTML, JavaScript, และ CSS เพื่อทำโปรเจคนี้
Plain CSS นั้นเป็นที่แนะนำเพราะมันคือสิ่งที่บทเรียนของเราได้กล่าวถึงมันไปหมดแล้วและคุณควรจะฝึกทักษะการใช้ plain CSS
คุณสามารถใช้ Bootstrap หรือ SASS ได้ถ้าคุณอยากใช้
เทคโนโลยีอื่น ๆ (อย่างเช่น jQuery, React, Angular, หรือ Vue) นั้นยังไม่แนะนำสำหรับโปรเจคนี้ โดยหากคุณจะใช้มันก็เป็นความเสี่ยงของคุณเอง
โปรเจคอื่น ๆ หลังจากนี้จะเปิดโอกาสให้คุณได้ลองใช้เทคโนโลยีอื่น ๆ เช่น React อย่างแน่นอน
เราพร้อมจะยอมรับและปรับปรุงปัญหาต่าง ๆ ที่เกิดขึ้นจากการใช้เทคโนโลยีที่ถูกแนะนำในโปรเจคนี้ Happy coding!

**User Story #1:** I can see a `main` element with a corresponding `id="main-doc"`, which contains the page's main content (technical documentation).

**User Story #2:** Within the `#main-doc` element, I can see several `section` elements, each with a class of `main-section`. There should be a minimum of 5.

**User Story #3:** The first element within each `.main-section` should be a `header` element which contains text that describes the topic of that section.

**User Story #4:** Each `section` element with the class of `main-section` should also have an id that corresponds with the text of each `header` contained within it. Any spaces should be replaced with underscores (e.g. The `section` that contains the header "JavaScript and Java" should have a corresponding `id="JavaScript_and_Java"`).

**User Story #5:** `.main-section` elements ควรเก็บ `p` elements อย่างน้อย 10 อัน 

**User Story #6:** The `.main-section` elements ควรเก็บ `code` elements อย่างน้อย 5 อัน

**User Story #7:** The `.main-section` elements ควรเก็บอย่างน้อย `li` items อย่างน้อย 5 อัน

**User Story #8:** ฉันสามารถมองเห็น `nav` element ที่มี `id="navbar"`.

**User Story #9:** navbar element ควรเก็บ `header` element 1 อันที่มีข้อความอธิบายหัวข้อชื่อ technical documentation.

**User Story #10:** navbar ควรเก็บลิงค์ (`a`) elements ที่มีคลาสชื่อ `nav-link` นั่นควรเป็น element ตัวหนึ่งจาก element ที่มีคลาสชื่อ `main-section`

**User Story #11:** `header` element ใน navbar ต้องมาก่อนลิงค์ (`a`) element ทุกอันใน navbar.

**User Story #12:** แต่ละ element ที่มีคลาสชื่ `nav-link` ควรเก็บข้อความที่สัมพันธ์กับข้อความ `header` ข้างในแต่ละ `section` (เช่นถ้าคุณมี "Hello world" section/header, navbar ของคุณควรจะมี element ตัวหนึ่งที่เก็บข้อความ "Hello world").

**User Story #13:** เมื่อฉันคลิกที่ navbar element, หน้านั้นควรจะพาไปที่ section ที่เกี่ยวข้องของ `main-doc` element (เช่น ถ้าฉันคลิกที่I`nav-link` element ที่เก็บข้อความว่า "Hello world", หน้านั้นควรผ่านไปที่ `section` element ที่มี id อันนั้นหรือเก็บ `header` ที่สัมพันธ์กัน

**User Story #14:** บนอุปกรณ์ที่มีชนาดทั่วไป (เช่น laptops, desktops), element ที่มี `id="navbar"` ควรถูกแสดงที่ด้านซ้ายของหน้าจอและควรสามารถถูกมองเห็นจากผู้ใช้ตลอดเวลา

**User Story #15:** หน้า Technical Documentation ของฉันควรใช้ media query อย่างน้อย 1 อัน

คุณสามารถสร้างโปรเจคของคุณได้โดย <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>using this CodePen template</a> และกดคลิก `Save` เพื่อสร้าง pen ของคุณเอง หรือว่าคุณจะใช้ CDN link อันนี้เพื่อ run test ใน environment ที่คุณชอบก็ได้เช่นกัน: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

เมื่อคุณทำทุกอย่างเสร็จแล้ว จงส่ง URL ที่พาไปยังโปรเจคของคุณพร้อมกับ test ที่ผ่านทั้งหมด 
# --solutions--

```html
// solution required
```
