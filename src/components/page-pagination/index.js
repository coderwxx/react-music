import React, { memo } from "react";
import { Pagination } from "antd";
import { PaginationWrapper } from "./style";

const XXPagePagination = memo((props) => {
  const { pageSize, current, total, handlePageChange } = props;

  // other functions

  const itemRender = (page, type, originalElement) => {
    if (type === "prev") {
      return <button className="control prev"> &lt;上一页</button>;
    } else if (type === "next") {
      return <button className="control next">&gt;下一页</button>;
    }
    return originalElement;
  };
  return (
    <PaginationWrapper>
      <Pagination
        pageSize={pageSize}
        current={current}
        total={total}
        showSizeChanger={false}
        onChange={handlePageChange}
        itemRender={itemRender}
      />
    </PaginationWrapper>
  );
});

export default XXPagePagination;
