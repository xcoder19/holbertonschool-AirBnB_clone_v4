$(document).ready(function () {
  $.get('http://0.0.0.0:5001/api/v1/status/', function (response) {
    if (response.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').css({
        'background-color': '#cccccc',
      });
      $('#api_status').removeClass('available');
    }
  }).fail(function (xhr, status, error) {
    console.error(error);
    $('#api_status').css({
      'background-color': '#cccccc',
    });
  });

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
