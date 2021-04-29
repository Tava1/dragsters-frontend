import Header from '../../components/modules/Header';
import Footer from '../../components/modules/Footer';
import Input from '../../components/elements/Input';
import Button from '../../components/elements/Button';

export default function Login() {

  const handleNewRegister = async (data) => {
    console.log(data)
  };

  return (
    <>
      <Header />
      <main>
        <h1>Tela de login</h1>
      </main>
      <Footer />
    </>
  )
}