import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NoticiaBras from "./components/noticias/model/brasil";
import NoticiaNeg from "./components/noticias/model/negocios";
import NoticiaTec from "./components/noticias/model/tecnologia";
import NoticiaEntre from "./components/noticias/model/entretenimento";
import NoticiaSau from "./components/noticias/model/saúde";


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/brasil" element={<NoticiaBras/>} />
          <Route path="/negocios" element={<NoticiaNeg/>} />
          <Route path="/tecnologia" element={<NoticiaTec/>} />
          <Route path="/entretenimento" element={<NoticiaEntre/>} />
          <Route path="/saude" element={<NoticiaSau/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
