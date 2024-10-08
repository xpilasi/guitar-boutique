import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { cookies } from "next/headers";

export const wixClientServer = async ()=>{
    let error='🚩';
    const refreshToken:any = 'dummy-token';
    // try{
    //     const cookieStore = cookies();
    //     refreshToken = JSON.parse(cookieStore?.get('refreshToken')?.value || '{}') 
        
    // }catch(e){
      
    // console.log(`ERROR ${error} --> \n ${e}`);
    
    // }
    
    
    const wixClient = createClient({
        modules: {
          products,
          collections
          
        },
        auth: OAuthStrategy({
          clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
          tokens: {
           refreshToken, accessToken:{value:'' ,expiresAt: 0}
          }
        })
      });

      return wixClient;
}

