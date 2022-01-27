---
id: bd7168d8c242eddfaeb5bd13
title: Visualize Data with a Bar Chart
challengeType: 3
forumTopicId: 301464
dashedName: visualize-data-with-a-bar-chart
---

# --description--

**Objective:** ลองทำแอปโดยใช้ [CodePen.io](https://codepen.io) ให้มีฟังก์ชันเหมือนกับ <https://codepen.io/freeCodeCamp/full/GrZVaM>.

ลองดู [User Story](https://en.wikipedia.org/wiki/User_story) ข้างล่าง แล้วเขียนโค้ดตาม User Story นี้ โดยจะแต่งหน้าตาของแอปในส่วนที่ไม่ได้ระบุได้ตามที่ชอบเลย

ให้ใช้ HTML, JavaScript, CSS, และ library D3 
ให้สร้างแกนของกราฟโดยใช้ property axis ของ D3 ซึ่งจะสร้างขีดที่ใช้บอกตำแหน่งบนแกน ขีดพวกนี้สำคัญเพราะว่า เราจะดูตำแหน่งของขีดพวกนี้เพื่อดูว่าโค้ดที่คุณเขียนสร้างกราฟที่ถูกต้องหรือไม่ 
ให้อ่านวิธีการสร้างแกนจาก <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis>
ในการเขียนโค้ดให้ใช้ DOM แบบปกติ (ที่ไม่ใช่ virtual DOM) เพราะว่าถ้าใช้ frontend framework อย่าง Vue หรือ React (ที่ใช้ Virtual DOM) เราจะตรวจโค้ดของคุณไม่ได้

**User Story #1:** กราฟที่เขียนจะต้องมีชื่อกราฟ อยู่ใน element ที่มี id เป็น `"title"`

**User Story #2:** ต้องเขียนแกน x โดยใช้ element `g` โดยมี id เป็น `"x-axis"`

**User Story #3:** ต้องเขียนแกน y โดยใช้ element `g` โดยมี id เป็น `"y-axis"`

**User Story #4:** ทั้งแกน x และแกน y จะต้องมีขีดเพื่อบอกค่าของตำแหน่งบนแกน โดยขีดทั้งหมดต้องมี class เป็น `"tick"`

**User Story #5:** ต้องสร้างกราฟแท่งโดยใช้ `rect` ตามข้อมูลในชุดข้อมูล โดยกราฟแต่ละแท่งต้องมี class เป็น `"bar"`

**User Story #6:** กราฟทุกแท่งต้องมี property `data-date` และ `data-gdp` ที่เก็บค่าของ `date` และ `GDP` ตามลำดับ

**User Story #7:** property `data-date` ของกราฟทุกแท่ง ต้องตรงกับค่าที่มีให้

**User Story #8:** property `data-gdp` ของกราฟทุกแท่ง ต้องตรงกับค่าที่มีให้

**User Story #9:** กราฟทุกแท่งต้องแสดงค่า `GDP` อย่างถูกต้อง

**User Story #10:** ค่า `data-date` ของกราฟทุกแท่งต้องตรงกับค่าที่แสดงบนแกน x

**User Story #11:** ค่า `data-gdp` ของกราฟทุกแท่งต้องตรงกับค่าที่แสดงบนแกน y

**User Story #12:** ถ้านำเมาส์ไปชี้ที่แท่งของกราฟ ต้องแสดงข้อมูลของกราฟขึ้นมา โดยใช้ tooltip ที่มี id เป็น `"tooltip"` 

**User Story #13:** tooltip ต้องมี property `data-date` ตามค่าของ `data-date` ของข้อมูลนั้น

ให้ใช้ชุดข้อมูลนี้ทำแบบทดสอบ `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json`

คุณสามารถสร้างโปรเจคของคุณโดยใช้ <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'> CodePen template </a> นี้ได้ แล้วคลิก `Save` เพื่อสร้าง pen ของคุณเอง หรือคุณสามารถใช้ CDN นี้ เพื่อรันการทดสอบใน environment ที่คุณต้องการ: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

ให้ submit ส่ง URL ของโปรเจคที่ทำสำเร็จและได้รันการทดสอบผ่านหมดแล้ว เมื่อเสร็จงาน

# --solutions--

```js
// solution required
```
