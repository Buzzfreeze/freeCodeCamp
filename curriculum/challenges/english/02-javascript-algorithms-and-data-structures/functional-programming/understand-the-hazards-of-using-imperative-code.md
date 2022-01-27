---
id: 587d7b8e367417b2b2512b5d
title: Understand the Hazards of Using Imperative Code
challengeType: 1
forumTopicId: 301241
dashedName: understand-the-hazards-of-using-imperative-code
---

# --description--

การเขียนโปรแกรมโดยยึดหลัก Functional programming เป็นสิ่งที่ดี เพราะจะทำให้โค้ดจัดการง่าย และป้องกันบัคที่ซ่อนอยู่ได้ แต่ก่อนที่เราจะได้เรียนเรื่องนี้ เรามาเรียนเรื่องการเขียนโปรแกรมแบบ imperative กันก่อน เพื่อให้เห็นว่าจะเจอปัญหาตรงไหนได้บ้าง

ในภาษาอังกฤษ (และหลายๆภาษา) imperative tense เป็นโครงสร้างประโยคที่ใช้ในประโยคคำสั่ง ซึ่งการเขียนโปรแกรมแบบ imperative ก็เหมือนกัน คือระบุชุดคำสั่งให้คอมพิวเตอร์ทำงานตามที่เราสั่ง

โดยทั่วไป คำสั่งของเราจะไปเปลี่ยน state ของโปรแกรม เช่น แก้ไขค่าตัวแปร global 
ตัวอย่างที่มักใช้ในการอธิบายเรื่อง imperative programming ก็คือ การเขียน `for` loop เพื่ออ่านค่าของ array ทีละ index

ซึ่ง Functional programming จะเป็นการเขียนโปรแกรมที่ตรงกันข้ามกันเลย เพราะเป็นการเขียนแบบ declarative programming เพราะเราแค่ต้องบอกคอมพิวเตอร์ถึงว่าอยากได้อะไร โดยการเรียก method หรือ function

JavaScript นั้นมี method ที่ถูกสร้างไว้ให้แล้วหลายตัว ที่เราใช้เพื่อทำงานทั่วๆไปได้ เราเลยไม่จำเป็นต้องเขียนโค้ดเพื่อบอกให้คอมพิวเตอร์ทีละขั้นตอนว่าเราอยากให้ทำอะไร  
เช่น แทนที่จะใช้ `for` loop เราก็ใช้ method `map` ที่จะทำการจัดการเรื่องการวนลูปให้เลย วิธีนี้ช่วยป้องกันเรื่องความผิดพลาดจากการเขียนโค้ดผิด เช่น "Off By One Error" ที่สอนไปแล้วในหัวข้อ Debugging

สมมติว่า คุณกำลังค้นหาข้อมูลในเว็บผ่านเว็บเบราว์เซอร์ และอยากดูว่ามีแท็บไหนเปิดอยู่ ลองมองกรณีนี้ให้เป็นโค้ดแบบ object-oriented กัน

ตอนนี้คุณมีเบราว์เซอร์ที่เปิดไว้หลาย Window แล้ว object Window แต่ละตัวก็จะมีแท็บหลายๆแท็บ  
object Window แต่ละตัวก็จะมี array ที่เก็บชื่อเว็บที่เปิดอยู่ 
ถ้ามีการเปิดแท็บใหม่ รวมหน้าต่าง หรือปิดแท็บ แล้วคุณต้องการให้แสดงชื่อแท็บที่เปิดอยู่ โดยแท็บที่ปิดไปแล้วจะต้องถูกลบออกจาก array และจะต้องเพิ่มแท็บที่เปิดใหม่เข้าไปท้าย array ด้วย

ใน code editor มีฟังก์ชัน `tabOpen()` (เปิดแท็บ), `tabClose()` (ปิดแท็บ) และ `join()` (รวมหน้าต่าง) ที่แทนที่การทำงานของเบราว์เซอร์มาให้ ส่วน array `tabs` เป็นส่วนหนึ่งของ Window object ที่เก็บชื่อของเว็บที่เปิดค้างไว้อยู่


# --instructions--

ลองดูโค้ดที่อยู่ใน editor จะเห็นว่า มีการใช้ method ที่มีผลกระทบในโปรแกรมแล้วทำให้ทำงานผิดพลาด  
ค่าของ `finalTabs.tabs` หลังจากประมวลผลเสร็จจะต้องมีค่าเป็น `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']` แต่ในโค้ดปัจจุบันจะยังไม่ได้ค่านี้

ให้แก้ `Window.prototype.tabClose` เพื่อคืนค่าออกมาเป็นค่าของแท็บที่เปิดอยู่ให้ถูกต้อง

# --hints--

ค่าของ `finalTabs.tabs` ต้องเป็น `['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab']`

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
// tabs เป็น array ของชื่อเว็บที่เปิดอยู่ในแต่ละหน้าต่าง
var Window = function(tabs) {
  this.tabs = tabs; // เราจะเก็บค่าของ array ไว้ใน object
};

// method นี้ใช้รวมหน้าต่าง
Window.prototype.join = function (otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

// method นี้ใช้เปิดแท็บใหม่
Window.prototype.tabOpen = function (tab) {
  this.tabs.push('new tab'); // เปิดเป็น "new tab" เฉยๆ ก่อนละกัน
  return this;
};

// method นี้ใช้ปิดแท็บ
Window.prototype.tabClose = function (index) {

  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  var tabsBeforeIndex = this.tabs.splice(0, index); // ดึงค่าแท็บทั้งหมดที่อยู่หน้าแท็บที่ปิด
  var tabsAfterIndex = this.tabs.splice(index + 1); // ดึงค่าเท็บทั้งหมดที่อยู่หลังแท็บที่ปิด

  this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // รวมแท็บ 2 ชุดข้างบนเข้าด้วยกัน

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น

  return this;
 };

// เปิดเบราว์เซอร์สัก 3 หน้าต่างละกัน
var workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // เปิดอีเมล เว็บเก็บไฟล์ แล้วก็เว็บที่ใช้ทำงาน
var socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // เว็บ Social Media
var videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // เว็บดูหนังฟังเพลง

// คราวนี้มาลอง เปิด-ปิดแท็บ แล้วก็ทำอย่างอื่นกัน
var finalTabs = socialWindow
  .tabOpen() // เปิดแท็บใหม่มาดูรูปแมว
  .join(videoWindow.tabClose(2)) // ปิดแท็บที่สามในหน้าต่างที่ใช้ดูหนังฟังเพลง แล้วเอามารวมกับหน้าต่างนี้
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
