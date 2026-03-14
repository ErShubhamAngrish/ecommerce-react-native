import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  CardContainer,
  ImageWrapper,
  SaleBadge,
  SaleText,
  ProductImage,
  WishlistButton,
  InfoSection,
  Title,
  PriceRow,
  Price,
  OriginalPrice,
  DiscountText,
  RatingContainer,
  RatingText,
} from './ProductCardStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
type Props = {
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating?: number;
  onPress?: () => void;
};

const ProductCard = ({
  title,
  image,
  price,
  originalPrice,
  discount,
  rating,
  onPress,
}: Props) => {
  return (
    <CardContainer onPress={onPress} activeOpacity={0.9}>
      <ImageWrapper>
        {discount && (
          <SaleBadge>
            <SaleText>SALE</SaleText>
          </SaleBadge>
        )}

        <ProductImage source={{ uri: image }} resizeMode="cover" />

        <WishlistButton>
          <Ionicons name="heart-outline" size={18} color="#333" />
        </WishlistButton>
      </ImageWrapper>

      <InfoSection>
        <Title numberOfLines={2}>{title}</Title>

        <PriceRow>
          <Price>₹{price}</Price>

          {originalPrice && <OriginalPrice>₹{originalPrice}</OriginalPrice>}
        </PriceRow>

        {discount && <DiscountText>{discount}% off</DiscountText>}

        {rating && (
          <RatingContainer>
            <RatingText>{rating}</RatingText>
          </RatingContainer>
        )}
      </InfoSection>
    </CardContainer>
  );
};

export default ProductCard;
