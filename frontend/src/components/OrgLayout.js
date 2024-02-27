import { Outlet } from 'react-router-dom'
import DashHeader from './OrgHeader'
import DashFooter from './OrgFooter'

const DashLayout = () => {
    return (
        <>
            <DashHeader />
            <div className="dash-container">
                <Outlet />
            </div>
            <DashFooter />
        </>
    )
}
export default DashLayout