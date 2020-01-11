// Zeynel Abidin Özkale
// 2014556052
// II education
function linkedList(){
  this.head=null;
  //Linked list objesi oluşturduk
  //Linked list objesinin head objesini tanımladık
}
linkedList.prototype.isEmpty = function(){
  //linked list sınıfı prototype objesi üzerinden
  //listenin boş olup olmadığını kontrol eden isEmpty fonksiyonunu
  //tanımladık
  return this.head === null;
}
linkedList.prototype.size = function(){
  //linked list sınıfı prototype objesi üzerinden
  //listedeki uzunluğunu hesaplayan size fonksiyonunu
  //tanımladık
  var current = this.head;
  var count = 0;
  while(current !== null){
    count++;
    current = current.next;
  }
  return count;
}
linkedList.prototype.addNode = function(val){
  //linked list sınıfı prototype objesi üzerinden
  //parametre olarak verilen değeri listeye head olarak ekleyen
  //addNode fonksiyonunu tanımladık
  var newNode = {
    data: val,
    next: this.head
  }
  this.head = newNode;
}
linkedList.prototype.contains = function(val){
  //linked list sınıfı prototype objesi üzerinden
  //parametre olarak verilen değerin listede bulunup
  //bulunmadığını kontrol eden contains fonksiyonunu tanımladık
  var current = this.head;
  while (current!==null) {
      if(current.data == val)
          return true;
      current = current.next;
  }
  return false;
}
linkedList.prototype.remove = function(val){
  //linked list sınıfı prototype objesi üzerinden
  //parametre olarak verilen değeri eğer listede bulunuyorsa
  //listeden çıkartan remove fonksiyonunu tanımladık

  if(!this.contains(val)){
    return;
  }
  if(this.head.data == val){
    this.head = this.head.next;
  }
  var prew = null;
  var current = this.head;
  while(current.data !== val){
    prew = current;
    current = current.next;
  }
  prew.next = current.next;
  current = null;
}
linkedList.prototype.RecLinearSearch = function(node, val){
  if(node === null)
      return false;
  if(node.data === val){
      return true;
  }
  return this.RecLinearSearch(node.next, val);
}
linkedList.prototype.printHtml = function(){
  var htmlContent ="";
  var current = this.head;
  while (current !== null) {
    htmlContent += "<span class='node'>";
    htmlContent += current.data;
    htmlContent +="</span>";
    current = current.next;
  }
  return htmlContent;
}
linkedList.prototype.positiveIntegerDivisors = function(){
  var current = this.head;
  var result = "";
  while(current !== null){
    var divider = 1;
    result += current.data + " sayisinin pozitif tam sayi bölenleri -> <br>";
    while(divider <= current.data){
      if(current.data % divider === 0){
          result += "<span class='divider'>";
          result += parseInt(current.data / divider);
          result += "</span>";
      }

      divider ++;
    }
    result += "</br>"
    current = current.next;
  }
  return result;
}
var linkedList = new linkedList();
