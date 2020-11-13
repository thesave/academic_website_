---
layout: page
title: "Linguistic Abstractions for Interoperability of IoT Platforms"
permalink: /publications/lnbip2019/
---

Maurizio Gabbrielli, Saverio Giallorenzo, Ivan Lanese, and Stefano Pio Zingaro

**Abstract**

The Internet of Things (IoT) advocates for multi-layered platforms—from edge devices to Cloud nodes—where each layer adopts its own communication standards (media and data formats). While this freedom is optimal for in-layer communication, it puzzles cross-layer integration due to incompatibilities among standards. Also enforcing a unique communication stack within the same IoT platform is not a solution, as it leads to the current phenomenon of "IoT islands", where disparate platforms hardly interact with each other. In this paper we tackle the problem of IoT cross-layer and cross-platform integration fol- lowing a language-based approach. We build on the Jolie programming language, which provides uniform linguistic abstractions to exploit heterogeneous communication stacks, allowing the programmer to specify in a declarative way the desired stack, and to easily change it, even at runtime. Jolie currently supports the main technologies from Service-Oriented Computing, such as TCP/IP, Bluetooth, and RMI at transport level, and HTTP and SOAP at application level. We integrate in Jolie the two most adopted protocols for IoT communication, i.e., CoAP and MQTT. We report our experience on a case study on Cloud-based home automation, and we present high-level concepts valuable both for the general implementation of interoperable systems and for the development of other language-based solutions.

- Link to the [Paper](lnbip2019.pdf), accepted at Lecture Notes in Business Information Processing.