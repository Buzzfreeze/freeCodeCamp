---
id: 5a23c84252665b21eecc7eb0
title: I before E except after C
challengeType: 5
forumTopicId: 302288
dashedName: i-before-e-except-after-c
---

# --description--

phrase ["I before E, except after C"](<https://en.wikipedia.org/wiki/I before E except after C>) เป็นตัวช่วยจำที่รู้จักกันดีซึ่งควรจะช่วยในการสะกดคำภาษาอังกฤษ

ใช้คำที่ให้มา ตรวจสอบว่าสองข้อย่อยของวลีนั้นเป็นไปได้หรือไม่:

<ol>
  <li>
    <i>"I before E when not preceded by C".</i>
  </li>
  <li>
    <i>"E before I when preceded by C".</i>
  </li>
</ol>

หากวลีย่อยทั้งสองน่าเชื่อถือ วลีดั้งเดิมสามารถกล่าวได้ว่าน่าเชื่อถือ

# --instructions--

เขียนฟังก์ชันที่ยอมรับคำและตรวจสอบว่าคำนั้นเป็นไปตามกฎนี้หรือไม่ ฟังก์ชันควรคืนค่า จริง หากคำนั้นเป็นไปตามกฎ และเป็นเท็จ หากไม่เป็นเช่นนั้น

# --hints--

`IBeforeExceptC` ควรเป็น function.

```js
assert(typeof IBeforeExceptC == 'function');
```

`IBeforeExceptC("receive")` ควร return boolean.

```js
assert(typeof IBeforeExceptC('receive') == 'boolean');
```

`IBeforeExceptC("receive")` ควร return `true`.

```js
assert.equal(IBeforeExceptC('receive'), true);
```

`IBeforeExceptC("science")` ควร return `false`.

```js
assert.equal(IBeforeExceptC('science'), false);
```

`IBeforeExceptC("imperceivable")` ควร return `true`.

```js
assert.equal(IBeforeExceptC('imperceivable'), true);
```

`IBeforeExceptC("inconceivable")` ควร return `true`.

```js
assert.equal(IBeforeExceptC('inconceivable'), true);
```

`IBeforeExceptC("insufficient")` ควร return `false`.

```js
assert.equal(IBeforeExceptC('insufficient'), false);
```

`IBeforeExceptC("omniscient")` ควร return `false`.

```js
assert.equal(IBeforeExceptC('omniscient'), false);
```

# --seed--

## --seed-contents--

```js
function IBeforeExceptC(word) {

}
```

# --solutions--

```js
function IBeforeExceptC(word)
{
    if(word.indexOf("c")==-1 && word.indexOf("ie")!=-1)
        return true;
    else if(word.indexOf("cei")!=-1)
        return true;
    return false;
}
```
