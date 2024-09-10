import React from "react";

const OrderPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <h1 className="text-3xl font-bold">Order #12345</h1>
          <p className="mt-1 text-lg">Placed on: September 6, 2024</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
          {/* Left Column: Order Details */}
          <div className="col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
            
            {/* Customer Info */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6 shadow-sm">
              <h3 className="text-lg font-semibold">Customer Information</h3>
              <p className="text-gray-600">John Doe</p>
              <p className="text-gray-600">johndoe@example.com</p>
              <p className="text-gray-600">+1 (123) 456-7890</p>
              <p className="text-gray-600">1234 Elm Street, Springfield, IL</p>
            </div>

            {/* Items */}
            <div className="bg-gray-50 p-4 rounded-lg mb-6 shadow-sm">
              <h3 className="text-lg font-semibold">Items Ordered</h3>
              <div className="mt-4 space-y-4">
                {/* Item 1 */}
                <div className="flex justify-between items-center">
                  <p className="text-gray-700 font-medium">Product Name 1</p>
                  <p className="text-gray-600">2 x $20.00</p>
                  <p className="text-gray-700 font-bold">$40.00</p>
                </div>
                {/* Item 2 */}
                <div className="flex justify-between items-center">
                  <p className="text-gray-700 font-medium">Product Name 2</p>
                  <p className="text-gray-600">1 x $50.00</p>
                  <p className="text-gray-700 font-bold">$50.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Payment & Summary */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Payment Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-600">Subtotal</p>
                <p className="text-gray-700 font-bold">$90.00</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-600">Shipping</p>
                <p className="text-gray-700 font-bold">$10.00</p>
              </div>
              <div className="flex justify-between items-center border-t pt-4">
                <p className="text-lg font-semibold">Total</p>
                <p className="text-xl font-bold text-blue-600">$100.00</p>
              </div>
            </div>

            <div className="mt-6">
              <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition">
                Pay Now
              </button>
            </div>

            <div className="mt-4 text-gray-600">
              <p>Payment Method: <span className="font-semibold">Credit Card</span></p>
              <p>Billing Status: <span className="font-semibold text-green-600">Paid</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
