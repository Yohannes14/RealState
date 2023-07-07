import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

const Footer = () => {
  const [Year, setYear] = useState();
  useEffect(() => {
    const getYear = () => setYear(new Date().getFullYear());
    getYear();
  }, []);
  return (
    <Box
      textAlign="center"
      p="5"
      color="gray.500"
      borderTop="3px"
      borderColor="gray.100"
      marginTop={12}
    >
      All rights Reserved | Copyright &copy; {Year}
    </Box>
  );
};

export default Footer;
