"use client";
import { CreateOrganization, OrganizationProfile } from "@clerk/clerk-react";
import React from "react";

const CreateOrganizationComponent = () => {
  return <CreateOrganization />;
};
const OrganizationProfileComponent = () => {
  return <OrganizationProfile />;
};

export { CreateOrganizationComponent, OrganizationProfileComponent };
