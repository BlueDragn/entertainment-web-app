fetch('data.json')
  .then(response => response.json())
  .then(data => {
  // Store the JSON data in a variable
  const jsonData = data;

  // Process the JSON data
  console.log(jsonData);

  })
  .catch(error => {
    console.error('Error:', error);
  });
