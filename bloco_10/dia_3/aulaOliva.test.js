const getUserRepositoryInfoFromUsername = required('./aulaOliva')
const fetch = require('node-fetch');

jest.mock()

describe('when calling getUserRepositoryInfoFromUsername function', () => {
    it('should parse the response into an object with name, company, twitter and location', async () => {
        expect.assertions(1);

        //Vou fornecer uma implementação falsa para a função fetch
        fetch.mockImplementation(async () => {
            return {
                json: async () => {
                    return {
                        name: 'Gabriel Oliva',
                        company: '@betrybe',
                        twitter: 'gfpoliva',
                        location: 'Belo Horizonte'
                    }
                } 
            } 
            
        });
        
        const repositoryInfo = await getUserRepositoryInfoFromUsername('gfoliva');

        expect(repositoryInfo).toEqual({
            name: 'Gabriel Oliva',
            company: '@betrybe',
            twitter: 'gfpoliva',
            location: 'Belo Horizonte'
        });
    
    
    });

        
});