---
id: 5e7b9f0c0b6c005b0e76f073
title: 'Networking: Write a Web Browser'
challengeType: 11
videoId: zjyT9DaAjx4
bilibiliIds:
  aid: 761908574
  bvid: BV1j64y1x7wx
  cid: 377319579
dashedName: networking-write-a-web-browser
---

# --question--

## --text--

เมื่อรันโค๊ดต่อไปนี้ จะเป็นการสร้างอะไรออกมา ?

```py
import socket

mysock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
mysock.connect(('data.pr4e.org', 80))
cmd = 'GET http://data.pr4e.org/romeo.txt HTTP/1.0\r\n\r\n'.encode()
mysock.send(cmd)

while True:
    data = mysock.recv(512)
    if len(data) < 1:
        break
    print(data.decode(),end='')
mysock.close()
```

## --answers--

web server อย่างง่าย

---

email client อย่างง่าย

---

todo list อย่างง่าย

---

web browser อย่างง่าย

## --video-solution--

4
