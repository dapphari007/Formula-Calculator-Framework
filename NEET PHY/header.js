const headerContainer = document.getElementById('header-container');
        const xhr = new XMLHttpRequest();

        xhr.onload = function() {
            if (xhr.status === 200) {
                headerContainer.innerHTML = xhr.responseText;
            } else {
                headerContainer.innerHTML = 'Failed to load header.';
            }
        };

        xhr.open('GET', 'header.html', true);
        xhr.send();