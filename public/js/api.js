document.querySelector('#infoBtnClick').addEventListener('click', getInfo)

function getInfo() {
    let select = document.getElementById('learningDisability')
    let learningDisability = select.value
    let disabilityTrouble = document.querySelector('#disabilityTrouble')



    const url = 'https://accommodations-api.onrender.com/api/'+ learningDisability
    fetch(url) 
        .then(res => res.json())
        .then(data => {
            //clears ul in case user doesn't refresh page between button clicks
            disabilityTrouble.innerHTML = ''
            document.querySelector('#disabilityName').innerHTML = data.disability
            document.querySelector('#ExplanationLabel').innerHTML = "Explanation"
            document.querySelector('#disabilityExplanation').innerHTML = data.explanation
            document.querySelector('#importantLabel').innerHTML = "IMPORTANT!"
            document.querySelector('#disabilityImportant').innerHTML = data.important
            document.querySelector('#troubleLabel').innerHTML = "Trouble Areas:"
            

            for (let troubleAreas in learningDisability) {
                let value = troubleAreas;
                listItem = document.createElement("li");
                listItem.innerHTML = value;
                disabilityTrouble.appendChild(listItem);
              }

            //document.querySelector('#disabilityTrouble').innerHTML = data.troubleAreas
            // document.querySelector('#disabilityAccommodation').innerHTML = data.accommodation
            console.log(data.troubleAreas)

        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}



console.log('hi')

