---
layout: page
title: Samplable Set
description: Python and C++ sets that can be sampled.
img: /assets/projects/samplable-set.png
---
<p>
  <img src="{{ site.baseurl }}/assets/projects/samplable-set.png" alt="samplable-set-logo" class="logo"/>
  <center>
  <font size="-1"><em>This logo uses an icon made by Freepik from www.flaticon.com</em></font>
  </center>
</p>

This project is about an efficient implementation of sets that can be randomly sampled according to the weights of the elements. Insertion, erase and sample of elements are constant time in average-case for all practical purposes. It makes use of the [pybind11](https://github.com/pybind/pybind11) project to bind C++ objects to python.

This family of classes is very useful when one needs to udpate dynamically (insertion, erase) a set elements, as well as sample from it. It uses a composition and rejection scheme, making it efficient even if the weights span multiples order of magnitude. For instance, this kind of situation can arise in markov chains, when a collection of independant processes have multiscale propensities.

Visit the [github repository](https://github.com/gstonge/SamplableSet) for installation instructions and further
informations.

## Usage

The package offers both a C++ and a python style interface for the class in python.

### Set creation

First to create an empty samplable set, one needs to specify the minimal (maximal) weight for elements in the set, as well as the C++ type of the elements that will be inserted in the set. An non-empty set can be instanciated from an iterable of 2 iterables or a dict containing the elements and the weights.

```python
from SamplableSet import SamplableSet

# Calling the default constructor for empty samplable set
s = SamplableSet(min_weight=1, max_weight=100, cpp_type='int')

# Calling the constructor with a dict
elements_weights = {3:33.3, 6:66.6}

s = SamplableSet(1, 100, elements_weights) # cpp_type is infered from 'elements_weights'

# Calling the constructor with an iterable of pairs (elements, weights)
elements = ['a', 'b']
weights = [33.3, 66.6]
elements_weights = zip(elements, weights)
s = SamplableSet(1, 100, elements_weights) # cpp_type is infered from 'elements_weights'
```

### Basic operations

```python
# Give preferential weights to elements
weight = 50
for element in range(1,101):
    s[element] = weight
    # Equivalent to s.insert(element, weight)

# Syntax to change the weight of an element is the same as insertion
# Set new weight:
s[element] = weight
# Equivalent to s.set_weight(element, weight)

# Get the weight of an element
weight = s[element]

# Remove the element
del s[element]
# Equivalent to s.erase(element)

# Get the number of elements in the set
len(s)
# Equivalent to s.size()

# Check if element is in the set
element in s

# Get the total weight sum
totat_weight = s.total_weight()
```

### Generator

The class is an iterable.

```python
for element, weight in s:
    pass
```

### Sampling

```python
# Sample one pair:
element, weight = s.sample()
# Or sample n pairs:
for element, weight in s.sample(n_samples=5):
    pass
# Note that if 'n_samples' is greater than one, sample(n_samples) actually returns a generator.
```

