const pact = require('@pact-foundation/pact-node')
const path = require('path')
const opts = {
  pactUrls: [path.resolve(__dirname, '../../pacts/our_little_consumer-our_provider.json')],
  pactBroker: 'http://localhost:80',
  pactBrokerUsername: 'pact',
  pactBrokerPassword: 'broker',
  tags: ['prod', 'test'],
  consumerVersion: '1.0.0'
}

pact.publishPacts(opts)
  .then(() => {
    console.log('Pact contract publishing complete!')
    console.log('Head over to http://localhost:80/ to see your published contracts.')
    console.log('')
  })
  .catch(e => {
    console.log('Pact contract publishing failed: ', e)
  })
