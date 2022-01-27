---
id: 587d7fa6367417b2b2512bc0
title: Visualize Data with a Treemap Diagram
challengeType: 3
forumTopicId: 301468
dashedName: visualize-data-with-a-treemap-diagram
---

# --description--

**Objective:** ลองทำแอปโดยใช้ [CodePen.io](https://codepen.io) ให้มีฟังก์ชันเหมือนกับ <https://codepen.io/freeCodeCamp/full/KaNGNR>.

ให้ใช้ HTML, JavaScript, CSS, และ library D3 
ให้สร้างแกนของกราฟโดยใช้ property axis ของ D3 ซึ่งจะสร้างขีดที่ใช้บอกตำแหน่งบนแกน ขีดพวกนี้สำคัญเพราะว่า เราจะดูตำแหน่งของขีดพวกนี้เพื่อดูว่าโค้ดที่คุณเขียนสร้างกราฟที่ถูกต้องหรือไม่ 
ให้อ่านวิธีการสร้างแกนจาก <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis>
ในการเขียนโค้ดให้ใช้ DOM แบบปกติ (ที่ไม่ใช่ virtual DOM) เพราะว่าถ้าใช้ frontend framework อย่าง Vue หรือ React (ที่ใช้ Virtual DOM) เราจะตรวจโค้ดของคุณไม่ได้

**Tree Map** คือกราฟที่แสดงข้อมูลโดยใช้สีเพื่อบอกถึงประเภทของข้อมูล และใช้ขนาดของกล่องข้อมูล (tile) เพื่อบอกถึงปริมาณหรือความถี่ของข้อมูล ให้ลองดูตัวอย่างจากโค้ดที่เรามีจะ จะได้เข้าใจวิธีการแสดงผลของกราฟนี้

**User Story #1:** กราฟที่เขียนจะต้องมีชื่อกราฟอยู่ใน element ที่มี id เป็น `"title"`

**User Story #2:** กราฟที่เขียนจะต้องมีคำอธิบายของกราฟอยู่ใน element ที่มี id เป็น `"description"`

**User Story #3:** กราฟที่เขียนจะต้องมี element `rect` ที่มี class เป็น `"tile"` เพื่อแสดงชื่อของข้อมูลนั้น

**User Story #4:** ต้องใช้สีอย่างน้อย 2 สีเพื่อแบ่งประเภทของข้อมูล

**User Story #5:** กล่องข้อมูลแต่ละกล่องต้องมี property `data-name`, `data-category` และ `data-value` ที่มีค่าตาม `name`, `category` และ `value` ของข้อมูลตามลำดับ

**User Story #6:** ขนาดของกล่องข้อมูลต้องอ้างอิงตาม `data-value` ของข้อมูลนั้น (ข้อมูลที่มี `data-value` มากกว่าควรมีกล่องข้อมูลที่ใหญ่กว่า)

**User Story #7:** กราฟของคุณต้องมี legend ที่มี id เป็น `"legend"`

**User Story #8:** ใน legend ต้องมี element `rect` ที่มี class เป็น `"legend-item"`

**User Story #9:** ต้องมี element `rect` ใน legend อย่างน้อย 2 ตัว โดยแต่ละตัวต้องมีสีต่างกัน

**User Story #10:** ถ้าเอาเมาส์ไปชี้บนกล่องข้อมูลจะต้องแสดง tooltip ที่แสดงข้อมูลของกล่องข้อมูลนั้น โดย tooltip นี้จะมี id เป็น `"tooltip"` 

**User Story #11:** ใน tooltip ต้องมี property `data-value` ซึ่งมีค่าเป็น `data-value` ของข้อมูลนั้นๆ

ให้ใช้ชุดข้อมูลนี้ทำแบบทดสอบ:  

-   **Kickstarter Pledges:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json`
-   **Movie Sales:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json`
-   **Video Game Sales:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json`

คุณสามารถสร้างโปรเจคของคุณโดยใช้ <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'> CodePen template </a> นี้ได้ แล้วคลิก `Save` เพื่อสร้าง pen ของคุณเอง หรือคุณสามารถใช้ CDN นี้ เพื่อรันการทดสอบใน environment ที่คุณต้องการ: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

ให้ submit ส่ง URL ของโปรเจคที่ทำสำเร็จและได้รันการทดสอบผ่านหมดแล้ว เมื่อเสร็จงาน

# --solutions--

```js
// solution required
```
