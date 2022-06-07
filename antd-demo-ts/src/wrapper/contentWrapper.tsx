// import { Content } from "antd/lib/layout/layout";
import { Container } from "react-bootstrap";
import RootRouting from "../routing";

const ContentWrapper = () => {
    return(
    
      <Container>
      <div className="site-layout-content">
          <RootRouting/>
      </div>
      </Container>
    );
}
export default ContentWrapper