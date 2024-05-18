let data = [
    {
      "S/N": 1,
      "ID Number": 1234,
      "Student Name": "John",
      "Surname": "Doe",
      "Gender": "Male",
      "Address": "123 Main St",
      "Email": "johndoe@example.com",
      "Class": "SS1",
      "Nationality": "Nigerian",
      "Phone Number": "08012345678"
    },
  
    ];

    
    let csv = '';

csv += '"S/N","ID Number","Student Name","Surname","Gender","Address","Email","Class","Nationality","Phone Number"\r\n';

data.forEach(row => {
  csv += `${row['S/N']},${row['ID Number']},${row['Student Name']},${row['Surname']},${row['Gender']},${row['Address']},${row['Email']},${row['Class']},${row['Nationality']},${row['Phone Number']}\r\n`;
});

let blob = new Blob([csv], {type: 'text/csv'});
let link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = 'example.csv';
document.body.appendChild(link);
link.click();

document.body.removeChild(link);

