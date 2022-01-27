---
id: bad88fee1348bd9aedf08816
title: Link to Internal Sections of a Page with Anchor Elements
challengeType: 0
videoUrl: "https://scrimba.com/p/pVMPUv/cyrDRUL"
forumTopicId: 301098
dashedName: link-to-internal-sections-of-a-page-with-anchor-elements
---

# --description--

เราจะใช้ `a` (_anchor_) element เพื่อพาผู้ใช้ไปยังส่วนอื่นภายในหน้าเว็บของเราได้ด้วย โดยลิงก์ที่ไม่ได้พาออกไปยังเว็บอื่น จะเรียกว่าลิงก์ภายใน หรือ internal link

ในการสร้างลิงค์ภายใน คุณต้องเขียน attribute `href` โดยใช้เครื่องหมาย `#` นำหน้า attribute `id` ของ element เป้าหมายที่คุณต้องการพาผู้ใช้ไป
และคุณยังต้องเพิ่ม attribute `id` อันเดียวกันนี้ให้กับ element ที่คุณต้องการพาผู้ใช้ไปด้วย
โดย `id` เป็น attribute ที่ใช้ระบุ element แต่ละตัว ซึ่งในหน้าเว็บหนึ่งๆ ไม่ควรมี element หลายตัวที่ใช้ id เดียวกัน

ลองดูตัวอย่างของ internal anchor link และ element เป้าหมาย:

```html
<a href="#contacts-header">Contacts</a>
...
<h2 id="contacts-header">Contacts</h2>
```

เมื่อผู้ใช้คลิกที่ลิงก์ `Contacts` เขาจะถูกพาไปที่ส่วนของของเว็บที่มี **Contacts** header element อยู่

# --instructions--

ให้เปลี่ยน external link ให้เป็น internal link โดยการเปลี่ยน `href` attribute ให้เป็น `"#footer"` และเปลี่ยนข้อความจาก `cat photos` เป็น `Jump to Bottom`

ให้ลบ `target="_blank"` attribute ออกจากแท็ก `a` เพราะว่าการตั้งค่า attribute นี้ จะทำให้เมื่อคลิกลิงก์แล้ว เบราว์เซอร์จะไปเปิดแท็บใหม่

หลังจากนั้น ให้เพิ่ม `id` attribute ที่มีค่าเป็น `footer` ให้กับ `<footer>` element ที่ด้านล่างของหน้านี้

เมื่อทำเสร็จ ให้ลองคลิกที่ `Jump to Bottom` ดู เพื่อดูการทำงานของ internal link

# --hints--

ต้องมีแท็ก `a` หนึ่งอันในหน้านี้

```js
assert($("a").length == 1);
```

ต้องมีแท็ก `footer` ในหน้านี้

```js
assert($("footer").length == 1);
```

แท็ก `a` ต้องมี `href` attribute ที่มีค่าเป็น "#footer"

```js
assert($("a").eq(0).attr("href") == "#footer");
```

แท็ก `a` ต้องไม่มี `target` attribute

```js
assert(
  typeof $("a").eq(0).attr("target") == typeof undefined ||
    $("a").eq(0).attr("target") == true
);
```

ข้อความในแท็ก `a` ต้องเป็น "Jump to Bottom"

```js
assert(
  $("a")
    .eq(0)
    .text()
    .match(/Jump to Bottom/gi)
);
```

แท็ก `footer` ต้องมีค่าของ `id` เป็น "footer"

```js
assert($("footer").eq(0).attr("id") == "footer");
```

# --seed--

## --seed-contents--

```html
<h2>CatPhotoApp</h2>
<main>
  <a href="https://www.freecatphotoapp.com" target="_blank">cat photos</a>

  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
    alt="A cute orange cat lying on its back."
  />

  <p>
    Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching
    attack your ankles chase the red dot, hairball run catnip eat the grass
    sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed
    everywhere rip the couch sleep in the sink fluffy fur catnip scratched.
    Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching
    attack your ankles chase the red dot, hairball run catnip eat the grass
    sniff.
  </p>
  <p>
    Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere
    rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum
    dolor sit amet, shed everywhere shed everywhere stretching attack your
    ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump
    eat the grass rip the couch scratched sunbathe, shed everywhere rip the
    couch sleep in the sink fluffy fur catnip scratched.
  </p>
  <p>
    Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch
    at owner, destroy all furniture, especially couch or lay on arms while
    you're using the keyboard. Missing until dinner time toy mouse squeak roll
    over. With tail in the air lounge in doorway. Man running from cops stops to
    pet cats, goes to jail.
  </p>
  <p>
    Intently stare at the same spot poop in the plant pot but kitten is playing
    with dead mouse. Get video posted to internet for chasing red dot leave fur
    on owners clothes meow to be let out and mesmerizing birds leave fur on
    owners clothes or favor packaging over toy so purr for no reason. Meow to be
    let out play time intently sniff hand run outside as soon as door open yet
    destroy couch.
  </p>
</main>

<footer>Copyright Cat Photo App</footer>
```

# --solutions--

```html
<h2>CatPhotoApp</h2>
<main>
  <a href="#footer">Jump to Bottom</a>

  <img
    src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
    alt="A cute orange cat lying on its back."
  />

  <p>
    Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching
    attack your ankles chase the red dot, hairball run catnip eat the grass
    sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed
    everywhere rip the couch sleep in the sink fluffy fur catnip scratched.
    Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching
    attack your ankles chase the red dot, hairball run catnip eat the grass
    sniff.
  </p>
  <p>
    Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere
    rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum
    dolor sit amet, shed everywhere shed everywhere stretching attack your
    ankles chase the red dot, hairball run catnip eat the grass sniff. Purr jump
    eat the grass rip the couch scratched sunbathe, shed everywhere rip the
    couch sleep in the sink fluffy fur catnip scratched.
  </p>
  <p>
    Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch
    at owner, destroy all furniture, especially couch or lay on arms while
    you're using the keyboard. Missing until dinner time toy mouse squeak roll
    over. With tail in the air lounge in doorway. Man running from cops stops to
    pet cats, goes to jail.
  </p>
  <p>
    Intently stare at the same spot poop in the plant pot but kitten is playing
    with dead mouse. Get video posted to internet for chasing red dot leave fur
    on owners clothes meow to be let out and mesmerizing birds leave fur on
    owners clothes or favor packaging over toy so purr for no reason. Meow to be
    let out play time intently sniff hand run outside as soon as door open yet
    destroy couch.
  </p>
</main>

<footer id="footer">Copyright Cat Photo App</footer>
```
