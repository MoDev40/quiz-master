# Project Installation: Guide

## Step 1: Create a Folder and Open in VSCode
1. Desktop folder kusameey.
2. folder kufur  Visual Studio Code (VSCode).

## Step 2: Vite Installation
1. Furo terminal : **View** -> **Terminal**
2. Kuqor command:
    ```bash
    npm create vite@latest
    ```
3. Follow the prompts in the terminal:
    - **Project name**: Kuqor `.` and press Enter.
    - **Select a framework**: Dooro `React` and press Enter .
    - **Select a variant**: Dooro `JavaScript` and press Enter.

Folders kaan waa inay kuso galaan:

```
├── Public/
├── index.html
├── package.json
├── src/
│   ├── main.js
│   └── style.css
└── vite.config.js
```

Kuqor  kadib run command:

```bash
npm install
npm run dev
```

Browserka kuqor  `http://localhost:5173`.


## Install and configure Tailwind CSS

## Step 1: Install Tailwind CSS
1. Furo terminal : **View** -> **Terminal**

2. Kuqor command:
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    ```
3. Kuqor command:
    ```bash
    npx tailwindcss init -p
    ```

## Step 2: Configure Tailwind CSS
1. Kudhufo file magacaan leh `tailwind.config.js` copy and past kudheh code ka hoose:
    ```js
    /** @type {import('tailwindcss').Config} */
        export default {
        content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
        }
    ```

## Step 3: Add Tailwind Directives to Your CSS
1. Kudhufo `src/index.css` waxa kuqoran iska tir copy and past kudheh code ka hoose:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

## Step 4: Run the Development Server
   ``` npm run dev```

## Step 5: Test
1. Kudhufo file magacaan leh `src/App.jsx` copy and past kudheh code ka hoose:
    ```jsx
        import React from 'react'

        function App() {
        return (
            <div className='text-center'>App</div>
        )
        }

        export default App
    ```

## Install other dependencies
1. `npm install lucide-react`
2. `npm i react-hot-toast`

## react-hot-toast configuration
1. Kudhufo `src/main.jsx` waxa kuqoran iska tir copy and past kudheh code ka hoose:
    ```jsx
    import React from 'react'
    import ReactDOM from 'react-dom/client'
    import App from './App.jsx'
    import './index.css'
    import { Toaster } from 'react-hot-toast';

    ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <Toaster/>
    </React.StrictMode>
    )
    ```
2. Kudhufo file magacaan leh `src/App.jsx` 
    ```jsx
        import React from 'react'

        function notify () {
         toast.success('Here is your toast.');
        }
            
        function App() {
        return (
            <div className='text-center'>
            <button onClick={notify}>Make me a toast</button>
            </div>
        )
        }

        export default App
    ```

## Official Documentation
1. **Hot Toast** (React Hot Toast):
   - GitHub Repository: [React Hot Toast on GitHub](https://github.com/timolins/react-hot-toast)
   - Documentation: [React Hot Toast Documentation](https://react-hot-toast.com/docs)  
2. **Tailwind CSS**:
   - Official Documentation: [Tailwind CSS Documentation](https://tailwindcss.com/docs)  
3. **Tailwind CSS**:
   - Official Documentation: [Lucide icon's Documentation](https://lucide.dev/)  