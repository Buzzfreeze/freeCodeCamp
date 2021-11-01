---
id: 587d7fa6367417b2b2512bbf
title: Visualize Data with a Choropleth Map
challengeType: 3
forumTopicId: 301465
dashedName: visualize-data-with-a-choropleth-map
---

# --description--

**Objective:** สร้างแอพพลิเคชันจาก  [CodePen.io](https://codepen.io) ที่มีfunctionเหมือนกับ <https://codepen.io/freeCodeCamp/full/EZKqza>.

กรอกข้อมูลด้านล่าง [user stories](https://en.wikipedia.org/wiki/User_story) และทำtestทั้งหมดให้ผ่าน 

สามารถใช้ HTML, JavaScript, CSS, และ D3 svg-based visualization library ได้ Required DOM (non-virtual) elements จะถูกเรียกใช้ขณะทำการ test ถ้าหากใช้ frontend framework อย่างเช่น Vue ผลการทดสอบแบบ dynamic จะไม่ตรง เนืื่องจากframeworkเหล่านี้ไม่support D3 projects.

**User Story #1:** choropleth ควรจะมี a title ที่มีความสอดคล้องกับ `id="title"`

**User Story #2:** choropleth ควรจะมี คำอธิบายของ element ที่มีความสอดคล้องกับ `id="description"`

**User Story #3:** choropleth ควรจะมีค่าของ counties ที่มีความสอดคล้องกับ `class="county"` 

**User Story #4:** ควรมีสีอย่างน้อย 4 สีที่ใช้สำหรับ counties

**User Story #5:** แต่ละ counties ควรมี `data-fips` และ `data-education` ที่มีpropertiesสอดคล้องกับค่า `fips` และ `education`

**User Story #6:** choropleth ควรมี county สำหรับแต่ละ data point

**User Story #7:** counties ควรมี `data-fips` และค่า `data-education` ที่ตรงกับ sample data

**User Story #8:** choropleth ควรมี legend ที่สอดคล้องกับ `id="legend"`

**User Story #9:** ควรมีสีอย่างน้อย 4 สีที่ใช้สำหรับ legend

**User Story #10:** สามารถ mouse over พื้นที่และเห็น tooltip ที่มีความสอดคล้องกับ `id="tooltip"` ที่แสดงข้อมูลเพิ่มเติมเกี่ยวกับพื้นที่

**User Story #11:** tooltip ควรจะมี `data-education` property ที่เกี่ยวข้องกับ `data-education` ของพื้นที่

datasetสำหรับprojectนี้:  

-   **US Education Data:**`https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json`
-   **US County Data:**`https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json`

สามารถสร้างprojectจาก <a href='https://codepen.io/pen?template=MJjpwO' target='_blank' rel='nofollow'>using this CodePen template</a> และclickที่ `Save` หรือใช้ CDN link เพื่อ run tests ในenvironmentที่ต้องการ  `https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js`

หลังจากเสร็จแล้ว ให้ส่ง URL ของ project พร้อมทั้ง tests ที่ผ่านการทดสอบทั้งหมด

# --solutions--

```js
// solution required
```
