import { StateStorage, createJSONStorage } from "zustand/middleware";

const firebaseUrl = 'https://zustand-storage-a8f42-default-rtdb.firebaseio.com/zustand';


const firebaseApi: StateStorage = {
    getItem: async function (name: string): Promise<string | null> {
        
        try {
            const data = await fetch(`${firebaseUrl}/${name}.json`).then( response => response.json() );
            return JSON.stringify(data);
        } catch (error) {
             throw error;
        }
        return data;
    },
    setItem: async function (name: string, value: string): Promise<void> {
        const data = await fetch(`${firebaseUrl}/${name}.json`,{
            method: 'PUT',
            body: value
        })
        .then( response => response.json() );
        console.log(data)
    },
    removeItem: function (name: string): void | Promise<void> {
        console.log('removeItem', name)
    }
}

export const firebaseStorage = createJSONStorage( () => firebaseApi)