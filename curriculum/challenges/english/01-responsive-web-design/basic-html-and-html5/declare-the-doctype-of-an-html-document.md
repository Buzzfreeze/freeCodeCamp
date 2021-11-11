---
id: 587d78aa367417b2b2512aed
title: Declare the Doctype of an HTML Document
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cra98AJ'
forumTopicId: 301095
dashedName: declare-the-doctype-of-an-html-document
---

# --description--

แบบฝึกหัดที่ผ่านมานั้นได้พูดถึงเรื่อง HTML element ที่แต่ละอันมีหน้าที่เฉพาะของมันเอง รวมถึงได้แสดงให้เห็นถึงวิธีการใช้งานของมัน
อย่างไรก็ตาม มันก็ยังมี element บางตัวที่เป็นเหมือนเป็นโครงสร้างพื้นฐานให้กับหน้าเว็บไซต์ของคุณ และควรจะถูกใส่ไว้ใน HTML document ทุก ๆ อัน

ที่ด้านบนของ document, คุณจำเป็นต้องบอกให้ browser รู้ว่า HTML ของหน้าเว็บคุณเป็นเวอร์ชั่นไหน
HTML เป็นภาษาๆ หนึ่งและมักมีการอัพเดตอยู่เป็นประจำ
browser หลัก ๆ ส่วนมากจะ support HTML5 ซึ่งเป็นเวอร์ชั่นล่าสุดอยู่แล้ว
อย่างไรก็ตามเว็บเก่า ๆ ก็อาจจะมีการใช้ HTML ที่เป็นเวอร์ชั่นเก่าอยู่บ้าง

คุณจะบอก browser เกี่ยวกับข้อมูลนี้ได้โดยการเพิ่ม `<!DOCTYPE ...>` tag ที่บรรทัดแรก โดยมีส่วนที่เป็น `...` บอกเวอร์ชั่น HTML ที่ใช้อยู่
สำหรับ HTML5 เราจะใช้ `<!DOCTYPE html>`

`!` และอักษรตัวพิพม์ใหญ่  `DOCTYPE` นั้นสำคัญมาก โดยเฉพาะ browser รุ่นเก่า ๆ ส่วน `html` นั้นไม่ใช่ case sensitive

ถัดไป HTML code ทั้งหมดที่คุณเขียนจะต้องอยู่ภายใต้ `html` tags
แท็กเปิด `<html>` จะอยู่ต่อจากบรรทัด `<!DOCTYPE html>`  ทันทีและแท็กปิด `</html>` จะเป็นแท็กสุดท้ายของหน้านี้

นี่คือตัวอย่างของโครงสร้างหน้าเว็บไซต์ 
HTML code ของคุณจะถูกวางไว้ในพื้นที่ว่างระหว่างแท็ก `html` ทั้ง 2 อัน

```html
<!DOCTYPE html>
<html>

</html>
```

# --instructions--

จงเพิ่มแท็ก `DOCTYPE` สำหรับ  HTML5 ที่ด้านบนสุดของ HTML document เปล่า
ข้างล่างมันให้เพิ่มแท็กเปิดและปิดของ `html` ที่จะเป็นที่อยู่ของ `h1` element
โดย heading นั้นสามารถใส่ข้อความอะไรก็ได้

# --hints--

โค้ดของคุณควรมีแท็ก `<!DOCTYPE html>` 

```js
assert(code.match(/<!DOCTYPE\s+?html\s*?>/gi));
```

ควรมี `html` element อันหนึ่ง

```js
assert($('html').length == 1);
```

`html` tags ควรจะเป็นที่อยู่ของ `h1` element

```js
assert(code.match(/<html>\s*?<h1>\s*?.*?\s*?<\/h1>\s*?<\/html>/gi));
```

# --seed--

## --seed-contents--

```html

```

# --solutions--

```html
<!DOCTYPE html>
<html>
  <h1> Hello world </h1>
</html>
```
