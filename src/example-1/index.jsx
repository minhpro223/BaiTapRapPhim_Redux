import Header from "./header";
import NAV from "./nav";
import Content from "./content";
import Footer from "./footer";
function Example1() {
  return (
  <div>
    <Header />
    <div style={{display:"flex"}}>
    <NAV />
    <Content />
    </div>
    <Footer />
  </div>
  );
}
export default Example1;
