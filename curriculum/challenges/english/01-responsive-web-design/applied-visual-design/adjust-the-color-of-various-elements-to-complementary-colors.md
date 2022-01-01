---
id: 587d78a4367417b2b2512ad3
title: Adjust the Color of Various Elements to Complementary Colors
challengeType: 0
videoUrl: 'https://scrimba.com/c/cWmPpud'
forumTopicId: 301033
dashedName: adjust-the-color-of-various-elements-to-complementary-colors
---

# --description--

แบบฝึกหัด Complementary Colors แสดงให้เห็นว่าสีตรงข้ามกันบนล้อสีสามารถเพิ่มความมีชีวิตชีวาให้กันและกันได้เมื่อวางมันข้าง ๆ กัน
อย่างไรก็ตาม visual contrast ที่สูงมาก ๆ สามารถทำให้รู้สึกขัดตาได้ หากเราใช้มันบนเว็บไซต์มากเกินไป และบางทีก็ทำให้ตัวอักษรอ่านได้ยากขึ้นถ้ามันถูกวางไว้บนพื้นหลังที่เป็นแบบ complementary-colored
ในแบบฝึกหัดนี้ หนึ่งในสีที่มักจะเป็นตัวหลัก และสีที่เสริมเข้ามาจะช่วยดึงดูดความสนใจให้กับ content ในหน้าเว็บ

# --instructions--

หน้านี้จะใช้เฉดของสีฟ้าน้ำทะเล (`#09A7A1`) เป็นสีหลัก และให้สีส้ม (`#FF790E`) ช่วยทำให้ sign-up buttons ดูเด่นขึ้น
จงเปลี่ยน `background-color` ของทั้ง `header` และ `footer` จวกสีดำเป็นสีฟ้าน้ำทะเล
หลังจากนั้นจงเปลี่ยนสีของข้อความ `color` ใน `h2` ให้เป็นสีฟ้าน้ำทะเลด้วยเช่นกัน
สุดท้ายนี้ จงเปลี่ยน `background-color` ของปุ่ม `button` ให้เป็นสีส้ม

# --hints--

`header` element ควรมี `background-color` ค่าเท่ากับ #09A7A1 อันหนึ่ง

```js
assert($('header').css('background-color') == 'rgb(9, 167, 161)');
```

`footer` element ควรมี `background-color` ค่าเท่ากับ #09A7A1 อันหนึ่ง

```js
assert($('footer').css('background-color') == 'rgb(9, 167, 161)');
```

`h2` element ควรมี `color` เท่ากับ #09A7A1 อันหนึ่ง

```js
assert($('h2').css('color') == 'rgb(9, 167, 161)');
```

`button` element ควรมี `background-color` เท่ากับ #FF790E อันหนึ่ง

```js
assert($('button').css('background-color') == 'rgb(255, 121, 14)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: white;
  }
  header {
    background-color: black;
    color: white;
    padding: 0.25em;
  }
  h2 {
    color: black;
  }
  button {
    background-color: white;
  }
  footer {
    background-color: black;
    color: white;
    padding: 0.5em;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
</header>
<main>
  <article>
    <h2>Machine Learning in the Kitchen</h2>
    <p>
      Join this two day workshop that walks through how to implement cutting-edge snack-getting algorithms with a
      command line interface. Coding usually involves writing exact instructions, but sometimes you need your computer
      to execute flexible commands, like <code>fetch Pringles</code>.
    </p>
    <button>Sign Up</button>
  </article>
  <article>
    <h2>Bisection Vegetable Chopping</h2>
    <p>
      This week-long retreat will level-up your coding ninja skills to actual ninja skills. No longer is the humble
      bisection search limited to sorted arrays or coding interview questions, applying its concepts in the kitchen will
      have you chopping carrots in O(log n) time before you know it.
    </p>
    <button>Sign Up</button>
  </article>
</main>
<br />
<footer>&copy; 2018 FCC Kitchen</footer>
```

# --solutions--

```html
<style>
  body {
    background-color: white;
  }
  header {
    background-color: #09a7a1;
    color: white;
    padding: 0.25em;
  }
  h2 {
    color: #09a7a1;
  }
  button {
    background-color: #ff790e;
  }
  footer {
    background-color: #09a7a1;
    color: white;
    padding: 0.5em;
  }
</style>
<header>
  <h1>Cooking with FCC!</h1>
</header>
<main>
  <article>
    <h2>Machine Learning in the Kitchen</h2>
    <p>
      Join this two day workshop that walks through how to implement cutting-edge snack-getting algorithms with a
      command line interface. Coding usually involves writing exact instructions, but sometimes you need your computer
      to execute flexible commands, like <code>fetch Pringles</code>.
    </p>
    <button>Sign Up</button>
  </article>
  <article>
    <h2>Bisection Vegetable Chopping</h2>
    <p>
      This week-long retreat will level-up your coding ninja skills to actual ninja skills. No longer is the humble
      bisection search limited to sorted arrays or coding interview questions, applying its concepts in the kitchen will
      have you chopping carrots in O(log n) time before you know it.
    </p>
    <button>Sign Up</button>
  </article>
</main>
<br />
<footer>&copy; 2018 FCC Kitchen</footer>
```
