import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';

function ProfileSidebar(props) {
   return(
      <Box>
         <img src={`https:///github.com/${props.githubUser}.png`} alt="Imagem GitHub" style={{ borderRadius: '8px' }}/>
      </Box>
   );
}

export default function Home() {
   const githubUser = 'ecrozatti';

   return (
      <MainGrid>
         <div className='profileArea' style={{ gridArea: 'profileArea' }}>
            {/* <ProfileSidebar githubUser={githubUser} /> */}
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
