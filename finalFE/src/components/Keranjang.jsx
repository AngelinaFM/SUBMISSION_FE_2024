import React from "react";

export default function Keranjang(){
    return(
        <div class="font-sans md:max-w-4xl max-md:max-w-xl mx-auto bg-white py-4">
            <div class="grid md:grid-cols-3 gap-4">
                <div class="md:col-span-2 bg-gray-100 p-4 rounded-md">
                    <h2 class="text-2xl font-bold text-gray-800">Cart</h2>
                    <hr class="border-gray-300 mt-4 mb-8" />
                    <div class="space-y-4">
                    </div>
                </div>

                <div class="bg-gray-100 rounded-md p-4 md:sticky top-0">
                    <div class="flex border border-blue-600 overflow-hidden rounded-md">
                        <input type="email" placeholder="Promo code"
                            class="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5" />
                        <button type='button' class="flex items-center justify-center font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 px-4 text-sm text-white">
                            Apply
                        </button>
                    </div>

                    <ul class="text-gray-800 mt-8 space-y-4">
                        <li class="flex flex-wrap gap-4 text-base">Discount <span class="ml-auto font-bold">$0.00</span></li>
                        <li class="flex flex-wrap gap-4 text-base">Shipping <span class="ml-auto font-bold">$2.00</span></li>
                        <li class="flex flex-wrap gap-4 text-base">Tax <span class="ml-auto font-bold">$4.00</span></li>
                        <li class="flex flex-wrap gap-4 text-base font-bold">Total <span class="ml-auto">$52.00</span></li>
                    </ul>

                    <div class="mt-8 space-y-2">
                        <button type="button" class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md">Checkout</button>
                        <button type="button" class="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md">Continue Shopping  </button>
                    </div>
                </div>
            </div>
        </div>
    )
}