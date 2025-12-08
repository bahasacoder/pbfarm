'use client'
import React, { useState } from 'react';
import Form from 'next/form';
// import { waContact } from "@/app/actions"
export function ContactWaForm() {
	

	const [formData, setFormData] = useState({ name:'', message:'', address:'' })
	// const actionWaContact = waContact.bind(null)
    // action={actionWaContact}

/***
  async function waContact(formData: FormData) {
    'use server';
    
    setFormData({
      name: formData.get('name') as string,
      message: formData.get('message') as string,      
	  address: formData.get('address') as string,      
    })
	console.log('name : ', name)
  }
*/
return (
        <div>
					<Form action={''} >
						<div className="relative mb-4 pb-2">
							<input type="text" id="name" placeholder=" " name="name"
								value={formData.name}
								onChange={(e) => setFormData({ ...formData, name: e.target.value })}
								required
								className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-200"
							/>
							<label
								htmlFor="name"
								className="absolute left-2 -top-4 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm"
							>Nama<span className="required"> *</span></label>
						</div>
						<div className="relative mb-4 pb-2">
							<textarea id="message" rows={4} placeholder=" "  name="message"
								 className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-200"
							/>
							<label htmlFor="message" 
								className="absolute left-2 -top-4 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm"
							>Pesan/Pertanyaan<span className="required"> *</span></label>
						</div>
						<div className="relative mb-4 pb-2">
							<textarea id="address" rows={4} placeholder=" " name="address"
								 className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-200"
							/>
							<label htmlFor="address" 
								className="absolute left-2 -top-4 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all peer-focus:-top-4 peer-focus:text-gray-600 peer-focus:text-sm"
							>Kontak/Alamat</label>						
						</div>
						<div className="relative mb-4 ml-2 pb-2">
							<button type="submit" className="text-white font-bold rounded-md px-4 py-2 bg-lime-800">Send</button>
						</div>
					</Form>
				</div>
				
				)
};
