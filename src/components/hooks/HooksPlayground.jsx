import React from 'react'
import UseStateHook from './UseStateHook'
import UseEffectHook from './UseEffectHook'
import UseMemoHook from './UseMemoHook'

function HooksPlayground() {
  return (
    <div className='HooksPlayground'>
        <h1>Hooks Examples</h1>
        <UseStateHook/>
        <UseEffectHook/>
        <UseMemoHook/>
    </div>
  )
}

export default HooksPlayground