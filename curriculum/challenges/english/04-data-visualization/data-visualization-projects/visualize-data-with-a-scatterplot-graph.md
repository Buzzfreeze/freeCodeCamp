---
id: bd7178d8c242eddfaeb5bd13
title: Visualize Data with a Scatterplot Graph
challengeType: 3
forumTopicId: 301467
dashedName: visualize-data-with-a-scatterplot-graph
---

# --description--

**Objective:** สร้างแอพพลิเคชันจาก [CodePen.io](https://codepen.io) ที่มีfunctionเหมือนกับ  <https://codepen.io/freeCodeCamp/full/bgpXyK>.

กรอกข้อมูลด้านล่าง[user stories](https://en.wikipedia.org/wiki/User_story) และทำtestทั้งหมดให้ผ่าน

สามารถใช้ HTML, JavaScript, CSS, and the D3 svg-based visualization library เพื่อสร้างแกนที่มีลักษณะแบบD3และมีขีดบอกสเกลตามแนวแกนโดยอัตโนมัติ โดยขีดต้องผ่านการทดสอบจากD3 เนื่องจากต้องใช้ตำแหน่งหา elements ของกราฟ 

ข้อมูลเกี่ยวกับการสร้างแกนหาเพื่มเติมได้จาก <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis>
DOM (non-virtual) elements จะถูกเรียกใช้ขณะทำการ test ถ้าหากใช้ frontend framework อย่างเช่น Vue ผลการทดสอบแบบ dynamic จะไม่ตรง เนืื่องจากframeworkเหล่านี้ไม่support D3 projects

**User Story #1:** สามารถแสดง title element ที่มีความสอดคล้องกับ `id="title"`.

**User Story #2:** สามารถแสดงแกน x ที่มีความสอดคล้องกับ `id="x-axis"`.

**User Story #3:** สามารถแสดงแกน y ที่มีความสอดคล้องกับ `id="y-axis"`.

**User Story #4:** สามารถแสดงจุด(dotsฺ) ที่มี class ของ `dot` ซึ่งจะแสดงข้อมูลขณะที่ทำการplot

**User Story #5:** แต่ละ dot ควรจะมี properties ของ`data-xvalue` และ `data-yvalue` ที่มีความสอดคล้องกับค่าบนแกน `x` and `y` 

**User Story #6:** ค่า `data-xvalue` และ `data-yvalue` ของแต่ละ dot ควรอยู่ใน range ของ actual data และ correct data format สำหรับ `data-xvalue` ให้ใข้ในรูปของ integers (full years) หรือ `Date` สามารถใช้ในรูปของ objects ได้เพื่อทำ test evaluation ส่วน `data-yvalue` (minutes) ให้ใข้ `Date` เป็นแบบ objects

**User Story #7:** ค่า `data-xvalue` ควรจะสอดคล้องกับ point/value บนแกน x

**User Story #8:** ค่า `data-yvalue` ควรจะสอดคล้องกับ point/value บนแกน y

**User Story #9:** สามารถแสดงป้ายกำกับของแกน y ที่มีร฿ปแบบเป็น `%M:%S` ของ time format

**User Story #10:** สามารถแสดงป้ายกำกับบนแกน x ที่แสดงปี 

**User Story #11:** ค่าของป้ายกำกับบนแกน x ควรอยู่ใน range ของข้อมูลสำหรับแกน x

**User Story #12:** ค่าของป้ายกำกับบนแกน y ควรอยู่ใน range ของข้อมูลสำหรับแกน y

**User Story #13:** สามารถแสดง legend ที่มีข้อความอธิบายของ `id="legend"`.

**User Story #14:** สามารถ mouse over พื้นที่และเห็น tooltip ที่มีความสอดคล้องกับ `id="tooltip"` ที่แสดงข้อมูลเพิ่มเติมเกี่ยวกับพื้นที่

**User Story #15:** tooltip ควรจะมี `data-year` property ที่มีความสอดคล้องกับ `data-xvalue` ที่แสดงข้อมูลเพิ่มเติมเกี่ยวกับพื้นที่

datasetสำหรับprojectนี้ : `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json`

สามารถสร้างprojectจาก <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>using this CodePen template</a> และclickที่ `Save` หรือใช้ CDN link เพื่อ run tests ในenvironmentที่ต้องการ  `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

หลังจากเสร็จแล้ว ให้ส่ง URL ของ project พร้อมทั้ง tests ที่ผ่านการทดสอบทั้งหมด

# --solutions--

```js
// solution required
```
