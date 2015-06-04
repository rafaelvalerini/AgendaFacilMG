function showLoading() {
    $.mobile.loading('show', {
        text: "Carregando...",
        textVisible: true,
        theme: "a"
    });
}

function hideLoading() {
    $.mobile.loading('hide');
}