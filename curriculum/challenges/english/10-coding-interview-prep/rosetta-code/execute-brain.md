---
id: 59e0a8df964e4540d5abe599
title: Execute Brain****
challengeType: 5
forumTopicId: 302261
dashedName: execute-brain
---

# --description--

เขียนฟังก์ชันเพื่อใช้ interpreters Brain\*\*\*\* ฟังก์ชันจะใช้stringเป็นparameterและควร retrun stringเป็นoutputรายละเอียดเพิ่มเติมได้รับด้านล่าง:

RCBF เป็น set ของ [Brainf\*\*\*](https://rosettacode.org/wiki/Brainf*** "Brainf\*\*\*") compilers และ interpretersเขียนสำหรับ Rosetta Code ในหลายๆภาษา

ด้านล่างนี้เป็นลิงค์ไปยังแต่ละเวอร์ชั่นของ RCBF
การใช้งานจำเป็นต้องปฏิบัติตามคำแนะนำต่อไปนี้อย่างถูกต้องเท่านั้น:

| Command           | Description                                                                        |
| ----------------- | ---------------------------------------------------------------------------------- |
| <code>></code>    | Move the pointer to the right                                                      |
| <code>&lt;</code> | Move the pointer to the left                                                       |
| <code>+</code>    | Increment the memory cell under the pointer                                        |
| <code>-</code>    | Decrement the memory cell under the pointer                                        |
| <code>.</code>    | Output the character signified by the cell at the pointer                          |
| <code>,</code>    | Input a character and store it in the cell at the pointer                          |
| <code>\[</code>   | Jump past the matching <code>]</code> if the cell under the pointer is 0           |
| <code>]</code>    | Jump back to the matching <code>\[</code> if the cell under the pointer is nonzero |

อนุญาตให้ใช้ขนาดเซลล์ใดก็ได้ รองรับ EOF (*E*nd-*O*-*F*ile) หรือไม่ก็ได้ เช่นเดียวกับที่คุณมีหน่วยความจำที่มีขอบเขตหรือไม่มีขอบเขต

# --hints--

`brain(bye)` ควร return string

```js
assert(typeof brain(bye) === 'string');
```

`brain("++++++[>++++++++++<-]>+++++.")` ควร return "A"

```js
assert.equal(brain('++++++[>++++++++++<-]>+++++.'), 'A');
```

`brain(bye)` ควร return `Goodbye, World!\r\n`

```js
assert.equal(brain(bye), 'Goodbye, World!\r\n');
```

`brain(hello)` ควร return `Hello World!\n`

```js
assert.equal(brain(hello), 'Hello World!\n');
```

`brain(fib)` ควร return `1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89`

```js
assert.equal(brain(fib), '1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89');
```

# --seed--

## --before-user-code--

```js
let fib=`+

++

+++

++++

+>+>>

>>++++

+++++++

++++++++

+++++++++

++++++++++

++++++>++++

++++++++++++

+++++++++++++

+++<<<<<<[>[>>

>>>>+>+<<<<<<<-

]>>>>>>>[<<<<<<<

+>>>>>>>-]<[>++++

++++++[-<-[>>+>+<<

<-]>>>[<<<+>>>-]+<[

>[-]<[-]]>[<<[>>>+<<

<-]>>[-]]<<]>>>[>>+>+

<<<-]>>>[<<<+>>>-]+<[>

[-]<[-]]>[<<+>>[-]]<<<<

<<<]>>>>>[++++++++++++++

+++++++++++++++++++++++++

+++++++++.[-]]++++++++++<[

->-<]>+++++++++++++++++++++

+++++++++++++++++++++++++++.

[-]<<<<<<<<<<<<[>>>+>+<<<<-]>

>>>[<<<<+>>>>-]<-[>>.>.<<<[-]]

<<[>>+>+<<<-]>>>[<<<+>>>-]<<[<+

>-]>[<+>-]<<<-]`;
let hello='++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.'
let bye='++++++++++[>+>+++>++++>+++++++>++++++++>+++++++++>++++++++++>+++++++++++>++++++++++++<<<<<<<<<-]>>>>+.>>>>+..<.<++++++++.>>>+.<<+.<<<<++++.<++.>>>+++++++.>>>.+++.<+++++++.--------.<<<<<+.<+++.---.';
```

## --seed-contents--

```js
function brain(prog) {

}
```

# --solutions--

```js
function brain(prog){
  var output="";
    var code; // formatted code
  var ip = 0; // current instruction within code
  var nest = 0; // current bracket nesting (for Out button)
  var ahead = []; // locations of matching brackets

  var data = [0]; // data array (mod by +, -)
  var dp = 0; // index into data (mod by <, >)

  var inp = 0; // current input character (fetch with ,)
  var quit = 0;
    var commands = {
    '>':function() { if (++dp >= data.length) data[dp]=0 },
    '<':function() { if (--dp < 0) quit++ },
    '+':function() { ++data[dp] },
    '-':function() { --data[dp] },
    '[':function() { if (!data[dp]) ip = ahead[ip]; else ++nest },
    ']':function() { if ( data[dp]) ip = ahead[ip]; else --nest },
    ',':function() {
        var c = document.getElementById("input").value.charCodeAt(inp++);
        data[dp] = isNaN(c) ? 0 : c; // EOF: other options are -1 or no change
    },
    '.':function() {
            output+=String.fromCharCode(data[dp]);
            /*var s = document.getElementById("output").innerHTML)
             + String.fromCharCode(data[dp]);
            s = s.replace(/\n/g,"<br>").replace(/ /g,"&amp;nbsp;");
            document.getElementById("output").innerHTML = s;*/
        },
    };

    let ar=prog.split('');
    var st = [], back, error = -1;
    for (ip=0; ip<ar.length; ip++) {
        switch(ar[ip]) {
        case '[':
            st.push(ip);
            break;
        case ']':
            if (st.length == 0) error = ip;
            back = st.pop();
            ahead[ip] = back;
            ahead[back] = ip;
            break;
        }
    }

    for(ip=0;ip<ar.length;ip++){
    if(commands.hasOwnProperty(ar[ip]))
          commands[ar[ip]]();
    }

    return output;
}
```
