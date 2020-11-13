---
layout: page
title: "No more, no less - A formal model for serverless computing"
permalink: /publications/coordination2019/
---

Maurizio Gabbrielli, Saverio Giallorenzo, Ivan Lanese, Fabrizio Montesi, Marco Peressotti, and Stefano Pio Zingaro

**Abstract**

Serverless computing, also known as Functions-as-a-Service, is a recent paradigm aimed at simplifying the programming of cloud applications. The idea is that developers design applications in terms of functions, which are then deployed on a cloud infrastructure. The infrastructure takes care of executing the functions whenever requested by remote clients, dealing automatically with distribution and scaling with respect to inbound traffic.
While vendors already support a variety of programming languages for serverless computing (e.g. Go, Java, Javascript, Python), as far as we know there is no reference model yet to formally reason on this paradigm. In this paper, we propose the first core formal programming model for serverless computing, which combines ideas from both the λ-calculus (for functions) and the π-calculus (for communication). To illustrate our proposal, we model a real-world serverless system. Thanks to our model, we capture limitations of current vendors and formalise possible amendments.

- Link to the [Paper](coordination2019.pdf), accepted at COORDINATION 2019.