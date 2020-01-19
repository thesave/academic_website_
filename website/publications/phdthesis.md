---
layout: page
title: "Real-World Choreographies"
permalink: /publications/phdthesis/
---

- Presented by: Saverio Giallorenzo
- Advisor: Maurizio Gabbrielli
- Co-advisor: Fabrizio Montesi

**Short Abstract**

Choreographies are a relatively new tool for designing distributed systems from a global viewpoint. Choreographic specifications are also free from deadlocks and race conditions by design. Recent theoretical results defined proper Endpoint Projection (EPP) functions to compile choreographic specifications into their single components. Since EPPs are behavioural preserving, projected systems also enjoy freedom from deadlocks and races by construction. 
 
Aim of this PhD is to formalise non-trivial features of distributed systems with choreographies and to translate our theoretical results into the practice of implemented systems. To this purpose, we provide two main contributions.
 
The first contribution tackles one of the most challenging features of distributed development: programming correct and consistent runtime updates of distributed systems. Our solution is a theoretical model of dynamic choreographies that provides a clear definition of which components and behaviours can be updated. We prove that compiled choreographic specifications are correct and consistent after any update. We also refine our theoretical model to provide a finer control over updates. On this refinement, we develop a framework for programming adaptable distributed systems.
 
The second contribution covers one of the main issues of implementing theoretical results on choreographies: formalising the compilation from choreographies to executable programs. There is a sensible departure between the present choreographic frameworks and their theoretical models because their theories abstract communications with synchronisation on names (a la CCS/π-calculus) yet they compile to Jolie programs, an executable language that uses correlation — a renown technology of Service-Oriented Computing — for message routing. Our solution is a theory of Applied Choreographies (AC) that models correlation-based message passing. We pinpoint the key theoretical problems and formalise the principles that developers should follow to obtain correct implementations. Finally, we prove our approach by defining a correct compiler from AC to the calculus behind the Jolie language.

-   Link to the [Thesis](Saverio_Giallorenzo_-_Real-World_Choreographies.pdf)
