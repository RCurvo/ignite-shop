import { AppProps } from "next/app"
import Image from "next/future/image"
import { globalStyles } from "../styles/global"
import LogoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app";


globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={LogoImg} alt="Ignite shop" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

