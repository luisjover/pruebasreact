
import ReactDOM from 'react-dom/client'
//import { App } from './App'
import './index.css'
import { MyFirstApp } from './firstApp'
import { App } from './App'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import { SecondApp } from './secondApp'
import { Layout, Home } from './layout'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(


    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="sizeselector" element={<App />} />
                <Route path="colorchanger" element={<MyFirstApp />} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Route>
        </Routes>
    </BrowserRouter>


)
