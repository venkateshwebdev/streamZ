import { Children, createContext, useState } from "react";
const SidebarContext = createContext()

const SidebarProvider = ({children})=>{
    const [sidebar,setSidebar] = useState(true)
    const changeSidebar = ()=>{
      setSidebar(prev=>!prev)
    }
    return(
        <SidebarContext.Provider value={{sidebar,changeSidebar}}>
            {children}
        </SidebarContext.Provider>
    )
}

export {SidebarContext,SidebarProvider};