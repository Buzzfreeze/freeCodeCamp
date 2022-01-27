---
id: 587d7790367417b2b2512ab0
title: Use tabindex to Add Keyboard Focus to an Element
challengeType: 0
videoUrl: "https://scrimba.com/c/cmzMDHW"
forumTopicId: 301027
dashedName: use-tabindex-to-add-keyboard-focus-to-an-element
---

# --description--

attribute `tabindex` ของ HTML จะมีการทำงานได้ 3 แบบตามการโฟกัสของ element
โดย `tabindex` จะใช้บอกว่า element ไหนที่สามารถโฟกัสได้
โดยค่าที่ระบุจะเป็นตัวกำหนดพฤติกรรม (behavior) ของ element โดยค่านี้ต้องเป็นจำนวนเต็ม ที่มีค่าเป็นจำนวนบวก (+) จำนวนลบ (-) หรือเลขศูนย์ (0)

element บางส่วน เช่น ลิงก์และ form control จะรองรับการใช้คีย์บอร์ดโฟกัสได้โดยอัตโนมัติเมื่อผู้ใช้กด tab ในหน้านั้น ๆ

โดยลำดับของ element ที่ถูกโฟกัสจะเรียงตามในโค้ด HTML เลย โดยเรียงจากบนลงล่าง
ซื่งเราสามารถทำให้ element ตัวอื่น (เช่น `div`, `span`, และ `p`) มีพฤติกรรมแบบนี้ได้โดยใช้ attribute `tabindex="0"`

ลองดูตัวอย่าง:

```html
<div tabindex="0">I need keyboard focus!</div>
```

**Note:** การที่มี `tabindex` เป็นลบ (ปกติจะใช้ -1)
จะเป็นการบอกว่า เราสามารถโฟกัส element นั้นได้ แต่ไม่สามารถโฟกัสได้โดยการกด tab ที่ keyboard
โดยเราจะใช้วิธีนี้เพื่อย้ายโฟกัสโดยใช้โค้ด (เช่น การเปิด pop-up ที่เป็น `div`) ซึ่งเรื่องนี้จะเกินเนื้อหาที่เราจะสอนในบทนี้ไปแล้ว

# --instructions--

คราวนี้ นาย Camper Cat ได้สร้างแบบสำรวจขึ้นมาใหม่ เพื่อเก็บข้อมูลเกี่ยวกับผู้ใช้ของเขา
เขารู้ว่าช่องใส่ input นั้นจะถูกโฟกัสโดยอัตโนมัติ แต่เขาอยากให้ผู้ใช้ของเขาที่ใช้คีย์บอร์ด จะหยุดอ่านคำชี้แจงขณะที่กด tab ผ่าน
ให้เพิ่ม attribute `tabindex` เข้าไปในแท็ก `p` และกำหนดค่าเป็น `0`

เพิ่มเติม: การใช้ `tabindex` ยังช่วยให้ CSS pseudo-class `:focus` สามารถทำงานกับแท็ก `p` ได้อีกด้วย

# --hints--

ต้องเพิ่ม attribute `tabindex` เข้าไปในแท็ก `p` ที่เก็บคำชี้แจงของฟอร์มเอาไว้

```js
assert($("p").attr("tabindex"));
```

attribute `tabindex` ของแท็ก `p` ต้องมีค่าเป็น 0

```js
assert($("p").attr("tabindex") == "0");
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
      <input type="text" id="username" name="username" /><br />
      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie" />
        <label for="newbie">Newbie Kitten</label><br />
        <input
          id="intermediate"
          type="radio"
          name="levels"
          value="intermediate"
        />
        <label for="intermediate">Developing Student</label><br />
        <input id="master" type="radio" name="levels" value="master" />
        <label for="master">9th Life Master</label>
      </fieldset>
      <br />
      <fieldset>
        <legend>Select your favorite weapons:</legend>
        <input id="stars" type="checkbox" name="weapons" value="stars" />
        <label for="stars">Throwing Stars</label><br />
        <input
          id="nunchucks"
          type="checkbox"
          name="weapons"
          value="nunchucks"
        />
        <label for="nunchucks">Nunchucks</label><br />
        <input id="sai" type="checkbox" name="weapons" value="sai" />
        <label for="sai">Sai Set</label><br />
        <input id="sword" type="checkbox" name="weapons" value="sword" />
        <label for="sword">Sword</label>
      </fieldset>
      <br />
      <input type="submit" name="submit" value="Submit" />
    </form>
    <br />
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
      <p tabindex="0">
        Instructions: Fill in ALL your information then click <b>Submit</b>
      </p>

      <label for="username">Username:</label>
      <input type="text" id="username" name="username" /><br />
      <fieldset>
        <legend>What level ninja are you?</legend>
        <input id="newbie" type="radio" name="levels" value="newbie" />
        <label for="newbie">Newbie Kitten</label><br />
        <input
          id="intermediate"
          type="radio"
          name="levels"
          value="intermediate"
        />
        <label for="intermediate">Developing Student</label><br />
        <input id="master" type="radio" name="levels" value="master" />
        <label for="master">9th Life Master</label>
      </fieldset>
      <br />
      <fieldset>
        <legend>Select your favorite weapons:</legend>
        <input id="stars" type="checkbox" name="weapons" value="stars" />
        <label for="stars">Throwing Stars</label><br />
        <input
          id="nunchucks"
          type="checkbox"
          name="weapons"
          value="nunchucks"
        />
        <label for="nunchucks">Nunchucks</label><br />
        <input id="sai" type="checkbox" name="weapons" value="sai" />
        <label for="sai">Sai Set</label><br />
        <input id="sword" type="checkbox" name="weapons" value="sword" />
        <label for="sword">Sword</label>
      </fieldset>
      <br />
      <input type="submit" name="submit" value="Submit" />
    </form>
    <br />
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
