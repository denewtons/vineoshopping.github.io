var MenuItems = document.getElementById("MenuItems");

        MenuItems.style.maxHeight = "0px";

        function menutoggle() {
            if (MenuItems.style.maxHeight == "0px") {
                MenuItems.style.maxHeight = "200px";
            }
            else {
                MenuItems.style.maxHeight = "0px";
            }
        }
    
          function openOrder(){
              document.getElementById("myOrder").style.display ="block";
          }
          function closeOrder(){
            document.getElementById("myOrder").style.display ="none";
        }
        function openAdd() {
            document.getElementById("myAdd").style.display = "block";
          }
          function closeAdd() {
            document.getElementById("myAdd").style.display = "none";
          }
          function openReply() {
            document.getElementById("myReply").style.display = "block";
          }
          function closeReply() {
            document.getElementById("myReply").style.display = "none";
          }
  function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
} 
$(document).ready(function() {
  $('.js-example-basic-single').select2();
});       