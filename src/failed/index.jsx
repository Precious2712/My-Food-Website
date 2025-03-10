const ErrorMessage = () => {
    return (
        <div style={{ color: 'red', fontWeight: 'bold', padding: '20px', textAlign: 'center' }}>
            <div class="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat">
                <div class="max-w-md mx-auto text-center bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
                    <div class="text-9xl font-bold text-indigo-600 mb-4">404</div>
                    <h1 class="text-4xl font-bold text-gray-800 mb-6">Oops! Cart Not Found</h1>
                    <p class="text-lg text-gray-600 mb-8">The page you're looking for seems to have gone on a little adventure. Don't
                        worry, we'll help you find your way back home.</p>
                    <a href="#"
                        class="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300">
                        Go Back Home
                    </a>
                </div>
            </div>
        </div>
    )
};

export default ErrorMessage;