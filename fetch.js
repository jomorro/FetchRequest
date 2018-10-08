function populatePage(words) {
    const main = document.getElementById("main")
    let insertText = document.createTextNode(words)
    let pageBreak = document.createElement("br")
    main.appendChild(insertText)
    main.appendChild(pageBreak)
}

fetch("http://jservice.io/api/category?id=42")
    .then(res => res.json())
    .then(data => {
        let newTitle = data.title
        let randomQuestions = data.clues[Math.floor(Math.random() * data.clues_count)]
        let question = randomQuestions.question
        populatePage('The category is ' + newTitle)
        populatePage(question)
    })


async function getUpdates() {

    const response = await fetch("http://jservice.io/api/category?id=109")
    const category = await response.json()
    let clue = category.clues[Math.floor(Math.random() * category.clues_count)]
    let title = category.title
    populatePage('The category is ' + title)
    populatePage(clue.question)
}

getUpdates()