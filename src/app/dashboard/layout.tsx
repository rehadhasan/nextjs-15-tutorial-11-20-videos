export default function DashboardLayout(
    {
        children,
    }:{
        children:React.ReactNode;
    }
){
    return(
        <>
            <ul>
                <li>Dashboard</li>
                <li>Profile</li>
                <li>Setting</li>
            </ul>
        </>
    )
}