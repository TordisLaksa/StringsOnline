import create from 'zustand';

export const UseLoginStore = create((set) => {
    
    return{
        /**Loggedin er getter 
        vi måler om har en 'token' i sessionStorage*/
        loggedIn: Boolean(sessionStorage.getItem('token')),
        
        //function for at logge ind 
        //vi setter loggedIn til at være true
        setLoggedIn: (loggedIn = true) => set(() => {
            
            //her tjekker vi, om den er true
            if(!loggedIn){
                sessionStorage.removeItem('token')
            }
            return{ loggedIn }
        }),
        //her logger vi ud ved at fjerne 'token' fra sessionStorage ved hjælp af en function
        setLogOut: () => set((state) => {
            sessionStorage.removeItem('token');
            state.loggedIn = false;
        }),
    };
});