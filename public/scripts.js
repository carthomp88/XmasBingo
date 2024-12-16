const checks = document.querySelectorAll("input");
checks.forEach(checkbox => {
    checkbox.checked = false;
    checkbox.addEventListener("change", function() {
        this.classList.toggle("clicked");
        this.closest(".grid-item").classList.toggle("clicked");
    })
})

const getPrompts = async () => {
    const prompts = await fetch("http://localhost:3000/prompts")
    return prompts.json()
}

const shuffleArray = async (array) => {
    let i, j;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1))
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

getPrompts().then(prompts => shuffleArray(prompts)).then(list => {
    let i;
    for (i = 1; i < list.length; i++) {
        const id = "check" + i;
        console.log(id)
        console.log(list[i].prompt)
        const tile = document.getElementById(id);
        if (tile) tile.innerHTML = list[i-1].prompt;
    }
})