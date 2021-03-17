import Navigation from "../components/Navigation"

import styles from "../styles/pages/MainPage.module.scss"

export default function MainPage() {
  return (
    <>
      <Navigation />

      <main className={styles.banner}>
        <div className={styles.bannerLeft}>
          <a href="#"><img src="/assets/images/banner_rotiform.jpg" alt="bmw azul" /></a>
          <div className={styles.logoLeft}>
            <a href="#"><img src="/assets/images/Rotiform_logo.png" alt="logotipo Rotiform" /></a>
          </div>
        </div>
        <div className={styles.bannerCenter}>
          <a href="#"><img src="/assets/images/banner_fifteen52.jpg" alt="jeep no deserto" /></a>
          <div className={styles.logoCenter}>
            <a href="#"><img src="/assets/images/Fifteen52_logo.png" alt="logotipo Fifteen52" /></a>
          </div>
        </div>
        <div className={styles.bannerRight}>
          <a href="#"><img src="/assets/images/banner_vossen.jpg" alt="Ferrari cinza" /></a>
          <div className={styles.logoRight}>
            <a href="#"><img src="/assets/images/vossen_logo.png" alt="logotipo Vossen" /></a>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentTop}>
            <div className={styles.informationsTop}>
              <span>LHR-F</span>
              <h2>DESIGN AUDACIOSO E ARROJADO</h2>
              <p>A LHR-F é forjada para quem busca muito mais do que apenas uma roda, ela foi feita para quem busca ser singular, para quem tem personalidade unica e feita para que no meio da multidão ela chame a atenção.</p>
            </div>
            <div className={styles.wheelDetails}>
              <div className={styles.wheelImg}>
                <img src="/assets/images/Roda_rotiform.png" alt="Roda Rotiform" />
              </div>
              <div className={styles.context}>
                <div><span>LHR</span><h2>LHR-F</h2></div>
                <div><span><strong>R$2.000.00</strong>/cada</span><h2>ROTIFORM</h2></div>
              </div>
            </div>
          </div>
          <div className={styles.contentCenter}>
            <div className={styles.informationsCenter}>
              <span>Turbomac HD</span>
              <h2>COM O SUCESSO CONTÍNUO DO NOSSO DESIGN TURBOMAC</h2>
              <p>Pensamos que era hora de a comunidade off-road merecer algo forte, leve e único. Então nos reunimos com Ken Block e decidimos que o Turbomac HD precisava se tornar uma realidade.</p>
            </div>
            <div className={styles.wheelDetails}>
              <div className={styles.wheelImg}>
                <img src="/assets/images/Roda_fifteen52.png" alt="Roda Fifteen52" />
              </div>
              <div className={styles.context}>
                <div><span>Turbomac</span><h2>TurboMac HD</h2></div>
                <div><span><strong>R$2.000.00</strong>/cada</span><h2>FIFTEEN52</h2></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentBottom}>
          <div className={styles.informationsBottom}>
            <span>EVO SERIES</span>
            <h2>O DESIGN ATEMPORAL ENCONTRA A FUNCIONALIDADE MODERNA</h2>
            <p>A sinfonia da estrutura monobloco da série R EVO com uma infinidade de estilos exclusivos, adaptando-se a qualquer coisa, desde seu hiper carro exótico até na aplicação em um caminhão fora de estrada.</p>
          </div>
          <div className={styles.wheelDetails}>
            <div className={styles.wheelImg}>
              <img src="/assets/images/Roda_vossen.png" alt="" />
            </div>
            <div className={styles.context}>
              <div><span>EVO-2R</span><h2>EVO SERIES</h2></div>
              <div><span><strong>R$2.000.00</strong>/cada</span><h2>VOSSEN</h2></div>
            </div>
          </div>
        </div>
      </main>

      <div>
        <a href="#">VER MAIS</a>
      </div>
    </>
  );
}
