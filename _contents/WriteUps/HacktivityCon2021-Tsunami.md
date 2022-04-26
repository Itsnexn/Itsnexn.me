---
title: HacktivityCon2021 Tsunami writeup
author: 0xNexn
description: Solving Tsunami writeup from HacktivityCon2021 using Sonic Visualiser + Pictures
date: 1649522455
tags:
    - ctf
    - HacktivityCon
    - Spectrogram
    - Audio
---

**Tag:** _Easy_

**Description:**
Woah! It's a natural disaster! But something doesn't seem so natural about this big wave...

**Attachments:**  [tsunami](#)

### Solve
just like other challenge's I start with file command:
```shell
$ file tsunami

tsunami: RIFF (little-endian) data, WAVE audio, Microsoft PCM, 16 bit, stereo 44100 Hz
```

hmmmmm! intresting!
I had some audio challenges before its mostly its about "Spectrograms"...

Im using **Sonic visualiser** but you can use anything that you comfortable with :)

**Step 0x0:**

hit Ctrl + O or goto _File => Open_ to open up our challenge file!
![Openning the file in Sonic Visualizer](https://i.imgur.com/Z7MdpK7.png)

**Step 0x1:**
![Sonic visualizer workspace](https://i.imgur.com/IcqKSmU.png)

**Step 0x2:**

right click on the screen and goto _Layer => Add spectrogram_...
![Adding spectorgrams](https://i.imgur.com/JVEa6Yt.png)

**Step 0x3:**

And boom we got our flag!
![flag](https://i.imgur.com/keFLSQg.png)

> Itsnexn for  **Abyssal Cruelty**
