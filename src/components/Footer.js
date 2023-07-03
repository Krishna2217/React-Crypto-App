import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import img1 from '../assets/1.png'
// const avatarSrc = 'img1';

const Footer = () => {
    return (
        <Box
        bgColor={"blackAlpha.900"}
        color={"whiteAlpha.700"}
        minH={"48"}
        px={"16"}
        py={["16", "8"]}
        >
        <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
            <VStack w={"full"} alignItems={["center", "flex-start"]}>
            <Text fontWeight={"bold"}>About Us</Text>
            <Text
                fontSize={"sm"}
                letterSpacing={"widest"}
                textAlign={["center", "left"]}
            >
            Stay ahead of the crypto game with our all-in-one app, offering
            real-time market data, seamless transactions, and comprehensive portfolio tracking for your digital investments
            </Text>
            </VStack>
            <VStack>
            <Avatar boxSize={"28"} mt={["4", "0"]} src={img1} />
            <Text>Our Founder</Text>
            </VStack>
        </Stack>
        </Box>
    );
};

export default Footer;