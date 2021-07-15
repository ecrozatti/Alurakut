import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';

export default function Home() {
  return (
     <MainGrid>
         <div className='profileArea' style={{ gridArea: 'profileArea' }}>
            <Box>
               Imagem
            </Box>
            <img src="https:///github.com/ecrozatti.png" alt="Imagem GitHub" />
        </div>

        <div className='welcomeArea' style={{ gridArea: 'welcomeArea' }}>
            <Box>
               Bem vindo
            </Box>
        </div>

        <div className='profileRelationsArea' style={{ gridArea: 'profileRelationsArea' }}>
            <Box>
            Comunidades
            </Box>
        </div>
     </MainGrid>
  )
}
