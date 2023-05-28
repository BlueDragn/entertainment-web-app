fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Store the JSON data in a variable
        const jsonData = data;

        // Process the JSON data
        console.log(jsonData);


        const showsCardsElement = document.querySelector(".cards");

        jsonData.forEach((item) => {

            //Create the card element
            const cardElement = document.createElement("div");
            cardElement.classList.add("card");
            cardElement.style.backgroundImage = `url(${item.thumbnail.small})`;



            // Add a heading element with the country's name
            const nameElement = document.createElement("h2");
            nameElement.textContent =item.title;
            cardElement.appendChild(nameElement);

            // Add an image element with the country's flag image URL
      const thumbnailElement = document.createElement("img");
      thumbnailElement.src = item.thumbnail.trending.small;
      cardElement.appendChild(thumbnailElement);


            showsCardsElement.appendChild(cardElement);
        });

    })
    .catch(error => {
        console.error('Error:', error);
    });