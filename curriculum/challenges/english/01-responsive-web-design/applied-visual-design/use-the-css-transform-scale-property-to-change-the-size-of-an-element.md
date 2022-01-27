---
id: 587d78a5367417b2b2512ad9
title: Use the CSS Transform scale Property to Change the Size of an Element
challengeType: 0
videoUrl: "https://scrimba.com/c/c2MZVSg"
forumTopicId: 301076
dashedName: use-the-css-transform-scale-property-to-change-the-size-of-an-element
---

# --description--

ในการเปลี่ยนสเกลของ element เราสามารถใช้ property `transform` ของ CSS ร่วมกับฟังก์ชัน `scale()` ได้

โค้ดด้านล่างจะเป็นการเพิ่มขนาดของแท็ก `p` เป็นสองเท่า:

```css
p {
  transform: scale(2);
}
```

# --instructions--

ให้เพิ่มขนาดของ element ที่มี id เป็น `ball2` ให้มีขนาดเป็น 1.5 เท่าของขนาดเดิม

# --hints--

property `transform` ของ `#ball2` ต้องมีค่าเป็น 1.5 เท่าของขนาดเดิม

```js
assert(
  code.match(
    /#ball2\s*?{\s*?left:\s*?65%;\s*?transform:\s*?scale\(1\.5\);\s*?}|#ball2\s*?{\s*?transform:\s*?scale\(1\.5\);\s*?left:\s*?65%;\s*?}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .ball {
    width: 40px;
    height: 40px;
    margin: 50 auto;
    position: fixed;
    background: linear-gradient(35deg, #ccffff, #ffcccc);
    border-radius: 50%;
  }
  #ball1 {
    left: 20%;
  }
  #ball2 {
    left: 65%;
  }
</style>

<div class="ball" id="ball1"></div>
<div class="ball" id="ball2"></div>
```

# --solutions--

```html
<style>
  .ball {
    width: 40px;
    height: 40px;
    margin: 50 auto;
    position: fixed;
    background: linear-gradient(35deg, #ccffff, #ffcccc);
    border-radius: 50%;
  }
  #ball1 {
    left: 20%;
  }
  #ball2 {
    left: 65%;
    transform: scale(1.5);
  }
</style>
<div class="ball" id="ball1"></div>
<div class="ball" id="ball2"></div>
```
