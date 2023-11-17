const d = document;

export default function responsiveTester(formId) {
    const $form = d.getElementById(formId);
    let tester;

    d.addEventListener("submit", (e) => {
        if (e.target === $form) {
            e.preventDefault();
            tester = window.open($form.direccion.value, "tester", 
            `innerWidth = ${$form.ancho.value},
            innerHeight = ${$form.alto.value}`);
            console.log(tester);
        }
    });

    d.addEventListener("click", (e) => {
        if (e.target === $form.cerrar) 
        //Este método sólo funciona en algunas páginas web
        tester.close();
    });
}