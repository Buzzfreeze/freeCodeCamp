---
id: bad87fee1348bd9aed808826
title: Disable an Element Using jQuery
challengeType: 6
forumTopicId: 17563
dashedName: disable-an-element-using-jquery
---

# --description--

เราเปลี่ยน property ของ HTML ในส่วนที่ไม่ใช่ CSS ด้วย jQuery ได้ด้วย อย่างเช่น เราจะปิดปุ่มไม่ให้ใช้งานได้ก็ได้

ถ้าเราปิดปุ่ม ปุ่มนั้นจะเปลี่ยนเป็นสีเทา แล้วก็จะทำให้คลิกปุ่มนั้นไม่ได้

jQuery มีฟังก์ชันที่เรียกว่า `.prop()` ที่ใช้เปลี่ยน property ของ element ได้

มาดูวิธีปิดปุ่มกัน:

```js
$("button").prop("disabled", true);
```

ให้ลองปิดปุ่ม `target1`

# --hints--

ปุ่ม `target1` ของคุณต้องใช้งานไม่ได้

```js
assert(
  $('#target1') &&
    $('#target1').prop('disabled') &&
    code.match(/["']disabled["'],( true|true)/g)
);
```

ปุ่มอื่นต้องใช้งานได้ตามปกติ

```js
assert($('#target2') && !$('#target2').prop('disabled'));
```

ต้องใช้แค่ jQuery เท่านั้นในการปิดปุ่ม

```js
assert(!code.match(/disabled[^<]*>/g));
```

# --seed--

## --seed-contents--

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");

  });
</script>

<!-- แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```

# --solutions--

```html
<script>
  $(document).ready(function() {
    $("#target1").css("color", "red");
    $("#target1").prop("disabled", true);

  });
</script>

<!-- แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น -->

<div class="container-fluid">
  <h3 class="text-primary text-center">jQuery Playground</h3>
  <div class="row">
    <div class="col-xs-6">
      <h4>#left-well</h4>
      <div class="well" id="left-well">
        <button class="btn btn-default target" id="target1">#target1</button>
        <button class="btn btn-default target" id="target2">#target2</button>
        <button class="btn btn-default target" id="target3">#target3</button>
      </div>
    </div>
    <div class="col-xs-6">
      <h4>#right-well</h4>
      <div class="well" id="right-well">
        <button class="btn btn-default target" id="target4">#target4</button>
        <button class="btn btn-default target" id="target5">#target5</button>
        <button class="btn btn-default target" id="target6">#target6</button>
      </div>
    </div>
  </div>
</div>
```
