---
id: 587d7fa6367417b2b2512bc0
title: Visualize Data with a Treemap Diagram
challengeType: 3
forumTopicId: 301468
dashedName: visualize-data-with-a-treemap-diagram
---

# --description--

**Objective:** สร้างแอพพลิเคชันจาก [CodePen.io](https://codepen.io) ที่มีfunctionเหมือนกับ <https://codepen.io/freeCodeCamp/full/KaNGNR>.

กรอกข้อมูลด้านล่าง [user stories](https://en.wikipedia.org/wiki/User_story) aและทำtestทั้งหมดให้ผ่าน 

สามารถใช้ HTML, JavaScript, CSS, and the D3 svg-based visualization library เพื่อสร้างแกนที่มีลักษณะแบบD3และมีขีดบอกสเกลตามแนวแกนโดยอัตโนมัติ โดยขีดต้องผ่านการทดสอบจากD3 เนื่องจากต้องใช้ตำแหน่งหา elements ของกราฟ 

ข้อมูลเกี่ยวกับการสร้างแกนหาเพื่มเติมได้จาก <https://github.com/d3/d3/blob/master/API.md#axes-d3-axis>
DOM (non-virtual) elements จะถูกเรียกใช้ขณะทำการ test ถ้าหากใช้ frontend framework อย่างเช่น Vue ผลการทดสอบแบบ dynamic จะไม่ตรง เนืื่องจากframeworkเหล่านี้ไม่support D3 projects

**User Story #1:** tree map ควรจะมี title ที่มีความสอดคล้องกับ `id="title"`.

**User Story #2:** tree map ควรมีคำอธิบายที่สอดคล้องกับ `id="description"`.

**User Story #3:** tree map ควรจะมี `rect` elements ที่สอดคล้องกับ `class="tile"` เพื่อแสดงข้อมูล

**User Story #4:** ควรมีสีจำนวนอย่างน้อย 2 สีเพื่อใช้สำหรับ tiles

**User Story #5:** แต่ละ tile ควรจะี properties `data-name`, `data-category` และ `data-value` ที่สอดคล้องกับค่า `name`, `category`และ `value` ตามลำดับ

**User Story #6:** แต่ละพื้นที่สำหรับ tile ควรจะมีจำนวน `data-value` ซึ่งแสดงถึงจำนวนของ tiles ที่มี `data-value` ของพื้นที่ที่ใหญ่กว่า

**User Story #7:** tree map ควรมี legend ที่สอดคล้องกับ `id="legend"`.

**User Story #8:** legend ควรมี `rect` elements ที่สอดคล้องกับ `class="legend-item"`.

**User Story #9:** `rect` elements ใน legend `rect` elements ใน legend ควรใช้สีอย่างน้อย 2 สี

**User Story #10:** สามารถ mouse over พื้นที่และเห็น tooltip ที่มีความสอดคล้องกับ `id="tooltip"` ที่แสดงข้อมูลเพิ่มเติมเกี่ยวกับพื้นที่

**User Story #11:** tooltip ควรจะมี `data-value` property ที่เกี่ยวข้องกับ `data-value` ของพื้นที่

datasetสำหรับprojectนี้ :  

-   **Kickstarter Pledges:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/kickstarter-funding-data.json`
-   **Movie Sales:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json`
-   **Video Game Sales:** `https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json`

สามารถสร้างprojectจาก <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>using this CodePen template</a> และclickที่g`Save` หรือใช้ CDN link เพื่อ run tests ในenvironmentที่ต้องการ  `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

หลังจากเสร็จแล้ว ให้ส่ง URL ของ project พร้อมทั้ง tests ที่ผ่านการทดสอบทั้งหมด

# --solutions--

```js
// solution required
```
