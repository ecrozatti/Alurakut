import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';

function ProfileSidebar(props) {
   return(
      <Box>
         <img src={`https:///github.com/${props.githubUser}.png`} alt="Imagem GitHub" style={{ borderRadius: '8px' }}/>
      </Box> 
   );
}

export default function Home() {
   const githubUser = 'ecrozatti';
   const favoritesUsers = [ 'omariosouto','juunegreiros','diego3g','filipedeschamps','felipefialho','marcobrunodev' ];

   return (
      <>
         <AlurakutMenu />
         <MainGrid>
            <div className='profileArea' style={{ gridArea: 'profileArea' }}>
               <ProfileSidebar githubUser={githubUser} />
            </div>

            <div className='welcomeArea' style={{ gridArea: 'welcomeArea' }}>
               <Box>
                  <h1 className="title">
                     Bem vindo(a)
                  </h1>

                  <OrkutNostalgicIconSet />
               </Box>
            </div>

            <div className='profileRelationsArea' style={{ gridArea: 'profileRelationsArea' }}>
               <ProfileRelationsBoxWrapper>
                  <h2 className="smallTitle">
                     Pessoas da comunidade ({favoritesUsers.length})
                  </h2>

                  <ul>
                     {favoritesUsers.map((user) => {
                        return (
                           <li>
                              <a href={`/users/${user}`} key={user}>
                                 <img src={`https://github.com/${user}.png`} alt="" />
                                 <span>{user}</span>
                              </a>
                           </li>
                        )
                     })}
                  </ul>
               </ProfileRelationsBoxWrapper>
            </div>
         </MainGrid>
      </>
   )
}
