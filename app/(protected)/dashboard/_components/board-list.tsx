import React from "react";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = [];

  if (!data.length && query.search) {
    return <div>Try searching something else</div>;
  }
  if (!data.length && query.favorites) {
    return <div>No Favorites</div>;
  }
  if (!data.length) {
    return <div>No boards found</div>;
  }
  return <div>{JSON.stringify(query)}</div>;
};

export default BoardList;
