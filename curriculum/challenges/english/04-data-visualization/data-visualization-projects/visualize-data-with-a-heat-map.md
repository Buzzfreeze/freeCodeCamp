---
id: bd7188d8c242eddfaeb5bd13
title: Visualize Data with a Heat Map
challengeType: 3
forumTopicId: 301466
dashedName: visualize-data-with-a-heat-map
---

# --description--

**Objective:** ลองทำแอปโดยใช้ [CodePen.io](https://codepen.io) ให้มีฟังก์ชันเหมือนกับ <https://codepen.io/freeCodeCamp/full/JEXgeY>.

ให้ใช้ HTML, JavaScript, CSS, และ library D3 
ให้สร้างแกนของกราฟโดยใช้ property axis ของ D3 ซึ่งจะสร้างขีดที่ใช้บอกตำแหน่งบนแกน ขีดพวกนี้สำคัญเพราะว่า เราจะดูตำแหน่งของขีดพวกนี้เพื่อดูว่าโค้ดที่คุณเขียนสร้างกราฟที่ถูกต้องหรือไม่ 
ให้อ่านวิธีการสร้างแกนจาก <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis>
ในการเขียนโค้ดให้ใช้ DOM แบบปกติ (ที่ไม่ใช่ virtual DOM) เพราะว่าถ้าใช้ frontend framework อย่าง Vue หรือ React (ที่ใช้ Virtual DOM) เราจะตรวจโค้ดของคุณไม่ได้

**Heat Map** คือกราฟรูปแบบหนึ่งที่จะใช้สีเพื่อแสดงถึงปริมาณหรือความถี่ของข้อมูล โดยในแบบทดสอบนี้เราจะแสดงข้อมูลอยู่ในกล่อง (cell) ที่จะเป็นตัวแทนของข้อมูลตามแกน x และแกน y ของกล่องข้อมูลนั้น

**User Story #1:** กราฟที่เขียนจะต้องมีชื่อกราฟอยู่ใน element ที่มี id เป็น `"title"`

**User Story #2:** กราฟที่เขียนจะต้องมีคำอธิบายของกราฟอยู่ใน element ที่มี id เป็น `"description"`

**User Story #3:** ต้องเขียนแกน x ที่มี id เป็น `"x-axis"`

**User Story #4:** ต้องเขียนแกน y ที่มี id เป็น `"y-axis"`

**User Story #5:** ต้องใช้ element `rect` ที่มี class เป็น `"cell"` เพื่อแสดงข้อมูล

**User Story #6:** ต้องใช้สีอย่างน้อย 4 สีเพื่อแสดงข้อมูลของ cell

**User Story #7:** ทุก cell ต้องมี property `data-month`, `data-year`, `data-temp` ที่เก็บค่าของ `month`, `year`, และ `temperature` ตามลำดับ

**User Story #8:** ค่า `data-month` และ `data-year` ของทุก cell ต้องอยู่ในขอบเขตของชุดข้อมูลที่มีให้

**User Story #9:** ทุก cell ที่แสดงต้องมีค่า month ที่ตรงกับข้อมูลบนแกน y

**User Story #10:** ทุก cell ที่แสดงต้องมีค่า year ที่ตรงกับข้อมูลบนแกน x

**User Story #11:** ต้องมีชื่อเดือนแสดงอยู่บนแกน y

**User Story #12:** ต้องแสดงปี ค.ศ. บนแกน x โดยไล่ตั้งแต่ปี 1754 ไปจนถึงปี 2015

**User Story #13:** ต้องแสดง legend โดยมี id เป็น `"legend"`

**User Story #14:** ต้องใช้ element `rect` ใน legend

**User Story #15:** ต้องมี element `rect` ใน legend อย่างน้อย 4 ตัว โดยแต่ละตัวต้องมีสีต่างกัน

**User Story #16:** ถ้าเอาเมาส์ไปชี้บน cell จะแสดง tooltip ที่แสดงข้อมูลของ cell นั้น โดย tooltip นี้จะมี id เป็น `"tooltip"` 

**User Story #17:** ใน tooltip ต้องมี property `data-year` ซึ่งมีค่าเป็น `data-year` ของ cell ที่เอาเมาส์ไปชี้

ให้ใช้ชุดข้อมูลนี้ทำแบบทดสอบ  `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json`

คุณสามารถสร้างโปรเจคของคุณโดยใช้ <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'> CodePen template </a> นี้ได้ แล้วคลิก `Save` เพื่อสร้าง pen ของคุณเอง หรือคุณสามารถใช้ CDN นี้ เพื่อรันการทดสอบใน environment ที่คุณต้องการ: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

ให้ submit ส่ง URL ของโปรเจคที่ทำสำเร็จและได้รันการทดสอบผ่านหมดแล้ว เมื่อเสร็จงาน

# --solutions--

```js
// solution required
```
