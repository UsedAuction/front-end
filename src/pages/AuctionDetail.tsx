const AuctionDetail = () => {
  return (
    <div className="px-6">
      <div className="my-4">전체 &gt; 카테고리 &gt; 경매 아이템 이름</div>
      <div className="bg-slate-400 flex gap-8">
        <section className="bg-slate-200 flex flex-col w-1/2">
          <div>이미지</div>
          <div>입찰 목록</div>
        </section>
        <section className="bg-slate-600 flex flex-col gap-4 w-1/2">
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
              <div className="flex gap-2">
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
        </section>
      </div>
    </div>
  );
};

export default AuctionDetail;
