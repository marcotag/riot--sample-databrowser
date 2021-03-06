riot.tag2('app-help', '<div> <h2>Help</h2> <p>{helptext}</p> </div>', 'app-help,[data-is="app-help"]{ position: fixed; top: auto; right: 0; bottom: auto; left: auto; width: 100%; height: 130px; box-sizing: border-box; font-family: sans-serif; margin: 0; padding: 1em; text-align: center; color: #666; background: #f7f7f7; } @media (min-width: 480px) { app-help,[data-is="app-help"]{ top: 0; right: 0; bottom: auto; left: auto; width: 200px; height: 100%; } }', '', function(opts) {
        var self = this
        var helptext = 'Vuoto'

        self.data = {
            first: "This is the help for the first page.",
            second: "This is the help for the second page.",
            third: "This is the help for the third page."
        }

        var r = route.create()
        r('*', function (id) {
            self.helptext = self.data[id] || 'Help not found.'
            self.update()
        })
        r(function () {
            self.helptext = "Click the navigation on the left edge."
            self.update()
        })
});
