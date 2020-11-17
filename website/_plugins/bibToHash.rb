# _plugins/url_encode.rb
require 'liquid'
require 'bibtex'
require 'citeproc'
require 'csl/styles'

module BibtexUtils
  def bibTitle( bibitem )
    b = BibTeX.parse( bibitem ).convert(:latex)
    # cp = CiteProc::Processor.new style: 'chicago-fullnote-bibliography', format: 'text'
    cp = CiteProc::Processor.new style: 'apa-6th-edition', format: 'text'
    b[0].title="<span class=\"paper-title\">#{b[0].title}</span>"
    b[0].delete("doi")
    cp.import b.to_citeproc
    cp.bibliography().references
  end
end

Liquid::Template.register_filter(BibtexUtils)