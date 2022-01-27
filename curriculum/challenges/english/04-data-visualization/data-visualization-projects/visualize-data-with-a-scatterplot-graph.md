---
id: bd7178d8c242eddfaeb5bd13
title: Visualize Data with a Scatterplot Graph
challengeType: 3
forumTopicId: 301467
dashedName: visualize-data-with-a-scatterplot-graph
---

# --description--

**Objective:** ลองทำแอปโดยใช้ [CodePen.io](https://codepen.io) ให้มีฟังก์ชันเหมือนกับ <https://codepen.io/freeCodeCamp/full/bgpXyK>.

กรอกข้อมูลด้านล่าง[user stories](https://en.wikipedia.org/wiki/User_story) และทำtestทั้งหมดให้ผ่าน

ให้ใช้ HTML, JavaScript, CSS, และ library D3 
ให้สร้างแกนของกราฟโดยใช้ property axis ของ D3 ซึ่งจะสร้างขีดที่ใช้บอกตำแหน่งบนแกน ขีดพวกนี้สำคัญเพราะว่า เราจะดูตำแหน่งของขีดพวกนี้เพื่อดูว่าโค้ดที่คุณเขียนสร้างกราฟที่ถูกต้องหรือไม่ 
ให้อ่านวิธีการสร้างแกนจาก <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis>
ในการเขียนโค้ดให้ใช้ DOM แบบปกติ (ที่ไม่ใช่ virtual DOM) เพราะว่าถ้าใช้ frontend framework อย่าง Vue หรือ React (ที่ใช้ Virtual DOM) เราจะตรวจโค้ดของคุณไม่ได้

**User Story #1:** กราฟที่เขียนจะต้องมีชื่อกราฟ อยู่ใน element ที่มี id เป็น `"title"`

**User Story #2:** ต้องเขียนแกน x ที่มี id เป็น `"x-axis"`

**User Story #3:** ต้องเขียนแกน y ที่มี id เป็น `"y-axis"`

**User Story #4:** ให้วาดจุดข้อมูลบนกราฟตามชุดข้อมูลที่มีให้ โดยจุดข้อมูลต้องมี class เป็น `dot` 

**User Story #5:** จุดข้อมูลแต่ละจุดต้องมี property `data-xvalue` และ `data-yvalue` ซึ่งตรงกับค่า `x` and `y` ของจุดข้อมูลนั้น

**User Story #6:** ค่า `data-xvalue` และ `data-yvalue` ของจุดข้อมูลแต่ละตัว ต้องอยู่ในขอบเขตของข้อมูลจริง และต้องมีรูปแบบที่ถูกต้อง ในส่วนของ `data-xvalue` จะใช้เป็นจำนวนเต็ม (ปี) หรือ object `Date` ก็ได้ ส่วน `data-yvalue` (นาที) ให้ใข้ object `Date`

**User Story #7:** ค่า `data-xvalue` ต้องตรงกับตำแหน่งของจุดข้อมูลบนแกน x

**User Story #8:** ค่า `data-yvalue` ต้องตรงกับตำแหน่งของจุดข้อมูลบนแกน y

**User Story #9:** บนแกน y ให้แสดงเวลาโดยใช้รูปแบบ `%M:%S`

**User Story #10:** บนแกน x จะแสดงปี ค.ศ. ของข้อมูล

**User Story #11:** ตัวเลข ค.ศ บนแกน x จะต้องไม่เกินความยาวของแกน x

**User Story #12:** ตัวเลขนาทีบนแกน y จะต้องไม่เกินความยาวของแกน y

**User Story #13:** ต้องมีคำอธิบายกราฟ (legend) ที่มี id เป็น `"legend"` โดยจะอธิบายว่าสีของข้อมูลแต่ละสีหมายถึงอะไร 

**User Story #14:** ถ้าเอาเมาส์ไปชี้บนจุดข้อมูล จะแสดง tooltip ที่แสดงข้อมูลของจุดข้อมูลนั้น โดย tooltip นี้จะมี id เป็น `"tooltip"` 

**User Story #15:** tooltip จะต้องมี property `data-year` ตาม `data-xvalue` ของจุดข้อมูลที่เอาเมาส์ไปชี้

ให้ใช้ชุดข้อมูลนี้ทำแบบทดสอบ : `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json`

คุณสามารถสร้างโปรเจคของคุณโดยใช้ <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'> CodePen template </a> นี้ได้ แล้วคลิก `Save` เพื่อสร้าง pen ของคุณเอง หรือคุณสามารถใช้ CDN นี้ เพื่อรันการทดสอบใน environment ที่คุณต้องการ: `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

ให้ submit ส่ง URL ของโปรเจคที่ทำสำเร็จและได้รันการทดสอบผ่านหมดแล้ว เมื่อเสร็จงาน

# --solutions--

```js
// solution required
```
