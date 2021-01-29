import React from 'react';
import { Button } from '../../globalStyles';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Бидний үйлчилгээ</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Цахилгаан Тоолуур</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>нэмэлт мэдээлэл</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>нэмэлт мэдээлэл</PricingCardFeature>
                  <PricingCardFeature>нэмэлт мэдээлэл</PricingCardFeature>
                  <PricingCardFeature>нэмэлт мэдээлэл</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Дэлгэрэнгүй</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Усны тоолуур</PricingCardPlan>
                <PricingCardCost>$299.99</PricingCardCost>
                <PricingCardLength>нэмэлт мэдээлэлth</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>нэмэлт мэдээлэл</PricingCardFeature>
                  <PricingCardFeature>нэмэлт мэдээлэл</PricingCardFeature>
                  <PricingCardFeature>нэмэлт мэдээлэл</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Дэлгэрэнгүй</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Суурилуулалт</PricingCardPlan>
                <PricingCardCost>$999.99</PricingCardCost>
                <PricingCardLength>нэмэлт мэдээлэл</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>нэмэлт мэдээлэл</PricingCardFeature>
                  <PricingCardFeature>нэмэлт мэдээлэл</PricingCardFeature>
                  <PricingCardFeature>нэмэлт мэдээлэл</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Дэлгэрэнгүй</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;