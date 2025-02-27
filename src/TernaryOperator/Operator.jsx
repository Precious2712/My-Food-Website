import { Button } from '@/components/ui/button';
import React, { useState } from 'react'

const [close, setClose] = useState(false);

const qualify = true

const closeModal = () => {
    setClose(false);
}

const showModal = () => {
    setClose(true);
};

const Operator = () => {
    return (
        <div>
            <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${close ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="bg-white w-[90%] md:w-[50%] lg:w-[40%] max-w-lg p-6 rounded-lg shadow-lg transform transition-all">
                    {qualify ? (
                        <div className="text-center">
                            <h2 className="text-xl font-bold text-green-600">🎉 Congratulations, {naming}!</h2>
                            <p className="text-gray-700 mt-2">You have successfully applied!</p>

                            <div className="mt-4 flex flex-col items-center">
                                <p className="text-lg font-semibold">Score: <span className="text-green-500">100%</span></p>
                                <span className="text-4xl">🟢</span>
                            </div>

                            <button onClick={closeModal} className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                                Close
                            </button>
                        </div>
                    ) : (
                        <div className="text-center">
                            <h2 className="text-xl font-bold text-red-600">❌ You don’t qualify to apply, {naming} </h2>
                            <p className="text-gray-700 mt-2">Please try again after improving your skills.</p>

                            <div className="mt-4 flex flex-col items-center">
                                <p className="text-lg font-semibold">Score: <span className="text-red-500">0%</span></p>
                                <span className="text-4xl">🔴</span>
                            </div>

                            <p className="mt-3">Required Skills: {expert?.join(",")}</p>

                            <button onClick={closeModal} className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                                Close
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <Button onClick={showModal}></Button>
        </div>
    )
}

export default Operator
