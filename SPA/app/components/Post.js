export function Post(props) {
    //Se añade [0] ya que traemos un arreglo de una sólo posición
    let {title, date, content} = props[0];
    let dateFormat = new Date(date).toLocaleString();
    return `
    <section class="post-page">
        <aside>
            <h2>${title.rendered}</h2>
            <time datetime=${dateFormat}>${dateFormat}</time>
        </aside>
        <hr>
        <article>${content.rendered}</article>
    </section>`;
}