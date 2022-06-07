import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = lazy(() => import('../components/HomeComponent'));
const Course = lazy(() => import('../components/CourseComponent'));
const RootRouting = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                <Route index element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="course" element={<Course />} />
                </Routes>
            </Suspense>
        </Router>
    );
}
export default RootRouting;