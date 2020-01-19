---
layout: page
title: Thesis/Research Ideas
permalink: /ideas/
---

Here you can find a list (indexed below) of ideas/topics we (the Jolie team)
had for master/bachelor thesis and research projects.

- [A Comprehensive Testing Framework](#a-comprehensive-testing-framework) <span class="label label-primary">Work in Progress</span> 
- [Pluggable Monitors](#pluggable-monitorsloggers) <span class="label label-primary">Work in Progress</span> 
- [Namespaces in Jolie](#namespaces-in-jolie)
- [Jolie Code Formatter](#jolie-code-formatter) <span class="label label-primary">Work in Progress</span> 
- [Automatic Microservice Architecture Deployment](#automatic-microservice-architecture-deployment) <span class="label label-primary">Work in Progress</span> 
- [Jolie Package Manager](#jolie-package-manager) <span class="label label-primary">Work in Progress</span>
- [SODEP+ for lightweight and precise flow tracking](#sodep-for-better-logging-and-flow-tracking)
- [Jolie.js](#joliejs)
- [Liquid APIs](#liquid-apis) <span class="label label-primary">Work in Progress</span>
- [Microservices and Reactive Programming](#microservices-and-reactive-programming)
- [Microservices, Containers, and Big Data](#jolie-microservices-containers-and-big-data) <span class="label label-primary">Work in Progress</span>
- [Choreographies, Containers, and Big Data](#choreographies-container-and-big-data)
- [AWS Lambdas/Serverless, Jolie, and Choreographies](#aws-lambda-jolie-and-choreographies) <span class="label label-primary">Work in Progress</span>
- [Hybrid Microservice-Serverless Architecture](#hybrid-microservice-serverless-architecture) <span class="label label-default">New</span>
- [Moving Jolie processes between Cloud Nodes](#a-step-forward-moving-jolie-processes-between-nodes) 
- [Strong Mobility in Choreographies](#a-further-step-forward-strong-mobility-in-choreographies)

Above, the label <span class="label label-primary">Work in Progress</span> means some students are undertaking or already did some work on the subject. This means that new proponents may be asked to coordinate their work. 

If you are interested in working on these or other topics regarding **Jolie**
and **Choreographies** feel free to contact me at saverio.giallorenzo[at]gmail.com.

---

### A Comprehensive Testing Framework

The distributed nature of microservice architectures makes difficult to create and automatise test suites for a given architecture. Nonetheless, testing is a fundamental part of the validation phase in [Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration) processes. It's telling that one of the main tool developed by Netflix to assess the reliability and performance of their system is a testing framework called the [Simian Army](https://github.com/Netflix/SimianArmy). 

The idea here is to develop a testing framework for Jolie microservices that
encompass the development of a whole architecture, starting from its basic
components. Prospecting projects fall under the categorisation below

<style>.table>tbody>tr>td{vertical-align:middle;}</style>
<table class="table">
  <thead>
    <tr>
      <th></th>
      <th scope="col">Static Testing</th>
      <th scope="col">Dynamic Testing</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Unit Testing</th>
      <td>Tests a single microservice. Ranges from highlighting possible coding errors to checking/applying formatting templates.</td>
      <td>Tests (likely) written by the same developer of the microservice. Focusses on the functional correctness of the microservice in isolation.</td>
    </tr>
    <tr>
      <th scope="row">Integration Testing</th>
      <td rowspan="2">Tests the interactions between unit programs, looking for incompatibles among interfaces, deployment/bindings, interaction protocols.</td>
      <td>Tests combined individual units as a group to expose faults in the interaction and benchmark performance.
      </td>
    </tr>
    <tr>
      <th scope="row">System-Integration Testing</th>
      <td>Tests the complete system with the components in production. Tests must consider the interaction exposed to the final users.
      </td>
    </tr>
  </tbody>
</table>

The Jolie interpreter already implements syntactic and semantic static checks at unit level. An interesting project on static analysis, towards integration/system-integration testing, is to consider the definition of session/global/behavioural types for Jolie programs and use those to enforce compliance among microservice architectures.

From the dynamic perspective, [JoUnit](https://github.com/jolie/jounit) is a unit testing framework for Jolie microservices, suited to be integrated in modern development environments where code versioning (git) and containers (Docker) are used to respectively manage code updates and deployment. Projects on dynamic testing can build on the JoUnit framework, extending it to cover integration and system-integration testing.

---

### Pluggable monitors/loggers

Jolie has in-built logging and monitoring features but right now they are
redirected to the standard output. On the contrary, developers and system
administrators may need to redirect logged events to different repositories.
The motivations are various: to collect aggregated data, to centralise
monitoring, to preserve logs in a tractable format for bug investigation and
troubleshooting. This means that Jolie should be able to redirect logged
events in a modular way, e.g., in files (csv, xml, json, etc.), databases,
streams towards centralised loggers, etc..

The Jolie interpreter already equips a modularised event-based architecture
for logging, but lacks the feature to redirect logs to specific repositories.

A possible work on this topic can investigate the integration of Jolie tracing facilities with tracing platforms like [opentracing](http://opentracing.io/).

A work in this direction would <em>i</em>) analyse how companies that adopted
a microservices architecture [[1](http://techblog.netflix.com/2015/02/a
-microscope-on-microservices.html),[2](https://www.nginx.com/blog/adopting-
microservices-at-netflix-lessons-for-team-and-process-
design/),[3](https://www.nginx.com/blog/microservices-at-netflix-
architectural-best-practices/)] tackled the problem of logging, <em>ii</em>)
plan an intervention on the Jolie interpreter to enable pluggable loggers, and
<em>iii</em>) implement the planned solution.

The final result of the work would add a new command for the Jolie interpreter
to plug different logging repositories (logging services) that implement the
same logging interface, e.g., issuable with the command <code>jolie
myService.ol --monitor monitorAddress</code> where <code>monitorAddress</code>
can be any [location](http://docs.jolie-
lang.org/#!documentation/locations/introduction.html) supported by Jolie. Then
it suffices that the service at location <code>monitorAddress</code>
implements the standard Jolie monitoring/logging interface to be able to
receive logging events and proceed to process them.

Currently, we have a beta [Jolie version](https://github.com/VincenzoMattarella/jolie) that produces JSON traces and [Jtracer](https://github.com/VincenzoMattarella/jtracer), a Jolie program that parses JSON-formatted Jolie trances and allows the user to visualise multiple traces in the same view.

---

### Namespaces in Jolie 

Currently Jolie has no explicit namespacing for types, interfaces, etc..
As an example consider the code

<kbd>Program1.ol</kbd> : ```
type MyType: void { 
  .username: string
  .password: string
}```

<kbd>Program2.ol</kbd> : ```
import "Program1.ol"
type MyType: void {
  .username: string
}
```

Where <kbd>Program2</kbd> overwrites type `MyType` defined in <kbd>Program2</kbd>. To avoid these unwanted occurrences, called [name collisions](https://en.wikipedia.org/wiki/Name_collision), programming languages provide some namespacing mechanism, e.g. names and packages (java.util.Data) in Java.

The goal is to define a namespacing policy for the Jolie language, investigating which parts of a Jolie program would be affected by the addition of namespaces. The final aim is to implement a new primitive --- e.g., `include Program1 as User` --- in the language for specifying which elements of a Jolie program belong to distinct namespaces and to access them avoiding collisions --- e.g., `User.MyType` to refer to type `MyType` of <kbd>Program1</kbd>.

---

### Jolie Code Formatter

Along with comments, standard, consistent code formatting is one of the main factors in program comprehension. However, following code-formatting practices while programming can greatly hinder productivity, as it shifts the focus of the programmer from reasoning on the logic of its program to taking care of strictly following formatting rules. In practice, manually reformatting code
is just not an option. This is the reason why many modern programming environments rely on code formatters, i.e., a software component that automatically applies code formatting rules on code sources.

Currently we are developing the [Jolie formatter](https://github.com/jolie/jolie/tree/jofmt) as a component of the Jolie interpreter. Projects on this topic range from extending the formatter to handle all the constructs of the language to developing more advanced features like supporting customised formatting templates and the enforcement of good code practices.

---

### Automatic Microservice Architecture Deployment

Microservices and containers (e.g., Docker) are staple elements of any modern distributed architecture. Their frequent combination comes from the fact that they both deal with two desired properties of distributed systems: development/execution independence and ease of scaling. However, this flexibility comes at the price of additional complexity at deployment time: given an architecture of microservices, these must be included into their related containers and those containers must be run and bound so that the contained microservices can communicate with each other. Essentially, this corresponds to reconstructing the desired topology of the architecture.

While this task is frequently handled manually, it is a time-consuming and error-prone activity where the administrator of the architecture must go back and forth between launching some containers, binding their addresses, opening their ports, etc. On the contrary, all these tasks can be automatised.

[JoArch](https://github.com/thesave/JoArch) is a prototypical framework that supports the definition of an architecture as a set of microservices and their respective, logical connections. Then, given one such definition, JoArch deploys each containerised microservice in its designated execution node, binding the containers as specified in the architecture definition.

New projects can investigate how to enrich JoArch so that, given an architecture, users can easily include staple components of microservice architectures such as loggers, load balancers, etc. without including such dependencies directly in the code of their microservices. 

### Jolie Package Manager

Like any modern programming language Jolie needs a [package management
system](https://en.wikipedia.org/wiki/Package_manager) like
[Gems](https://en.wikipedia.org/wiki/RubyGems) for Ruby,
[Pip](https://en.wikipedia.org/wiki/Pip_(package_manager)) for Python or
[NPM](https://en.wikipedia.org/wiki/Npm_(software)) for Node.js.

Jolie already has an experimental implementation of a package manager, called
[JPM](https://github.com/jolie/jpm) composed of a server that acts as
repository of packages and a client to search, install, list, and update
packages.

Still, the project needs to evolve to become usable and easy to integrate
after a standard Jolie installation.

Working on this project would entail <em>i</em>) analysing the basic features
of other package managers and package management environments (provision,
versioning, dependency resolution, etc.), <em>ii</em>) make a plan of
intervention to add some desirable feature to JPM and <em>iii</em>) implement
the planned features in the JPM project.

---

### Sodep+ for better logging and flow tracking

The more a network of services grows, the more difficult it becomes to track
the flow of interactions and, above all, to understand what generated bad
behaviours (crashes, resource overuse, etc.).

Having unique identifiers for each transaction (each communication, i.e., each
one-way or request-response) in the network would immensely ease tracing such
behaviours.

A work in this direction would be divided into two parts: the first is an
analysis of other solutions already adopted to implement uncoordinated, fast,
and lightweight (in terms of computation) generators for hundreds or thousands
of globally unique IDs per second. For instance, a similar problem [has been
faced (and solved with the Snowflake approach)](https://blog.twitter.com/2010
/announcing-snowflake) by Twitter when it had to scale their tweets storage
architecture from big database instances to uncoordinated and distributed
databases.

The second part would devise a solution based on the analysis in the first
part of the work. Finally the solution would be implemented as a new version
of [SODEP](http://docs.jolie-lang.org/#!documentation/protocols/sodep.html),
called <em>SODEP+</em> that associates to each operation a unique operation
identifier (OID).

---

### Jolie.js

Jolie provides several abstractions to handle communication and concurrency.
It would be interesting to explore how these primitives can give a better
control over asynchronous calls, concurrency, and architectural composition
(e.g., [web workers](http://en.wikipedia.org/wiki/Web_worker) as embedded
services) in the development of client-side applications.

Possible thesis/research directions:

- a theoretical work on comparing an event-based model of JS with that of
  Jolie. The final goal is to give a sound and complete encoding from the
  theoretical model of the Jolie language
  [[7](http://www.fabriziomontesi.com/files/mc11.pdf)] to an event-based
  calculus resembling that of JS;
- building a compiler from Jolie to server-side
  ([node.js](https://nodejs.org/), [io.js](https://iojs.org/en/index.html))
  and/or client-side JS;
- building a Jolie interpreter in Javascript (possibly reusing the existing
  code-base of the Jolie interpreter, à la [Scala.js](http://www.scala-
  js.org/))

---

### Liquid APIs

Following the approach presented in [Towards a Composition-Based APIaaS
Layer](http://cs.unibo.it/~sgiallor/publications/APIaaS/), analysing how Jolie
interfaces relate to API definition languages like
[Swagger](http://swagger.io/), [RAML](http://raml.org/),
[blueprint](https://apiblueprint.org/), etc.

This can both follow a more theoretically-oriented path, on the expressiveness
of Jolie interfaces with respect to other solutions, but also applied work on
e.g., a tool to translate API definitions into Jolie interfaces and vice
versa. This would be a cornerstone for other tools spanning e.g., from [SDK
generators](https://github.com/swagger-api/swagger-codegen) to [easy-to-read
API specifications](http://petstore.swagger.io/).

An example of integration between Jolie interfaces and REST ones, is Jolie2Rest within the [Jester](https://github.com/jolie/jester) project (a Jolie rEST routER). Jolie2Rest automatise the creation of *i)* proper configuration files to publish existing Jolie microservices as REST APIs and *ii)* a Swagger interface documenting all the API published in the router.

---

### Microservices and Reactive Programming

[Reactive Programming](http://en.wikipedia.org/wiki/Reactive_programming) is a
programming paradigm focussed on data-flows and propagation of changes.

An interesting topic is to investigate how reactive programming, and in
particular [functional reactive
programming](http://en.wikipedia.org/wiki/Functional_reactive_programming),
relate to Service-Oriented Programming and Microservices. Look
[here](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754) for a semi-serious
(yet remarkable) introduction to functional reactive programming.

---

### Jolie microservices, containers, and big data

Data are growing exponentially. Moving them around results in a huge loss of
efficiency (in bandwidth and time).

Paraphrasing Francis Bacon,

> if the data will not come to the computation, the computation will go to the
> data

Instead of moving data, we can use [containers](http://en.wikipedia.org/wiki
/Operating-system-level_virtualization) (e.g.,
[Docker](https://www.docker.com/)) to deploy a sandboxed Jolie-enabled
environment where the data reside. Then a set of Jolie microservices can read
the data, do the necessary computation, and return the result. It is also easy
to make different instances of the same container work together to coordinate
the computation over different yet dependent sets of data.

Services in Jolie are highly mobile. It is very easy to change how services
are "glued" together by changing the medium they communicate on and/or the
format of their communication.

A project in this direction would:

- explore how containers and microservices interact with each other. E.g., we
  want to launch a task that returns some aggregate data. To do that, we write
  an orchestrator that "knows" *i*) the location of the data repositories and
  *ii*) the algorithms needed to manipulate the data and produce the result.
  When launched, the orchestrator deploys in each location a container with
  the services that handle the data and waits for them to finish their
  computation, receive the (partial) results and elaborate the (global)
  solution;

- containers also allow services to migrate and replicate from a computational
  platform to another. On this direction, we can investigate how Jolie
  services can be stopped and resumed and how this can fit into dynamic plans
  for load-balancing, [DMZs](https://en.wikipedia.org/wiki/DMZ_(computing)), etc.

The [Jocker](https://github.com/jolie/jocker) (Jolie Docker orchestrator) project is a first step towards the integration of Jolie microservices with containers. Jocker maps the Docker APIs within Jolie, so that Jolie microservices can control Docker to deploy, move, scale, and, more in general, orchestrate a fleet of containerised microservices. 

---

### Choreographies, container, and big data

Choreographies give a general overlook on the interaction in a distributed
system. A project in this direction can explore the concept of **choreographic
deployment**. Some of the questions to answer are:

- Can choreographies ease the specification of container deployment?
- Can choreographies specify how the services in a container interact with
  each other (within the same container and with services of other
  containers)?
- What guarantees can we give on top of choreographic deployment
  specifications? E.g., static check on the typing of the interaction,
  inferring properties for checking correctness at runtime through monitoring.

---

### AWS Lambda, Jolie, and Choreographies

One of the latest and most interesting services of Amazon Web Services is AWS
Lambda. In a few words, AWS Lambda introduces the serverless architecture. In
practice, with AWS Lambda the administrator deploys an application as a set of
loosely coupled functionalities, each in its own container, without setting up
a platform --- a server --- that is always on to run it.

AWS Lambda has tree main benefits with respect to traditional server-based
configurations: *i*) *pay-per-use pricing*, because Amazon charges only when
Lambda functions are run and *ii*) containers of Lambdas *automatically scale*
when called concurrently and thus there is no need to plan scaling/managing
policies.

AWS Lambda promises a new, agile, and cost-effective way of building
application, yet it requires tools and techniques to harness the [complexity
of developing highly-distributed
applications](http://searchaws.techtarget.com/tip/Tricks-to-dodge-common-AWS-
Lambda-problems). [Serverless](https://github.com/serverless/serverless) is an
example of development framework that provides structure and enforces best
practices for the development of AWS Lambda applications.

A very interesting research direction would be to investigate how Jolie and/or
Choreographies can be used to give structure and avoid errors when programming
AWS Lambdas.

---

### Hybrid Microservice-Serverless Architecture

Explore which problems and structural/interaction patterns better fit within a  microservice architecture and, (contrarily?) which better fit within a Serveless architecture. A brief example of this review could be: if I need to model the state of a session of a user, I need microservices because of the continuous access/synchronisation over many programs involved in the same session; contrarily, if I need to filter email messages, I can separately analyse protocol headers, text, links, and possible included files, I merge all the results processed in parallel to feed an anti-spam filter, hence, serverless seems more fitting for bursting, cascading, filtering processes.

Next, the work on this subject can build on the previous, empirical review to model a tool (language/framework) where programmers specify the interactions in the architecture they have in mind, then the tool analyses the patterns extracted from the specification and synthesises the programs following the architectural style that best fits the specification. Besides the best-fitting approach, the tool has two main advantages. First, it automatises reasoning and decision-making on architectural patterns, which would otherwise require developers to have a deep knowledge and experience on both styles of architectures. Second, it lowers economic barriers to enter the microservice/serverless market, helping developers in implementing the desired system, synthesising the programs (or at least their skeletal structure) following the selected style and related best practices. 

Finally, on the contributions above, the tool can be evolved to
automatically cluster the programs in the specification of the developers
into sub-architectures, following the best-fitting analysis presented above. In this way, the final system synthesised by the tool is an optimised, hybrid architecture where serverless programs and microservices interact.

---


### A step forward: moving Jolie processes between nodes

Starting processes in different nodes of a network is a desirable feature for
resource management (wrt the previous paragraphs, to save bandwidth, load-
balancing, etc.). In literature
[[4](http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=685258)], the
ability to launch new processes (computations) is called *weak mobility*. In
languages/frameworks that support to weak mobility, a process can move (send)
some executable code to a location. At reception, the code is executed by
either the receiving process, which dynamically integrates it, or by a new
thread/process, created on received code. *Strong mobility* builds on weak
mobility by allowing processes to migrate in the network: the code moves along
the state of the running processes, which, at reception, can resume their
computation.

Some work has been already done on Jolie to support weak mobility [[5](http://
www.fabriziomontesi.com/files/lbm10.pdf),[6](http://www.cs.unibo.it/projects/j
olie/aiocj.html)] but supporting stop, move, and resume operations on running
processes is an almost unexplored thread of research.

This topic is very open and spans from *i*) enhancing the Jolie interpreter
with the primitives need to support strong mobility, to *ii*) implementing
frameworks that support strong mobility in Jolie, to *iii*) studying the
theoretical implications of supporting strong mobility in the calculus behind
the Jolie language [[7](http://www.fabriziomontesi.com/files/mc11.pdf)].

---

### A (further) step forward: strong mobility in Choreographies

This topic builds on the previous one. How can we support strong mobility in
choreographies? What properties can we guarantee on processes that move in a
choreography? This is a bleeding-edge research topic and requires a good
grasping on the theoretical model behind choreographies
[[8](http://www.fabriziomontesi.com/files/cm13.pdf)].