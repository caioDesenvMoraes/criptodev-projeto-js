import Utils from "./services/Utils"

import Home from "./views/pages/Home"
import Err from "./views/pages/Err"
import Contact from "./views/pages/Contact"

let routes = {
    "/": Home,
    "/contact": Contact
}

const router = async () => {
    // referenciando o elemento HTML para renderização
    const content = null || document.querySelector(".app")

    // obtendo a URL do meu browse
    let request = Utils.parseRequestURL()

    // analisando a URL e verificando se a rota é simples ou composta
    let parsedURL = (request.resource ? `/${request.resource}` : "/") + (request.id ? "/:id" : "") + (request.verb ? `/${request.verb}` : "")

    let page = routes[parsedURL] ? routes[parsedURL] : Err
    
    content.innerHTML = await page.render()
    await page.after_render()
}

window.addEventListener("hashchange", router)
window.addEventListener("load", router)