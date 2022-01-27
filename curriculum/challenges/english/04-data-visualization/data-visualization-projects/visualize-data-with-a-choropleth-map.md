---
id: 587d7fa6367417b2b2512bbf
title: Visualize Data with a Choropleth Map
challengeType: 3
forumTopicId: 301465
dashedName: visualize-data-with-a-choropleth-map
---

# --description--

**Objective:** ลองทำแอปโดยใช้ [CodePen.io](https://codepen.io) ให้มีฟังก์ชันเหมือนกับ <https://codepen.io/freeCodeCamp/full/EZKqza>.

ให้ใช้ HTML, JavaScript, CSS, และ library D3 
ให้สร้างแกนของกราฟโดยใช้ property axis ของ D3 ซึ่งจะสร้างขีดที่ใช้บอกตำแหน่งบนแกน ขีดพวกนี้สำคัญเพราะว่า เราจะดูตำแหน่งของขีดพวกนี้เพื่อดูว่าโค้ดที่คุณเขียนสร้างกราฟที่ถูกต้องหรือไม่ 
ให้อ่านวิธีการสร้างแกนจาก <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis>
ในการเขียนโค้ดให้ใช้ DOM แบบปกติ (ที่ไม่ใช่ virtual DOM) เพราะว่าถ้าใช้ frontend framework อย่าง Vue หรือ React (ที่ใช้ Virtual DOM) เราจะตรวจโค้ดของคุณไม่ได้

**Choropleth Map** คือกราฟที่แสดงข้อมูลตามเขตของพื้นที่ โดยจะใช้สีเพื่อแสดงถึงปริมาณหรือความถี่ของข้อมูล
**County** แปลเป็นภาษาไทยได้ตรงๆว่า เทศมณฑล ซึ่งเป็นเขตการปกครองแบบหนึ่งของประเทศอเมริกา ในคำอธิบายของแบบทดสอบนี้เราจะใช้คำว่า "เมือง" แทน เพื่อให้เข้าใจง่าย

**User Story #1:** กราฟที่เขียนจะต้องมีชื่อกราฟอยู่ใน element ที่มี id เป็น `"title"`

**User Story #2:** กราฟที่เขียนจะต้องมีคำอธิบายของกราฟอยู่ใน element ที่มี id เป็น `"description"`

**User Story #3:** กราฟที่เขียนต้องแสดงเมืองในแผนที่ โดยแต่ละเมืองต้องมี class เป็น `"county"` 

**User Story #4:** ต้องใช้สีอย่างน้อย 4 สีเพื่อแสดงข้อมูลของเมือง

**User Story #5:** แต่ละเมืองต้องมี property `data-fips` และ `data-education` ซึ่งมีค่าตาม `fips` และ `education` ของข้อมูล

**User Story #6:** แต่ละข้อมูลในชุดข้อมูลที่เรามีให้ จะหมายถึง 1 เมือง และคุณต้องแสดงทุกข้อมูลที่เรามีให้ลงในแผนที่

**User Story #7:** แต่ละเมืองต้องมีค่าของ `data-fips` และ `data-education` ตรงกับข้อมูลที่เรามีให้

**User Story #8:** ในแผนที่ของคุณต้องมี legend ที่มี id เป็น `"legend"`

**User Story #9:** ต้องใช้สีอย่างน้อย 4 สีเพื่ออธิบาย legend

**User Story #16:** ถ้าเอาเมาส์ไปชี้บนเมืองในแผนที่จะแสดง tooltip ที่แสดงข้อมูลของเมืองนั้น โดย tooltip นี้จะมี id เป็น `"tooltip"` 

**User Story #11:** ใน tooltip ต้องมี property `data-education` ซึ่งมีค่าเป็น `data-education` ของเมืองนั้นๆ

ให้ใช้ชุดข้อมูลนี้ทำแบบทดสอบ:  

-   **US Education Data:**`https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json`
-   **US County Data:**`https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json`

คุณสามารถสร้างโปรเจคของคุณโดยใช้ <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'> CodePen template </a> นี้ได้ แล้วคลิก `Save` เพื่อสร้าง pen ของคุณเอง หรือคุณสามารถใช้ CDN นี้ เพื่อรันการทดสอบใน environment ที่คุณต้องการ: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

ให้ submit ส่ง URL ของโปรเจคที่ทำสำเร็จและได้รันการทดสอบผ่านหมดแล้ว เมื่อเสร็จงาน

# --solutions--

```js
// solution required
```
