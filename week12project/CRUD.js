const medListURL = ' http://localhost:3000/medList '

$.get(medListURL).then((data) =>
  data.forEach((medication) => {
    $('tbody').append(
      $(`
    <tr>
      <td>${medication.id}</td>
      <td>${medication.newMedName}</td>
      <td>${medication.newMedDose}</td>
      <td>${medication.newMedInstructions}</td>
      <td>
        <button onclick="deleteMed(${medication.id})"}>🗑</button>
      </td>
    </tr>`)
    )
  })
)
$('#addNewMed').click(function () {
    $.post(medListURL, {
      newMedName: $('#newMedName').val(),
      newMedDose: $('#newMedDose').val(),
      newMedInstructions: $('#newMedInstructions').val()
    })
  })
  function deleteMed(id) {
    $.ajax(`${'http://localhost:3000/medList'}/${id}`, {
      type: 'DELETE',
    })
  }
  function updateMed(event) {
    event.preventDefault
    let id = $('#updateId').val()
  
    $.ajax(`${'medListURL'}/${id}`, {
      method: 'PUT',
      data: {
        newMedName: $('#updateMedName').val(),
        newMedDose: $('#updateMedDose').val(),
        newMedInstructions: $("#updateMedInstructions").val()
      },
    })
  }
  
  $('#updateMedList').click(updateMed)
  