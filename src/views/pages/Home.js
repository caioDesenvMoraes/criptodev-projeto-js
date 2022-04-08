import Logo from "../../img/logo.jpg"

let Home = {
    render: async () => {
        let view = `
            <div class="container">
                <header class="header">
                    <div class="wrapper-logo">
                        <img src="${Logo}" alt="Logo"/>
                    </div>
                    <div class="social-media">
                        <a href="https://www.instagram.com/caiomutley/" target="_blank">Instagram</a>
                        <a href="https://www.linkedin.com/in/caio-moraes-8026a6158/" target="_blank">Linkedin</i></a>
                        <a href="https://github.com/caioDesenvMoraes" target="_blank">Github</i></a>
                    </div>
                </header>
                <main class="main">
                    <div class="banner">
                        <h1>Web Developer & Blockchain Developer</h1>
                        <h3>Caio Moraes</h3>
                        <a href="/#/contact">Entrar em Contato</a>
                    </div>
                    <div class="info">
                        <h2>Sobre</h2>
                        <p>Programador front-end e </p>
                    </div>
                </main>
                <footer class="footer">
                    <p>Copyright &copy; 2022 CM DEV - Todos os direitos reservados</p>
                </footer>
            </div>
        `

        return view
    },
    after_render: async () => {}
}

export default Home