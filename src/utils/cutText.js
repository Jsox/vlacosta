const CutText = (text, cutTo = 150) => {
  if(text.length > cutTo){
    text = text.slice(0, cutTo - 1) + '…'
  }
  return text;
};

export default CutText;