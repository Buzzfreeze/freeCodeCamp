---
id: bad88fee1348bd9aedf08816
title: Link to Internal Sections of a Page with Anchor Elements
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cyrDRUL'
forumTopicId: 301098
dashedName: link-to-internal-sections-of-a-page-with-anchor-elements
---

# --description--

`a` (_anchor_) elements สามารถใช้เพื่อสร้าง internal link ที่พาไปยังแต่ละ section ข้างในหน้าเว็บไซต์นั้นได้ด้วย

เพื่อสร้างลิงค์ภายในหน้านั้น คุณต้องเพิ่ม `href` attribute ของลิงค์ให้กับเครื่องหมาย `#` และเพิ่มค่าของ `id` attribute ของ element ที่คุณต้องการจะนำทางไปโดยทั่วไป ก็คือตำแหน่งที่อยู่ลึกลงไปในหน้านั้น
นอกจากนี้ คุณยังต้องเพิ่ม `id` attribute อันเดียวกับนี้ให้กับ element ที่คุณได้มีการลิงค์ไว้
`id` เป็น attribute ที่ระบุบอกถึง element ที่แตกต่างกัน

ด้านล่างจะเป็นตัวอย่างของ internal anchor link และ target element :

```html
<a href="#contacts-header">Contacts</a>
...
<h2 id="contacts-header">Contacts</h2>
```

เมื่อผู้ใช้คลิกที่ `Contacts` link, เขาจะถูกพาไปที่ section ของเว็บเพจที่มี **Contacts** header element.

# --instructions--

จงเปลี่ยน external link ให้เป็น internal link โดยการเปลี่ยน `href` attribute ให้เป็น `"#footer"` และข้อความจาก `cat photos` เป็น `Jump to Bottom`

จงเอา `target="_blank"` attribute ออกจาก anchor tag เนื่องจากมันจะทำให้ linked document ถูกเปิดขึ้นมาในอีกหน้าหนึ่ง

หลังจากนั้น จงเพิ่ม`id` attribute ที่มีค่าเป็น`footer` ให้ `<footer>` element ที่ด้านล่างของหน้านั้น

# --hints--

มันควรมี anchor tag แค่อันเดียวในหน้านี้

```js
assert($('a').length == 1);
```

มันควรมี `footer` tag ในหน้านี้

```js
assert($('footer').length == 1);
```

`a` tag ควรมี `href` attribute อันหนึ่งที่ถูกกำหนดให้เป็น "#footer"

```js
assert($('a').eq(0).attr('href') == '#footer');
```

`a` tag ไม่ควรมี `target` attribute.

```js
assert(typeof $('a').eq(0).attr('target') == typeof undefined || $('a').eq(0).attr('target') == true);
```

ข้อความของ `a` text ควรจะเป็น "Jump to Bottom"

```js
assert(
  $('a')
    .eq(0)
    .text()
    .match(/Jump to Bottom/gi),
);
```

`footer` tag ควรจะมี `id` attribute เป็น "footer"

```js
assert($('footer').eq(0).attr('id') == 'footer');
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
    Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot,
    hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere
    rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed
    everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.
  </p>
  <p>
    Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur
    catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase
    the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed
    everywhere rip the couch sleep in the sink fluffy fur catnip scratched.
  </p>
  <p>
    Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture,
    especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll
    over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.
  </p>
  <p>
    Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to
    internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on
    owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand
    run outside as soon as door open yet destroy couch.
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
    Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot,
    hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere
    rip the couch sleep in the sink fluffy fur catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed
    everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.
  </p>
  <p>
    Purr jump eat the grass rip the couch scratched sunbathe, shed everywhere rip the couch sleep in the sink fluffy fur
    catnip scratched. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase
    the red dot, hairball run catnip eat the grass sniff. Purr jump eat the grass rip the couch scratched sunbathe, shed
    everywhere rip the couch sleep in the sink fluffy fur catnip scratched.
  </p>
  <p>
    Meowwww loved it, hated it, loved it, hated it yet spill litter box, scratch at owner, destroy all furniture,
    especially couch or lay on arms while you're using the keyboard. Missing until dinner time toy mouse squeak roll
    over. With tail in the air lounge in doorway. Man running from cops stops to pet cats, goes to jail.
  </p>
  <p>
    Intently stare at the same spot poop in the plant pot but kitten is playing with dead mouse. Get video posted to
    internet for chasing red dot leave fur on owners clothes meow to be let out and mesmerizing birds leave fur on
    owners clothes or favor packaging over toy so purr for no reason. Meow to be let out play time intently sniff hand
    run outside as soon as door open yet destroy couch.
  </p>
</main>

<footer id="footer">Copyright Cat Photo App</footer>
```
