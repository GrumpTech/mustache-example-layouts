function avoidTitleBreakAfter(config) {
  const content = config.content;
  const titleElements = config.titleElements;
  for (var i = 0; i < titleElements.length; i++) {
    let titleElement = content.querySelectorAll(titleElements[i]);

    titleElement.forEach(function (element) {
      // add classes to the element
      element.classList.add("title-element");
      // prevent breaks after headers
      element.style.breakAfter = "avoid";
    });
  }
}

class TitleHandler extends Paged.Handler {
  constructor(chunker, polisher, caller) {
    super(chunker, polisher, caller);
  }
  beforeParsed(content) {
    avoidTitleBreakAfter({
      content: content,
      titleElements: ["#content h2", "#content h3"],
    });
  }
}
Paged.registerHandlers(TitleHandler);
