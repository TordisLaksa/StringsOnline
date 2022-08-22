import { useForm } from "react-hook-form";
import appService from "../../AppServices/AppService";
import { UseLoginStore } from "./UseLoginStore";

export const Login = () => {
    
    //vi sætter den ind her for at kunne bruge den længere nede
    const { setLoggedIn } = UseLoginStore((store) => ({
        setLoggedIn: store.setLoggedIn,
    }));
    
    
    //jeg kan ikke på forhånd vide hvilken datatype jeg får i min useForm
    //input felter + en function til at submitte form
    const { register, handleSubmit } = useForm();
    
    
    const onSubmit = (submitdata) =>{
        
        async function fetchResults(){
            
            try{
                const response = await appService.login(submitdata.username, submitdata.password);
                
                //det her er ikke samme data som i linje 11
                if(response.data){
                    sessionStorage.setItem('token', JSON.stringify(response.data));
                    //vi kalder den her for at se om vi er logged in eller ej
                    setLoggedIn();
                }
            }catch (error) {
                
                console.log(error);
            }
        }
        fetchResults();
    };
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' {...register('username', { required: 'Brugernavn er et påkrævet felt' })} autoComplete="username" placeholder='Brugernavn' />
            <input type='password' {...register('password', { required: 'Kodeord er et påkrævet felt' })} autoComplete="password" placeholder='Kodeord'/>
            <button>Login</button>
        </form>
    )
};