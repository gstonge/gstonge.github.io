---
layout: post
title:  "Efficient simulation of spreading processes"
date:   2018-08-21
category : publication
---

Our latest work on an efficient *Gillespie* algorithm for the simulation of
spreading processes is available on [arXiv](https://arxiv.org/abs/1808.05859). 
<!--more-->
This project is in collaboration with [Jean-Gabriel Young](http://www.jgyoung.ca/), 
[Laurent Hébert-Dufresne](http://laurenthebertdufresne.github.io/) and 
[Louis J. Dubé](https://www.dynamica.phy.ulaval.ca/index.php?id=contact). 


It hinges on an efficient **composition and rejection** scheme to sample a node,
which then produces an action (transmission, recovery, etc.). With this
framework, updates are *almost* independent from the network size. The
benchmark below shows its efficiency compared to other algorithms in diverse
scenarios. 

![algo-comparison]({{ "/assets/posts/2018-08-21.png" | absolute_url }})
