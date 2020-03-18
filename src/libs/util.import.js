if (process.env.NODE_ENV === 'production') {
  module.exports = file => () => import('@/views/' + file)
} else {
  module.exports = file => require('@/views/' + file).default
}
