
import ReactDOM from 'react-dom/client'
import './index.css'
import { MyFirstApp } from './components/FirstApp'
import { App } from './components/App'
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom'
import { Layout, Home } from './Layout'
import { Users } from './components/Users'
import { User } from './components/User'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(


    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="sizeselector" element={<App />} />
                <Route path="colorchanger" element={<MyFirstApp />} />
                {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
                <Route path="users" element={<Users />} />
                <Route path="users/:userId" element={<User />} />
            </Route>
        </Routes>
    </BrowserRouter>

)
