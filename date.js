window.onload = function(){
    let d = new Date()
    let day = document.querySelector('.day1')
    let date = document.querySelector('.date1')
    let year = document.querySelector('.year1')
    let month = document.querySelector('.month1')

    date.innerText = d.getDate()
    year.innerText = d.getFullYear()

    let lang = navigator.language
    month.innerText = d.toLocaleString(lang,{month:'long'})
    day.innerText = d.toLocaleString(lang,{weekday:'long'})


    day = document.querySelector('.day2')
    date = document.querySelector('.date2')
    year = document.querySelector('.year2')
    month = document.querySelector('.month2')
    date.innerText = d.getDate()+1
    year.innerText = d.getFullYear()

    month.innerText = d.toLocaleString(lang,{month:'long'})
    day.innerText = d.toLocaleString(lang,{weekday:'long'})

    day = document.querySelector('.day3')
    date = document.querySelector('.date3')
    year = document.querySelector('.year3')
    month = document.querySelector('.month3')
    date.innerText = d.getDate()+2
    year.innerText = d.getFullYear()

    month.innerText = d.toLocaleString(lang,{month:'long'})
    day.innerText = d.toLocaleString(lang,{weekday:'long'})
    
}