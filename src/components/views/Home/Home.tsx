// img
import Header from "components/shared/Header"
// components
import UserBox from "./components/UserBox"
import Button from "components/shared/Button"
// styles
import { WrapperHeader, WrapperUsers, WrapperButtons } from "./styles"

const Home = () => (
  <div>
    <Header />
    <div>
      <WrapperHeader>
        <h1>Donations</h1>
        <div>Select</div>
      </WrapperHeader>

      <WrapperUsers>
        <UserBox />
        <UserBox />
        <UserBox />
      </WrapperUsers>

      <WrapperButtons>
        <Button>prev</Button>
        <Button>next</Button>
      </WrapperButtons>
    </div>
  </div>
)

export default Home
