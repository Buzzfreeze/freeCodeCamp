---
id: 5ea9997bbec2e9bc47e94db3
title: Developing a Banner Grabber
challengeType: 11
videoId: CeGW761BIsA
bilibiliIds:
  aid: 633014533
  bvid: BV1Sb4y127H9
  cid: 409036288
dashedName: developing-a-banner-grabber
---

# --question--

## --text--

ระบุข้อมูลในช่องว่างเพื่อทำให้ฟังก์ชัน `banner` ด้านล่างสมบูรณ์:

```py
def banner(ip, port):
    s = socket.socket()
    s.__A__((ip, __B__))
    print(s.recv(1024))
```

## --answers--

A: `connect`

B: `port`

---

A: `getsockname`

B: `'1-1024'`

---

A: `connect`

B: `int(port)`

## --video-solution--

3

