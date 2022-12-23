$(document).ready(function () {
  let checkedAmenities = {};
  $('input[type=checkbox]').prop('checked', false);
  $('input[type=checkbox]').change(function () {
    let dataId = $(this).attr('data-id');
    let dataName = $(this).attr('data-name');

    if (this.checked) {
      checkedAmenities[dataId] = dataName;
    } else {
      delete checkedAmenities[dataId];
    }

    let h4Tag = $('.amenities h4');
    h4Tag.empty();
    for (let key in checkedAmenities) {
      h4Tag.append(checkedAmenities[key] + ' ');
    }
  });
});
