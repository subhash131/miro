"use client";
import { useOrganizationList } from "@clerk/clerk-react";
import React from "react";

const List = () => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });
  if (!userMemberships.data?.length) return null;
  return (
    <ul className="space-y-4">
      {userMemberships.data.map((mem) => {
        return <p key={mem.id}>{mem.organization.name}</p>;
      })}
    </ul>
  );
};

export default List;
