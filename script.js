const cardItems = document.querySelectorAll('.card-item');

cardItems.forEach(item => {
    const button = item.querySelector('i');
    const paragraph = item.querySelector('p');

    button.addEventListener('click', () => {

        //reset
        cardItems.forEach(item => {
            const button = item.querySelector('i');
            const paragraph = item.querySelector('p');

            paragraph.classList.add('hidden');
            button.className = "ri-add-circle-fill button-dropdown";
        });

        paragraph.classList.toggle('hidden');
        button.className = "ri-indeterminate-circle-line button-dropdown";
        if (paragraph.classList.contains('hidden')) {
            button.className = "ri-add-circle-fill button-dropdown";
        }
    });
})

