function array(string) {
  let parts = string.split(',');
  parts.shift();
  parts.pop();
  
return (parts.length > 0) ? parts.join(" ") :
null
  
}