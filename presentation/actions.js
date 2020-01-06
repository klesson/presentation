(function() {
    var currentPage = 1;
    var PAGE_COUNT = 21;
    window.onload = function() { 
        function setPage() {
            var newSrc = './img/' + currentPage + '.png'
            document.getElementById('image').setAttribute('src', newSrc);
            document.getElementById('page-counter').textContent = currentPage;
        }       
        document.getElementById('button-next').addEventListener('click', function () {            
            if( currentPage < PAGE_COUNT) {
                currentPage++;
                setPage();
            }
        });

        document.getElementById('button-prev').addEventListener('click', function () {            
            if( currentPage > 1) {
                currentPage--;
                setPage();
            }
        });
    }
})();