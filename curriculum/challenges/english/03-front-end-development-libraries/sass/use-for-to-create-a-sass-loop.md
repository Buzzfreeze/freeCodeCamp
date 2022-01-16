---
id: 587d7dbe367417b2b2512bb9
title: Use @for to Create a Sass Loop
challengeType: 0
forumTopicId: 301462
dashedName: use-for-to-create-a-sass-loop
---

# --description--

คำสั่ง `@for` ของ Sass ก็ใช้เพื่อสร้าง loop เหมือนกับ `for` loop ใน JavaScript เลย

`@for` จะใช้ได้สองแบบคือ "start through end" และ "start to end" ความต่างคือ 
"start **to** end" จะ loop ไปถึง *เลขก่อนสุดท้าย* 
ส่วน "start **through** end" จะ loop ไปถึง *เลขสุดท้าย* เลย

ข้างล่างนี้เป็นตัวอย่างของ start **through**:

```scss
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
```

ส่วน `#{$i}` คือ syntax ส่วนที่รวมตัวแปร (`i`) กับข้อความเพื่อสร้าง string เมื่อไฟล์ Sass แปลงไปเป็น CSS จะมีหน้าตาแบบนี้:

```scss
.col-1 {
  width: 8.33333%;
}

.col-2 {
  width: 16.66667%;
}

...

.col-12 {
  width: 100%;
}
```

วิธีนี้เป็นวิธีง่ายๆที่ใช้สร้าง grid แล้วตอนนี้เราก็จะมี class CSS ไว้ใช้ทั้งหมด 12 ตัว ที่มีความกว้างของคอลัมน์ต่างๆกัน

# --instructions—

ให้เขียนคำสั่ง `@for` ที่รับตัวแปร `$j` ที่วนลูปจาก 1 **to** 6 

ซึ่งต้องสร้าง class ทั้งหมด 5 class ที่มีชื่อเป็น `.text-1` ไล่ไปจนถึง `.text-5` ซึ่งแต่ละ class จะมีค่า `font-size` เป็น 15px คูณด้วย index

# --hints--

ต้องใช้คำสั่ง `@for` ในโค้ด

```js
assert(code.match(/@for /g));
```

class `.text-1` ต้องมี `font-size` เป็น 15px

```js
assert($('.text-1').css('font-size') == '15px');
```

class `.text-2` ต้องมี `font-size` เป็น 30px

```js
assert($('.text-2').css('font-size') == '30px');
```

class `.text-3` ต้องมี `font-size` เป็น 45px

```js
assert($('.text-3').css('font-size') == '45px');
```

class `.text-4` ต้องมี `font-size` เป็น 60px

```js
assert($('.text-4').css('font-size') == '60px');
```

class `.text-5` ต้องมี `font-size` เป็น 75px

```js
assert($('.text-5').css('font-size') == '75px');
```

# --seed--

## --seed-contents--

```html
<style type='text/scss'>



</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

# --solutions--

```html
<style type='text/scss'>

@for $i from 1 through 5 {
  .text-#{$i} { font-size: 15px * $i; }
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```

---

```html
<style type='text/scss'>

@for $i from 1 to 6 {
  .text-#{$i} { font-size: 15px * $i; }
}

</style>

<p class="text-1">Hello</p>
<p class="text-2">Hello</p>
<p class="text-3">Hello</p>
<p class="text-4">Hello</p>
<p class="text-5">Hello</p>
```
