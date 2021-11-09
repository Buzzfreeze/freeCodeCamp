---
id: 587d7b8e367417b2b2512b5d
title: Understand the Hazards of Using Imperative Code
challengeType: 1
forumTopicId: 301241
dashedName: understand-the-hazards-of-using-imperative-code
---

# --description--

การเขียนโปรแกรมตามหลัก Functional programming เป็นอุปนิสัยที่ดี เนื่องจากทำให้โค้ดง่ายต่อการจัดการ และป้องกันการเกิดข้อผิดพลาดโดยไม่ตั้งใจ แต่ก่อนที่เราจะได้เรียนรู้เรื่องนี้ มาศึกษาเรื่องการเขียนโปรแกรมด้วยวิธี imperative กันก่อน เพื่อเน้นย้ำจุดที่คุณอาจเจอปัญหา

ในภาษาอังกฤษและหลายๆ ภาษานั้น imperative tense ใช้ในประโยคคำสั่ง ซึ่งเป็นลักษณะเดียวกันกับการเขียนโปรแกรมแบบ imperative นั่นคือการป้อนคำสั่งให้เครื่องคอมพิวเตอร์ทำงานตามที่เราสั่ง 

บ่อยครั้งที่คำสั่งเหล่านั้นมีการเปลี่ยนแปลง state ของโปรแกรม เช่น แก้ไขค่าตัวแปร global ส่วนตัวอย่างที่มักใช้ในการอธิบายเรื่อง imperative programming ก็คือ การเขียน `for` loop ซึ่งอ่านค่าภายใน array ทีละ index

ตรงกันข้าม functional programming ที่อยู่ในรูปแบบของ declarative programming คุณเพียงแค่บอกคอมพิวเตอร์ถึงสิ่งที่คุณต้องการ โดยการเรียก method หรือ function

JavaScript มี predefined methods มากมายที่จัดการกับงานทั่วไปได้ ดังนั้นคุณไม่จำเป็นต้องเขียนโค้ดแต่ละขั้นตอนเอง ยกตัวอย่างเช่น แทนที่จะใช้ `for` loop คุณก็สามารถใช้ `map` method ซึ่งอ่านค่าภายใน array ทีละตัวได้ วิธีนี้ช่วยป้องกันเรื่อง error จากการเขียนโค้ดผิด เช่น "Off By One Errors" ซึ่งจะกล่าวถึงในหัวข้อ Debugging

สมมติว่า คุณกำลังค้นหาข้อมูลในเว็บผ่านเว็บเบราว์เซอร์ และต้องการตรวจสอบแท๊บที่คุณกำลังเปิดอยู่ ลองมาจำลองเหตุการณ์นี้โดยใช้โค้ด object-oriented ง่ายๆ กัน

Window object ประกอบด้วย tab หลายๆ tab และคุณก็มีหลาย Window เปิดค้างอยู่ ชื่อ title ของเว็บที่เปิดอยู่ในแต่ละ Window object ให้เก็บไว้ใน array หนึ่งๆ หลังจากที่ทำงานบนเบราว์เซอร์เสร็จแล้ว (เปิด tab ใหม่, รวม windows และปิด tab) คุณต้องการพิมพ์ชื่อ tab ที่ยังคงเปิดค้างอยู่ โดย tab ที่ปิดไปแล้วจะต้องถูกนำออกจาก array ส่วน tab ใหม่ต้องเพิ่มเข้าไปใน array ที่ตำแหน่งสุดท้าย

ใน code editor มีฟังก์ชัน `tabOpen()`, `tabClose()` และ `join()` ที่รองรับการทำงานของเบราว์เซอร์มาให้ ส่วน array `tabs` เป็นส่วนหนึ่งของ Window object ที่เก็บชื่อของเว็บที่เปิดค้างไว้อยู่


# --instructions--

ให้ทดสอบโค้ดที่อยู่ใน editor จะเห็นว่า มีการใช้ method ที่มีผลกระทบในโปรแกรม ก่อให้เกิดการทำงานที่ผิดพลาด อย่างไรก็ตาม รายการ tab ที่เปิดค้างจะต้องเก็บใน `finalTabs.tabs` และมีค่าเป็น `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']` แต่รายการ tab ที่ได้จากโค้ดนี้จะมีค่าต่างไปเล็กน้อย

จงปรับแก้ `Window.prototype.tabClose` เพื่อให้นำค่า tab ออกได้อย่างถูกต้อง

# --hints--

`finalTabs.tabs` ควรเป็น `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']`

```js
assert.deepEqual(finalTabs.tabs, [
  'FB',
  'Gitter',
  'Reddit',
  'Twitter',
  'Medium',
  'new tab',
  'Netflix',
  'YouTube',
  'Vine',
  'GMail',
  'Work mail',
  'Docs',
  'freeCodeCamp',
  'new tab'
]);
```

# --seed--

## --seed-contents--

```js
// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {

  // Only change code below this line

  var tabsBeforeIndex = this.tabs.splice(0, index); // Get the tabs before the tab
  var tabsAfterIndex = this.tabs.splice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);
```

# --solutions--

```js
// tabs is an array of titles of each site open within the window
var Window = function(tabs) {
  this.tabs = tabs; // We keep a record of the array inside the object
};

// When you join two windows into one window
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// When you open a new tab at the end
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // Let's open a new tab for now
  return this;
};

// When you close a tab
Window.prototype.tabClose = function (index) {
  var tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
  var tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together
  return this;
 };

// Let's create three browser windows
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //  Entertainment sites

// Now perform the tab opening, closing, and other operations
var finalTabs = socialWindow
  .tabOpen() // Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
```
