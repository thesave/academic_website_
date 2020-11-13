---
layout: page
title: "Constraint Programming for Flexible Service Function Chaining Deployment"
permalink: /publications/hicss2019_cp/
---

Tong Liu, Franco Callegati, Walter Cerroni, Chiara Contoli, Maurizio Gabbrielli, Saverio Giallorenzo

**Abstract**

Network Function Virtualization (NFV) and Software Defined Networking (SDN) are technologies that recently acquired a great momentum thanks to their promise of being a flexible and cost-effective solution for replacing hardware-based, vendor-dependent network middleboxes with software appliances running on general purpose hardware in the cloud. Delivering end-to-end networking services across multiple NFV/SDN network domains by implementing the so-called Service Function Chain (SFC) i.e., a sequence of Virtual Network Functions (VNF) that composes the service, is a challenging task. In this paper we address two crucial sub-problems of this task: i) the language to formalize the request of a given SFC to the network and ii) the solution of the SFC design problem, once the request is received. As for i) in our solution the request is built upon the intent-based approach, with a syntax that focuses on asking the user "what" she needs and not "how" it should be implemented, in a simple and high level language. Concerning ii) we define a formal model describing network architectures and VNF properties that is then used to solve the SFC design problem by means of Constraint Programming (CP), a programming paradigm which is often used in Artificial Intelligence applications. We argue that CP can be effectively used to address this kind of problems because it provides very expressive and flexible modelling languages which come with powerful solvers, thus providing efficient and scalable performance. We substantiate this claim by validating our tool on some typical and non trivial SFC design problems.

-   Link to the [Paper](hicss2019_cp.pdf), accepted at HICSS'19