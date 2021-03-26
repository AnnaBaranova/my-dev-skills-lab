

$("#button-addon2").on("click", addSkill);
$("#input").keypress(function (e){
  if (e.keyCode ===13){
    addSkill();
  }
});


function addSkill() {
  let $skill = $("#input").val();
  // console.log ($skill);
  if ($skill) {
    const $newItem = $(`<div class="row dev-skills"><button type="button" class="close" style="background-color:#dc3545" aria-label="Close">
    <span aria-hidden="false">&times;</span>
  </button><li class="list" style="margin-left:5px">${$skill}</li></div>`);
    $(".list-group").append($newItem);
    $("#input").val(null);
  }

$("div.dev-skills").on("click", function (){
  const removeBtn = $(this);
  console.log (this)
  removeBtn.remove();
 });
};




