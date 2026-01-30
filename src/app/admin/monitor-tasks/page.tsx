"use client";
import { SearchInput } from "@/components/Buttons/InputSearch";
import { NonBgButton } from "@/components/Buttons/NonBgButton";
import { TAB_HEADER } from "@/styles/assets";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { CheckboxField } from "@/components/Fields/CheckboxField";
import { GlobalButton } from "@/components/Buttons/GlobalButton";

import logo from "../../../../public/images/mainBG.png"
import { StaticImageData } from "next/image";
import { AssignQATable } from "@/components/tables/AdminTable/AssignQATable";
import { CompletedTable } from "@/components/tables/AdminTable/CompletedTable";
import { FinalReviewTable } from "@/components/tables/AdminTable/FinalReviewTable";
import { InReviewTable } from "@/components/tables/AdminTable/InReviewTable";
import { OutstandingMonitorTaskTable } from "@/components/tables/AdminTable/OutstangMonitorTaskTable";

type EditMode = "cost" | "commission" | null;



const MonitorTasks = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);
  const [activeTab, setActiveTab] = useState<
    "outstanding" | "assignQA" | "inReview" | "finalReview" | "completed"
  >("outstanding");
  const outStandingTasks = [
    {
      id: 1,
      name: "SunnySkywalker",
      inspectionType: "10",
      status: "Accepted",
      requestDate: "10/05/2023",
      coId: "90217",
      address: "205 E 9th Street pella, IA 0219",
      city: "Greenwood",
      country: "Greenwood",
      state: "Florida",
      repId: "90217",
      repName: "Ricardo Diaz",
      isRushInspection: false,
    },
    {
      id: 2,
      name: "SunnySkywalker",
      inspectionType: "10",
      status: "Accepted",
      requestDate: "10/05/2023",
      coId: "90217",
      address: "205 E 9th Street pella, IA 0219",
      city: "Greenwood",
      country: "Greenwood",
      state: "Florida",
      repId: "90217",
      repName: "Laura Garcia",
      isRushInspection: true,
    },
    {
      id: 3,
      name: "SunnySkywalker",
      inspectionType: "10",
      status: "Not-Accepted",
      requestDate: "10/05/2023",
      coId: "90217",
      address: "205 E 9th Street pella, IA 0219",
      city: "Greenwood",
      country: "Greenwood",
      state: "Florida",
      repId: "90217",
      repName: "Ricardo Diaz",
      isRushInspection: false,
    },
    {
      id: 4,
      name: "SunnySkywalker",
      inspectionType: "10",
      status: "Accepted",
      requestDate: "10/05/2023",
      coId: "90217",
      address: "205 E 9th Street pella, IA 0219",
      city: "Greenwood",
      country: "Greenwood",
      state: "Florida",
      repId: "90217",
      repName: "Ricardo Diaz",
      isRushInspection: false,
    },
    {
      id: 5,
      name: "SunnySkywalker",
      inspectionType: "10",
      status: "Accepted",
      requestDate: "10/05/2023",
      coId: "90217",
      address: "205 E 9th Street pella, IA 0219",
      city: "Greenwood",
      country: "Greenwood",
      state: "Florida",
      repId: "90217",
      repName: "Laura Garcia",
      isRushInspection: true,
    },
    {
      id: 6,
      name: "SunnySkywalker",
      inspectionType: "10",
      status: "Accepted",
      requestDate: "10/05/2023",
      coId: "90217",
      address: "205 E 9th Street pella, IA 0219",
      city: "Greenwood",
      country: "Greenwood",
      state: "Florida",
      repId: "90217",
      repName: "Sarah Taylor",
      isRushInspection: true,
    },
    {
      id: 7,
      name: "SunnySkywalker",
      inspectionType: "10",
      status: "Accepted",
      requestDate: "10/05/2023",
      coId: "90217",
      address: "205 E 9th Street pella, IA 0219",
      city: "Greenwood",
      country: "Greenwood",
      state: "Florida",
      repId: "90217",
      repName: "Sarah Taylor",
      isRushInspection: true,
    },
    {
      id: 8,
      name: "SunnySkywalker",
      inspectionType: "10",
      status: "Accepted",
      requestDate: "10/05/2023",
      coId: "90217",
      address: "205 E 9th Street pella, IA 0219",
      city: "Greenwood",
      country: "Greenwood",
      state: "Florida",
      repId: "90217",
      repName: "Laura Garcia",
      isRushInspection: false,
    },
    {
      id: 9,
      name: "SunnySkywalker",
      inspectionType: "10",
      status: "Accepted",
      requestDate: "10/05/2023",
      coId: "90217",
      address: "205 E 9th Street pella, IA 0219",
      city: "Greenwood",
      country: "Greenwood",
      state: "Florida",
      repId: "90217",
      repName: "Laura Garcia",
      isRushInspection: false,
    },
    {
      id: 10,
      name: "SunnySkywalker",
      inspectionType: "10",
      status: "Not-Accepted",
      requestDate: "10/05/2023",
      coId: "90217",
      address: "205 E 9th Street pella, IA 0219",
      city: "Greenwood",
      country: "Greenwood",
      state: "Florida",
      repId: "90217",
      repName: "Sarah Taylor",
      isRushInspection: false,
    },
    {
      id: 11,
      name: "SunnySkywalker",
      inspectionType: "10",
      status: "Accepted",
      requestDate: "10/05/2023",
      coId: "90217",
      address: "205 E 9th Street pella, IA 0219",
      city: "Greenwood",
      country: "Greenwood",
      state: "Florida",
      repId: "90217",
      repName: "Laura Garcia",
      isRushInspection: true,
    },
  ];
  const [thumbnail, setThumbnail] = useState(false);

  
  const assignQAData = [
    {
      id: 1,
      fieldRep: "Maria Smith",
      inspectionType: "10",
      address: "205 E 9th Street pella, IA 0219",
      city: "Riverdale",
      county: "Pleasantville",
      state: "Pennsylvania",
      zip: "90211",
      requestDate: "10/05/2023",
      qaPerson: "",
      images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
      isRush: true,
    },
    {
      id: 2,
      fieldRep: "Jessica Thomas",
      inspectionType: "06",
      address: "123 Main St, Springfield",
      city: "Springfield",
      county: "Cedarwood",
      state: "Virginia",
      zip: "90210",
      requestDate: "10/06/2023",
      qaPerson: "",
      images: [logo,logo,logo,logo,logo,logo],
      isRush: true,
      isDuplicate: true,
    },
   {
      id: 3,
      fieldRep: "Maria Smith",
      inspectionType: "10",
      address: "205 E 9th Street pella, IA 0219",
      city: "Riverdale",
      county: "Pleasantville",
      state: "Pennsylvania",
      zip: "90211",
      requestDate: "10/05/2023",
      qaPerson: "",
      images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
      isRush: false,
    },
    {
      id: 4,
      fieldRep: "Jessica Thomas",
      inspectionType: "06",
      address: "123 Main St, Springfield",
      city: "Springfield",
      county: "Cedarwood",
      state: "Virginia",
      zip: "90210",
      requestDate: "10/06/2023",
      qaPerson: "",
      images: [logo,logo,logo,logo,logo,logo],
      isRush: false,
      isDuplicate: true,
    },
    {
      id: 5,
      fieldRep: "Maria Smith",
      inspectionType: "10",
      address: "205 E 9th Street pella, IA 0219",
      city: "Riverdale",
      county: "Pleasantville",
      state: "Pennsylvania",
      zip: "90211",
      requestDate: "10/05/2023",
      qaPerson: "",
      images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
      isRush: true,
    },
    {
      id: 6,
      fieldRep: "Jessica Thomas",
      inspectionType: "06",
      address: "123 Main St, Springfield",
      city: "Springfield",
      county: "Cedarwood",
      state: "Virginia",
      zip: "90210",
      requestDate: "10/06/2023",
      qaPerson: "",
      images: [logo,logo,logo,logo,logo,logo],
      isRush: false,
      isDuplicate: true,
    },
    {
      id: 7,
      fieldRep: "Maria Smith",
      inspectionType: "10",
      address: "205 E 9th Street pella, IA 0219",
      city: "Riverdale",
      county: "Pleasantville",
      state: "Pennsylvania",
      zip: "90211",
      requestDate: "10/05/2023",
      qaPerson: "",
      images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
      isRush: true,
    },
    {
      id: 8,
      fieldRep: "Jessica Thomas",
      inspectionType: "06",
      address: "123 Main St, Springfield",
      city: "Springfield",
      county: "Cedarwood",
      state: "Virginia",
      zip: "90210",
      requestDate: "10/06/2023",
      qaPerson: "",
      images: [logo,logo,logo,logo,logo,logo],
      isRush: true,
      isDuplicate: true,
    },
    {
      id: 9,
      fieldRep: "Maria Smith",
      inspectionType: "10",
      address: "205 E 9th Street pella, IA 0219",
      city: "Riverdale",
      county: "Pleasantville",
      state: "Pennsylvania",
      zip: "90211",
      requestDate: "10/05/2023",
      qaPerson: "",
      images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
      isRush: false,
    },
    {
      id: 10,
      fieldRep: "Jessica Thomas",
      inspectionType: "06",
      address: "123 Main St, Springfield",
      city: "Springfield",
      county: "Cedarwood",
      state: "Virginia",
      zip: "90210",
      requestDate: "10/06/2023",
      qaPerson: "",
      images: [logo,logo,logo,logo,logo,logo],
      isRush: false,
      isDuplicate: true,
    },
  ];

  const inReviewData = [
    {
      id: 1,
      name: "Randy Quaid",
      ensuredAddress: "205 E 9th Street pella, IA 0219",
      inspectionType: "6",
      city: "Riverdale",
      state: "Pennsylvania",
      repDetails:"Done",
      coId:123,
      requestDate: "10/05/2023",
      qa: "Naomi Watts",
      images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
      isRush: true,
    },
    {
      id: 2,
    name: "Randy Quaid",
      inspectionType: "6",
      ensuredAddress: "205 E 9th Street pella, IA 0219",
      city: "Riverdale",
      state: "Pennsylvania",
      repDetails:"Done",
      coId:123,
      requestDate: "10/05/2023",
      qa: "Naomi Watts",
      images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
      isRush: false,
    },
     {
      id: 3,
    name: "Randy Quaid",
      inspectionType: "6",
      ensuredAddress: "205 E 9th Street pella, IA 0219",
      city: "Riverdale",
      state: "Pennsylvania",
      repDetails:"Done",
      coId:123,
      requestDate: "10/05/2023",
      qa: "Naomi Watts",
      images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
      isRush: true,
    },
     {
      id: 4,
    name: "Randy Quaid",
      inspectionType: "6",
      ensuredAddress: "205 E 9th Street pella, IA 0219",
      city: "Riverdale",
      state: "Pennsylvania",
      repDetails:"Done",
      coId:123,
      requestDate: "10/05/2023",
      qa: "Naomi Watts",
      images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
      isRush: true,
    },
     {
      id: 5,
    name: "Randy Quaid",
      inspectionType: "6",
      ensuredAddress: "205 E 9th Street pella, IA 0219",
      city: "Riverdale",
      state: "Pennsylvania",
      repDetails:"Done",
      coId:123,
      requestDate: "10/05/2023",
      qa: "Naomi Watts",
      images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
      isRush: true,
    },
     {
      id: 6,
    name: "Randy Quaid",
      inspectionType: "6",
      ensuredAddress: "205 E 9th Street pella, IA 0219",
      city: "Riverdale",
      state: "Pennsylvania",
      repDetails:"Done",
      coId:123,
      requestDate: "10/05/2023",
      qa: "Naomi Watts",
      images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
      isRush: false,
    },
     {
      id: 7,
    name: "Randy Quaid",
      inspectionType: "6",
      ensuredAddress: "205 E 9th Street pella, IA 0219",
      city: "Riverdale",
      state: "Pennsylvania",
      repDetails:"Done",
      coId:123,
      requestDate: "10/05/2023",
      qa: "Naomi Watts",
      images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
      isRush: true,
    },
     {
      id: 8,
    name: "Randy Quaid",
      inspectionType: "6",
      ensuredAddress: "205 E 9th Street pella, IA 0219",
      city: "Riverdale",
      state: "Pennsylvania",
      repDetails:"Done",
      coId:123,
      requestDate: "10/05/2023",
      qa: "Naomi Watts",
      images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
      isRush: false,
    },
     {
      id: 9,
    name: "Randy Quaid",
      inspectionType: "6",
      ensuredAddress: "205 E 9th Street pella, IA 0219",
      city: "Riverdale",
      state: "Pennsylvania",
      repDetails:"Done",
      coId:123,
      requestDate: "10/05/2023",
      qa: "Naomi Watts",
      images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
      isRush: false,
    },
     {
      id: 10,
    name: "Randy Quaid",
      inspectionType: "6",
      ensuredAddress: "205 E 9th Street pella, IA 0219",
      city: "Riverdale",
      state: "Pennsylvania",
      repDetails:"Done",
      coId:123,
      requestDate: "10/05/2023",
      qa: "Naomi Watts",
      images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
      isRush: true,
    },
  ];

const finalReviewData: any[] = [
  {
    id: 1,
    name: "Jessica Thomas",
    inspectionType: "10",
    address: "205 E 9th Street pella, IA 0219",
    city: "Greenwood",
    county: "Greenwood",
    state: "Florida",
    zip: "90217",
    requestDate: "10/05/2023",
    status: "Accepted",
    coId: "90217",
    repId: "90217",
    repName: "Laura Garcia",
    inspectionCost: 120,
    qa:"Steve Gomez",
    editMode: "cost",

     images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
    isRush: true,
  },
   {
    id: 2,
    name: "Jessica Thomas",
    inspectionType: "10",
    address: "205 E 9th Street pella, IA 0219",
    city: "Greenwood",
    county: "Greenwood",
    state: "Florida",
    zip: "90217",
    requestDate: "10/05/2023",
    status: "Accepted",
    coId: "90217",
    repId: "90217",
    repName: "Laura Garcia",
    inspectionCost: 120,
    qa:"Steve Gomez",
    editMode: "cost",

     images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
    isRush: true,
  },
   {
    id: 3,
    name: "Jessica Thomas",
    inspectionType: "10",
    address: "205 E 9th Street pella, IA 0219",
    city: "Greenwood",
    county: "Greenwood",
    state: "Florida",
    zip: "90217",
    requestDate: "10/05/2023",
    status: "Accepted",
    coId: "90217",
    repId: "90217",
    repName: "Laura Garcia",
    inspectionCost: 120,
    qa:"Steve Gomez",
    editMode: "cost",

     images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
    isRush: false,
  },
   {
    id: 4,
    name: "Jessica Thomas",
    inspectionType: "10",
    address: "205 E 9th Street pella, IA 0219",
    city: "Greenwood",
    county: "Greenwood",
    state: "Florida",
    zip: "90217",
    requestDate: "10/05/2023",
    status: "Accepted",
    coId: "90217",
    repId: "90217",
    repName: "Laura Garcia",
    inspectionCost: 120,
    qa:"Steve Gomez",
    editMode: "cost",

     images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
    isRush: true,
  },
   {
    id: 5,
    name: "Jessica Thomas",
    inspectionType: "10",
    address: "205 E 9th Street pella, IA 0219",
    city: "Greenwood",
    county: "Greenwood",
    state: "Florida",
    zip: "90217",
    requestDate: "10/05/2023",
    status: "Accepted",
    coId: "90217",
    repId: "90217",
    repName: "Laura Garcia",
    inspectionCost: 120,
    qa:"Steve Gomez",
    editMode: "cost",

     images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
    isRush: false,
  },
   {
    id: 6,
    name: "Jessica Thomas",
    inspectionType: "10",
    address: "205 E 9th Street pella, IA 0219",
    city: "Greenwood",
    county: "Greenwood",
    state: "Florida",
    zip: "90217",
    requestDate: "10/05/2023",
    status: "Accepted",
    coId: "90217",
    repId: "90217",
    repName: "Laura Garcia",
    inspectionCost: 120,
    qa:"Steve Gomez",
    editMode: "cost",

     images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
    isRush: true,
  },
   {
    id: 7,
    name: "Jessica Thomas",
    inspectionType: "10",
    address: "205 E 9th Street pella, IA 0219",
    city: "Greenwood",
    county: "Greenwood",
    state: "Florida",
    zip: "90217",
    requestDate: "10/05/2023",
    status: "Accepted",
    coId: "90217",
    repId: "90217",
    repName: "Laura Garcia",
    inspectionCost: 120,
    qa:"Steve Gomez",
    editMode: "cost",

     images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
    isRush: false,
  },
   {
    id: 8,
    name: "Jessica Thomas",
    inspectionType: "10",
    address: "205 E 9th Street pella, IA 0219",
    city: "Greenwood",
    county: "Greenwood",
    state: "Florida",
    zip: "90217",
    requestDate: "10/05/2023",
    status: "Accepted",
    coId: "90217",
    repId: "90217",
    repName: "Laura Garcia",
    inspectionCost: 120,
    qa:"Steve Gomez",
    editMode: "cost",

     images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
    isRush: false,
  },
   {
    id: 9,
    name: "Jessica Thomas",
    inspectionType: "10",
    address: "205 E 9th Street pella, IA 0219",
    city: "Greenwood",
    county: "Greenwood",
    state: "Florida",
    zip: "90217",
    requestDate: "10/05/2023",
    status: "Accepted",
    coId: "90217",
    repId: "90217",
    repName: "Laura Garcia",
    inspectionCost: 120,
    qa:"Steve Gomez",
    editMode: "cost",

     images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
    isRush: false,
  },
   {
    id: 10,
    name: "Jessica Thomas",
    inspectionType: "10",
    address: "205 E 9th Street pella, IA 0219",
    city: "Greenwood",
    county: "Greenwood",
    state: "Florida",
    zip: "90217",
    requestDate: "10/05/2023",
    status: "Accepted",
    coId: "90217",
    repId: "90217",
    repName: "Laura Garcia",
    inspectionCost: 120,
    qa:"Steve Gomez",
    editMode: "cost",

     images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
    isRush: true,
  },

];
const completedData: any[] = [
  {
    id: 1,
    name: "Jessica Thomas",
    inspectionType: "10",
    insuredAddress: "205 E 9th Street pella, IA 0219",
    city: "Greenwood",
    county: "Greenwood",
    state: "Florida",
    zip: "90217",
    requestDate: "10/05/2023",
    status: "Accepted",
    coId: "90217",
    repId: "90217",
    repDetails: "Laura Garcia",
    inspectionCost: 120,
    clientBilled:"Yes",
    fieldRepBilled:"Yes",
    qa:"Steve Gomez",
    editMode: "cost",
     images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
    isRush: false,
  },
   {
    id: 2,
    name: "Jessica Thomas",
    inspectionType: "10",
    insuredAddress: "205 E 9th Street pella, IA 0219",
    city: "Greenwood",
    county: "Greenwood",
    state: "Florida",
    zip: "90217",
    requestDate: "10/05/2023",
    status: "Accepted",
    coId: "90217",
    repId: "90217",
    repDetails: "Laura Garcia",
    inspectionCost: 120,
    clientBilled:"Yes",
    fieldRepBilled:"Yes",
    qa:"Steve Gomez",
    editMode: "cost",
     images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
    isRush: false,
  },
   {
    id: 3,
    name: "Jessica Thomas",
    inspectionType: "10",
    insuredAddress: "205 E 9th Street pella, IA 0219",
    city: "Greenwood",
    county: "Greenwood",
    state: "Florida",
    zip: "90217",
    requestDate: "10/05/2023",
    status: "Accepted",
    coId: "90217",
    repId: "90217",
    repDetails: "Laura Garcia",
    inspectionCost: 120,
    clientBilled:"Yes",
    fieldRepBilled:"Yes",
    qa:"Steve Gomez",
    editMode: "cost",
     images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
    isRush: true,
  },
   {
    id: 4,
    name: "Jessica Thomas",
    inspectionType: "10",
    insuredAddress: "205 E 9th Street pella, IA 0219",
    city: "Greenwood",
    county: "Greenwood",
    state: "Florida",
    zip: "90217",
    requestDate: "10/05/2023",
    status: "Accepted",
    coId: "90217",
    repId: "90217",
    repDetails: "Laura Garcia",
    inspectionCost: 120,
    clientBilled:"Yes",
    fieldRepBilled:"Yes",
    qa:"Steve Gomez",
    editMode: "cost",
     images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
    isRush: true,
  },
   {
    id: 5,
    name: "Jessica Thomas",
    inspectionType: "10",
    insuredAddress: "205 E 9th Street pella, IA 0219",
    city: "Greenwood",
    county: "Greenwood",
    state: "Florida",
    zip: "90217",
    requestDate: "10/05/2023",
    status: "Accepted",
    coId: "90217",
    repId: "90217",
    repDetails: "Laura Garcia",
    inspectionCost: 120,
    clientBilled:"Yes",
    fieldRepBilled:"Yes",
    qa:"Steve Gomez",
    editMode: "cost",
     images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
    isRush: true,
  },
   {
    id: 6,
    name: "Jessica Thomas",
    inspectionType: "10",
    insuredAddress: "205 E 9th Street pella, IA 0219",
    city: "Greenwood",
    county: "Greenwood",
    state: "Florida",
    zip: "90217",
    requestDate: "10/05/2023",
    status: "Accepted",
    coId: "90217",
    repId: "90217",
    repDetails: "Laura Garcia",
    inspectionCost: 120,
    clientBilled:"Yes",
    fieldRepBilled:"Yes",
    qa:"Steve Gomez",
    editMode: "cost",
     images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
    isRush: false,
  },
   {
    id: 7,
    name: "Jessica Thomas",
    inspectionType: "10",
    insuredAddress: "205 E 9th Street pella, IA 0219",
    city: "Greenwood",
    county: "Greenwood",
    state: "Florida",
    zip: "90217",
    requestDate: "10/05/2023",
    status: "Accepted",
    coId: "90217",
    repId: "90217",
    repDetails: "Laura Garcia",
    inspectionCost: 120,
    clientBilled:"Yes",
    fieldRepBilled:"Yes",
    qa:"Steve Gomez",
    editMode: "cost",
     images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
    isRush: true,
  },
   {
    id: 8,
    name: "Jessica Thomas",
    inspectionType: "10",
    insuredAddress: "205 E 9th Street pella, IA 0219",
    city: "Greenwood",
    county: "Greenwood",
    state: "Florida",
    zip: "90217",
    requestDate: "10/05/2023",
    status: "Accepted",
    coId: "90217",
    repId: "90217",
    repDetails: "Laura Garcia",
    inspectionCost: 120,
    clientBilled:"Yes",
    fieldRepBilled:"Yes",
    qa:"Steve Gomez",
    editMode: "cost",
     images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
    isRush: false,
  },
   {
    id: 9,
    name: "Jessica Thomas",
    inspectionType: "10",
    insuredAddress: "205 E 9th Street pella, IA 0219",
    city: "Greenwood",
    county: "Greenwood",
    state: "Florida",
    zip: "90217",
    requestDate: "10/05/2023",
    status: "Accepted",
    coId: "90217",
    repId: "90217",
    repDetails: "Laura Garcia",
    inspectionCost: 120,
    clientBilled:"Yes",
    fieldRepBilled:"Yes",
    qa:"Steve Gomez",
    editMode: "cost",
     images: [logo,logo,logo,logo,logo,logo,logo,logo,logo],
    isRush: false,
  },
];

  const qaOptions = [
    { label: "QA Person 1", value: "qa1" },
    { label: "QA Person 2", value: "qa2" },
    { label: "QA Person 3", value: "qa3" },
  ];

  const statusOptions = [
    { label: "Accepted", value: "Accepted" },
    { label: "Pending", value: "Pending" },
    { label: "Rejected", value: "Rejected" },
    { label: "On Hold", value: "On Hold" },
  ];


   const [tableData, setTableData] = useState(finalReviewData);


  const handleSelectionChange = (ids: (string | number)[]) => {
    setSelectedIds(ids);
    console.log("Selected IDs:", ids);
  };

 const handleEditToggle = (
  rowId: string | number,
  mode: "cost" | "commission" | null
) => {
  setTableData(prev =>
    prev.map(row =>
      row.id === rowId
        ? { ...row, editMode: mode }
        : row
    )
  );
};

    const renderTable = () => {
    switch (activeTab) {
      case "outstanding":
        return (
          <OutstandingMonitorTaskTable
            data={outStandingTasks}
            selectedRows={selectedIds}
            onRowSelect={handleSelectionChange}
          />
        );
      case "assignQA":
        return (
          <AssignQATable
            data={assignQAData}
            selectedRows={selectedIds}
            onRowSelect={handleSelectionChange}
            qaOptions={qaOptions}
            thumbnailMode={thumbnail}
            onApproveClick={(row) => console.log("Approve", row)}
            onSendToQAClick={(row) => console.log("Send to QA", row)}
          />
        );
      case "inReview":
        return (
          <InReviewTable
            data={inReviewData}
            selectedRows={selectedIds}
            onRowSelect={handleSelectionChange}
            thumbnailMode={thumbnail}
            onViewClick={(row) => console.log("View", row)}
          />
        );
      case "finalReview":
        return (
          <FinalReviewTable
            data={tableData}
            selectedRows={selectedIds}
            onRowSelect={handleSelectionChange}
            statusOptions={statusOptions}
            thumbnailMode={thumbnail}
          onCostChange={(id, cost) =>
    console.log("Cost changed", id, cost)
  }
 onEditToggle={handleEditToggle}

          />
        );
      case "completed":
        return (
          <CompletedTable
            data={completedData}
            selectedRows={selectedIds}
            onRowSelect={handleSelectionChange}
            thumbnailMode={thumbnail}
          onCostChange={(id:any, cost:any) =>
    console.log("Cost changed", id, cost)
  }
 onEditToggle={handleEditToggle}

          />
        );
      default:
        return null;
    }
  };




  return (
    <>
      <div className=" w-full bg-medium-blue h-full p-5 rounded-[10px] flex flex-col gap-4">
        <div className="flex flex-col gap-4 xl:flex-col xl:items-start xl:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between w-full">
            <span className={TAB_HEADER}>List of Quality Reps</span>
            <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
              <SearchInput
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full sm:flex-1 lg:w-auto"
              />
              {activeTab === "finalReview" && (
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <GlobalButton
                    text="Approve Selected"
                    onClick={() => console.log("Clicked")}
                    bgColor="bg-primary-red"
                    className="w-full sm:w-auto"
                  />
                  <GlobalButton
                    text="Asign to QA"
                    onClick={() => console.log("Clicked")}
                    bgColor="bg-primary-red"
                    className="w-full sm:w-auto"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="self-stretch flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
            {/* Tabs Section */}
            <div
              className="
  p-0.5 rounded-lg
  flex items-center gap-1
  w-full lg:w-fit
  overflow-x-auto scrollbar-hide
"
            >
              <button
                onClick={() => setActiveTab("outstanding")}
                className={`px-4 py-3 rounded-lg flex justify-center items-center gap-2.5 transition-colors cursor-pointer ${
                  activeTab === "outstanding" ? "bg-Rush" : ""
                }`}
              >
                <div
                  className={`justify-start text-sm font-medium font-['Plus_Jakarta_Sans'] ${
                    activeTab === "outstanding"
                      ? "text-primary-red underline"
                      : "text-zinc-700"
                  }`}
                >
                  Outstanding
                </div>
              </button>
              <button
                onClick={() => setActiveTab("assignQA")}
                className={`px-4 py-3 rounded-2xl flex justify-center items-center gap-2.5 transition-colors cursor-pointer ${
                  activeTab === "assignQA" ? "bg-Rush" : ""
                }`}
              >
                <div
                  className={`justify-start text-sm font-medium font-['Plus_Jakarta_Sans'] ${
                    activeTab === "assignQA"
                      ? "text-primary-red underline"
                      : "text-zinc-700"
                  }`}
                >
                  Assign QA
                </div>
              </button>
              <button
                onClick={() => setActiveTab("inReview")}
                className={`px-4 py-3 rounded-lg flex justify-center items-center gap-2.5 transition-colors cursor-pointer ${
                  activeTab === "inReview" ? "bg-Rush" : ""
                }`}
              >
                <div
                  className={`justify-start text-sm font-medium font-['Plus_Jakarta_Sans'] ${
                    activeTab === "inReview"
                      ? "text-primary-red underline"
                      : "text-zinc-700"
                  }`}
                >
                  In Review
                </div>
              </button>
              <button
                onClick={() => setActiveTab("finalReview")}
                className={`px-4 py-3 rounded-2xl flex justify-center items-center gap-2.5 transition-colors cursor-pointer ${
                  activeTab === "finalReview" ? "bg-Rush" : ""
                }`}
              >
                <div
                  className={`justify-start text-sm font-medium font-['Plus_Jakarta_Sans'] ${
                    activeTab === "finalReview"
                      ? "text-primary-red underline"
                      : "text-zinc-700"
                  }`}
                >
                  Final Review
                </div>
              </button>
              <button
                onClick={() => setActiveTab("completed")}
                className={`px-4 py-3 rounded-lg flex justify-center items-center gap-2.5 transition-colors cursor-pointer ${
                  activeTab === "completed" ? "bg-Rush" : ""
                }`}
              >
                <div
                  className={`justify-start text-sm font-medium font-['Plus_Jakarta_Sans'] ${
                    activeTab === "completed"
                      ? "text-primary-red underline"
                      : "text-zinc-700"
                  }`}
                >
                  Completed
                </div>
              </button>
            </div>
            {/* Buttons Section */}
            <div className="flex flex-col sm:flex-row justify-start items-center  w-full lg:w-auto gap-4">
              {activeTab != "outstanding" && (
                <CheckboxField
                  label="Show Thumbnail"
                  onChange={(e: any) => setThumbnail(e.target.checked)}
                  name="thumbnail"
                  className="w-full sm:flex-1"
                  checked={thumbnail}
                />
              )}

              {activeTab === "outstanding" 
               && (
                  <NonBgButton
                    text="Download Details"
                    borderColor="border-primary-red"
                    textColor="text-primary-red"
                    icon={true}
                    className={`w-full sm:flex-1`}
                    bgColor="bg-none"
                  />
                )}

                 {activeTab === "assignQA" 
               && (
                  <NonBgButton
                    text="Download Details"
                    borderColor="border-primary-red"
                    textColor="text-primary-red"
                    icon={true}
                    className={``}
                    bgColor="bg-none"
                  />
                )}
            </div>
          </div>
        </div>
        <div>
          {renderTable()}
        </div>
      </div>
    </>
  );
};

export default MonitorTasks;

