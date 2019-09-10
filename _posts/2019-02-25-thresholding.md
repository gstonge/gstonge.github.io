---
layout: post
title:  "Random (correlated) data create complex networks?"
date:   2019-02-25
category : publication
---

Our new preprint just came out! This project is the result of a collaboration that started at the [Complex Systems Summer School](https://www.santafe.edu/engage/learn/schools/sfi-complex-systems-summer-school) 2018.
The dream team is composed of [George T. Cantwell](https://scholar.google.com/citations?user=1CSy_CcAAAAJ&hl=fr&oi=sra), [Yanchen Liu](https://scholar.google.com/citations?user=VFIpxQEAAAAJ&hl=fr&oi=sra), [Benjamin F. Maier](http://benmaier.org/), [Alice C. Schwarze](https://www.maths.ox.ac.uk/people/alice.schwarze), Carlos A. Serván, [Jordan Snyder](https://jasnyder.github.io/) and myself.

The idea is simple : we assume a generative model (multivariate normal)
describing some data. We then perform a standard thresholding procedure,
yielding an ensemble of random networks. We observe that slight correlation
between the data associated with a same node reproduce certain properties
associated with complex networks : heterogeneous degree distribution, ultra
small-world, higher (than configuration model) clustering, etc.

![model-illustration]({{ "/assets/posts/2019-02-25.png" | absolute_url }})

