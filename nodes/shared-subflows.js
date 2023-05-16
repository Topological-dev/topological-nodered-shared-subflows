module.exports = function(RED){
    function sharedSubflows(config) {
        RED.nodes.createNode(this, config)

        // RED.events.on('subflow:change', (subflow) => {
        //     console.log('something is about to happen')
        //    //this.hostname = os.hostname()
        // })
        

        // this.on('input', async msg => {
        //     console.log('something happened!')
        // })

        // this.on('close', async () => {
        //     this.context().global.set('hostname', )
        // })
    }

    RED.nodes.registerType("shared-subflows", sharedSubflows)
}