//body onload function olarak çalışan fonksiyonumuz
function defaultOpen(){
  //linked list node ekleme tabının varsayılan olarak açılmasını sağlıyoruz
  document.getElementById("defaultOpen").click();
  $('.fullListResult').hide();
}
//ekleme butonuna tıklanınca tetiklenen fonksiyon
$('#addNodeButton').on('click', function() {
  var inputValue = $('#addNodeInput').val();
  if(inputValue){
   $('.fullList').fadeOut(1);
    linkedList.addNode(inputValue);
    document.getElementById('addNodeInput').value = ''
  }
  if(linkedList.isEmpty()){
    $('.fullList').html("listede eleman bulunmamaktadır");
  }else {
    $('.fullList').fadeIn(200).html(linkedList.printHtml());
  }
});
$('#searchNodeButton').on('click', function() {
  var inputValue = $('#searchNodeInput').val();
  document.getElementById('searchNodeInput').value = '';
  if(inputValue.length){
    if(linkedList.RecLinearSearch(linkedList.head,inputValue)){
      $('.fullListResult').show().html(linkedList.positiveIntegerDivisors());
    }
    else {
      $('.fullListResult').show().html(inputValue + " Değeri bağlı listede bulunmamaktadır.");
    }
  }else {
      $('.fullListResult').show().html("Lütfen bir deger giriniz");
  }
  if(linkedList.isEmpty()){
    $('.fullList').html("listede eleman bulunmamaktadır");
  }else {
    $('.fullList').fadeIn(200).html(linkedList.printHtml());
  }
});
/*Menu tabları*/
function openTab(evt, tabname) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabname).style.display = "block";
  evt.currentTarget.className += " active";
}
