import TopBar from "../../components/TopBar/TopBar";
import creditCard from "../../assets/img/credit-card.svg";

import {
    Button, 
    Container, 
    CreditCard, 
    Form, 
    View, 
    ViewWhite
} from "./styles";

export default function PaymentPage() {
    return(
        <View>
            <TopBar />
            <ViewWhite>
            </ViewWhite>
            <Form>
                <Container>
                    <label htmlFor="cardNumber">Número do cartão:</label>
                    <input type="text" name="cardNumber" id="cardNumber" required />
                    <span>
                        <div>
                            <label htmlFor="validThru">Data de validade:</label>
                            <input type="text" name="validThru" id="validThru" required />
                        </div>
                        <div>
                            <label htmlFor="cvv">CVV:</label>
                            <input type="text" name="cvv" id="cvv" required />
                        </div>
                    </span>
                    <label htmlFor="name">Nome do titular do cartão:</label>
                    <input type="text" name="name" id="name" required />
                </Container>
                <div>
                    <Button>
                        Comprar Agora <ion-icon name="arrow-forward-circle"></ion-icon>
                    </Button>
                </div>
            </Form>
            <CreditCard>
                <img src={creditCard} alt="credit-card" />
            </CreditCard>
        </View>
    );
}