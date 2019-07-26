
// Text Create Outline
// Requires a document with multiple text items open.

if(documents.length > 0)
{
   var textRefs = activeDocument.textFrames;
   var text = [];
// textRefs会因为转曲而实时减少组内成员，需要赋值给一个新的组
   for (var i = 0 ; i < textRefs.length; i++)
   {
      text[i] = textRefs[i]; 
   }

   for (var i = 0 ; i < text.length; i++)
   {
      text[i].createOutline(); 
   }
      // redraw();
}
else
{
   alert("Open a document with multiple text items.");
}