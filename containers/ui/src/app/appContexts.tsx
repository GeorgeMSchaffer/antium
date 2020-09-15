export type User = {  
 id: number;  
 fullName: string;  
 firstName: string;  
 lastName: string;  
 isAdmin: boolean;  
 logout: () =>void;  
 };  
 
‍export type Company = {  
 name: string;  
 location: {    
 street: string;
 city: string;    
 state: string;  };  
‍};