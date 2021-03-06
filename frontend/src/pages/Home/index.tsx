import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <NavBar />
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">DEV Vendas</h1>
          <p className="lead">
            Analise o desempenho das suas vendas por diferentes perspectivas</p>
          <hr />
          <p>Esta aplicação consiste em exibir um Dashboard a partir de dados fornecidos por um backend construído com Spring Boot.</p>
          <Link className="btn btn-warning btn-lg=" to="/dashboard">
              Acessar o Dashboard
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
