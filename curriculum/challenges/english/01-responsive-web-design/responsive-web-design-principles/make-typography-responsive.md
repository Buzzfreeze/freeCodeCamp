---
id: 587d78b1367417b2b2512b0c
title: Make Typography Responsive
challengeType: 0
videoUrl: "https://scrimba.com/p/pzrPu4/crzN7T8"
forumTopicId: 301141
dashedName: make-typography-responsive
---

# --description--

คุณสามารถเปลี่ยนหน่วยของขนาดข้อความจากหน่วย `em` หรือ `px` ไปใช้หน่วยของ viewport (viewport unit) สำหรับการแสดงข้อความที่เปลี่ยนขนาดตามขนาดหน้าจอได้

หน่วยของ viewport ก็จะคล้ายๆกับการใช้หน่วยเปอร์เซ็นต์ เพราะว่าเป็นหน่วยที่จะอ้างอิงกับ element อื่น

หน่วยของ viewport จะอิงจากความกว้างหรือความสูงของอุปกรณ์ และถ้าใช้หน่วยเป็นเปอร์เซ็นต์ก็จะอ้างอิงจากขนาดของ parent element

หน่วยของ viewport มีสี่แบบคือ:

<ul><li><code>vw</code> (viewport width): <code>10vw</code> จะกว้างเป็น 10% ของความกว้างของ viewport</li><li><code>vh</code> (viewport height): <code>3vh</code> จะสูงเป็น 3% ของความสูงของ viewport</li><li><code>vmin</code> (viewport minimum): <code>70vmin</code> จะมีความยาวเป็น 70% ของด้านที่สั้นกว่าของ viewport (เช่น ถ้าเป็นคอมพิวเตอร์ ด้านสั้นคือความสูง ถ้าเป็นโทรศัพท์ด้านสั้นคือความกว้าง)</li><li><code>vmax</code> (viewport maximum): <code>100vmax</code> จะมีความยาวเป็น 100% ของด้านที่ยาวกว่าของ viewport (เช่น ถ้าเป็นคอมพิวเตอร์ ด้านยาวคือความกว้าว ถ้าเป็นโทรศัพท์ด้านยาวคือความสูง)</li></ul>

ลองดูตัวอย่างการกำหนดให้แท็ก `body` มีความกว้างเป็น 30% ของความกว้างของ viewport

```css
body {
  width: 30vw;
}
```

# --instructions--

ให้กำหนด `width` ของแท็ก `h2` เป็น 80% ของความกว้างของ viewport และ กำหนด `width` ของแท็ก `p` เป็น 75% ของด้านที่สั้นกว่าของ viewport

# --hints--

แท็ก `h2` ต้องมีค่าของ `width` เป็น 80vw

```js
assert(
  __helpers.removeCssComments(code).match(/h2\s*?{\s*?width:\s*?80vw;\s*?}/g)
);
```

แท็ก `p` ต้องมีค่าของ `width` เป็น 75vmin

```js
assert(
  __helpers.removeCssComments(code).match(/p\s*?{\s*?width:\s*?75vmin;\s*?}/g)
);
```

# --seed--

## --seed-contents--

```html
<style></style>

<h2>Importantus Ipsum</h2>
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus
  massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet
  lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac
  habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem.
  Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida
  consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.
</p>
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
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis tempus
  massa. Aenean erat nisl, gravida vel vestibulum cursus, interdum sit amet
  lectus. Sed sit amet quam nibh. Suspendisse quis tincidunt nulla. In hac
  habitasse platea dictumst. Ut sit amet pretium nisl. Vivamus vel mi sem.
  Aenean sit amet consectetur sem. Suspendisse pretium, purus et gravida
  consequat, nunc ligula ultricies diam, at aliquet velit libero a dui.
</p>
```
