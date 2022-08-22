import { UseLoginStore } from "./UseLoginStore"

export const LogOut = () => {
    
    const { setLogOut } = UseLoginStore((store) => ({
        
        setLogOut: store.setLogOut,
    }));
    
    const handleLogOut = () => {
        setLogOut();
    }
    return(
        <button onClick={() => handleLogOut()}>Log ud</button>
    )
};