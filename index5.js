var selectedRow=null
function saveData(){
    let formData=JSON.parse(localStorage.getItem('formData')) || [];
    
    formData.push(
        {
            name:document.getElementById('name').value,
            age:document.getElementById('age').value,
            department:document.getElementById('department').value,
            bloodg:document.getElementById('bloodg').value,
            address:document.getElementById('address').value,
            contact:document.getElementById('contact').value
        }
    );
    localStorage.setItem('formData',JSON.stringify(formData));
   document.querySelector('form').reset();
    document.getElementById('name').focus();
    dispData();
    
}
function dispData()
{
    console.log(localStorage.getItem('formData'));
  if(localStorage.getItem('formData')){
      var output=document.querySelector('tbody');
      output.innerHTML = "";
      JSON.parse(localStorage.getItem('formData')).forEach(data=>{
        output.innerHTML +=`
      <tr>
                <td>${data.name}</td>
                <td>${data.age}</td>
                <td>${data.department}</td>
                <td>${data.bloodg}</td>
                <td>${data.address}</td>
                <td>${data.contact}</td>
                <td><a onClick="onEdit(this)">Edit</a></td>
                <td><a onClick="onDelete(this)">Delete</a></td>
                
        </tr>
              `;
}); 
    }
    
    
}
function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("name").value=selectedRow.cells[0].innerHTML;
    document.getElementById("age").value=selectedRow.cells[1].innerHTML;
    document.getElementById("department").value=selectedRow.cells[2].innerHTML;
    document.getElementById("bloodg").value=selectedRow.cells[3].innerHTML;
    document.getElementById("address").value=selectedRow.cells[4].innerHTML;
    document.getElementById("contact").value=selectedRow.cells[5].innerHTML;
}
function onDelete(td){
    if(confirm('Are you sure to delete this record?')){
        row=td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }  
}
/*function resetForm(){
    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("department").value="";
    document.getElementById("bloodg").value="";
    document.getElementById("address").value="";
    document.getElementById("contact").value="";
    selectedRow=null;
}*/
function resetForm(){
    let index=formData.indexOf(selectedRow);
    formData.splice(index,1);   
}
function onFormSubmit(){
    if(validate()){
        var formData=saveData();
        if(selectedRow=null)
        dispData();
        else
        updateRecord(formData);
        resetForm();
    }
}  
dispData();
function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.name;
    selectedRow.cells[1].innerHTML=formData.age;
    selectedRow.cells[2].innerHTML=formData.department;
    selectedRow.cells[3].innerHTML=formData.bloodg;
    selectedRow.cells[4].innerHTML=formData.address;
    selectedRow.cells[5].innerHTML=formData.contact;
} 
function validate()
{
    if(contact.value>10 && name.value==null && address.value==null && age.value>4 && bloodg.value>2 && department.value==null) 
    {
        contact.focus();
        contact.formData.push('invalidState')
        return false;
    }
    return true;
}



    
