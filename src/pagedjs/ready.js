window.readyForPdf = false;

class ReadyHandler extends Paged.Handler {
  constructor(chunker, polisher, caller) {
    super(chunker, polisher, caller);
  }
  afterRendered() {
    window.readyForPdf = true;
  }
}
Paged.registerHandlers(ReadyHandler);
