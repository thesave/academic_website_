require 'bibtex'
require 'citeproc'
require 'csl/styles'

b = BibTeX.parse <<-END
@inproceedings{DBLP:conf/sle/PredaGLMG14,
  author    = {Mila Dalla Preda and
               Saverio Giallorenzo and
               Ivan Lanese and
               Jacopo Mauro and
               Maurizio Gabbrielli},
  title     = {{AIOCJ:} {A} Choreographic Framework for Safe Adaptive Distributed
               Applications},
  booktitle = {Software Language Engineering - 7th International Conference, {SLE}
               2014, V{\"{a}}ster{\aa}s, Sweden, September 15-16, 2014. Proceedings},
  pages     = {161--170},
  year      = {2014},
  publisher = {Springer},
  series    = {Lecture Notes in Computer Science},
  volume    = {8706},
}
END
b.convert(:latex)
cp = CiteProc::Processor.new style: 'apa-6th-edition', format: 'text'
cp.import b.to_citeproc
puts cp.bibliography().references
# puts CSL::Style.ls