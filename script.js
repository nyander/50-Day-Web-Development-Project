const panels = document.querySelectorAll('.panel');


panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClassed();
        panel.classList.add('active');
    })
})

function removeActiveClassed(){
    panels.forEach((panel) => {
        panel.remove('active');
    })
}
