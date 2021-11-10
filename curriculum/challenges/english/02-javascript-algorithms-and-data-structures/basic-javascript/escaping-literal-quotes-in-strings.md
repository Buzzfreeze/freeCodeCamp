---
id: 56533eb9ac21ba0edf2244b5
title: Escaping Literal Quotes in Strings
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvgSr'
forumTopicId: 17568
dashedName: escaping-literal-quotes-in-strings
---

# --description--

เมื่อคุณสร้าง string คุณต้องเริ่มและจบด้วย single หรือ double quote จะเกิดอะไรขึ้นเมื่อคุณจำเป็นต้องมี quote: `"` หรือ `'` ภายใน string ของคุณ

ใน JavaScript คุณสามารถ <dfn>escape</dfn> quote เพื่อไม่ให้ JavaScript มองว่าเป็นจุดสิ้นสุดของ string โดยการวาง <dfn>backslash</dfn> (`\`) ไว้หน้า quote


```js
var sampleStr = "Alan said, \"Peter is learning JavaScript\".";
```

สิ่งนี้ส่งสัญญาณไปยัง JavaScript ว่าเครื่องหมายคำพูดต่อไปนี้ไม่ใช่จุดสิ้นสุดของ string แต่ควรปรากฏอยู่ภายในสตริงแทน ดังนั้น หากคุณพิมพ์สิ่งนี้ไปยัง consode คุณเห็นข้อความดังนี้:


```js
Alan said, "Peter is learning JavaScript".
```

# --instructions--

จงใช้ <dfn>backslashes</dfn> ในการกำหนด string ให้กับตัวแปร `myStr` ซึ่งถ้าคุณพิมพ์ออกมายัง console คุณจะเห็นผลลัพธ์ดังนี้

```js
I am a "double quoted" string inside "double quotes".
```

# --hints--

คุณควรใช้ double quotes 2 ชุด (`"`) และ escaped double quotes 4 ชุด (`\"`)

```js
assert(code.match(/\\"/g).length === 4 && code.match(/[^\\]"/g).length === 2);
```

ตัวแปร myStr ควรเก็บ string: `I am a "double quoted" string inside "double quotes".`

```js
assert(/I am a "double quoted" string inside "double quotes(\."|"\.)$/.test(myStr));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    console.log("myStr = \"" + myStr + "\"");
  } else {
    console.log("myStr is undefined");
  }
})();
```

## --seed-contents--

```js
var myStr = ""; // Change this line
```

# --solutions--

```js
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";
```
