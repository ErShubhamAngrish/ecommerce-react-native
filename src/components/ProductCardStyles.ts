import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export  const CardContainer = styled(TouchableOpacity)`
  width: 48%;
  background: #fff;
  border-radius: 12px;
  padding:10px;
  overflow: hidden;
  margin-bottom: 14px;
  elevation: 2;
`;

export  const ImageWrapper = styled.View`
  width: 100%;
  height: 180px;
`;

export  const ProductImage = styled.Image`
  width: 100%;
  height: 100%;
`;

export  const SaleBadge = styled.View`
  position: absolute;
  top: 8px;
  left: 8px;
  background: #ff3b30;
  padding: 3px 8px;
  border-radius: 4px;
  z-index: 2;
`;

export  const SaleText = styled.Text`
  color: white;
  font-size: 10px;
  font-weight: bold;
`;

export  const WishlistButton = styled.TouchableOpacity`
  position: absolute;
  top: 8px;
  right: 8px;
  background: white;
  padding: 6px;
  border-radius: 20px;
  elevation: 2;
`;

export const InfoSection = styled.View`
  padding: 8px;
`;

export const Title = styled.Text`
  font-size: 13px;
  color: #333;
`;

export const PriceRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
`;

export const Price = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #000;
`;

export const OriginalPrice = styled.Text`
  font-size: 12px;
  color: #888;
  text-decoration: line-through;
  margin-left: 6px;
`;

export const DiscountText = styled.Text`
  font-size: 12px;
  color: green;
  margin-top: 2px;
`;

export const RatingContainer = styled.View`
  margin-top: 4px;
  background: #1db954;
  align-self: flex-start;
  padding: 2px 6px;
  border-radius: 4px;
`;

export const RatingText = styled.Text`
  color: white;
  font-size: 11px;
`;