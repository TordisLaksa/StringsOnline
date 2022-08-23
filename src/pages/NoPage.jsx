export const NoPage = () => {
    // window.location.href tager den nuværende url fra browseren
    const path = window.location.href;
    //fjerner alt fra url op til den seneste /
    const url = path.substring(path.lastIndexOf('/') + 1);
    return(
        <h1>Siden {url} <br /> 404 - Findes ikke</h1>
    )
}