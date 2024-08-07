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
} from '@chakra-ui/react';
import { RxChevronRight } from 'react-icons/rx';

const AuctionDetail = () => {
  return (
    <div className="px-4 max-w-screen-2xl flex flex-col mx-auto text-18px mb-8">
      <Breadcrumb className="py-4" spacing="8px" separator={<RxChevronRight />}>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">전체</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">카테고리</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink>경매 아이템 이름</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="bg-amber-100 flex gap-8">
        <section className="bg-amber-300 flex flex-col w-1/2">
          <div>이미지</div>
          <div>입찰 목록</div>
        </section>
        <section className="bg-amber-800 flex flex-col gap-4 w-1/2">
          <div className="flex gap-4">
            <h1>경매 아이템 이름</h1>
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
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <span>거래 방법</span>
              <div className="flex gap-2 text-16px">
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
            <div>
              사용 가능 포인트
              <span className="text-3xl">200,000P</span>
            </div>
            <form className="w-full flex border border-black">
              <input
                type="text"
                placeholder="입찰하실 포인트를 적어주세요."
                className="w-4/5 h-8 border-r border-black"
              />
              <button className="w-1/5 h-8 bg-white outline-black">입찰하기</button>
            </form>
            <button className="w-full h-8 bg-black text-white">즉시 구매</button>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-center py-4">
              <span className="text-4xl">Q&A</span>
              <span>질문 작성하기</span>
            </div>
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
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AuctionDetail;
