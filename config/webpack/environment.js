const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jpuery',
    jQuery: 'jquery/src/jpuery',
    Popper: ['popper.js', 'default']
  })
)

module.exports = environment
