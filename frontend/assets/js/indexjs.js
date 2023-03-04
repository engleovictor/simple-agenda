addEventListener('click', event => {
    const targetTag = event.target;
    const className = targetTag.getAttribute('class').toLowerCase();
    const typeName  = targetTag.getAttribute('type').toLowerCase();

    if('submit' === typeName) {
        event.preventDefault();
        const newPage = className.split("button")[0];
        window.location.href = "/"+newPage;
    }
})