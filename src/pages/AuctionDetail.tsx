import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaUserCheck } from 'react-icons/fa';
import { RxChevronRight } from 'react-icons/rx';

const imageList = [1, 2, 3, 4, 5, 6];

export default function AuctionDetail() {
  const [imageSet, setImageSet] = useState(1);

  const handleClick = (ele: number) => {
    setImageSet(ele);
  };

  return (
    <div className="px-6 max-w-screen-xl flex flex-col mx-auto text-xm mb-24">
      <Breadcrumb className="py-4 px-6" spacing="8px" separator={<RxChevronRight />}>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">전체</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">카테고리</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>경매 아이템 이름</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="flex gap-6 max-lg:flex-col items-center">
        <section className="flex flex-col w-1/2 px-6 gap-6">
          <div className="flex gap-3">
            <ul className="flex flex-col gap-2">
              {imageList.map((ele, idx) => (
                <li
                  key={idx}
                  onClick={() => handleClick(ele)}
                  className="w-16 h-20 flex items-center justify-center bg-slate-400 cursor-pointer"
                >
                  {ele}
                </li>
              ))}
            </ul>
            <div className="w-full">
              <div className="bg-slate-600 aspect-4/5 flex items-center justify-center">
                {imageSet}
              </div>
            </div>
          </div>
          <div className="w-480px ml-auto">
            <List spacing={3} className="p-6 border border-black">
              <ListItem className="flex justify-between">
                <div>
                  <ListIcon as={FaUserCheck} color="green.500" />
                  dsad*** - 95,000원 입찰 하셨습니다.
                </div>
                <span className="text-sm">1시간 전</span>
              </ListItem>
              <ListItem className="flex justify-between">
                <div>
                  <ListIcon as={FaUserCheck} color="green.500" />
                  dsad*** - 95,000원 입찰 하셨습니다.
                </div>
                <span className="text-sm">1시간 전</span>
              </ListItem>
              <ListItem className="flex justify-between">
                <div>
                  <ListIcon as={FaUserCheck} color="green.500" />
                  dsad*** - 95,000원 입찰 하셨습니다.
                </div>
                <span className="text-sm">1시간 전</span>
              </ListItem>
              <ListItem className="flex justify-between">
                <div>
                  <ListIcon as={FaUserCheck} color="green.500" />
                  dsad*** - 95,000원 입찰 하셨습니다.
                </div>
                <span className="text-sm">1시간 전</span>
              </ListItem>
              <ListItem className="flex justify-between">
                <div>
                  <ListIcon as={FaUserCheck} color="green.500" />
                  dsad*** - 95,000원 입찰 하셨습니다.
                </div>
                <span className="text-sm">1시간 전</span>
              </ListItem>
              <ListItem className="flex justify-between">
                <div>
                  <ListIcon as={FaUserCheck} color="green.500" />
                  dsad*** - 95,000원 입찰 하셨습니다.
                </div>
                <span className="text-sm">1시간 전</span>
              </ListItem>
            </List>
          </div>
        </section>
        <section className="flex flex-col gap-6 w-1/2 px-6">
          <div className="flex gap-4 items-center pt-4">
            <h1 className="text-3xl">경매 아이템 이름</h1>
            <span>남은 기간</span>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-2">
              <span>현재 입찰가</span>
              <span>95,000원</span>
            </div>
            <div className="flex gap-2">
              <span>즉시 구매가</span>
              <span>100,000원</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span>상품이름</span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae dolore facilis
              blanditiis, iure amet officia vero odit, nihil, quia sunt est? Ut architecto dolor
              neque laborum. Praesentium eveniet culpa inventore.
            </span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae dolore facilis
              blanditiis, iure amet officia vero odit, nihil, quia sunt est? Ut architecto dolor
              neque laborum. Praesentium eveniet culpa inventore.
            </span>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <span>거래 방법</span>
              <div className="flex gap-2 text-sm">
                <button className="outline outline-black text-white bg-black py-1 px-4">
                  택배 거래 / 착불
                </button>
                <button className="outline text-stone-400 py-1 px-4">직거래 가능</button>
                <button className="outline text-stone-400 py-1 px-4">둘다 가능</button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span>제품 상태</span>
              <div className="flex gap-2">
                <div>별점</div>
                <div>(3.5 / 5)</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-3">
            <div className="flex gap-4 items-end">
              <span className="text-sm">사용 가능 포인트</span>
              <span className="text-xl">200,000P</span>
            </div>
            <form className="w-full h-10 flex border border-black">
              <input
                type="text"
                placeholder="입찰하실 포인트를 적어주세요."
                className="w-4/5 border-r border-black p-3"
              />
              <button className="w-1/5 bg-white outline-black">입찰하기</button>
            </form>
            <button className="w-full h-10 bg-black text-white">즉시 구매</button>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-end py-4">
              <span className="text-4xl">Q&A</span>
              <span>질문 작성하기</span>
            </div>
            <div className="h-64 overflow-y-scroll no-scrollbar">
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Section 1 title - 아이디1**
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Section 2 title - 아이디2**
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Section 2 title - 아이디3**
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Section 2 title - 아이디3**
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        Section 2 title - 아이디3**
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
