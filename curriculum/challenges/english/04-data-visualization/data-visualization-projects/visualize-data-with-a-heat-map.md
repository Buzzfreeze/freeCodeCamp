---
id: bd7188d8c242eddfaeb5bd13
title: Visualize Data with a Heat Map
challengeType: 3
forumTopicId: 301466
dashedName: visualize-data-with-a-heat-map
---

# --description--

**Objective:** สร้างแอพพลิเคชันจาก [CodePen.io](https://codepen.io) ที่มีfunctionเหมือนกับ <https://codepen.io/freeCodeCamp/full/JEXgeY>.

กรอกข้อมูลด้านล่าง [user stories](https://en.wikipedia.org/wiki/User_story) และทำtestทั้งหมดให้ผ่าน

สามารถใช้ HTML, JavaScript, CSS, และ D3 svg-based visualization library ได้ Required DOM (non-virtual) elements จะถูกเรียกใช้ขณะทำการ test ถ้าหากใช้ frontend framework อย่างเช่น Vue ผลการทดสอบแบบ dynamic จะไม่ตรง เนืื่องจากframeworkเหล่านี้ไม่support D3 projects.

**User Story #1:** heat map ควรจะมี title ที่มีความสอดคล้องกับ `id="title"`

**User Story #2:** heat map ควรจะมี คำอธิบายของ element ที่มีความสอดคล้องกับ `id="description"`

**User Story #3:** heat map ควรจะมีแกน x ที่สอดคล้องกับ `id="x-axis"`

**User Story #4:** heat map ควรจะมีแกน y ที่สอดคล้องกับ `id="y-axis"`

**User Story #5:** heat map ควรจะมี `rect` elements และ `class="cell"` เพื่อแสดงข้อมูล

**User Story #6:** ควรมีสีอย่างน้อย 4 สีที่ใช้สำหรับ cells

**User Story #7:** แต่ละ cell ควรจะมี properties `data-month`, `data-year`, `data-temp` ซึ่งสอดคล้องกับค่า `month`, `year`, และ `temperature` ตามลำดับ

**User Story #8:** ค่า `data-month`และ `data-year`ของแต่ละ cell ควรอยู่ใน range ของ data

**User Story #9:** heat map ควรมี cells ที่สอดคล้องกับค่า month บนแกน y

**User Story #10:** heat map ควรมี cells ที่สอดคล้องกับค่า year บนแกน x

**User Story #11:** heat map ควรมีป้ายกำกับชื่อของแต่ละเดือนบนแกน y

**User Story #12:** heat map ควรมีป้ายกำกับชื่อของแต่ละเดือนบนแกน x ตั้งแต่ปี 1754 ถึง 2015

**User Story #13:** heat map ควรมี legend ที่สอดคล้องกับ `id="legend"`.

**User Story #14:** legend ควรจะมี `rect` elements.

**User Story #15:** ควรมีสีอย่างน้อย 4 สีสำหรับ `rect` elements ของแต่ละ legend 

**User Story #16:** สามารถ mouse over พื้นที่และเห็น tooltip ที่มีความสอดคล้องกับ `id="tooltip"` ที่แสดงข้อมูลเพิ่มเติมเกี่ยวกับพื้นที่

**User Story #17:** tooltip ควรจะมี `data-year` property ที่เกี่ยวข้องกับ `data-year` ของพื้นที่

datasetสำหรับprojectนี้  `https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json`

สามารถสร้างprojectจาก <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>using this CodePen template</a> และclickที่ `Save` หรือใช้ CDN link เพื่อ run tests ในenvironmentที่ต้องการ  `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

หลังจากเสร็จแล้ว ให้ส่ง URL ของ project พร้อมทั้ง tests ที่ผ่านการทดสอบทั้งหมด

# --solutions--

```js
// solution required
```
