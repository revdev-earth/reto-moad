// styles
import {
  WrapperUserBox,
  Name,
  DonationText,
  DonationNumber,
  Button,
} from "./styles"
// svg
import { ReactComponent as BackIcon } from "assets/back.svg"

const Src =
  "https://admin.freetour.com/images/tours/10180/free-nice-guided-tour-in-spanish-01.jpg"

const UserBox = () => (
  <WrapperUserBox>
    <img src={Src} alt="logo" />
    <Name>Lorrie Cardenosa</Name>
    <div>
      <DonationText>Total Donations</DonationText>
      <DonationNumber>143</DonationNumber>
    </div>
    <Button>
      <BackIcon />
    </Button>
  </WrapperUserBox>
)

export default UserBox
