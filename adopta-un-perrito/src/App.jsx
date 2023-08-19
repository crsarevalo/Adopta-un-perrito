import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./assets/Components/Footer";
import Header from "./assets/Components/Header";
import MyCard from "./assets/Components/MyCard";
import Tags from "./assets/Components/Tags";
import Img1 from "./assets/Img/perro1.jpg";
import Img2 from "./assets/Img/perro2.jpg";
import Img3 from "./assets/Img/perro3.jpg";
import Img4 from "./assets/Img/perro4.jpg";

function App() {
  return (
    <>
      <Header title="Adopta un perrito!" />
      <section className="cards">
        <MyCard
          name="José"
          image={Img1}
          description={
            "hola soy josé, Tengo mucha energía pero tambien me gusta dormir!"
          }
          raza="Jack Russel"
          color="warning"
        />
        <MyCard
          name="María"
          image={Img2}
          description={
            "hola soy María, tengo muy buen oido y muy buen olfato, puedo acompañarte en tus aventuras al aire libre!"
          }
          raza="Mestiza"
          color="success"
        />
        <MyCard
          name="Juan"
          image={Img3}
          description={
            "hola soy Juan, soy nervioso y un poco escandaloso, es mi mecanismo de defensa por ser chiquito"
          }
          raza="Maltes"
          color="info"
        />
        <MyCard
          name="Maui"
          image={Img4}
          description={
            "hola soy Maui, soy un poco cascarrabias y un poco odioso, no me gustan mucho los perros, me llevo mejor con humanos. Quizás rompo algunas cosas pero no romperé tu corazon"
          }
          raza="Mestizo de Pitbull"
          color="secondary"
        />
      </section>
      <Footer text="Explora nuestra galería de adopción de perros para encomntrar a tu compañero perfecto. Tenemos variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale un segunda oportunidad. Encuentra tu compañero peludo para siempre." />
    </>
  );
}

export default App;
