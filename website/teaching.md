---
layout: page
title: Teaching
permalink: /teaching/
---

## Seminars

Seminar on Microservice Security Concepts for the [Cybersecurity Summer School 2019](https://www.tilmeld.dk/cybersommerskole), KEA Institute, Copenhagen, DK | 
[Slides]({{url}}/teaching/seminars/cybersec2019/microservice_security_concepts.pdf)

Seminar on Jolie for the [Bertinoro International Spring School 2016](https://cs.unibo.it/projects/biss2016/), University Residential Center, Bertinoro, IT | 
[Slides]({{url}}/teaching/seminars/biss2016/a_gentle_introduction_to_Jolie.pdf) | 
[Examples]({{url}}/teaching/seminars/biss2016/examples.zip)

Seminar on from Service-Oriented Computing to Microservices and Beyond for the [Programming Languages](http://unibo.it/en/teaching/course-unit-catalogue/course-unit/2016/320579) course, University of Bologna, Bologna, IT | 
[Slides]({{url}}/teaching/seminars/lp2016/SOC+Microservices.pdf)

---

### Active Courses

---

### Past Courses

#### Advanced Topics in Concurrent Systems

<div class="text-muted">Master Course - 10 ETCS</div>
<div class="text-muted">Co-taught with <a href="https://marcoperessotti.com">Marco Peressotti</a></div>
<br>

See the [course description](http://odinlister.sdu.dk/fagbesk/internkode/DM869/en) on the SDU website.

Teaching material, exercises, and assignments are available at the [repository](https://github.com/mperessotti/acs2019) dedicated to the course.

#### Operating Systems Laboratory

<div class="text-muted">Bachelor Course - 6 ETCS</div>
<div class="text-muted">Integrated Course to the Operating Systems course taught by <a href="http://www.cs.unibo.it/~sangio/">Davide Sangiorgi</a></div>
<br>

**Slides**

<table class="table table-striped">
	<tr>
		<td> <strong>Introduction Interprocess Communication</strong> </td>
		<td> <a href="slides/000_Interprocess Communication.pdf">Slides</a> </td>
	</tr>
	<tr>
		<td> <strong>Introduction to Jolie</strong> </td>
		<td> <a href="slides/001_Introduction.pdf">Slides</a> </td>
		<td> <a href="examples/hello_world.ol">Example</a> </td>
	</tr>
	<tr>
		<td> <strong>Basics - First Service and Basic Deployment</strong></td>
		<td> <a href="slides/002_Basics - First Service and Basic Deployment.pdf">Slides</a></td>
		<td> <a href="examples/002_examples.zip">Examples</a></td>
	</tr>
	<tr>
		<td>
			<div><strong>Basic Behaviour - Types and Data Manipulation</strong></div>
			<div><strong>Basic Behaviour - Composition and Workflow</strong></div>
		</td>
		<td>
			<div><a href="slides/003_Basic Behaviour - Types and Data Manipulation.pdf">Slides</a></div>
			<div><a href="slides/004_Basic Behaviour - Composition and Workflow.pdf">Slides</a></div>
		</td>
		<td><a href="examples/003_examples.zip">Examples</a></td>
	</tr>
	<tr>
		<td><strong>Advanced Behaviour - Faults and Dynamic Binding</strong></td>
		<td><a href="slides/005_Advanced Behaviour - Faults and Dynamic Binding.pdf">Slides</a></td>
		<td><a href="examples/004_examples.zip">Examples</a></td>
	</tr>
	<tr>
		<td><strong>Advanced Deployment - Architectural Composition</strong></td>
		<td><a href="slides/006_Advanced Deployment - Architectural Composition.pdf">Slides</a></td>
		<td><a href="examples/005_examples.zip">Examples</a></td>
	</tr>
</table>

**Projects**

<small>Unless specified differently, exams take place at <ins>Laboratorio S04 -
Dipartimento di Informatica - Scienza e Ingegneria, Mura Anteo Zamboni, 7 -
40126 Bologna ITALY</ins>.</small>

<strong>LAST</strong>

<div class="container-fuid">
	<div class="row">
		<div class="col-xs-3">AA 2016-2017</div>
		<div class="col-xs-9">
			<ul>
				<li><a href="project/current/project.pdf">Project Description</a></li>
				<li><a href="project/current/report_template.md">Report Template</a></li>			
				<li><a href="project/current/groups.html">Groups Status</a></li>			
				<li>Examples:</li>
				<ul>
					<li>Example of <a href="project/current/TimeoutHandling.zip">Timeout Handling</a> (client-server).</li>
					<li>Example of <a href="project/current/SessionHandling.zip">Session Handling</a> (client-server).</li>			
				</ul>
			</ul>
		</div>
	</div>
</div>

<strong>PREVIOUS</strong>

<table class="table stable-striped">
	<tr>
		<td>AA 2015-2016</td>
		<td class="small">
			<a href="project/old/1516/project.pdf">Project Description</a>, 
			<a href="project/old/1516/groups.html">Groups status</a>
			---
			<em>Examples</em>:
				<a href="project/old/1516/MyTimer_example.zip">MyTimer</a> example JavaService
		</td>
	</tr>
	<tr>
		<td>AA 2014-2015</td>
		<td class="small">
			<a href="project/old/1415/project.pdf">Project Description</a>, 
			<a href="project/old/1415/groups.html">Groups status</a>
			---
			<em>Examples</em>:
				<a href="project/old/1415/file_tranfer.zip">File Tranfer</a>,
				<a href="project/old/1415/console_input.ol">Console Inputs</a>
		</td>
	</tr>
</table>

**FAQs**

<span data-target="#missingClass" onclick="toggleTriangle( $( this ) );" ><span class="glyphicon glyphicon-triangle-right"></span>
	I installed Jolie with the installer but when I launch <code>jolie</code> I get the message <mark>"Error: Could not find or load main class jolie.Jolie"</mark>.
</span>

<div class="panel panel-default collapse" id="missingClass">
	<div class="panel-body small">

	<p>Did you launch the installer with the 
	<a href="#" data-toggle="tooltip" title="" data-original-title="sudo for OSX/Linux, administrator in Windows."><strong>right permissions</strong></a>? If yes, proceed.</p>

	<p>The launchers deployed by the installer use the environment variable <code>JOLIE_HOME</code> to set the classpath and launch Jolie. 
	As reported by the installer at the end of the installation:</p>
	<p><code>Please, open a new shell and execute the command below:</code></p>
	<p><code>echo 'export JOLIE_HOME="/usr/lib/jolie"' >> ~/.bash_profile</code></p>
	
	<p>Close the shell and open it again (or <a href="http://en.wikipedia.org/wiki/Source_%28command%29">source</a> <code>~/.bash_profile</code>) before trying to launch the Jolie interpreter.</p>

	<p><strong>Attention</strong>: in case you are still getting the message <mark>"Error: Could not find or load main class jolie.Jolie"</mark>, it could be the case your shell is not sourcing file `.bash_profile`. To fix it, edit your <code>~/.bashrc</code> file by appending the line <code>source .bash_profile</code>.</p>
	</div>
</div>

<span data-target="#elCapitan" onclick="toggleTriangle( $( this ) );" ><span class="glyphicon glyphicon-triangle-right"></span>
	I get <mark>"command not found"</mark> after I installed Jolie under MacOs X El Capitan (10.10.11).
</span>

<div class="panel panel-default collapse" id="elCapitan">
	<div class="panel-body small">

		In MacOs X El Capitan (10.10.11) it is not possible to install Jolie using the default values provided by the installer. When prompted by the installer, insert e.g., <code>/usr/local/lib/jolie</code> as the directory of installation of Jolie and <code>/usr/local/bin</code> as the directory of the launchers.

	</div>
</div>

<br>

#### Introduction to Computer Science - Geological Sciences
<div class="text-muted">Bachelor Course - 6 ETCS</div>
<div class="text-muted">Teaching Assistant for <a href="http://www.cs.unibo.it/~sferrett/">Stefano Ferretti</a></div>
<br>

**Slides** (in Italian)

<table class="table table-striped">
	<tr>
		<td> <strong>Introduction Database Systems</strong>*</td>
		<td> <a href="slides_geo/05_db.pdf">Slides</a> </td>
	</tr>
	<tr>
		<td> <strong>Exercises on Database Systems</strong>*</td>
		<td> <a href="slides_geo/06_db_ex.pdf">Slides</a> </td>
	</tr>
	<tr>
		<td> <strong>Analysis of data in tabular formats (spreadsheets)</strong>*</td>
		<td> <a href="slides_geo/07_calc.pdf">Slides</a></td>
	</tr>
	<tr>
		<td><strong>Operating Systems, Virtualisation Technologies, and Cloud Computing</strong></td>
		<td><a href="slides_geo/08_cc.pdf">Slides</a></td>
	</tr>
</table>
*Adapted from material by Stefano Ferretti.