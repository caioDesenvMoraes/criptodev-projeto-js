

let Err = {
    render: async () => {
        let view = `
            <div>
                <h1>Ops... Está página não existe</h1>
            </div> 
        `

        return view
    },
    after_render: async () => {}
}

export default Err