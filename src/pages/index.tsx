import Image from 'next/future/image'
import { HomeContainer, Product } from '../styles/pages/home'
import camiseta1 from '../assets/camisetas/Camisa-Maratona 1.png'
import camiseta2 from '../assets/camisetas/IgniteLab-T-shirt 1.png'
import camiseta3 from '../assets/camisetas/Igniter-abord-2-t-shirt 1.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta1} alt="" width={520} height={480} />
        <footer>
          <strong>
            Camiseta
          </strong>
          <span>
            R$ 79,90
          </span>
        </footer>
      </Product>
      <Product>
        <Image src={camiseta2} alt="" width={520} height={480} />
        <footer>
          <strong>
            Camiseta
          </strong>
          <span>
            R$ 79,90
          </span>
        </footer>

      </Product>
      {/* <Product>
        <Image src={camiseta3} alt="" width={520} height={480} />
        <footer>
          <strong>
            Camiseta
          </strong>
        </footer>
        <span>
          R$ 79,90
        </span>
      </Product> */}
    </HomeContainer>
  )
}
