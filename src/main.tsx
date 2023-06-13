
import ReactDOM from 'react-dom/client'
import './index.css'
import { MyFirstApp } from './components/FirstApp'
import { App } from './components/App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
                <Route path="users" element={<Users />} >
                    <Route index element={<div>Select an User</div>} />
                    <Route path=":userId" element={<User />} />
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>

)
