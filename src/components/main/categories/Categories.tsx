import {
  Grid,
  GridItem,
  Box,
  Flex,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
  Image,
  Text,
} from '@chakra-ui/react';
import men_cloth from '../../../assets/image/category/men_cloth.png';
import { IoChevronDownSharp } from 'react-icons/io5';

const data = [
  '남성의류',
  '여성의류',
  '키덜트',
  '가전제품',
  '도서',
  '유아용품',
  '굿즈',
  '식품',
  '뷰티',
  '반려용품',
  '가구',
  '스포츠',
  '생활용품',
  '식물',
  '악세사리',
  '기타',
];

export default function Categories() {
  return (
    <>
      <div className="block sm:hidden p-6 w-full">
        <Menu isLazy>
          <MenuButton as={Button} rightIcon={<IoChevronDownSharp />} borderColor="gray.300">
            Select Option
          </MenuButton>
          <MenuList maxH="200px" overflowY="auto">
            {' '}
            {/* 최대 높이와 스크롤 설정 */}
            {data.map((item, i) => (
              <MenuItem key={i} value={`option${i + 1}`}>
                <Flex align="center">
                  <Image src={men_cloth} alt="" boxSize="2rem" mr="12px" />
                  <Text>{item}</Text>
                </Flex>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>
      <Box
        className="hidden sm:block"
        width={'100%'}
        minWidth={{ base: '100%', md: '700px' }}
        maxWidth={{ base: '800px', lg: '1200px' }}
        margin="55px auto 0"
        padding={{ base: '0px 25px 0px 55px', md: '0px 50px' }}
      >
        <Grid
          templateColumns={{ base: 'repeat(4, 1fr)', md: 'repeat(6, 1fr)', lg: 'repeat(8, 1fr)' }}
          gap={{ base: '6', md: '8', lg: '12' }}
        >
          {data.map((data, i) => {
            return (
              <GridItem key={i} w="100%" h="10">
                <Flex align="center">
                  <img src={men_cloth} alt="남성의류 로고" className="w-8 lg:w-9 xl:w-10 mr-2" />
                  <span className="flex-shrink-0 text-sm lg:text-md">{data}</span>
                </Flex>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
