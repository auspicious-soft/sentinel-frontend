// "use client"
// import { AddButton } from "@/components/Buttons/AddButton";
// import { GlobalButton } from "@/components/Buttons/GlobalButton";
// import { SearchInput } from "@/components/Buttons/InputSearch";
// import { NonBgButton } from "@/components/Buttons/NonBgButton";
// import { NonFieldModal } from "@/components/Modals/NonFieldModal";
// import { FieldModal } from "@/components/Modals/ModalWithFields";
// import { UploadFilesModal, UploadedFile } from "@/components/Modals/UploadFilesModal";
// import { useState } from "react";
// import assigning from '../../../../public/icons/assigning.png';
// import uplaodImg from '../../../../public/icons/upload.png';
// import { AddUserFormData, AddUserModal } from "@/components/Modals/AddUserModal";
// import { CompanyTable } from "@/components/tables/CompanyTable";
// import { FieldRepTable } from "@/components/tables/FieldRepTable";

// export default function Page() {
//   const [search, setSearch] = useState("");

//   // Add Division State
//   const [divisionData, setDivisionData] = useState({
//     divisionName: '',
//     email: '',
//     independent: false,
//   });

//   // Assign Field Rep State
//   const [fieldRepData, setFieldRepData] = useState({
//     state: '',
//     fieldRep: '',
//   });

//   // Add Quality Rep State
//   const [qualityRepData, setQualityRepData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     sendInvite: false,
//   });

//   const [userData, setUserData] = useState<AddUserFormData>({
//   company: '',
//   firstName: '',
//   lastName: '',
//   address: '',
//   city: '',
//   state: '',
//   zip: '',
//   phone: '',
//   email: '',
//   isAdministrator: false,
// });

//   const [comment, setComment] = useState('');

//   const [reportData, setReportData] = useState({
//     companyName: 'Acme Corporation',
//     startDate: '2024-01-01',
//     endDate: '',
//   });

//   // Upload Files State
//   const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([
//     {
//       id: '1',
//       imageUrl: 'https://placehold.co/400x400/cccccc/666666?text=Image+1',
//       photoType: '',
//       isCoverPhoto: false,
//       isSelected: false,
//     },
//     {
//       id: '2',
//       imageUrl: 'https://placehold.co/400x400/cccccc/666666?text=Image+2',
//       photoType: 'exterior',
//       isCoverPhoto: true,
//       isSelected: false,
//     },
//     {
//       id: '3',
//       imageUrl: 'https://placehold.co/400x400/cccccc/666666?text=Image+3',
//       photoType: '',
//       isCoverPhoto: false,
//       isSelected: false,
//     },
//     {
//       id: '4',
//       imageUrl: 'https://placehold.co/400x400/cccccc/666666?text=Image+4',
//       photoType: 'interior',
//       isCoverPhoto: false,
//       isSelected: false,
//     },
//     {
//       id: '5',
//       imageUrl: 'https://placehold.co/400x400/cccccc/666666?text=Image+5',
//       photoType: '',
//       isCoverPhoto: false,
//       isSelected: false,
//     },
//     {
//       id: '6',
//       imageUrl: 'https://placehold.co/400x400/cccccc/666666?text=Image+6',
//       photoType: '',
//       isCoverPhoto: false,
//       isSelected: false,
//     },
//      {
//       id: '7',
//       imageUrl: 'https://placehold.co/400x400/cccccc/666666?text=Image+5',
//       photoType: '',
//       isCoverPhoto: false,
//       isSelected: false,
//     },
//     {
//       id: '8',
//       imageUrl: 'https://placehold.co/400x400/cccccc/666666?text=Image+6',
//       photoType: '',
//       isCoverPhoto: false,
//       isSelected: false,
//     },
//      {
//       id: '9',
//       imageUrl: 'https://placehold.co/400x400/cccccc/666666?text=Image+5',
//       photoType: '',
//       isCoverPhoto: false,
//       isSelected: false,
//     },
//     {
//       id: '10',
//       imageUrl: 'https://placehold.co/400x400/cccccc/666666?text=Image+6',
//       photoType: '',
//       isCoverPhoto: false,
//       isSelected: false,
//     },
//      {
//       id: '11',
//       imageUrl: 'https://placehold.co/400x400/cccccc/666666?text=Image+5',
//       photoType: '',
//       isCoverPhoto: false,
//       isSelected: false,
//     },
//     {
//       id: '12',
//       imageUrl: 'https://placehold.co/400x400/cccccc/666666?text=Image+6',
//       photoType: '',
//       isCoverPhoto: false,
//       isSelected: false,
//     },
//   ]);

//   const handleDivisionChange = (field: string) => (e: any) => {
//     const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
//     setDivisionData({ ...divisionData, [field]: value });
//   };

//   const handleFieldRepChange = (field: string) => (e: any) => {
//     setFieldRepData({ ...fieldRepData, [field]: e.target.value });
//   };

//   const handleQualityRepChange = (field: string) => (e: any) => {
//     const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
//     setQualityRepData({ ...qualityRepData, [field]: value });
//   };

//   const handleReportChange = (field: string) => (e: any) => {
//     setReportData({ ...reportData, [field]: e.target.value });
//   };

//   // Upload Files Handlers
//   const handlePhotoTypeChange = (fileId: string, photoType: string) => {
//     setUploadedFiles((prev) =>
//       prev.map((file) =>
//         file.id === fileId ? { ...file, photoType } : file
//       )
//     );
//   };

//   const handleCoverPhotoChange = (fileId: string, isCover: boolean) => {
//     setUploadedFiles((prev) =>
//       prev.map((file) => ({
//         ...file,
//         isCoverPhoto: file.id === fileId ? isCover : false,
//       }))
//     );
//   };

//   const handleFileSelect = (fileId: string, isSelected: boolean) => {
//     setUploadedFiles((prev) =>
//       prev.map((file) =>
//         file.id === fileId ? { ...file, isSelected } : file
//       )
//     );
//   };

//   const handleDeleteSelected = () => {
//     setUploadedFiles((prev) => prev.filter((file) => !file.isSelected));
//     console.log('Deleted selected files');
//   };

//   const handleUploadNew = () => {
//     console.log('Upload new file clicked');
//     // Handle file upload logic here
//   };

//   const stateOptions = [
//     { value: 'ca', label: 'California' },
//     { value: 'tx', label: 'Texas' },
//     { value: 'ny', label: 'New York' },
//     { value: 'fl', label: 'Florida' },
//     { value: 'il', label: 'Illinois' },
//   ];

//   const photoTypeOptions = [
//     { value: 'exterior', label: 'Exterior' },
//     { value: 'interior', label: 'Interior' },
//     { value: 'roof', label: 'Roof' },
//     { value: 'foundation', label: 'Foundation' },
//     { value: 'electrical', label: 'Electrical' },
//     { value: 'plumbing', label: 'Plumbing' },
//   ];

//   const handleUserFieldChange = (field: keyof AddUserFormData, value: string | boolean) => {
//   setUserData((prev) => ({
//     ...prev,
//     [field]: value,
//   }));
// };

// const companyOptions = [
//   { value: 'aaa', label: 'AAA' },
//   { value: 'bbb', label: 'BBB Insurance' },
//   { value: 'ccc', label: 'CCC Corporation' },
//   { value: 'ddd', label: 'DDD Solutions' },
//   { value: 'eee', label: 'EEE Group' },
// ];

// const usStateOptions = [
//   { value: 'AL', label: 'Alabama' },
//   { value: 'AK', label: 'Alaska' },
//   { value: 'AZ', label: 'Arizona' },
//   { value: 'AR', label: 'Arkansas' },
//   { value: 'CA', label: 'California' },
//   { value: 'CO', label: 'Colorado' },
//   { value: 'CT', label: 'Connecticut' },
//   { value: 'DE', label: 'Delaware' },
//   { value: 'FL', label: 'Florida' },
//   { value: 'GA', label: 'Georgia' },
//   { value: 'IL', label: 'Illinois' },
//   { value: 'IN', label: 'Indiana' },
//   { value: 'NY', label: 'New York' },
//   { value: 'TX', label: 'Texas' },
//   // Add more states as needed
// ];

// const companyData = [
//   { 
//     id: 1, 
//     srNo: '12345', 
//     companyName: 'SunnySkywalker',
//     companyContact: 'Alice Johnson',
//     companyEmail: 'alex@gmail.com',
//     phoneNumber: '313582342',
//     fax: '313362009'
//   },
//   // ... more data
// ];

//   const [selectedIds, setSelectedIds] = useState<(string | number)[]>([]);

//   const fieldRepDataa = [
//     {
//       id: '1', // Using string ID
//       repId: '12345',
//       lastName: 'Smith',
//       firstName: 'Bob',
//       city: 'Cedarwood',
//       email: 'bob@example.com',
//       state: 'Virginia',
//       phone: '(555) 123-4567'
//     },
//     {
//       id: '2',
//       repId: '67890',
//       lastName: 'Johnson',
//       firstName: 'Alice',
//       city: 'Pleasantville',
//       email: 'alice@example.com',
//       state: 'Pennsylvania',
//       phone: '(555) 234-5678'
//     },
//     {
//       id: '3',
//       repId: '54321',
//       lastName: 'Turner',
//       firstName: 'Jack',
//       city: 'Westfield',
//       email: 'jack@example.com',
//       state: 'Washington',
//       phone: '(555) 345-6789'
//     },
//     // ... more data
//   ];

//   // Handle view action
//   const handleViewRep = (rep: any) => {
//     console.log('Viewing rep:', rep);
//     // Add your view logic here
//   };

//   // Handle selection change
//   const handleSelectionChange = (ids: (string | number)[]) => {
//     setSelectedIds(ids);
//     console.log('Selected IDs:', ids);
//   };

//   return (
//     <div className="bg-Black w-full min-h-screen p-10 flex flex-col gap-8">
//       {/* Buttons Section */}
//       <div className="flex gap-4 max-w-sm">
//         <AddButton
//           text="Add New Field Rep"
//           icon
//           className="flex-1"
//         />

//         <SearchInput
//           placeholder="Search company"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="flex-1"
//         />
//       </div>

//       <div className="flex gap-4 max-w-xl">
//         <GlobalButton
//           text="Insert"
//           bgColor="bg-primary-blue"
//           className="flex-1"
//         />

//         <NonBgButton
//           text="Download Details"
//           borderColor="border-primary-red"
//           textColor="text-primary-red"
//           icon={true}
//           className="flex-1"
//         />
//       </div>

//       {/* Non-Field Modals Section */}
//       <div className="text-white text-2xl font-bold mt-8">Non-Field Modals</div>
      
//       <div className="flex gap-4 max-w-xl">
//         <NonFieldModal
//           icon={assigning}
//           headingText="Field Rep Added Successfully"
//           paragraphText="The field representative has been added to your team."
//           confirmButtonText="Okay"
//           onConfirm={() => console.log('Confirmed')}
//         />
//       </div>

//       <div className="flex gap-4 max-w-xl">
//         <NonFieldModal
//           icon={assigning}
//           headingText="Re-Approve Inspection?"
//           paragraphText="Are you sure you want to Re-Approve and send this back to Final Review?"
//           confirmButtonText="Re-Approve"
//           showCancelButton={true}
//           onConfirm={() => console.log('Re-Approved')}
//           onCancel={() => console.log('Cancelled')}
//         />
//       </div>

//       {/* Field Modals Section */}
//       <div className="text-white text-2xl font-bold mt-8">Field Modals</div>

//       {/* Add Division Modal */}
//       <div className="flex gap-4 max-w-xl">
//         <FieldModal
//           icon={assigning}
//           headingText="Add Division"
//           fields={[
//             {
//               type: 'input',
//               name: 'divisionName',
//               placeholder: 'Division Name',
//               value: divisionData.divisionName,
//               onChange: handleDivisionChange('divisionName'),
//               required: true,
//             },
//             {
//               type: 'input',
//               name: 'email',
//               placeholder: 'Email Address',
//               value: divisionData.email,
//               onChange: handleDivisionChange('email'),
//               required: true,
//             },
//             {
//               type: 'checkbox',
//               name: 'independent',
//               label: 'Make Independent Division',
//               value: divisionData.independent,
//               onChange: handleDivisionChange('independent'),
//             },
//           ]}
//           confirmButtonText="Add"
//           onConfirm={() => console.log('Add Division:', divisionData)}
//           onCancel={() => console.log('Cancelled')}
//         />
//       </div>

//       {/* Assign Field Rep Modal */}
//       <div className="flex gap-4 max-w-xl">
//         <FieldModal
//           icon={assigning}
//           headingText="Assign Field Rep"
//           fields={[
//             {
//               type: 'dropdown',
//               name: 'state',
//               placeholder: 'Select State',
//               value: fieldRepData.state,
//               onChange: handleFieldRepChange('state'),
//               options: stateOptions,
//               required: true,
//             },
//             {
//               type: 'search',
//               name: 'fieldRep',
//               placeholder: 'Select Field Rep',
//               value: fieldRepData.fieldRep,
//               onChange: handleFieldRepChange('fieldRep'),
//               showIcon: true,
//             },
//           ]}
//           confirmButtonText="Assign"
//           onConfirm={() => console.log('Assign Field Rep:', fieldRepData)}
//           onCancel={() => console.log('Cancelled')}
//         />
//       </div>

//       {/* Add Quality Rep Modal */}
//       <div className="flex gap-4 max-w-xl">
//         <FieldModal
//           icon={assigning}
//           headingText="Add Quality Rep"
//           fields={[
//             {
//               type: 'input',
//               name: 'name',
//               placeholder: 'Full Name',
//               value: qualityRepData.name,
//               onChange: handleQualityRepChange('name'),
//               required: true,
//             },
//             {
//               type: 'input',
//               name: 'email',
//               placeholder: 'Email Address',
//               value: qualityRepData.email,
//               onChange: handleQualityRepChange('email'),
//               required: true,
//             },
//             {
//               type: 'input',
//               name: 'phone',
//               placeholder: 'Phone Number',
//               value: qualityRepData.phone,
//               onChange: handleQualityRepChange('phone'),
//               required: true,
//             },
//             {
//               type: 'checkbox',
//               name: 'sendInvite',
//               label: 'Send email invitation',
//               value: qualityRepData.sendInvite,
//               onChange: handleQualityRepChange('sendInvite'),
//             },
//           ]}
//           confirmButtonText="Add"
//           onConfirm={() => console.log('Add Quality Rep:', qualityRepData)}
//           onCancel={() => console.log('Cancelled')}
//         />
//       </div>

//       {/* Add Comment Modal */}
//       <div className="flex gap-4 max-w-xl">
//         <FieldModal
//           headingText="Add Comment"
//           fields={[
//             {
//               type: 'textarea',
//               name: 'comment',
//               placeholder: 'Type your comments',
//               value: comment,
//               onChange: (e:any) => setComment(e.target.value),
//               rows: 4,
//               required: true,
//             },
//           ]}
//           confirmButtonText="Add"
//           onConfirm={() => console.log('Add Comment:', comment)}
//           onCancel={() => console.log('Cancelled')}
//         />
//       </div>

//       {/* Generate Report Modal */}
//       <div className="flex gap-4 max-w-xl">
//         <FieldModal
//           icon={assigning}
//           headingText="Generate Report"
//           fields={[
//             {
//               type: 'input',
//               name: 'companyName',
//               placeholder: 'Name of company',
//               value: reportData.companyName,
//               onChange: handleReportChange('companyName'),
//               disabled: true,
//             },
//             {
//               type: 'date',
//               name: 'startDate',
//               placeholder: 'Start Date',
//               value: reportData.startDate,
//               onChange: handleReportChange('startDate'),
//               disabled: true,
//             },
//             {
//               type: 'date',
//               name: 'endDate',
//               placeholder: 'End Date',
//               value: reportData.endDate,
//               onChange: handleReportChange('endDate'),
//               required: true,
//             },
//           ]}
//           confirmButtonText="Generate Report"
//           onConfirm={() => console.log('Generate Report:', reportData)}
//           onCancel={() => console.log('Cancelled')}
//         />
//       </div>

//       {/* Upload Files Modal Section */}
//       <div className="text-white text-2xl font-bold mt-8">Upload Files Modal</div>

//       <div className="flex justify-center w-full">
//         <UploadFilesModal
//           icon={uplaodImg}
//           headingText="Upload Files"
//           inspectionType="Residential Exterior Fire/Liability (12)"
//           inspectorName="Test Testerson"
//           uploadedFiles={uploadedFiles}
//           photoTypeOptions={photoTypeOptions}
//           onPhotoTypeChange={handlePhotoTypeChange}
//           onCoverPhotoChange={handleCoverPhotoChange}
//           onFileSelect={handleFileSelect}
//           onDeleteSelected={handleDeleteSelected}
//           onUploadNew={handleUploadNew}
//           onConfirm={() => console.log('Update Files:', uploadedFiles)}
//           onCancel={() => console.log('Cancelled')}
//         />
//       </div>


//       <div className="flex justify-center w-full">
//   <AddUserModal
//     icon={assigning}
//     headingText="Add User"
//     formData={userData}
//     onFieldChange={handleUserFieldChange}
//     companyOptions={companyOptions}
//     stateOptions={usStateOptions}
//     confirmButtonText="Add"
//     cancelButtonText="Cancel"
//     onConfirm={() => console.log('Add User:', userData)}
//     onCancel={() => console.log('Cancelled')}
//   />
// </div>

// <CompanyTable
//   data={companyData}
//   onView={(row) => console.log('View company:', row)}
// />


//  <div className="p-4">
      

//       <FieldRepTable
//         data={fieldRepDataa}
//         selectedRows={selectedIds}
//         onRowSelect={handleSelectionChange}
//         onView={handleViewRep}
//       />

    
//     </div>

//     </div>
//   );
// }













// Tables


"use client"
// import React, { useState } from 'react';
// import { StatusBadgeCell, IconActionsCell } from '@/components/tables/cells';
// import { TablePagination } from '@/components/tables/Pagination';
// import { BaseTable } from '@/components/tables/BaseTable';

// // Dummy data for Search Inspection Table
// const searchInspectionData = [
//   {
//     id: 'INSP-001',
//     orderId: 'ORD-2024-001',
//     client: 'ABC Corporation',
//     address: '123 Main St, New York, NY 10001',
//     inspectionType: '10',
//     fieldRep: 'John Smith',
//     status: 'Assigned',
//     requestDate: '2024-01-15',
//     dueDate: '2024-01-30',
//     priority: 'High',
//     assignedDate: '2024-01-16',
//     completedDate: '',
//     clientReference: 'C-12345',
//     actionView: true,
//     actionDelete: true,
//     actionEdit: true,
//   },
//   {
//     id: 'INSP-002',
//     orderId: 'ORD-2024-002',
//     client: 'XYZ Industries',
//     address: '456 Oak Ave, Los Angeles, CA 90001',
//     inspectionType: '06',
//     fieldRep: 'Maria Garcia',
//     status: 'In Progress',
//     requestDate: '2024-01-18',
//     dueDate: '2024-02-02',
//     priority: 'Medium',
//     assignedDate: '2024-01-19',
//     completedDate: '',
//     clientReference: 'C-12346',
//     actionView: true,
//     actionDelete: true,
//     actionEdit: true,
//   },
//   {
//     id: 'INSP-003',
//     orderId: 'ORD-2024-003',
//     client: 'Tech Solutions Inc',
//     address: '789 Tech Blvd, San Francisco, CA 94107',
//     inspectionType: '10',
//     fieldRep: 'Robert Johnson',
//     status: 'Completed',
//     requestDate: '2024-01-10',
//     dueDate: '2024-01-25',
//     priority: 'Low',
//     assignedDate: '2024-01-11',
//     completedDate: '2024-01-24',
//     clientReference: 'C-12347',
//     actionView: true,
//     actionDelete: true,
//     actionEdit: true,
//   },
//   {
//     id: 'INSP-004',
//     orderId: 'ORD-2024-004',
//     client: 'Global Manufacturing',
//     address: '101 Industrial Park, Chicago, IL 60601',
//     inspectionType: '08',
//     fieldRep: 'Sarah Williams',
//     status: 'Pending',
//     requestDate: '2024-01-20',
//     dueDate: '2024-02-04',
//     priority: 'High',
//     assignedDate: '',
//     completedDate: '',
//     clientReference: 'C-12348',
//     actionView: true,
//     actionDelete: false,
//     actionEdit: true,
//   },
//   {
//     id: 'INSP-005',
//     orderId: 'ORD-2024-005',
//     client: 'Premium Services LLC',
//     address: '202 Service Rd, Miami, FL 33101',
//     inspectionType: '10',
//     fieldRep: 'Michael Brown',
//     status: 'QA Review',
//     requestDate: '2024-01-12',
//     dueDate: '2024-01-27',
//     priority: 'Medium',
//     assignedDate: '2024-01-13',
//     completedDate: '2024-01-26',
//     clientReference: 'C-12349',
//     actionView: true,
//     actionDelete: true,
//     actionEdit: true,
//   },
//   {
//     id: 'INSP-006',
//     orderId: 'ORD-2024-006',
//     client: 'BuildRight Constructions',
//     address: '303 Construction Way, Houston, TX 77001',
//     inspectionType: '06',
//     fieldRep: 'David Miller',
//     status: 'Cancelled',
//     requestDate: '2024-01-05',
//     dueDate: '2024-01-20',
//     priority: 'Low',
//     assignedDate: '2024-01-06',
//     completedDate: '',
//     clientReference: 'C-12350',
//     actionView: true,
//     actionDelete: false,
//     actionEdit: false,
//   },
//   {
//     id: 'INSP-007',
//     orderId: 'ORD-2024-007',
//     client: 'HealthFirst Medical',
//     address: '404 Medical Center, Boston, MA 02101',
//     inspectionType: '10',
//     fieldRep: 'Jennifer Davis',
//     status: 'Assigned',
//     requestDate: '2024-01-22',
//     dueDate: '2024-02-06',
//     priority: 'High',
//     assignedDate: '2024-01-23',
//     completedDate: '',
//     clientReference: 'C-12351',
//     actionView: true,
//     actionDelete: true,
//     actionEdit: true,
//   },
//   {
//     id: 'INSP-008',
//     orderId: 'ORD-2024-008',
//     client: 'EduTech Solutions',
//     address: '505 Campus Dr, Seattle, WA 98101',
//     inspectionType: '08',
//     fieldRep: 'James Wilson',
//     status: 'In Progress',
//     requestDate: '2024-01-17',
//     dueDate: '2024-02-01',
//     priority: 'Medium',
//     assignedDate: '2024-01-18',
//     completedDate: '',
//     clientReference: 'C-12352',
//     actionView: true,
//     actionDelete: true,
//     actionEdit: true,
//   },
//   {
//     id: 'INSP-009',
//     orderId: 'ORD-2024-009',
//     client: 'FoodDistribute Inc',
//     address: '606 Warehouse St, Phoenix, AZ 85001',
//     inspectionType: '06',
//     fieldRep: 'Patricia Moore',
//     status: 'Completed',
//     requestDate: '2024-01-08',
//     dueDate: '2024-01-23',
//     priority: 'Low',
//     assignedDate: '2024-01-09',
//     completedDate: '2024-01-22',
//     clientReference: 'C-12353',
//     actionView: true,
//     actionDelete: true,
//     actionEdit: true,
//   },
//   {
//     id: 'INSP-010',
//     orderId: 'ORD-2024-010',
//     client: 'AutoMotive Parts',
//     address: '707 Garage Rd, Detroit, MI 48201',
//     inspectionType: '10',
//     fieldRep: 'Richard Taylor',
//     status: 'Rejected',
//     requestDate: '2024-01-25',
//     dueDate: '2024-02-09',
//     priority: 'High',
//     assignedDate: '',
//     completedDate: '',
//     clientReference: 'C-12354',
//     actionView: true,
//     actionDelete: true,
//     actionEdit: false,
//   },
//   {
//     id: 'INSP-011',
//     orderId: 'ORD-2024-011',
//     client: 'GreenEnergy Corp',
//     address: '808 Solar Ave, Denver, CO 80201',
//     inspectionType: '08',
//     fieldRep: 'Linda Anderson',
//     status: 'On Hold',
//     requestDate: '2024-01-28',
//     dueDate: '2024-02-12',
//     priority: 'Medium',
//     assignedDate: '2024-01-29',
//     completedDate: '',
//     clientReference: 'C-12355',
//     actionView: true,
//     actionDelete: false,
//     actionEdit: true,
//   },
//   {
//     id: 'INSP-012',
//     orderId: 'ORD-2024-012',
//     client: 'Retail Masters',
//     address: '909 Mall Blvd, Atlanta, GA 30301',
//     inspectionType: '06',
//     fieldRep: 'Thomas Jackson',
//     status: 'Assigned',
//     requestDate: '2024-01-30',
//     dueDate: '2024-02-14',
//     priority: 'Low',
//     assignedDate: '2024-01-31',
//     completedDate: '',
//     clientReference: 'C-12356',
//     actionView: true,
//     actionDelete: true,
//     actionEdit: true,
//   },
//   {
//     id: 'INSP-013',
//     orderId: 'ORD-2024-013',
//     client: 'Financial Trust Bank',
//     address: '1010 Bank St, Dallas, TX 75201',
//     inspectionType: '10',
//     fieldRep: 'Susan White',
//     status: 'In Progress',
//     requestDate: '2024-01-14',
//     dueDate: '2024-01-29',
//     priority: 'High',
//     assignedDate: '2024-01-15',
//     completedDate: '',
//     clientReference: 'C-12357',
//     actionView: true,
//     actionDelete: true,
//     actionEdit: true,
//   },
//   {
//     id: 'INSP-014',
//     orderId: 'ORD-2024-014',
//     client: 'Transport Logistics',
//     address: '1111 Port Rd, Baltimore, MD 21201',
//     inspectionType: '08',
//     fieldRep: 'Charles Harris',
//     status: 'Completed',
//     requestDate: '2024-01-03',
//     dueDate: '2024-01-18',
//     priority: 'Medium',
//     assignedDate: '2024-01-04',
//     completedDate: '2024-01-17',
//     clientReference: 'C-12358',
//     actionView: true,
//     actionDelete: true,
//     actionEdit: true,
//   },
//   {
//     id: 'INSP-015',
//     orderId: 'ORD-2024-015',
//     client: 'Media Network',
//     address: '1212 Broadcast Ave, Philadelphia, PA 19101',
//     inspectionType: '06',
//     fieldRep: 'Jessica Martin',
//     status: 'Pending',
//     requestDate: '2024-01-27',
//     dueDate: '2024-02-11',
//     priority: 'Low',
//     assignedDate: '',
//     completedDate: '',
//     clientReference: 'C-12359',
//     actionView: true,
//     actionDelete: true,
//     actionEdit: true,
//   },
// ];

// // Define status badge colors mapping
// const getStatusColor = (status: string) => {
//   switch (status.toLowerCase()) {
//     case 'assigned':
//       return { variant: 'success' as const, color: "#CDBF28" }; // Yellow/assigned-FR
//     case 'in progress':
//       return { variant: 'warning' as const, color: '#CCA567' }; // Brown/in-qa
//     case 'completed':
//       return { variant: 'success' as const, color: '#49BF5F' }; // Green
//     case 'pending':
//       return { variant: 'info' as const, color: '#4268A2' }; // Blue/in-final-review
//     case 'qa review':
//       return { variant: 'info' as const, color: '#CCA567' }; // Brown/in-qa
//     case 'cancelled':
//     case 'rejected':
//       return { variant: 'error' as const, color: '#FF6262' }; // Red/not-assigned
//     case 'on hold':
//       return { variant: 'custom' as const, bgColor: '#E5E7EB', textColor: '#000000' }; // Gray
//     default:
//       return { variant: 'custom' as const, bgColor: '#F3F4F6', textColor: '#000000' };
//   }
// };

// const page = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [itemsPerPage, setItemsPerPage] = useState(10);
  
//   // State for selected rows
//   const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  
//   // Calculate pagination
//   const totalItems = searchInspectionData.length;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentData = searchInspectionData.slice(startIndex, endIndex);

//   // Table columns configuration
//   const columns = [
//     {
//       key: 'orderId',
//       header: 'Order ID',
//       width: '120px',
//       render: (value: string, row: any) => (
//         <div className="flex flex-col">
//           <span className={`text-sm font-normal text-[#464646]`}>{value}</span>
//           <span className="text-sm text-rose-800 underline">{row.clientReference}</span>
//         </div>
//       ),
//     },
//     {
//       key: 'client',
//       header: 'Client',
//       width: '150px',
//     },
//     {
//       key: 'address',
//       header: 'Address',
//       width: '250px',
//     },
//     {
//       key: 'inspectionType',
//       header: 'Inspection Type',
//       width: '120px',
//     },
//     {
//       key: 'fieldRep',
//       header: 'Field Rep',
//       width: '120px',
//     },
//     {
//       key: 'status',
//       header: 'Status',
//       width: '120px',
//       render: (value: string) => {
//         const statusConfig = getStatusColor(value);
//         return (
//           <StatusBadgeCell
//             status={value}
//             variant={statusConfig.variant}
//             bgColor={statusConfig.bgColor}
//             textColor={statusConfig.textColor}
//           />
//         );
//       },
//     },
//     {
//       key: 'requestDate',
//       header: 'Request Date',
//       width: '120px',
//     },
//     {
//       key: 'dueDate',
//       header: 'Due Date',
//       width: '100px',
//     },
//     {
//       key: 'priority',
//       header: 'Priority',
//       width: '80px',
//       render: (value: string) => (
//         <span className={`text-sm font-medium ${
//           value === 'High' ? 'text-red-600' :
//           value === 'Medium' ? 'text-yellow-600' :
//           'text-green-600'
//         }`}>
//           {value}
//         </span>
//       ),
//     },
//     {
//       key: 'actionsText',
//       header: 'Actions',
//       width: '120px',
//       render: (_: any, row: any) => (
//         <div className="flex flex-col gap-1">
//           <button className="text-sm text-rose-800 underline text-left">
//             View Details
//           </button>
//           <button className="text-sm text-blue-600 underline text-left">
//             Edit Inspection
//           </button>
//         </div>
//       ),
//     },
//     {
//       key: 'action',
//       header: 'View',
//       width: '100px',
//       align: 'center' as const,
//       render: (_: any, row: any) => (
//         <IconActionsCell
//           onView={() => handleView(row)}
//           onEdit={() => handleEdit(row)}
//           onDelete={row.actionDelete ? () => handleDelete(row) : undefined}
//         />
//       ),
//     },
//   ];

//   // Action handlers
//   const handleView = (row: any) => {
//     console.log('View inspection:', row.id);
//     alert(`Viewing inspection: ${row.id}`);
//   };

//   const handleEdit = (row: any) => {
//     console.log('Edit inspection:', row.id);
//     alert(`Editing inspection: ${row.id}`);
//   };

//   const handleDelete = (row: any) => {
//     console.log('Delete inspection:', row.id);
//     if (confirm(`Are you sure you want to delete inspection ${row.id}?`)) {
//       alert(`Inspection ${row.id} deleted successfully!`);
//     }
//   };

//   const handleRowSelect = (rowIds: (string | number)[]) => {
//     setSelectedRows(rowIds);
//     console.log('Selected rows:', rowIds);
//   };


//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <div className="max-w-7xl mx-auto">

//         <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//           <BaseTable
//             columns={columns}
//             data={currentData}
//             selectedRows={selectedRows}
//             onRowSelect={handleRowSelect}
//             showCheckboxes={true}
//             headerBgColor="#004990"
//             stripedRows={true}
//             maxHeight="600px"
//             onRowClick={(row:any) => console.log('Row clicked:', row.id)}
//           />
//         </div>

       

//       </div>
//     </div>
//   );
// };

// export default page;



import React, { useState } from 'react';
import { BaseTable } from '@/components/tables/BaseTable';
import { StatusBadgeCell, TextWithLinkCell, DropdownCell } from '@/components/tables/cells';
import { TablePagination } from '@/components/tables/Pagination';
import { Eye, Pencil } from 'lucide-react';

// Dummy data for Assign QA Table
const assignQAData = [
  {
    id: 'QA-001',
    inspectionId: 'INSP-2024-001',
    client: 'ABC Corporation',
    address: '123 Main St, New York, NY 10001',
    fieldRep: 'John Smith',
    status: 'Pending QA',
    requestDate: '2024-01-15',
    dueDate: '2024-01-30',
    qaRep: '',
   images: [
      { id: 'img19', url: 'https://picsum.photos/200/150?random=19', caption: 'Classroom' },
      { id: 'img20', url: 'https://picsum.photos/200/150?random=20', caption: 'Lab' },
      { id: 'img21', url: 'https://picsum.photos/200/150?random=21', caption: 'Library' },
      { id: 'img22', url: 'https://picsum.photos/200/150?random=22', caption: 'Auditorium' },
    ],
    hasImages: true,
    selectedQA: '',
    actionEdit: true,
    actionEye: true,
  },
  {
    id: 'QA-002',
    inspectionId: 'INSP-2024-002',
    client: 'XYZ Industries',
    address: '456 Oak Ave, Los Angeles, CA 90001',
    fieldRep: 'Maria Garcia',
    status: 'Assigned',
    requestDate: '2024-01-18',
    dueDate: '2024-02-02',
    qaRep: 'David Wilson',
    images: [
      { id: 'img6', url: 'https://picsum.photos/200/150?random=6', caption: 'Entrance' },
      { id: 'img7', url: 'https://picsum.photos/200/150?random=7', caption: 'Parking' },
    ],
    hasImages: true,
    selectedQA: 'David Wilson',
    actionEdit: true,
    actionEye: true,
  },
  {
    id: 'QA-003',
    inspectionId: 'INSP-2024-003',
    client: 'Tech Solutions Inc',
    address: '789 Tech Blvd, San Francisco, CA 94107',
    fieldRep: 'Robert Johnson',
    status: 'Completed',
    requestDate: '2024-01-10',
    dueDate: '2024-01-25',
    qaRep: 'Sarah Brown',
    images: [],
    hasImages: false,
    selectedQA: 'Sarah Brown',
    actionEdit: true,
    actionEye: true,
  },
  {
    id: 'QA-004',
    inspectionId: 'INSP-2024-004',
    client: 'Global Manufacturing',
    address: '101 Industrial Park, Chicago, IL 60601',
    fieldRep: 'Sarah Williams',
    status: 'Pending QA',
    requestDate: '2024-01-20',
    dueDate: '2024-02-04',
    qaRep: '',
    images: [
      { id: 'img8', url: 'https://picsum.photos/200/150?random=8', caption: 'Factory Floor' },
      { id: 'img9', url: 'https://picsum.photos/200/150?random=9', caption: 'Equipment' },
      { id: 'img10', url: 'https://picsum.photos/200/150?random=10', caption: 'Storage' },
      { id: 'img11', url: 'https://picsum.photos/200/150?random=11', caption: 'Office Area' },
      { id: 'img12', url: 'https://picsum.photos/200/150?random=12', caption: 'Loading Dock' },
      { id: 'img13', url: 'https://picsum.photos/200/150?random=13', caption: 'Security' },
    ],
    hasImages: true,
    selectedQA: '',
    actionEdit: true,
    actionEye: true,
  },
  {
    id: 'QA-005',
    inspectionId: 'INSP-2024-005',
    client: 'Premium Services LLC',
    address: '202 Service Rd, Miami, FL 33101',
    fieldRep: 'Michael Brown',
    status: 'In Review',
    requestDate: '2024-01-12',
    dueDate: '2024-01-27',
    qaRep: 'Emma Davis',
    images: [
      { id: 'img14', url: 'https://picsum.photos/200/150?random=14', caption: 'Lobby' },
      { id: 'img15', url: 'https://picsum.photos/200/150?random=15', caption: 'Service Area' },
    ],
    hasImages: true,
    selectedQA: 'Emma Davis',
    actionEdit: true,
    actionEye: true,
  },
  {
    id: 'QA-006',
    inspectionId: 'INSP-2024-006',
    client: 'BuildRight Constructions',
    address: '303 Construction Way, Houston, TX 77001',
    fieldRep: 'David Miller',
    status: 'Pending QA',
    requestDate: '2024-01-05',
    dueDate: '2024-01-20',
    qaRep: '',
    images: [],
    hasImages: false,
    selectedQA: '',
    actionEdit: true,
    actionEye: true,
  },
  {
    id: 'QA-007',
    inspectionId: 'INSP-2024-007',
    client: 'HealthFirst Medical',
    address: '404 Medical Center, Boston, MA 02101',
    fieldRep: 'Jennifer Davis',
    status: 'Assigned',
    requestDate: '2024-01-22',
    dueDate: '2024-02-06',
    qaRep: 'James Wilson',
    images: [
      { id: 'img16', url: 'https://picsum.photos/200/150?random=16', caption: 'Waiting Area' },
      { id: 'img17', url: 'https://picsum.photos/200/150?random=17', caption: 'Examination Room' },
      { id: 'img18', url: 'https://picsum.photos/200/150?random=18', caption: 'Reception' },
      
    ],
    hasImages: true,
    selectedQA: 'James Wilson',
    actionEdit: true,
    actionEye: true,
  },
  {
    id: 'QA-008',
    inspectionId: 'INSP-2024-008',
    client: 'EduTech Solutions',
    address: '505 Campus Dr, Seattle, WA 98101',
    fieldRep: 'James Wilson',
    status: 'Pending QA',
    requestDate: '2024-01-17',
    dueDate: '2024-02-01',
    qaRep: '',
    images: [
      { id: 'img19', url: 'https://picsum.photos/200/150?random=19', caption: 'Classroom' },
      { id: 'img20', url: 'https://picsum.photos/200/150?random=20', caption: 'Lab' },
      { id: 'img21', url: 'https://picsum.photos/200/150?random=21', caption: 'Library' },
      { id: 'img22', url: 'https://picsum.photos/200/150?random=22', caption: 'Auditorium' },
        { id: 'img19', url: 'https://picsum.photos/200/150?random=19', caption: 'Classroom' },
      { id: 'img20', url: 'https://picsum.photos/200/150?random=20', caption: 'Lab' },
      { id: 'img21', url: 'https://picsum.photos/200/150?random=21', caption: 'Library' },
      { id: 'img22', url: 'https://picsum.photos/200/150?random=22', caption: 'Auditorium' },
        { id: 'img19', url: 'https://picsum.photos/200/150?random=19', caption: 'Classroom' },
      { id: 'img20', url: 'https://picsum.photos/200/150?random=20', caption: 'Lab' },
      { id: 'img21', url: 'https://picsum.photos/200/150?random=21', caption: 'Library' },
      { id: 'img22', url: 'https://picsum.photos/200/150?random=22', caption: 'Auditorium' },
        { id: 'img19', url: 'https://picsum.photos/200/150?random=19', caption: 'Classroom' },
      { id: 'img20', url: 'https://picsum.photos/200/150?random=20', caption: 'Lab' },
      { id: 'img21', url: 'https://picsum.photos/200/150?random=21', caption: 'Library' },
      { id: 'img22', url: 'https://picsum.photos/200/150?random=22', caption: 'Auditorium' },
        { id: 'img19', url: 'https://picsum.photos/200/150?random=19', caption: 'Classroom' },
      { id: 'img20', url: 'https://picsum.photos/200/150?random=20', caption: 'Lab' },
      { id: 'img21', url: 'https://picsum.photos/200/150?random=21', caption: 'Library' },
      { id: 'img22', url: 'https://picsum.photos/200/150?random=22', caption: 'Auditorium' },
        { id: 'img19', url: 'https://picsum.photos/200/150?random=19', caption: 'Classroom' },
      { id: 'img20', url: 'https://picsum.photos/200/150?random=20', caption: 'Lab' },
      { id: 'img21', url: 'https://picsum.photos/200/150?random=21', caption: 'Library' },
      { id: 'img22', url: 'https://picsum.photos/200/150?random=22', caption: 'Auditorium' },
    ],
    hasImages: true,
    selectedQA: '',
    actionEdit: true,
    actionEye: true,
  },
];

// QA Representatives options for dropdown
const qaRepOptions = [
  { label: 'Select QA', value: '' },
  { label: 'David Wilson', value: 'David Wilson' },
  { label: 'Sarah Brown', value: 'Sarah Brown' },
  { label: 'Emma Davis', value: 'Emma Davis' },
  { label: 'James Wilson', value: 'James Wilson' },
  { label: 'Lisa Johnson', value: 'Lisa Johnson' },
  { label: 'Mark Thompson', value: 'Mark Thompson' },
  { label: 'Rachel Green', value: 'Rachel Green' },
];

const page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  
  const [selectedRows, setSelectedRows] = useState<(string | number)[]>([]);
  
  const [expandedRows, setExpandedRows] = useState<(string | number)[]>([]);
  
  const [qaSelections, setQaSelections] = useState<Record<string, string>>(
    assignQAData.reduce((acc, item) => {
      acc[item.id] = item.selectedQA;
      return acc;
    }, {} as Record<string, string>)
  );

  // Calculate pagination
  const totalItems = assignQAData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = assignQAData.slice(startIndex, endIndex);

  // Toggle row expansion (accordion)
  const toggleRowExpansion = (rowId: string | number) => {
    setExpandedRows(prev => 
      prev.includes(rowId) 
        ? prev.filter(id => id !== rowId)
        : [...prev, rowId]
    );
  };

  // Handle QA selection change
  const handleQASelectionChange = (rowId: string, value: string) => {
    setQaSelections(prev => ({
      ...prev,
      [rowId]: value
    }));
    console.log(`QA for ${rowId} changed to: ${value}`);
  };

  // Handle edit action
  const handleEdit = (row: any) => {
    console.log('Edit inspection:', row.id);
    alert(`Editing inspection: ${row.id}`);
  };

  // Handle view action
  const handleView = (row: any) => {
    console.log('View inspection:', row.id);
    alert(`Viewing inspection: ${row.id}`);
  };

  // Handle row selection
  const handleRowSelect = (rowIds: (string | number)[]) => {
    setSelectedRows(rowIds);
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Handle items per page change
  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  // Table columns configuration
  const columns = [
    {
      key: 'inspectionId',
      header: 'Inspection ID',
      width: '140px',
      render: (value: string, row: any) => (
        <TextWithLinkCell
          text={value}
          linkText={row.client}
          linkColor="#9D2137"
          onLinkClick={() => console.log('Client clicked:', row.client)}
        />
      ),
    },
    {
      key: 'address',
      header: 'Address',
      width: '250px',
    },
    {
      key: 'fieldRep',
      header: 'Field Rep',
      width: '120px',
      render: (value: string) => (
        <span className="text-sm text-rose-800 underline">{value}</span>
      ),
    },
    {
      key: 'status',
      header: 'Status',
      width: '120px',
      render: (value: string) => {
        const getStatusConfig = () => {
          switch (value) {
            case 'Pending QA':
              return { variant: 'warning' as const, color: '#CDBF28' };
            case 'Assigned':
              return { variant: 'success' as const, color: '#49BF5F' };
            case 'In Review':
              return { variant: 'info' as const, color: '#4268A2' };
            case 'Completed':
              return { variant: 'success' as const, color: '#208C34' };
            default:
              return { variant: 'custom' as const, bgColor: '#E5E7EB', textColor: '#000000' };
          }
        };
        
        const config = getStatusConfig();
        return (
          <StatusBadgeCell
            status={value}
            variant={config.variant}
            bgColor={config.bgColor}
            textColor={config.textColor}
          />
        );
      },
    },
    {
      key: 'requestDate',
      header: 'Request Date',
      width: '120px',
    },
    {
      key: 'dueDate',
      header: 'Due Date',
      width: '100px',
    },
    {
      key: 'selectQA',
      header: 'Select QA',
      width: '150px',
      render: (_: any, row: any) => (
        <DropdownCell
          value={qaSelections[row.id] || ''}
          options={qaRepOptions}
          onChange={(value) => handleQASelectionChange(row.id, value)}
          placeholder="Select QA"
        />
      ),
    },
    {
      key: 'actions',
      header: 'Actions',
      width: '120px',
      align: 'center' as const,
      render: (_: any, row: any) => (
        <div className="flex justify-start gap-2">
          {row.actionEdit && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleEdit(row);
              }}
              className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-red cursor-pointer"
            >
            <Pencil className='w-4 h-4 text-white' />
            </button>
          )}
          {row.actionEye && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleView(row);
              }}
               className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-red cursor-pointer"
            >
            <Eye className='w-4 h-4 text-white' />
            </button>
          )}
        </div>
      ),
    },
  ];

  // Render expanded row content (images gallery)
  const renderExpandedRow = (row: any) => {
    if (!row.images || row.images.length === 0) {
      return (
        <div className="p-6 bg-gray-50 text-center">
          <p className="text-gray-500">No images available for this inspection</p>
        </div>
      );
    }

    return (
      <div className="p-6 bg-gray-50">
       
        <div className="relative">
          {/* Scrollable images container */}
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-4 min-w-max">
              {row.images.map((image: any) => (
                <div key={image.id} className="shrink-0">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.caption}
                      className="w-30 h-30 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/200x150?text=Image+${image.id}`;
                      }}
                    />
                  
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="">
     
 
        {/* Main Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <BaseTable
            columns={columns}
            data={currentData}
            selectedRows={selectedRows}
            onRowSelect={handleRowSelect}
            showCheckboxes={true}
            headerBgColor="#004990"
            stripedRows={true}
            maxHeight="600px"
            onRowClick={(row) => toggleRowExpansion(row.id)}
            renderExpandedRow={renderExpandedRow}
            expandedRowIds={expandedRows}
          />
        </div>

       
      </div>
    </div>
  );
};

export default page;