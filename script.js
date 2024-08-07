document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll("#image-list .list-group-item");
    const sections = document.querySelectorAll(".image-section");
    
    items.forEach(item => {
        item.addEventListener("click", function() {
            sections.forEach(section => section.style.display = "none");
            const target = item.getAttribute("data-target");
            document.getElementById(target).style.display = "block";
            document.getElementById(target).scrollIntoView({ behavior: 'smooth' });

            // Close the dropdown on mobile after selection
            if (window.innerWidth <= 750) {
                document.getElementById("dropdown-toggle").classList.remove("open");
                document.getElementById("image-list").style.display = "none";
            }
        });
    });

    const searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("input", function() {
        const filter = searchBar.value.toLowerCase();
        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(filter) ? "" : "none";
        });
    });

    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modal-image');
    const modalDesc = document.getElementById('modal-description');
    const modalTitle = document.getElementById('imageModalLabel');

    document.querySelectorAll('.card-img-top').forEach(img => {
        img.addEventListener('click', function() {
            modalImg.src = img.getAttribute('data-imgsrc');
            modalDesc.textContent = img.getAttribute('data-imgdesc');
            modalTitle.textContent = img.alt;
        });
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', function() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        darkModeToggle.innerHTML = newTheme === 'light' ? '<i class="ri-toggle-line" style="color: rgb(69, 69, 69);"></i>' : '<i class="ri-toggle-fill" style="color:white"></i>';
    });

    // Dropdown menu toggle for mobile
    const dropdownToggle = document.getElementById('dropdown-toggle');
    dropdownToggle.addEventListener('click', function() {
        const imageList = document.getElementById('image-list');
        if (imageList.style.display === 'block') {
            imageList.style.display = 'none';
            dropdownToggle.classList.remove('open');
        } else {
            imageList.style.display = 'block';
            dropdownToggle.classList.add('open');
        }
    });

    // Handle window resize events
    window.addEventListener('resize', function() {
        if (window.innerWidth > 750) {
            document.getElementById('image-list').style.display = 'block';
            document.getElementById('dropdown-toggle').classList.remove('open');
        } else {
            document.getElementById('image-list').style.display = 'none';
        }
    });
});
