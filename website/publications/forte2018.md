---
layout: page
title: "Applied Choreographies"
permalink: /publications/forte2018/
---

 Saverio Giallorenzo, Fabrizio Montesi, and Maurizio Gabbrielli

**Abstract**

Choreographic Programming is a paradigm for distributed programming, where
high-level "Alice and Bob" descriptions of communications (choreographies) are
used to synthesise correct-by-construction programs. However, implementations
of choreographic models use message routing technologies distant from their
related theoretical models (e.g., CCS/π channels). This drives implementers to
mediate discrepancies with the theory through undocumented, unproven
adaptations, weakening the reliability of their implementations. As a solution,
we propose the framework of Applied Choreographies (AC). In AC, programmers
write choreographies in a language that follows the standard syntax and
semantics of previous works. Then, choreographies are compiled to a real-world
execution model for Service-Oriented Computing (SOC). To manage the complexity
of this task, our compilation happens in three steps, respectively dealing
with: implementing name-based communications using the concrete mechanism found
in SOC, projecting a choreography to a set of processes, and translating
processes to a distributed implementation in terms of services.

- Link to the [Paper](/publications/AC/AC.pdf), published in International Conference Formal Techniques for Distributed Objects, Components, and Systems (FORTE), DisCoTec 2018, LNCS.
- Link to the [Technical Report](/publications/AC/AC_tr.pdf)