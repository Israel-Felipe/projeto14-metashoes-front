import TopBar from "../../components/TopBar/TopBar";

import { View, Text, Container } from "./styles";

export default function ConstructionPage() {
  return (
    <>
      <View>
        <TopBar />
        <Container>
          <Text>Essa rota está em contrução, por favor volte mais tarde.</Text>
        </Container>
      </View>
    </>
  );
}
