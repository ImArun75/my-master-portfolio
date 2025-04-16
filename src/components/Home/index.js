
import Header from '../Header'
import ProfileSection from '../ProfileSection'
import SkillsSection from '../SkillsSection'
import Footer from '../Footer'
import './index.css'

const Home = () => {
    
    return (
        <>
            <Header />
            <div className='home-gb-contaienr'>
                <ProfileSection />
                <SkillsSection />
                <Footer />
            </div>
        </>
    )
}


export default Home