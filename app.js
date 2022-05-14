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

promise1.then(res => files[0].innerText += res).catch(res => files[0].innerText += res)
promise2.then(res =>files[1].innerText += res).catch(res => files[1].innerText += res)
promise3.then(res => files[2].innerText += res).catch(res => files[2].innerText += res)

