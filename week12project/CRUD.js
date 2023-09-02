const medListURL = 'http://localhost:3000/medList'
//link to DB.json
$.get(medListURL).then((data) =>
//jquery notation that grabs data from DB.json, then takes that data and adds it to a table
  data.forEach((medication) => {
    $('tbody').append(
      $(`
    <tr>
      <td>${medication.id}</td>
      <td>${medication.newMedName}</td>
      <td>${medication.newMedDose}</td>
      <td>${medication.newMedInstructions}</td>
      <td>
        <button onclick="deleteMed(${medication.id})"}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
        </svg></button>
      </td>
    </tr>`)
    )//adds a delete button with every item listed in the table
  })
)
$('#addNewMed').click(function () {
    $.post(medListURL, {
      newMedName: $('#newMedName').val(),
      newMedDose: $('#newMedDose').val(),
      newMedInstructions: $('#newMedInstructions').val()
    })
  })//takes the user input from the input Ids on the form and adds it to the table
  function deleteMed(id) {
    $.ajax(`${medListURL}/${id}`, {
      type: 'DELETE',
    })
  }//uses the call to delete a particular Id from the table

  function updateMed(event) {
    //event.preventDefault()
    let id = $('#updateId').val()
     /*fetch(medListURL + "/" + id,{
       method: "PUT",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify({
         newMedName: $('#updateMedName').val(),
         newMedDose: $('#updateMedDose').val(),
         newMedInstructions: $('#updateMedInstructions').val()
       })
     })*/
    $.ajax({
     url: `${medListURL}/${id}`,
      type: 'PUT',
      data: {
        newMedName: $('#updateMedName').val(),
        newMedDose: $('#updateMedDose').val(),
        newMedInstructions: $('#updateMedInstructions').val()
     },
    })
  }
  //ajax call to update a particular item on the table by Id
 $('#updateMedList').click(updateMed)
