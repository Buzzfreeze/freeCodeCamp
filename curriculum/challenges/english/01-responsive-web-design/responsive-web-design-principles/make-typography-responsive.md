---
id: 587d78b1367417b2b2512b0c
title: Make Typography Responsive
challengeType: 0
videoUrl: 'https://scrimba.com/p/pzrPu4/crzN7T8'
forumTopicId: 301141
dashedName: make-typography-responsive
---

# --description--

แทนที่จะใช้ `em` หรือ `px` เพื่อกำหนดขนาดของข้อความ คุณสามารถใช้ viewport units สำหรับ responsive typography
Viewport units (อย่างเช่น percentages) เป็นหน่วยสัมพัทธ์แต่มันขึ้นกับ item ที่แต่ต่างกัน
Viewport units จะสัมพัทธ์กับ viewport dimensions (ความกว้าง หรือ ความสูง) ของอุปกรณ์หนึ่ง ๆ และ percentages ขะสัมพันธ์กับขนาดของ parent container element

viewport units 4 อันที่แตกต่างกันคือ:

<ul><li><code>vw</code> (viewport width): <code>10vw</code> would be 10% of the viewport's width.</li><li><code>vh</code> (viewport height): <code>3vh</code> would be 3% of the viewport's height.</li><li><code>vmin</code> (viewport minimum): <code>70vmin</code> would be 70% of the viewport's smaller dimension (height or width).</li><li><code>vmax</code> (viewport maximum): <code>100vmax</code> would be 100% of the viewport's bigger dimension (height or width).</li></ul>

นี่คือตัวอย่างที่กำหนดให้ `body` tag มีค่า 30% ของความกว้าง viewport

```css
body { width: 30vw; }
```

# --instructions--

จงกำหนดให้ `width` ของ `h2` tag มีค่า 80% ของความกว้าง viewport และ `width` ของพารากราฟมีค่า 75% ของ dimension ที่เล็กกว่าของ viewport
# --hints--

`h2` tag ของคุณควรมี `width` ที่มีค่า 80vw.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/h2\s*?{\s*?width:\s*?80vw;\s*?}/g)
);
```

Your `p` tag should have a `width` of 75vmin.

```js
assert(
  __helpers
    .removeCssComments(code)
    .match(/p\s*?{\s*?width:\s*?75vmin;\s*?}/g)
);
```

# --seed--

## --seed-contents--

```html
<style>

</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```

# --solutions--

```html
<style>
  h2 {
      width: 80vw;
  }
  p {
      width: 75vmin;
  }
</style>

<h2>Importantus Ipsum</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem. Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.</p>
```
