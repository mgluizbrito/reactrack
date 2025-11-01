import { Box, Typography, Button } from "@mui/material"

import Man from "../../../../assets/jpg/fit/man-fit.jpg"
import Woman from "../../../../assets/jpg/fit/woman-fit.jpg"

import { useState } from "react"

const HeroBanner: React.FC = () => {

    const [gender, setGender] = useState(false)

    const handleClick = () => {
        setGender((prevGender) => !prevGender)
    }

    return (
        <Box
            sx={{
                mt: { lg: '300px', xs: '70px' },
                ml: { sm: '50px' }
            }}
            position='relative'
            p='20px'
        >
            <Typography color="#ff2625" fontWeight='600' fontSize='26px' marginTop='-10rem'>
                Clube Fitness
            </Typography>
            <Typography fontWeight={700}
                sx={{
                    fontSize: { lg: '44px', xs: '40px' }
                }}
                mb="23px" mt="30px">
                Soe, Sorria <br /> e Repita
            </Typography>
            <Typography fontSize="22px" lineHeight="35px" mb={4}>
                Confira os exercícios mais efetivos
            </Typography>
            <Button variant='contained' color="error" href="#exercises"
                sx={{
                    backgroundColor: "#ff2625", padding: "19px"
                }}>Explorar Exercícios
            </Button>
            <Typography
                fontWeight={600}
                color="#ff2625"
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs: 'none' }
                }}
                fontSize="200px"
            >
                Exercite-se
            </Typography>
            <img onClick={handleClick} style={{ borderRadius: "30px", cursor: "pointer" }} src={gender ? Man : Woman} alt="banner"
                className="hero-banner-img" 
            />
        </Box>
    )

}

export default HeroBanner