import { getIntegerValue } from '../helpers.mjs'

export default {
  Array: {
    'at:' (index) {
      return this._arr[getIntegerValue(index) - 1]
    },
    'at:put:' (index, value) {
      return (this._arr[getIntegerValue(index) - 1] = value)
    },
    size () {
      return this._int(this._arr.length)
    }
  },
  'Array class': {
    _new (arr = []) {
      return this._newWithProps({ _arr: arr })
    },
    'new:' (length) {
      return this._new(new Array(getIntegerValue(length)))
    }
  }
}
