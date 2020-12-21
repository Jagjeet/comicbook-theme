# comicbook-theme

This theme is inspired by web comics like [A Softer World](http://asofterworld.com). It is currently being developed for a web portfolio, but could easily be used for other purposes. To see the theme in action, check out [The Design and Development Adventures of Jagjeet...](https://jagjeet.github.io/).

## Installation

Add this line to your Jekyll site's `Gemfile`:

```ruby
gem "comicbook-theme"
```

And add this line to your Jekyll site's `_config.yml`:

```yaml
theme: comicbook-theme
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install comicbook-theme

## Usage

TODO: Write usage instructions here. Describe your available includes, sass and/or assets.

### Layouts

 * comics-default - This is the default comic layout. It can be used for homepages, etc as it shows the site title.
 * comics-page - This is a comic layout for pages.
 * comics-post - This is a comic layout for posts. (Note posts have not been tested at all!)
 * default - default layout
 * page - default page layout
 * post - default post layout (Note posts have not been tested at all!)

## Comics

The primary functionality of this theme is to display panels of images with comic style captions. For more concrete examples, see the comic files in `_comics`.

### Collection

All comics should be placed in the `_comics` directory.

### Structure
Comics are specified in the front matter for each item in the collection. Comics currently use Jekyll's filename based ordering.

```markdown
title: Title goes here
panels:
 - caption: Caption goes here
   image: Image link goes here
   altImageText: Alt image text goes here
   description: Optional text to be shown on hover goes here
   link: Optional link to navigate to if the user clicks the panel
 - caption: 2nd caption goes here
   image: 2nd image link goes here
   altImageText:  ...
   description:  ...
   link: ...
categories: [featured, cats]
```

### Category

Comic pages, posts, etc can optionally include a category to limit the page to only show that category. This can be down by adding `comicCategory` to the front matter. For example,

`comicCategory: featured`

limits the comics on the page to comics with the category "featured".

Categories are optional. If no comicCategory is specified, all the comics will be displayed. Each comic can belong to zero more categories.

## Analytics

Analytics can be added by adding your google measurement ID to your Jekyll site's `_config.yml`:

```ruby
google_analytics: G-XXXXXXXXXX
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/hello. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

To set up your environment to develop this theme, run `bundle install`.

Your theme is setup just like a normal Jekyll site! To test your theme, run `bundle exec jekyll serve` and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme. Add pages, documents, data, etc. like normal to test your theme's contents. As you make modifications to your theme and to your content, your site will regenerate and you should see the changes in the browser after a refresh, just like normal.

When your theme is released, only the files in `_layouts`, `_includes`, `_sass` and `assets` tracked with Git will be bundled.
To add a custom directory to your theme-gem, please edit the regexp in `comicbook-theme.gemspec` accordingly.

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

