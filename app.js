let files = document.querySelectorAll(".file")

let promise1 = new Promise((resolve,reject)=> {
    let span = document.createElement("span");
    span.innerText = "קובץ ראשון בתהליכי עלייה, בקרוב נעדכן ❤️"
    files[0].appendChild(span)
    let delay = Math.round(Math.random() * 4);
    setTimeout(() => {
        let num = Math.random()
        span.remove()
        num > 0.5 ? resolve( "הקובץ אצלנו 👍" ) : reject("פאדיחה הקובץ לא עלה 😟")
        
    }, delay * 1000);
});

let promise2 = new Promise((resolve,reject)=> {
    let span = document.createElement("span");
    span.innerText = "קובץ שני בתהליכי עלייה, בקרוב נעדכן ❤️"
    files[1].appendChild(span) 
         let delay = Math.round(Math.random() * 4);
    setTimeout(() => {
        let num = Math.random()
        span.remove()

        num > 0.5 ? resolve( "הקובץ אצלנו 👍" ) : reject("פאדיחה הקובץ לא עלה 😟")
    }, delay * 1000);
});

let promise3 = new Promise((resolve,reject)=> {
    let span = document.createElement("span");
    span.innerText = "קובץ שלישי בתהליכי עלייה, בקרוב נעדכן ❤️"
    files[2].appendChild(span)   
         let delay = Math.round(Math.random() * 4);
    setTimeout(() => {
        let num = Math.random()
        span.remove()

        num > 0.5 ? resolve( "הקובץ אצלנו 👍" ) : reject("פאדיחה הקובץ לא עלה 😟")
    }, delay * 1000);
});

promise1.then(res => files[0].innerHTML += res).catch(res => files[0].innerHTML += res)
promise2.then(res =>files[1].innerHTML += res).catch(res => files[1].innerHTML += res)
promise3.then(res => files[2].innerHTML += res).catch(res => files[2].innerHTML += res)

