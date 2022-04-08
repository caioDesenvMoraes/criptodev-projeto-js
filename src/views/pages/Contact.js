import axios from "axios"

let Contact = {
    render: async () => {
        let view = `
            <div class="container-contact">
                <h2>Entre em Contato</h2>
                <form class="form">
                    <input type="text" class="field" id="nome" placeholder="Informe o nome" required/>
                    <input type="email" class="field" id="email" placeholder="Informe o e-mail" required/>
                    <input type="tel" class="field" id="phone" placeholder="Informe o telefone (opcional)"/>
                    <button type="submit" class="submit-button">Enviar</button>
                </form>
            </div>
        `

        return view
    },
    after_render: async () => {
        document.querySelector(".submit-button").addEventListener("click", () => {
            let name = document.querySelector("#name").value,
                email = document.querySelector("#email").value,
                phone = document.querySelector("#phone").value

            axios.post("https://webhook.site/e43f908d-1bed-4afe-a73b-da3c6d624516", {
                name,
                email,
                phone
            })
        })
    }
}

export default Contact