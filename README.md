# Mustache example layouts

Templates can often reuse styling. It can be practical to have some reusable layouts to prevent repetitive work. This repository contains some [mustache](https://mustache.github.io/) example layouts following the mustache template syntax.

- [a4.html](/layouts/a4.html) - A simple layout for printing a4 pages with a margin and justified content.
- [email.html](/layouts/email.html) - A simple email layout with inline CSS styles based on a HTML table element.
- [pagedjs.html](/layouts/pagedjs.html) - A layout for printing paginated HTML content with page numbers.
- [pagedjs-toc.html](/layouts/pagedjs-toc.html) - A layout for printing paginated HTML content with page numbers and a table of contents. A table of contents is created for all H2 and H3 elements.

Both _pagedjs.html_ and _pagedjs-toc.html_ use [paged.js](https://pagedjs.org) to paginate content.

**Note:** These example layouts contain a [mustache partial](https://github.com/janl/mustache.js?tab=readme-ov-file#partials) named `template`. Use this partial to provide content.

**Note 2:** The example layouts use CSS style `hyphens: auto` and HTML attribute `lang="EN"` for English hyphenation rules.

**Note 3:** Both _pagedjs.html_ and _pagedjs-toc.html_ set a boolean `window.readyForPdf` to `true` when paged.js finishes rendering. Wait for this flag to be set before rendering a pdf with [Puppeteer](https://pptr.dev/) or [Playwright](https://playwright.dev/).

_Visit https://grumptech.github.io/templates for more information and related projects on PDF generation with open source libraries._

## Getting started

### Npm commands

See [package.json](/package.json) for scripts to build the mustache example layouts.

- Run `npm run build` to build layouts from source code.
- Run `npm run start:http-server` and navigate to a file for testing.
- Run `npx prettier . -w` to format code using prettier (an opinionated formatter).

### Source code

Source code for the example layouts is provided in separate files for HTML, CSS and JavaScript. These files are combined with [web-resource-inliner](https://www.npmjs.com/package/web-resource-inliner) or [juice](https://www.npmjs.com/package/juice).

- [src/a4](/src/a4) contains source code for [a4.html](/layouts/a4.html)

- [src/email](/src/email) contains source code for [email.html](/layouts/email.html)\
  Most email clients have good support for CSS nowadays. However, inline styles and a layout based on a HTML table is still considered the best way to ensure rendering compatibility across email clients. CSS styles can be inlined with [juice](https://www.npmjs.com/package/juice).\
  _Caution: [juice](https://www.npmjs.com/package/juice) removes unused CSS styles._

- [src/pagedjs](/src/pagedjs) contains source code for [pagedjs.html](/layouts/pagedjs.html) and [pagedjs-toc.html](/layouts/pagedjs-toc.html)

- [src/pagedjs/toc.js](/src/pagedjs/toc.js) and [src/pagedjs/styles-toc.css](/src/pagedjs/styles-toc.css) contain code for generating a table of contents. This code is based on <https://pagedjs.org/posts/build-a-table-of-contents-from-your-html/>.
