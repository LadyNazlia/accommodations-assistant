document.querySelector('#infoBtnClick').addEventListener('click', getInfo)

function getInfo() {
    let select = document.getElementById('learningDisability')
    let learningDisability = select.value
    
    console.log(learningDisability)

    const url = 'https://accommodations-api.onrender.com/api/'+ learningDisability
    fetch(url) 
        .then(res => res.json())
        .then(data => {
            console.log(data.disability)
            console.log(data.explanation)
            console.log(data.important)
            console.log(data.troubleAreas) //doesn't work atm - undefined
             console.log(data.accommodation)

        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}



console.log('hi')

