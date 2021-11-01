---
id: bd7168d8c242eddfaeb5bd13
title: Visualize Data with a Bar Chart
challengeType: 3
forumTopicId: 301464
dashedName: visualize-data-with-a-bar-chart
---

# --description--

**Objective:** สร้างแอพพลิเคชันจาก [CodePen.io](https://codepen.io) ที่มีfunctionเหมือนกับ <https://codepen.io/freeCodeCamp/full/GrZVaM>.

กรอกข้อมูลด้านล่าง [user stories](https://en.wikipedia.org/wiki/User_story) และทำtestทั้งหมดให้ผ่าน 

สามารถใช้ HTML, JavaScript, CSS, and the D3 svg-based visualization library เพื่อสร้างแกนที่มีลักษณะแบบD3และมีขีดบอกสเกลตามแนวแกนโดยอัตโนมัติ โดยขีดต้องผ่านการทดสอบจากD3 เนื่องจากต้องใช้ตำแหน่งหา elements ของกราฟ 

ข้อมูลเกี่ยวกับการสร้างแกนหาเพื่มเติมได้จาก <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis>
DOM (non-virtual) elements จะถูกเรียกใช้ขณะทำการ test ถ้าหากใช้ frontend framework อย่างเช่น Vue ผลการทดสอบแบบ dynamic จะไม่ตรง เนืื่องจากframeworkเหล่านี้ไม่support D3 projects

**User Story #1:** chart ควรจะมี title ที่มีความสอดคล้องกับ `id="title"`

**User Story #2:** chart ควรจะมี `g` ซึ่งเป็นelementของแกน x พร้อมค่าที่มีความสอดคล้องกับ`id="x-axis"`

**User Story #3:** chart ควรจะมี `g` ซึ่งเป็นelementของแกน y พร้อมค่าที่มีความสอดคล้องกับ `id="y-axis"`

**User Story #4:** ทั้งสองแกน(x, y)ควรมีlabels(ป้ายกำกับ)ของแต่ละแกนที่มีค่าที่สอดคล้องกันเช่น  `class="tick"`

**User Story #5:** chart ควรจะมี `rect` ซึ่งเป็นelementสำหรับข้อมูลแต่ละจุด พร้อมค่าที่มีความสอดคล้องกับ`class="bar"` เพื่อแสดงข้อมูล

**User Story #6:** แต่ละ bar ควรจะมีproperties ของ `data-date` และ `data-gdp` ที่มีค่า `date` และ `GDP`

**User Story #7:** bar elements' `data-date` properties ควรตรงกับลำดับของข้อมูลที่ระบุ

**User Story #8:** bar elements' `data-gdp` properties ควรตรงกับลำดับของข้อมูลที่ระบุ

**User Story #9:** แต่ละbar element's ความสูงควรแสดงข้อมูลสอดคล้องกับ `GDP` อย่างถูกต้อง

**User Story #10:**  `data-date` attribute และ bar element ที่เกี่ยวข้องควรมีค่าที่สอดคล้องกับค่าบนแกน x

**User Story #11:** `data-gdp` attribute และ bar element ที่เกี่ยวข้องควรมีค่าที่สอดคล้องกับค่าบนแกน y

**User Story #12:** สามารถ mouse over พื้นที่และเห็น tooltip ที่มีความสอดคล้องกับ `id="tooltip"` ที่แสดงข้อมูลเพิ่มเติมเกี่ยวกับพื้นที่

**User Story #13:** tooltip ควรจะมี `data-date` property ที่เกี่ยวข้องกับ `data-date` ของพื้นที่

datasetสำหรับprojectนี้ `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json`

สามารถสร้างprojectจาก <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'> using this CodePen template</a> และclickที่ `Save`  หรือใช้ CDN link เพื่อ run tests ในenvironmentที่ต้องการ `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`.

หลังจากเสร็จแล้ว ให้ส่ง URL ของ project พร้อมทั้ง tests ที่ผ่านการทดสอบทั้งหมด

# --solutions--

```js
// solution required
```
