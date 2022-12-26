let token = 'd0660ef9a696c0ec6ab9a95449c75cf4486941325379f24c';

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://lean-wiggly-smell.glitch.me/api/whiskeys`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://lean-wiggly-smell.glitch.me/api/whiskeys`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
		},
    
        update: async (id:string, data:any = {}) => {
            const response = await fetch(`https://lean-wiggly-smell.glitch.me/api/whiskeys/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
        },
    
        delete: async(id:string) => {
            const response = await fetch(`https://lean-wiggly-smell.glitch.me/api/whiskeys/${id}`,{
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                }
            })
        }
    }