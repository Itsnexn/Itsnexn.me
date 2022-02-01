---
title: HacktivityCon2021 badwords writeup
author: 0xNexn
description: Badwords writeup from HacktivityCon2021
date: 1643750326
tags: ['shell escape', 'sandbox escape', 'ctf', 'HacktivityCon']
---

# BadWords
### Challenge
**Tag:** _Easy_

**Description:**
You look questionable... if you don't have anything good to say, don't say anything at all!

### Solve
This challenge was easy basically it a **Restricted shell**!
There are a lot of ways to bypass the restricted shell, but my way is to run a new shell prompt.
That's what I did in the challenge.
The simplest way to bypass it is using an escape character which is the backslash so I used a backslash to run a new shell!
```
user@host:/home/user$ \bash
\bash


```
It ran the command but there is no prompt...
it's weird but at least we can use it to find our flag!

```
>>>ls
just
>>>cd just
>>>ls
out
>>>cd out
>>>ls
of
>>>cd of
>>>ls
reach
>>>cd reach
>>>ls
flag.txt
>>>pwd
/home/user/just/out/of/reach
>>>cat flag.txt
flag{2d43e30a358d3f30fe65cc47a9cbbe98}
```
**NOTE:** There was no prompt I just add the `>>>` for more readability.

*Itsnexn* for **Abyssal Cruelty**
