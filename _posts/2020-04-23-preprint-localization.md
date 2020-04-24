---
layout: post
title:  "The impact of localization on epidemics"
date:   2020-04-23
category : publication
---

We know that social structures are far from the---still used way too
much---random mixing assumption.
Considering more realistic contact patterns have many consequences.
In a series of two preprints, we investigate the phenomenon of _mesoscopic
localization_ for contagion dynamics : near the epidemic threshold, the disease is mostly present within the largest (and
densest) substructures.

In the [first one](https://arxiv.org/abs/2004.10203), entitled **Master equation analysis of mesoscopic localization in contagion dynamics on higher-order networks**,
we provide a detailed analytical description of the phenomenon, with an
explicit characterization of the localization regimes.
The clique-based approximate master equations we use give us a fine-grained
description of the states of all cliques within the network, as shown below.
In the localized regime, substructures of different sizes are effectively in a
subcritical, critical and supercritical phases all at once.

![localization]({{ "/assets/posts/2020-04-23-1.png" | absolute_url }})

In the [second one](https://arxiv.org/abs/2003.05924), entitled **Social confinement and mesoscopic localization of epidemics on networks**,
we investigate the consequences of a localized dynamics when performing
_structural interventions_ on the structure, taking the form of removing
cliques higher than a certain size. This is akin to forbidding events or
gathering involving a certain number of people.

We find that for both the SIS model (analytically) and the SIR model
(with simulations), there are
increasing returns on the intervention for localized dynamics.
This behavior is very different from what we would expect in a well-mixed
population, more similar to the delocalized dynamics.

![intervention]({{ "/assets/posts/2020-04-23-2.png" | absolute_url }})


