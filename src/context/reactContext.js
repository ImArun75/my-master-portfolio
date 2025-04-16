import React from 'react'

const Context = React.createContext({
    activePage: '/',
    changeActivePage: () => {}
})

export default Context