import React from 'react';
import { AddVehicleForm } from '@/src/app/components/AddVehicleForm';

export default function AdminAddVehiclePage() {
  return <AddVehicleForm cancelHref="/admin/vehicles" isAdmin={true} />;
}












// import React from 'react';
// import Link from 'next/link';
// import { Input } from '@/src/app/components/ui/Input';
// import { Button } from '@/src/app/components/ui/Button';

// export default function AddVehiclePage() {
//   return (
//     <div className="max-w-4xl mx-auto flex flex-col gap-6 pb-10">
      
//       {/* Top Alert Banner */}
//       <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex gap-3 text-blue-800">
//         <svg className="shrink-0 mt-0.5" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
//         <div className="text-sm">
//           <p className="font-semibold mb-0.5">Adding a new vehicle</p>
//           <p className="text-blue-700">All fields marked with * are required. The vehicle will be added to your fleet immediately after submission.</p>
//         </div>
//       </div>

//       {/* Main Form Card */}
//       <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
//         <div className="p-6 md:p-8">
//           <h2 className="text-xl font-bold text-foreground mb-6">Vehicle Information</h2>
          
//           <form className="flex flex-col gap-6">
            
//             {/* Full Width Registration */}
//             <Input 
//               id="registration" 
//               label="Registration Number *" 
//               placeholder="e.g., TR12 ABC" 
//               required 
//             />
//             <p className="text-xs text-gray-500 -mt-5 mb-2">Enter the vehicle registration as it appears on the license plate</p>

//             {/* Grid 2 Columns for Desktop, 1 for Mobile */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0">
//               <Input id="make" label="Make *" placeholder="e.g., Ford" required />
//               <Input id="model" label="Model *" placeholder="e.g., Transit" required />
//               <Input id="year" label="Year *" placeholder="" required />
//               <Input id="color" label="Color" placeholder="e.g., White" />
//             </div>

//             {/* Assigned Driver */}
//             <Input 
//               id="driver" 
//               label="Assigned Driver" 
//               placeholder="" 
//             />
//             <p className="text-xs text-gray-500 -mt-5 mb-2">You can assign a driver now or leave it unassigned</p>

//             {/* Notes Textarea */}
//             <div className="flex flex-col w-full space-y-1.5 mb-2">
//               <label htmlFor="notes" className="text-sm text-gray-500 font-medium">Notes</label>
//               <textarea 
//                 id="notes" 
//                 rows={4}
//                 className="border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all w-full resize-none"
//                 placeholder="Add any additional notes about this vehicle..."
//               ></textarea>
//             </div>

//             {/* Form Actions */}
//             <div className="flex flex-col-reverse sm:flex-row justify-end gap-4 mt-4 pt-6 border-t border-border">
//               <Link href="/fleet/vehicles" className="w-full sm:w-auto">
//                 <Button type="button" className="w-full sm:w-auto bg-white text-gray-700 border border-gray-300 hover:bg-gray-50">
//                   Cancel
//                 </Button>
//               </Link>
//               <Button type="submit" className="w-full sm:w-auto">
//                 Add Vehicle
//               </Button>
//             </div>
            
//           </form>
//         </div>
//       </div>

//     </div>
//   );
// }