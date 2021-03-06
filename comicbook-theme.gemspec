# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "comicbook-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["Jagjeet Khalsa"]
  spec.email         = ["Jagjeet.Khalsa@gmail.com"]

  spec.summary       = "A comicbook style theme for Jekyll."
  spec.homepage      = "https://www.github.com/comicbook-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.9.0"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.5.0"

  spec.add_development_dependency "bundler", ">= 2.2.2"
  spec.add_development_dependency "rake", "~> 12.0"
end
