import React, { useState, useRef } from 'react';
import { FlatList, Dimensions, ScrollView, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Container,
  Header,
  HeaderIcons,
  IconWrapper,
  CarouselImage,
  DotsContainer,
  Dot,
  InfoContainer,
  Title,
  PriceRow,
  Price,
  OriginalPrice,
  Discount,
  BottomBar,
  CartButton,
  CartText,
  BuyButton,
  BuyText,
} from '../screen/ProductDetailedStyles';
import { useProduct } from '../hooks/useProduct';

const { width } = Dimensions.get('window');

const images = [
  'https://picsum.photos/800/1000',
  'https://picsum.photos/801/1000',
  'https://picsum.photos/802/1000',
];

export default function ProductDetailScreen() {
  const { data, isLoading } = useProduct(1);

  const insets = useSafeAreaInsets();

  console.log('ProductData', data);

  const [activeIndex, setActiveIndex] = useState(0);

  const onViewRef = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  });

  const viewConfigRef = useRef({
    viewAreaCoveragePercentThreshold: 50,
  });

  if (isLoading) {
    return <Text>Loading</Text>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        {/* HEADER */}

        {/* IMAGE CAROUSEL */}

        <FlatList
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => i.toString()}
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          renderItem={({ item }) => (
            <CarouselImage
              source={{ uri: item }}
              style={{ width }}
              resizeMode="cover"
            />
          )}
        />

        {/* DOTS */}

        <DotsContainer>
          {images.map((_, i) => (
            <Dot key={i} active={i === activeIndex} />
          ))}
        </DotsContainer>

        {/* PRODUCT INFO */}

        <InfoContainer>
          <Title>{data.title}</Title>

          <PriceRow>
            <Price>₹499</Price>
            <OriginalPrice>₹999</OriginalPrice>
            <Discount>50% OFF</Discount>
          </PriceRow>
          <Title>Free Delievery</Title>
        </InfoContainer>
      </ScrollView>

      {/* BOTTOM BAR */}

      <BottomBar safeBottom={insets.bottom}>
        <CartButton>
          <Icon name="cart-outline" size={20} color="#7B1FA2" />
          <CartText>Add to Cart</CartText>
        </CartButton>

        <BuyButton>
          <BuyText>Buy Now</BuyText>
        </BuyButton>
      </BottomBar>
    </SafeAreaView>
  );
}
