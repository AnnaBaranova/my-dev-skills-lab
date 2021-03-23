

$("#button-addon2").on("click", addSkill);



function addSkill(){
    let $skill = $("#input").val();
    // console.log ($skill);
    const $newItem = $(`<li class="list-group-item">
      <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." checked> ${$skill}
    </li>`);
    $(".list-group").append($newItem);
    $("#input").val(null);
};