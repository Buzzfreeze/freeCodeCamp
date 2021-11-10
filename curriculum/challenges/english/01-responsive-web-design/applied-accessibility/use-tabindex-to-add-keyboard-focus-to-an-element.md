---
id: 587d7790367417b2b2512ab0
title: Use tabindex to Add Keyboard Focus to an Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cmzMDHW'
forumTopicId: 301027
dashedName: use-tabindex-to-add-keyboard-focus-to-an-element
---

# --description--

HTML `tabindex` attribute มี 3 ฟังค์ชั่นที่แตกต่างกันซึ่งเกี่ยวข้องกับ element ที่ keyboard สนใจ
เมื่อมันอยู่ใน tag, มันจะบอกว่าอะไรที่ element สามารถโฟกัสได้
ค่าของมันจะบอกพฤติกรรม (behavior) ของมัน ซึ่งจะเป็นจำนวนเต็มที่มีค่าเป็นจำนวนบวก จำนวนลบ หรือเลขศูนย์

element ส่วนหนึ่งเช่นลิงค์และ form controls จะรับ  keyboard focus โดยอตโนมัติเมื่อผู้ใช้กดผ่านหน้านั้น ๆ
มันจะอยู่ในลำดับเดียวกันกับ elements ที่โผล่มาใน HTML source markup
ฟังค์ชั่นที่เหมือนกันนี้สามารถส่งไปให้กับ elements ตัวอื่นได้ ยกตัวอย่างเช่น `div`, `span`, และ `p` โดยการวาง `tabindex="0"` attribute ไว้ที่พวกมัน
นี่คือตัวอย่าง:

```html
<div tabindex="0">I need keyboard focus!</div>
```

**Note:** ค่าลบของ `tabindex` บ่งบอกว่า element ตัวนั้นสามารถถูกโฟกัสได้ แต่ไม่สามารถเข้าถึงได้ด้วย keyboard 
วิธีนี้มักถูกใช้เพื่อนำความสนใจกลับไปที่เนื้อหา (เหมือนอย่างเช่น เมื่อ `div` ที่ถูกใช้เพื่อหน้าต่าง pop-up window ได้มีการเปิดใช้งาน), และมันไปไกลเกินกว่าสโคปของ challenge เหล่านี้

# --instructions--

Camper Cat ได้สร้างแบบสำรวจขึ้นมาใหม่ 1 อันเพื่อเก็บข้อมูลเกี่ยวผู้ใช้ของเขา
เขารู้ว่าช่องใส่ input นั้นจะมี keyboard focus โดยอัตโนมัติแต่เขาต้องการทำให้มั่นใจว่าผู้ใช้ของเขาที่ใช้ keyboard จะหยุดที่คำชี้แจงขณะที่กดผ่าน item ต่าง ๆ
จงเพิ่ม `tabindex` attribute เข้าไปใน `p` tag และตั้งค่าให้ค่าของมันเป้น `0`
Bonus - การใช้ `tabindex` ยังช่วยให้ CSS pseudo-class `:focus` สามารถทำงานบน `p` tag ได้อีกด้วย

# --hints--

โค้ดของคุณควรเพิ่ม `tabindex` attribute เข้าไปใน `p` tag ที่เก็บคำชี้แจงของฟอร์มเอาไว้

```js
assert($('p').attr('tabindex'));
```

Your code should set the `tabindex` attribute on the `p` tag to a value of 0.

```js
assert($('p').attr('tabindex') == '0');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  p:focus {
    background-color: yellow;
  }
  </style>
</head>
<body>
  <header>
    <h1>Ninja Survey</h1>
  </header>
  <section>
    <form>


      <p>Instructions: Fill in ALL your information then click <b>Submit</b></p>


      <label for="username">Username:</label>
      <input type="text" id="username" name="username"><br>
      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">9th Life Master</label>
      </fieldset>
      <br>
      <fieldset>
      <legend>Select your favorite weapons:</legend>
      <input id="stars" type="checkbox" name="weapons" value="stars">
      <label for="stars">Throwing Stars</label><br>
      <input id="nunchucks" type="checkbox" name="weapons" value="nunchucks">
      <label for="nunchucks">Nunchucks</label><br>
      <input id="sai" type="checkbox" name="weapons" value="sai">
      <label for="sai">Sai Set</label><br>
      <input id="sword" type="checkbox" name="weapons" value="sword">
      <label for="sword">Sword</label>
      </fieldset>
      <br>
      <input type="submit" name="submit" value="Submit">
    </form><br>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<head>
  <style>
  p:focus {
    background-color: yellow;
  }
  </style>
</head>
<body>
  <header>
    <h1>Ninja Survey</h1>
  </header>
  <section>
    <form>


      <p tabindex="0">Instructions: Fill in ALL your information then click <b>Submit</b></p>


      <label for="username">Username:</label>
      <input type="text" id="username" name="username"><br>
      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie">
        <label for="newbie">Newbie Kitten</label><br>
        <input id="intermediate" type="radio" name="levels" value="intermediate">
        <label for="intermediate">Developing Student</label><br>
        <input id="master" type="radio" name="levels" value="master">
        <label for="master">9th Life Master</label>
      </fieldset>
      <br>
      <fieldset>
      <legend>Select your favorite weapons:</legend>
      <input id="stars" type="checkbox" name="weapons" value="stars">
      <label for="stars">Throwing Stars</label><br>
      <input id="nunchucks" type="checkbox" name="weapons" value="nunchucks">
      <label for="nunchucks">Nunchucks</label><br>
      <input id="sai" type="checkbox" name="weapons" value="sai">
      <label for="sai">Sai Set</label><br>
      <input id="sword" type="checkbox" name="weapons" value="sword">
      <label for="sword">Sword</label>
      </fieldset>
      <br>
      <input type="submit" name="submit" value="Submit">
    </form><br>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
