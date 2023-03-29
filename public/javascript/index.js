$(function () {
  $("#btn-add-employee").click(() => {
    if (!$('#name').val()||!$('#position').val()||!$('#email').val()||!$('#phone').val()||!$('#salary').val()) {
        $("#errorAdd").text('Vui lòng không để trống các trường')
        return false;
    }
  });
});
