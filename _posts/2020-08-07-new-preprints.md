---
layout: post
title:  "Four new preprints this summer!"
date:   2020-08-07
category : publication
---

Despite the lockdown, it was a pretty busy summer. I have coauthored 4 new
preprints that are now under review :

- [Threefold way to the dimension reduction of dynamics on networks: an application to synchronization](https://arxiv.org/abs/2005.10922)
- [Detecting structural perturbations from time series with deep learning](https://arxiv.org/abs/2006.05232)
- [Emergence of multistrain epidemics with an underlying genotype network](https://arxiv.org/abs/2007.07429)
- [Network comparison and the within-ensemble graph distance](https://arxiv.org/abs/2008.02415)

A quick tour!

#### Threefold way to the dimension reduction of dynamics on networks: an application to synchronization

Complex systems are difficult to analyze by definition. One reason for that is
their high dimensionality. In this paper we develop a new Dynamics Approximate Reduction Technique (DART),
to reduce large deterministic and complex-valued dynamical systems to a few equations, from which it is easier to extract meaningful insights. We apply the approach
to synchronization dynamics, such as the Kuramoto-Sakaguchi model.

Work with Vincent Thibeault, Louis J. Dubé, and Patrick Desrosiers.

![reduction]({{ "/assets/posts/2020-08-07-synch.png" | absolute_url }})

#### Detecting structural perturbations from time series with deep learning

When a catastrophe is on the verge of happening, subtle signals can be detected
to prevent a functional breakdown. For complex systems, even
by precisely monitoring the activity of the constituents, it is very difficult to infer the
structural cause for a breakdown. In this paper, we tackle the challenge
of identifying the edges that have been removed in a complex network through
the monitoring of the nodes' activity. We have developed a flexible deep learning
framework to that end, yielding results comparable to an optimal Bayesian approach.

Work with Edward Laurence, Charles Murphy, Xavier Roy-Pomerleau, and Vincent Thibeault.

![perturbation]({{ "/assets/posts/2020-08-07-perturbation.png" | absolute_url }})


#### Emergence of multistrain epidemics with an underlying genotype network

Work with Blake J. M. Williams and Laurent Hébert-Dufresne

A single virus is enough problem (yeah I'm thinking about you SARS-CoV-2), but even then, viruses are entities that
mutate fast enough so that multiple strains are effectively spreading in a
population at the same time. This is especially true for the influenza, which
is a real problem for immunization each year. Assuming that similar strains
confer partial cross-immunity, how does the genotype network structure of
virus strains impact their propagation in a population? This is exactly what we
study in this new preprint!

![multistrain]({{ "/assets/posts/2020-08-07-multistrain.png" | absolute_url }})

#### Network comparison and the within-ensemble graph distance


A fundamental tool for empirical science is comparison: How is this object
similar or different to this other object? For complex networks, the question
is quite complicated, as one can desire certain properties or not (e.g. invariance under
isomorphism), and there is literally an infinte way to measure a distance
between two networks. In this paper, with formalize graph distance as a combination
of _description_ and a _distance_ over this description, which encapsulates
most of the well-known measures. We then 20 of the many graph distances implemented in the [netrd package](https://github.com/netsiphd/netrd)
to compare the mean within-ensemble distances of random graph ensembles. This benchmark
allows us to build intuition for both the random graph ensembles and the
distance measures, a first step toward a characterization and a standardization
of our favorite network-comparison tools.

Work with Harrison Hartle, Brennan Klein, Stefan McCabe, Alexander Daniels,
Charles Murphy, and Laurent Hébert-Dufresne.

![wegd]({{ "/assets/posts/2020-08-07-wegd.png" | absolute_url }})




