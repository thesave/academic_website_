# _plugins/url_encode.rb
require 'liquid'
require 'bibtex'
require 'citeproc'
require 'csl/styles'

module BibtexUtils
  def bibTitle( bibitem )
    cachefile = "_cache/papers"
    digest = Digest::MD5.hexdigest bibitem
    cache = Hash.new
    if File.exists?( cachefile )
      begin
        File.open( cachefile, "r" ) { | f | cache = Marshal.load( f ) }
      rescue
        File.delete( cachefile )
        cache = Hash.new
      end
    end
    if( cache[ digest ].nil? )
      b = BibTeX.parse( bibitem ).convert(:latex)
      # cp = CiteProc::Processor.new style: 'chicago-fullnote-bibliography', format: 'text'
      cp = CiteProc::Processor.new style: 'apa-6th-edition', format: 'text'
      b[0].title="<span class=\"paper-title\">#{b[0].title}</span>"
      b[0].delete("doi")
      cp.import b.to_citeproc
      cache[ digest ] = cp.bibliography().references
      File.open( cachefile, "w+" ) { | f | Marshal.dump( cache, f ) }
    end
    cache[ digest ]
  end
end

Liquid::Template.register_filter(BibtexUtils)