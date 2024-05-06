"use client";
import { useOrganizationList } from "@clerk/clerk-react";
import React from "react";
import Item from "./item";

const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  if (!userMemberships.data?.length) return null;
  return (
    <ul className="space-y-4">
      {userMemberships.data.map(({ organization: { id, imageUrl, name } }) => {
        return <Item key={id} id={id} imageUrl={imageUrl} name={name} />;
      })}
    </ul>
  );
};

export default List;
