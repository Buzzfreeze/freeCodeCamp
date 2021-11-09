---
id: 587d7dab367417b2b2512b6d
title: Apply Functional Programming to Convert Strings to URL Slugs
challengeType: 1
forumTopicId: 301227
dashedName: apply-functional-programming-to-convert-strings-to-url-slugs
---

# --description--

แบบทดสอบที่ผ่านมาได้กล่าวถึง array method และ string method หลายตัวที่ใช้หลักการ functional programming และเรายังได้เรียนรู้การใช้งาน `reduce` ซึ่งเป็น method ที่มีความสำคัญอย่างมากในการทำให้ปัญหาต่างๆ อยู่ในรูปแบบที่ง่ายขึ้น ไม่ว่าจะเป็นการคำนวณค่าเฉลี่ยหรือการเรียงลำดับหรือ array operation อื่นๆ ก็สามารถนำ `reduce` มาใช้งานได้ ให้เรานึกถึง `map` และ `filter` ซึ่งเป็นรูปแบบพิเศษของ `reduce`

ใช้ความรู้ที่เราได้เรียนมาแก้ปัญหาในชีวิตจริงกัน


content management sites (CMS) ต่างๆ มักนำหัวข้อ (title) ของโพสต์มาเป็นส่วนหนึ่งของ URL ด้วย เพื่อให้เป็นเหมือน bookmark ยกตัวอย่างเช่น ถ้าคุณเขียนโพสต์ที่มีหัวข้อ `Stop Using Reduce` ก็มักมีชื่อหัวข้อเป็นอีกรูปแบบนึงอยู่ใน URL ด้วย (`.../stop-using-reduce`) เช่นเดียวกับเว็บ freeCodeCamp คุณอาจสังเกตว่ามีลักษณะแบบนี้ด้วย

# --instructions--

จงเติมโค้ดในฟังก์ชัน `urlSlug` เพื่อแปลงค่า string `title` และให้คืนค่าเป็น URL ที่มี "-" คั่นระหว่างคำ คุณสามารถใช้ method ใดก็ได้ที่ได้เรียนรู้ไปแล้วในหัวข้อนี้ แต่ห้ามใช้ `replace` แบบทดสอบนี้มีเงื่อนไขดังนี้

input คือ string ที่มีการเว้นวรรคระหว่างคำ และตัวอักษรแรกของแต่ละคำเป็นตัวพิมพ์ใหญ่

output คือ string ที่มีแต่ละคำคั่นด้วย "-" (hyphen)

output ควรเป็นตัวอักษรพิมพ์เล็กทั้งหมด

output ไม่ควรมี space ใดๆ

# --hints--

โค้ดของคุณไม่ควรใช้ `replace` method

```js
assert(!code.match(/\.?[\s\S]*?replace/g));
```

`urlSlug("Winter Is Coming")` ควรคืนค่าเป็น string `winter-is-coming`

```js
assert(urlSlug('Winter Is Coming') === 'winter-is-coming');
```

`urlSlug(" Winter Is  Coming")` ควรคืนค่าเป็น string `winter-is-coming`

```js
assert(urlSlug(' Winter Is  Coming') === 'winter-is-coming');
```

`urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")` ควรคืนค่าเป็น string `a-mind-needs-books-like-a-sword-needs-a-whetstone`

```js
assert(
  urlSlug('A Mind Needs Books Like A Sword Needs A Whetstone') ===
    'a-mind-needs-books-like-a-sword-needs-a-whetstone'
);
```

`urlSlug("Hold The Door")` ควรคืนค่าเป็น string `hold-the-door`

```js
assert(urlSlug('Hold The Door') === 'hold-the-door');
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
function urlSlug(title) {


}
// Only change code above this line
```

# --solutions--

```js
// Only change code below this line
function urlSlug(title) {
  return title.trim().split(/\s+/).join("-").toLowerCase();
}
```
