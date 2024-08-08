


document.addEventListener("DOMContentLoaded", function() {
    const navItems = document.querySelectorAll('.workNav ul li');
    const workItems = document.querySelectorAll('.mainfigma');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            workItems.forEach(workItem => {
                if (category === 'all' || workItem.getAttribute('data-category') === category) {
                    workItem.style.display = 'block';
                } else {
                    workItem.style.display = 'none';
                }
            });
        });
    });

    navItems[0].click();
});
