import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa'
import {Button} from '../../globalStyles'
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrapper,
    SocialLogo,
    SocialIcon,
    SocialIconLink,
    SocialIcons,
    WebsiteRights
} from './Footer.elements'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Манай бүтээгдэхүүнийг сонирхож байвал бидэнтэй холбоо барина уу.
                </FooterSubHeading>
                <FooterSubText>
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email" />
                        <Button fontBig>Мэдээлэл авах</Button>
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Бидний тухай</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to=''>Testimonials</FooterLink>
                        <FooterLink to=''>Careers</FooterLink>
                        <FooterLink to=''>Investors</FooterLink>
                        <FooterLink to=''>Terms of Services</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Холбоо барих</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to=''>Testimonials</FooterLink>
                        <FooterLink to=''>Careers</FooterLink>
                        <FooterLink to=''>Investors</FooterLink>
                        <FooterLink to=''>Terms of Services</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Бичлэг</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to=''>Testimonials</FooterLink>
                        <FooterLink to=''>Careers</FooterLink>
                        <FooterLink to=''>Investors</FooterLink>
                        <FooterLink to=''>Terms of Services</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Цахим хаяг</FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to=''>Testimonials</FooterLink>
                        <FooterLink to=''>Careers</FooterLink>
                        <FooterLink to=''>Investors</FooterLink>
                        <FooterLink to=''>Terms of Services</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                
            </FooterLinksContainer>
            <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo to="/">
                            <SocialIcon />
                            ULTRA
                        </SocialLogo>
                        <WebsiteRights>ULTRA 2020</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
