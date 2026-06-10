import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import WorkDetail from './pages/WorkDetail'
import CustomCursor from './sections/CustomCursor'

export default function App() {
  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:id" element={<WorkDetail />} />
      </Routes>
    </>
  )
}
