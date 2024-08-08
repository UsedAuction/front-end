import { Button } from '@chakra-ui/react';
import { RxTextAlignJustify } from 'react-icons/rx';

export default function Nav() {
  return (
    <div className="flex justify-between items-center h-[90px] px-10">
      <div className="text-3xl font-bold">Logo</div>
      <RxTextAlignJustify className="lg:hidden" size={38} />
      <div className="hidden lg:block">
        <ul className="flex justify-between items-center font-semibold w-full gap-3">
          <li className="mr-4">알림</li>
          <li className="mr-4">최근 본 경매</li>
          <li className="mr-4">마이페이지</li>
          <li className="mr-4">로그아웃</li>
          <li>
            <Button colorScheme="blue" variant="outline">
              포인트 충전
            </Button>
          </li>
          <li>
            <Button colorScheme="blue" variant="solid">
              경매 만들기
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
