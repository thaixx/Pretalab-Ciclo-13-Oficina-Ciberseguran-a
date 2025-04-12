

    
function countingMedals(){
    let country = prompt("Insira o nome do país:")
    let countries =  new Map()
    
    while(country !== "sair"){
        let medal = parseInt(prompt("Insira a quantidade de medalhas desse país"))
        if(!countries.has(country)){
            countries.set(country, medal)
        }else{
            countries.set(country,countries.get(country) +  medal)
        }
        
        country = prompt("Insira o próximo país ou digite 'sair': ")
    }
    const sortedCountries = Array.from(countries.entries()).sort((a, b) => b[1] - a[1]);
    
    let alertMessage = "#Ranking de medalhas: \n"
    for(let i = 0; i < sortedCountries.length; i++){
       
        alertMessage += `#${sortedCountries[i][0]}: ${sortedCountries[i][1]} \n`
    }
    alert(alertMessage)

}

countingMedals()
