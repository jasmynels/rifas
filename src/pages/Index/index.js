import Header from '../../components/Header'
import Prizes from '../../components/Prizes'
import Winners from '../../components/Winners'
import Questions from '../../components/Questions'
import Footer from '../../components/Footer'


export default function Index() {
  return (
    <div>
      <Header />
      <Prizes />
      <Winners />
      <Questions />
      <div className='questions-more'> 
        <a href="/contato"> ENTRE EM CONTATO </a>
      </div>
      <Footer />
    </div>
  );
}
