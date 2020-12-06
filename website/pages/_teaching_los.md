<div class="my-4" markdown="1">

### Operating Systems Laboratory

<div class="text-muted">Bachelor Course - 6 ETCS</div>
<div class="text-muted">Integrated Course to the Operating Systems course taught by <a href="http://www.cs.unibo.it/~sangio/">Davide Sangiorgi</a></div>
<br>

**Slides**

<table class="table table-striped text-muted">
	<tr>
		<td> <strong>Introduction Interprocess Communication</strong> </td>
		<td> <a href="labos/slides/000_Interprocess Communication.pdf">{{ pdf_icon }} Slides</a> </td>
	</tr>
	<tr>
		<td> <strong>Introduction to Jolie</strong> </td>
		<td> <a href="labos/slides/001_Introduction.pdf">{{ pdf_icon }} Slides</a> </td>
		<td> <a href="labos/examples/hello_world.ol">Example</a> </td>
	</tr>
	<tr>
		<td> <strong>Basics - First Service and Basic Deployment</strong></td>
		<td> <a href="labos/slides/002_Basics - First Service and Basic Deployment.pdf">{{ pdf_icon }} Slides</a></td>
		<td> <a href="labos/examples/002_examples.zip">Examples</a></td>
	</tr>
	<tr>
		<td>
			<div><strong>Basic Behaviour - Types and Data Manipulation</strong></div>
			<div><strong>Basic Behaviour - Composition and Workflow</strong></div>
		</td>
		<td>
			<div><a href="labos/slides/003_Basic Behaviour - Types and Data Manipulation.pdf">{{ pdf_icon }} Slides</a></div>
			<div><a href="labos/slides/004_Basic Behaviour - Composition and Workflow.pdf">{{ pdf_icon }} Slides</a></div>
		</td>
		<td><a href="labos/examples/003_examples.zip">Examples</a></td>
	</tr>
	<tr>
		<td><strong>Advanced Behaviour - Faults and Dynamic Binding</strong></td>
		<td><a href="labos/slides/005_Advanced Behaviour - Faults and Dynamic Binding.pdf">{{ pdf_icon }} Slides</a></td>
		<td><a href="labos/examples/004_examples.zip">Examples</a></td>
	</tr>
	<tr>
		<td><strong>Advanced Deployment - Architectural Composition</strong></td>
		<td><a href="labos/slides/006_Advanced Deployment - Architectural Composition.pdf">{{ pdf_icon }} Slides</a></td>
		<td><a href="labos/examples/005_examples.zip">Examples</a></td>
	</tr>
</table>

**Projects**

<small>Unless specified differently, exams take place at <ins>Laboratorio S04 -
Dipartimento di Informatica - Scienza e Ingegneria, Mura Anteo Zamboni, 7 -
40126 Bologna ITALY</ins>.</small>

<strong>LAST</strong>

<div class="container-fuid">
	<div class="row">
		<div class="col-3">AA 2016-2017</div>
		<div class="col-9">
			<ul>
				<li><a href="labos/project/current/project.pdf">Project Description</a></li>
				<li><a href="labos/project/current/report_template.md">Report Template</a></li>			
				<li><a href="labos/project/current/groups.html">Groups Status</a></li>			
				<li>Examples:</li>
				<ul>
					<li>Example of <a href="labos/project/current/TimeoutHandling.zip">Timeout Handling</a> (client-server).</li>
					<li>Example of <a href="labos/project/current/SessionHandling.zip">Session Handling</a> (client-server).</li>			
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
			<a href="labos/project/old/1516/project.pdf">Project Description</a>, 
			<a href="labos/project/old/1516/groups.html">Groups status</a>
			---
			<em>Examples</em>:
				<a href="labos/project/old/1516/MyTimer_example.zip">MyTimer</a> example JavaService
		</td>
	</tr>
	<tr>
		<td>AA 2014-2015</td>
		<td class="small">
			<a href="labos/project/old/1415/project.pdf">Project Description</a>, 
			<a href="labos/project/old/1415/groups.html">Groups status</a>
			---
			<em>Examples</em>:
				<a href="labos/project/old/1415/file_tranfer.zip">File Transfer</a>,
				<a href="labos/project/old/1415/console_input.ol">Console Inputs</a>
		</td>
	</tr>
</table>

**FAQs**

<span style="cursor: pointer;" data-target="#missingClass" onclick="toggleTriangle( $( this ) );" >
<span class="fas fa-lg fa-angle-right"></span>
	I installed Jolie with the installer but when I launch <code>jolie</code> I get the message <mark>"Error: Could not find or load main class jolie.Jolie"</mark>.
</span>

<div class="card card-default collapse" id="missingClass">
	<div class="card-body small">

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

<span style="cursor: pointer;" data-target="#elCapitan" onclick="toggleTriangle( $( this ) );" >
<span class="fas fa-lg fa-angle-right"></span>
	I get <mark>"command not found"</mark> after I installed Jolie under MacOs X El Capitan (10.10.11).
</span>

<div class="card card-default collapse" id="elCapitan">
	<div class="card-body small">

		In MacOs X El Capitan (10.10.11) it is not possible to install Jolie using the default values provided by the installer. When prompted by the installer, insert e.g., <code>/usr/local/lib/jolie</code> as the directory of installation of Jolie and <code>/usr/local/bin</code> as the directory of the launchers.

	</div>
</div>

</div>