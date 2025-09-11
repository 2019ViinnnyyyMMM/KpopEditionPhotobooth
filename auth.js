(function() {
    const publicPages = ['index.html', 'payment.html', 'entercode.html'];
    const currentPage = window.location.pathname.split('/').pop();
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile && !publicPages.includes(currentPage)) {
        window.location.href = 'nophone.html'; //
        return;
    }
    if (publicPages.includes(currentPage)) return;
    if (sessionStorage.getItem('accessGranted') !== 'true') {
        window.location.href = 'payment.html'; //
    }
})();