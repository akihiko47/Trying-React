import React from 'react'
import UseStateHook from './UseStateHook'
import UseEffectHook from './UseEffectHook'

function HooksPlayground() {
  return (
    <div className='HooksPlayground'>
        <h1>Hooks Examples</h1>
        <UseStateHook/>
        <UseEffectHook/>
    </div>
  )
}

export default HooksPlayground