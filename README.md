# Mustache example layouts

This repository contains some [mustache](https://mustache.github.io/) example [layouts](/layouts).

- [a4.html](/layouts/a4.html) - A simple layout for printing a4 pages with a margin and justified content.
- [email.html](/layouts/email.html) - A simple email layout with inline CSS styles based on a HTML table element.
- [pagedjs.html](/layouts/pagedjs.html) - A layout for printing paginated HTML content with page numbers.
- [pagedjs-toc.html](/layouts/pagedjs-toc.html) - A layout for printing paginated HTML content with page numbers and a table of contents. A table of contents is created for all H2 and H3 elements.

**Note:** These mustache example layouts contain a [mustache partial](https://github.com/janl/mustache.js?tab=readme-ov-file#partials) named `template`. Use this partial to provide content.

## Typesetting with CSS

Browsers provide the following CSS styles for typesetting.

- **orphans** - minimum number of lines at the bottom of a page
- **widows** - minimum number of lines at the top of a page
- **break-before: avoid-page** - avoid page break before a HTML element
- **break-after: avoid-page** - avoid page break after a HTML element
- **text-align: justify** - align text to the left and right edges of lines, except at the last line
- **hyphens: auto** - hyphenate words according to the rules for the language specified with the `lang` HTML attribute

## Paged.js

Both [pagedjs.html](/layouts/pagedjs.html) and [pagedjs-toc.html](/layouts/pagedjs-toc.html) use [paged.js](https://pagedjs.org) for paginating content. Paged.js is an open-source library to paginate HTML content for printing. This library is used to design books with HTML and CSS.

<https://github.com/pagedjs/pagedjs>\
<https://ashok-khanna.medium.com/beautiful-pdfs-from-html-9a7a3c565404>\
<https://www.adamhyde.net/some-pagedjs-info>

## Getting started

### Source code

Source code for the example layouts is provided in separate files for HTML, CSS and JavaScript. These files are combined with [web-resource-inliner](https://www.npmjs.com/package/web-resource-inliner) or [juice](https://www.npmjs.com/package/juice).

- [src/a4](/src/a4) contains source code for [a4.html](/layouts/a4.html)

- [src/email](/src/email) contains source code for [email.html](/layouts/email.html)\
  Most email clients have good support for CSS nowadays. However, inline styles and a layout based on a HTML table is still considered the best way to ensure rendering compatibility across email clients. CSS styles can be inlined with [juice](https://www.npmjs.com/package/juice).\
  _Caution: [juice](https://www.npmjs.com/package/juice) removes unused CSS styles._

- [src/pagedjs](/src/pagedjs) contains source code for [pagedjs.html](/layouts/pagedjs.html) and [pagedjs-toc.html](/layouts/pagedjs-toc.html)

**Note:** These layouts use CSS style `hyphens: auto` and HTML attribute `lang="EN"` for English hyphenation rules.

**Note 2:** Both [pagedjs.html](/layouts/pagedjs.html) and [pagedjs-toc.html](/layouts/pagedjs-toc.html) set a boolean `window.readyForPdf` to `true` when paged.js finishes rendering. Wait for this flag to be set before rendering a pdf with [Puppeteer](https://pptr.dev/) or [Playwright](https://playwright.dev/).

### Npm commands

See [package.json](/package.json) for scripts to build the mustache example layouts.

- Run `npm run build` to build layouts from source code.
- Run `npx prettier . --check` or `npx prettier . --write` to format code using prettier (an opinionated formatter).
