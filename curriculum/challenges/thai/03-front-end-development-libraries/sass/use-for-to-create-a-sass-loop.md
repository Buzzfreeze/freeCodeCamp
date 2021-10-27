---
id: 587d7dbe367417b2b2512bb9
title: Use @for to Create a Sass Loop
challengeType: 0
forumTopicId: 301462
dashedName: use-for-to-create-a-sass-loop
---

# --description--

คำสั่ง `@for` นั้นเพิ่มสไตล์ในลูป ซึ่งคล้ายกันมากกับ `for` loop ใน JavaScript

`@for` นั้นถูกใช้ในสองกรณี คือ "start through end" หรือ "start to end" ข้อแตกต่างที่สำคัยคือ "start **to** end" จะ *ไม่รวม* จำนวนสุดท้ายในการนับ ส่วน "start **through** end" จะ *รวม* จำนวนสุดท้ายในการนับด้วย

ข้างล่างนี้เป็นตัวอย่างของ start **through**:

```scss
@for $i from 1 through 12 {
  .col-#{$i} { width: 100%/12 * $i; }
}
```

ส่วน `#{$i}` คือ syntax ส่วนที่รวมตัวแปร (`i`) กับข้อความเพื่อสร้าง string เมื่อไฟล์ Sass แปลงไปเป็น CSS จะมีหน้าตา ดังนี้:

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

มันคือวิธีที่ทรงพลังในการสร้างกริตเลย์เอาท์ ตอนนี้คุณมี 12 ทางเลือกที่เป็นคลาส CSS สำหรับขนาดความกว้างของคอลัมน์

# --instructions—

ให้เขียนคำสั่ง `@for` ที่รับตัวแปร `$j` ที่วนลูปจาก 1 **to** 6 

ซึ่งมันควรจะสร้างคลาสทั้งหมด 5 คลาสที่มีชื่อตั้งแต่ `.text-1` ไป `.text-5` ซึ่งแต่ละคลาสมี ค่า `font-size` ตั้งไว้ที่ 15pxคูณด้วย index

# --hints--

โค้ดของคุณควรใช้คำสั่ง `@for`

```js
assert(code.match(/@for /g));
```

คลาส `.text-1` ควรมีขนาด `font-size` เป็น 15px

```js
assert($('.text-1').css('font-size') == '15px');
```

คลาส `.text-2` ควรมีขนาด `font-size` เป็น 30px

```js
assert($('.text-2').css('font-size') == '30px');
```

คลาส `.text-3` ควรมีขนาด `font-size` เป็น 45px

```js
assert($('.text-3').css('font-size') == '45px');
```

คลาส `.text-4` ควรมีขนาด `font-size` เป็น 60px

```js
assert($('.text-4').css('font-size') == '60px');
```

คลาส `.text-5` ควรมีขนาด `font-size` เป็น 75px

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
