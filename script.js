tylconsole.log('Add validation!');

document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()

    let name = document.getElementsByTagName('name')[0];
    
    if name === '' {

        let field = "name" ;
        let id = "name" ;
        let divname = "name-field" ;
        emptynameerror()

    }

    let caryear = document.getElementsByTagName('car-year')[0];

    if (caryear === '') {

        let field = "car-year" ;
        let id = "car year" ;
        let divname = "car-field"
        emptynamerror()

    }

    let carmake = document.getElementsByTagName('car-make')[0];

    if (carmake === '') {

        let field = 
    }
