import styled from "styled-components/native";


interface BottomButtonProps {
  safeBottom : number;
}

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 16px;
  align-items: center;
`;

export const HeaderIcons = styled.View`
  flex-direction: row;
`;

export const IconWrapper = styled.TouchableOpacity`
  margin-left: 16px;
`;

export const CarouselImage = styled.Image`
  width: 100%;
  height: 420px;
`;

export const DotsContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 10px 0;
`;

export const Dot = styled.View<{ active: boolean }>`
  height: 8px;
  width: 8px;
  border-radius: 4px;
  margin: 0 4px;
  background-color: black;
  opacity: ${(props) => (props.active ? 1 : 0.3)};
`;

export const InfoContainer = styled.View`
  padding: 0px 16px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
`;

export const PriceRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const Price = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const OriginalPrice = styled.Text`
  margin-left: 8px;
  text-decoration-line: line-through;
  color: #888;
`;

export const Discount = styled.Text`
  margin-left: 8px;
  color: green;
  font-weight: 600;
`;

export const BottomBar = styled.View<BottomButtonProps>`
  position: absolute;
  bottom: ${props => (props.safeBottom || 0) + 5}px;
  width: 100%;
  padding:0px 15px;
  flex-direction: row;
  border-top-width: 1px;
  border-color: #eeeeee;
`;

export const CartButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const CartText = styled.Text`
  margin-left: 6px;
  color: #7b1fa2;
  font-weight: 600;
`;

export const BuyButton = styled.TouchableOpacity`
  flex: 1;
  background-color: #7b1fa2;
  justify-content: center;
  align-items: center;
`;

export const BuyText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;