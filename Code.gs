function setPageSize(){
  var document = DocumentApp.getActiveDocument();
  var body = document.getBody();
  body.setPageHeight(666);
  body.setPageWidth(441);
}

function setSpaceAfterParagraphsTo6Points(){
  var cursor = DocumentApp.getActiveDocument().getCursor();
  var surroundingText = cursor.getSurroundingText().getText();
  //Logger.log(surroundingText);
  var para = cursor.getElement().asParagraph();
  Logger.log(para.getAttributes());
}

function setLineSpacing(){
}