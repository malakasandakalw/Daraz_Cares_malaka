// $(document).ready(function(){
//     /* Get iframe src attribute value i.e. YouTube video url
//     and store it in a variable */
//     var url = $("#mainvideo").attr('src');
    
//     /* Assign empty url value to the iframe src attribute when
//     modal hide, which stop the video playing */
//     $("#myModal").on('hide.bs.modal', function(){
//         $("#mainvideo").attr('src', '');
//     });
    
//     /* Assign the initially stored url back to the iframe src
//     attribute when modal is displayed again */
//     $("#myModal").on('show.bs.modal', function(){
//         $("#mainvideo").attr('src', url);
//     });
// });
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}