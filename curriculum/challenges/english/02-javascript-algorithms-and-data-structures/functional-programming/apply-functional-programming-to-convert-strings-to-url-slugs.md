---
id: 587d7dab367417b2b2512b6d
title: Apply Functional Programming to Convert Strings to URL Slugs
challengeType: 1
forumTopicId: 301227
dashedName: apply-functional-programming-to-convert-strings-to-url-slugs
---

# --description--

ทีผ่านมาเราได้เรียนเรื่อง method หลายๆตัวที่ใช้ในการจัดการ array และ string โดยใช้หลักการของ functional programming ไปแล้ว และเรายังได้เรียนรู้การใช้งาน `reduce` ซึ่งเป็น method ที่ช่วยให้เราทำงานกับ array ได้ง่ายขึ้น 
ซึ่งเราจะเอา `reduce` มาใช้งานได้ทั้งการคำนวณค่าเฉลี่ย การเรียงข้อมูล หรือ การจัดการ array อื่นๆ ถ้ายังจำได้ `map` และ `filter` ก็เป็นเหมือน `reduce` ตัวนึงเหมือนกัน

มาลองใช้ความรู้ที่เราได้เรียนไปมาแก้ปัญหาจริงๆกัน


เว็บไซต์ประเภท Content Management Site (CMS) มักนำชื่อเรื่อง (title) ของโพสต์มาเป็นส่วนหนึ่งของ URL ด้วย เพื่อให้ลิงก์ไปหน้านั้นได้ง่ายๆ
เช่น ถ้าคุณเขียนโพสต์ในเว็บ Medium แล้วตั้งชื่อเรื่องว่า `Stop Using Reduce` แล้ว URL ของโพส์นั้นก็มันจะมีหน้าตาแบบนี้ `.../stop-using-reduce` ถ้าคุณลองดู URL ของเว็บเราคุณก็จะเห็นว่าเราก็ใช้วิธีนี้ด้วย

# --instructions--

จงเขียนโค้ดในฟังก์ชัน `urlSlug` เพื่อแปลงค่า string `title` เป็น URL ที่มี `-` (hyphen) คั่นระหว่างคำ คุณสามารถใช้ method ใดก็ได้ที่ได้เรียนรู้ไปแล้วในหัวข้อนี้ แต่ห้ามใช้ `replace` 
แบบฝึกหัดนี้มีเงื่อนไขดังนี้:

input คือ string ที่เป็นตัวอักษรภาษาอังกฤษ ซึ่งมีการเว้นวรรคระหว่างคำ และตัวอักษรแรกของแต่ละคำเป็นตัวพิมพ์ใหญ่

output จะต้องเป็น string ที่ใช้ `-` คั่นระหว่างคำ

output ต้องเป็นตัวอักษรพิมพ์เล็กทั้งหมด

ต้องไม่มีการเว้นวรรคใน output

# --hints--

ห้ามใช้ method `replace` ในโค้ด

```js
assert(!code.match(/\.?[\s\S]*?replace/g));
```

การเรียกใช้ฟังก์ชัน `urlSlug("Winter Is Coming")` ต้องได้ค่าเป็น string `winter-is-coming`

```js
assert(urlSlug('Winter Is Coming') === 'winter-is-coming');
```

การเรียกใช้ฟังก์ชัน `urlSlug(" Winter Is  Coming")` ต้องได้ค่าเป็น string `winter-is-coming`

```js
assert(urlSlug(' Winter Is  Coming') === 'winter-is-coming');
```

การเรียกใช้ฟังก์ชัน `urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")` ต้องได้ค่าเป็น string `a-mind-needs-books-like-a-sword-needs-a-whetstone`

```js
assert(
  urlSlug('A Mind Needs Books Like A Sword Needs A Whetstone') ===
    'a-mind-needs-books-like-a-sword-needs-a-whetstone'
);
```

การเรียกใช้ฟังก์ชัน `urlSlug("Hold The Door")` ต้องได้ค่าเป็น string `hold-the-door`

```js
assert(urlSlug('Hold The Door') === 'hold-the-door');
```

# --seed--

## --seed-contents--

```js
// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
function urlSlug(title) {


}
// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
```

# --solutions--

```js
// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
function urlSlug(title) {
  return title.trim().split(/\s+/).join("-").toLowerCase();
}
```
