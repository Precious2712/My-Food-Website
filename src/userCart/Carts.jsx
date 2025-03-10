import React, { useEffect } from 'react'
import { useGetUserCart } from './hook/useGetUserCart'
import { Button } from '@/components/ui/button';
import { updateQuantity } from './hook/updateQuantity';

const Carts = () => {

    const { items, deleteCartProduct } = useGetUserCart();

    const { increaseButton } = updateQuantity();
    
    return (
        <div className=' dark:bg-gray-900 min-h-screen'>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-white sm:text-4xl">Shopping Cart</h2>
            <div>
                {
                    items?.result.map((el, i) => (
                        <div key={i} className=''>
                            {
                                el.items.map((product, i) => (
                                    <div key={i} className=''>

                                        <section class="bg-white py-2 antialiased dark:bg-gray-900 md:py-1">
                                            <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
                                                <div class="mt- sm:mt- md:gap-6 lg:flex lg:items-start xl:gap-8">
                                                    <div class="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
                                                        <div class="space-y-6">
                                                            <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-6">
                                                                <div class="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                                                                    <a href="#" class="shrink-0 md:order-1">
                                                                        <img
                                                                            class="h-20 w-20 dark:hidden"
                                                                            src={product?.imageUrl}
                                                                            alt="imac image"
                                                                        />
                                                                        <img
                                                                            class="hidden h-20 w-20 dark:block"
                                                                            src={product?.imageUrl}
                                                                            alt="imac image"
                                                                        />
                                                                    </a>
                                                                    <div class="flex items-center justify-between md:order-3 md:justify-end">
                                                                        <div class="flex items-center">
                                                                            <button onClick={() => increaseButton(-1,product?.productId)}
                                                                                type="button"
                                                                                id="decrement-button"
                                                                                data-input-counter-decrement="counter-input"
                                                                                class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                                                            >
                                                                                <svg
                                                                                    class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                                                                    aria-hidden="true"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    fill="none"
                                                                                    viewBox="0 0 18 2"
                                                                                >
                                                                                    <path
                                                                                        stroke="currentColor"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round"
                                                                                        stroke-width="2"
                                                                                        d="M1 1h16"
                                                                                    />
                                                                                </svg>
                                                                            </button>
                                                                            <input
                                                                                type="text"
                                                                                id="counter-input"
                                                                                data-input-counter
                                                                                class="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0 dark:text-white"
                                                                                placeholder=""
                                                                                value={product?.quantity}
                                                                                required
                                                                            />
                                                                            <button onClick={() => increaseButton(1, product?.productId)}
                                                                                type="button"
                                                                                id="increment-button"
                                                                                data-input-counter-increment="counter-input"
                                                                                class="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                                                                            >
                                                                                <svg
                                                                                    class="h-2.5 w-2.5 text-gray-900 dark:text-white"
                                                                                    aria-hidden="true"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    fill="none"
                                                                                    viewBox="0 0 18 18"
                                                                                >
                                                                                    <path
                                                                                        stroke="currentColor"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round"
                                                                                        stroke-width="2"
                                                                                        d="M9 1v16M1 9h16"
                                                                                    />
                                                                                </svg>
                                                                            </button>
                                                                        </div>
                                                                        <div class="text-end md:order-4 md:w-32">
                                                                            <p class="text-base font-bold text-gray-900 dark:text-white">
                                                                                #{product?.price}.00
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div class="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                                                                        <a
                                                                            href="#"
                                                                            class="text-base font-medium text-gray-900 hover:underline dark:text-white"
                                                                        >
                                                                            {product?.description}
                                                                        </a>
                                                                        <div class="flex items-center gap-4">
                                                                            <button
                                                                                type="button"
                                                                                class="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white"
                                                                            >
                                                                                <svg
                                                                                    class="me-1.5 h-5 w-5"
                                                                                    aria-hidden="true"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="24"
                                                                                    height="24"
                                                                                    fill="none"
                                                                                    viewBox="0 0 24 24"
                                                                                >
                                                                                    <path
                                                                                        stroke="currentColor"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round"
                                                                                        stroke-width="2"
                                                                                        d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z"
                                                                                    />
                                                                                </svg>
                                                                                Add to Favorites
                                                                            </button>
                                                                            <button onClick={() => deleteCartProduct(product?.productId
                                                                            )}
                                                                                type="button"
                                                                                class="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                                                                            >
                                                                                <svg
                                                                                    class="me-1.5 h-5 w-5"
                                                                                    aria-hidden="true"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    width="24"
                                                                                    height="24"
                                                                                    fill="none"
                                                                                    viewBox="0 0 24 24"
                                                                                >
                                                                                    <path
                                                                                        stroke="currentColor"
                                                                                        stroke-linecap="round"
                                                                                        stroke-linejoin="round"
                                                                                        stroke-width="2"
                                                                                        d="M6 18 17.94 6M18 18 6.06 6"
                                                                                    />
                                                                                </svg>
                                                                                Remove
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>

            <div className='mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full'>
                <div className='space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6'>
                    <p class="text-xl font-semibold text-gray-900 dark:text-white">Order summary</p>
                    <div className='space-y-4'>
                        <div class="space-y-2">
                            <dl class="flex items-center justify-between gap-4">
                                <dt class="text-base font-normal text-gray-500 dark:text-gray-400">{items?.result[0]?.items?.length}</dt>
                            </dl>
                        </div>

                        <dl class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                            <dt class="text-base font-bold text-gray-900 dark:text-white">Total</dt>
                            <dd class="text-base font-bold text-gray-900 dark:text-white">#{items?.result[0]?.bill}.00</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Carts