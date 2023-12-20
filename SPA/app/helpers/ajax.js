export async function  ajax(props) {
    /*Ya que sólo se utilizarán peticiones GET no es necesario agregar un método o cabeceras
    pero puede hacerse en caso de necesitarse*/
    let {url, cbSuccess} = props;

    await fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => cbSuccess(json))
    .catch(err => {
        let message = err.statustext || "Ocurrió un error al acceder al API";
        document.getElementById("main").innerHTML = `
        <div class="error">
            <p>Error ${err.status}: ${message}</p>
        </div>`;
        document.querySelector(".loader").style.display = "none";
        console.log(err);
    });
}