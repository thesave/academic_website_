---
layout: page
title: Dynamic Choreographies - Safe Runtime Updates of Distributed Applications
permalink: /publications/dioc/
---

*Mila Dalla Preda, Maurizio Gabbrielli, Saverio Giallorenzo, Ivan Lanese, Jacopo Mauro*

**Abstract**

Programming distributed applications free from communication deadlocks and
races is complex. Preserving these properties when applications are updated at
runtime is even harder.

We present DIOC, a language for programming distributed applications that are
free from deadlocks and races by construction. A DIOC program describes a
whole distributed application as a unique entity (choreography). DIOC allows
the programmer to specify which parts of the application can be updated. At
runtime, these parts may be replaced by new DIOC fragments from outside the
application. DIOC programs are compiled, generating code for each site, in a
lower-level language called DPOC. We formalise both DIOC and DPOC semantics as
labelled transition systems and prove the correctness of the compilation as a
trace equivalence result. As corollaries, DPOC applications are free from
communication deadlocks and races, even in presence of runtime updates.


-   Link to the [paper](dioc.pdf), accepted at Coordination'15.
-   Link to the [technical report](dioc_tr.pdf).

